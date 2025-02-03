import axios, { AxiosResponse } from "axios";
import { setLocale } from "./locale.helper";
import { BaseArguments, PayTonUpgradeArguments, PayUpgradeArguments } from "../interfaces/refactor.interface";
import { UserInterface } from "../interfaces/user.interface";
import { setUpgrades } from "../features/upgrades/upgradesSlice";
import { ToastError } from "../components/Common/Toast/Toast";
import BigNumber from 'bignumber.js';
import { PayRequestInterface } from "../interfaces/upgrades.interface";
import * as crypto from 'crypto';


export async function getUpgrades(args: BaseArguments) {
    const { dispatch, webApp, tgUser } = args;

    try {
        const { data : response }: AxiosResponse<UserInterface> = await axios.get(process.env.NEXT_PUBLIC_DOMAIN +
            '/api/upgrades/' + tgUser?.id);
            
        dispatch(setUpgrades(response));
    } catch (err: any) {
        webApp?.showAlert(setLocale(tgUser?.language_code).errors.get_upgrades_error);
        console.error(err);
    }
}

export async function payTonUpgrade(args: PayTonUpgradeArguments) {
    const { webApp, tgUser, wallet, tonConnectUI, spins, price, setIsLoading, setIsActive } = args;

    setIsLoading(true);

    if (!wallet) {
        ToastError(setLocale(tgUser?.language_code).connect_ton_wallet_first);

        return;
    }

    try {
        const { data : response }: AxiosResponse<PayRequestInterface> = await axios.post(process.env.NEXT_PUBLIC_DOMAIN +
            `/api/payments/create/${tgUser?.id}/${spins}?ton=true`);

        const transaction = {
            validUntil: Math.floor(Date.now() / 1000) + 600,
            messages: [
                {
                    address: response.data.wallet_address || '',
                    amount: new BigNumber(price || 0).multipliedBy(10 ** 9).toString(),
                },
            ],
        };

        await tonConnectUI.sendTransaction(transaction).then(async () => {
            await axios.post(process.env.NEXT_PUBLIC_DOMAIN +
                '/api/payments/ton/verify', {
                    user_id: tgUser?.id,
                    target_spins: spins,
                    transaction_hash: crypto.createHash('sha256').update(tgUser?.id + wallet.account.address + spins).digest('hex'),
                    wallet_address: wallet.account.address
                }
            )
                .then(() => setIsActive(true))
                .catch(e => {
                    ToastError(setLocale(tgUser?.language_code).upgrade_was_not_purchased);
                    console.log(e)
                });  
        });
    } catch (error) {
        webApp?.showAlert(setLocale(tgUser?.language_code).errors.pay_upgrade_error);
    } finally {
        setIsLoading(false);
    }
};

export async function payStarsUpgrade(args: PayUpgradeArguments) {
    const { webApp, tgUser, spins, setIsLoading, setIsActive } = args;

    setIsLoading(true);

    try {
        const { data : response }: AxiosResponse<PayRequestInterface> = await axios.post(process.env.NEXT_PUBLIC_DOMAIN +
            `/api/payments/create/${tgUser?.id}/${spins}`);

        const invoiceLink = await response.data.payment_url;

        webApp?.openInvoice(invoiceLink || '', (status: string) => {
            if (status === 'paid') {
                setIsActive(true);
            } else {
                ToastError(setLocale(tgUser?.language_code).upgrade_was_not_purchased);
            }
        });

    } catch (error) {
        webApp?.showAlert(setLocale(tgUser?.language_code).errors.pay_upgrade_error);
        console.error(error);
    } finally {
        setIsLoading(false);
    }
}
