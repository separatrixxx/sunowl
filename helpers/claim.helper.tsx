import axios from "axios";
import { setLocale } from "./locale.helper";
import { ClaimArguments } from "../interfaces/refactor.interface";
import { changePool, changeUser } from "../features/refresh/refreshSlice";


export async function claimTokens(args: ClaimArguments) {
    const { dispatch, webApp, tgUser, setIsLoading, setTokens } = args;

    setIsLoading(true);
    setTokens(0);

    try {
        await axios.post(process.env.NEXT_PUBLIC_DOMAIN +
            '/api/claims', {
                user_id : tgUser?.id,
                event_by: "claims_game"
            }).then(r => {
                setTokens(r.data.data.token_claimed);
            });

        dispatch(changeUser(true));
        dispatch(changePool(true));
    } catch (err: any) {
        webApp?.showAlert(setLocale(tgUser?.language_code).errors.claim_tokens_error);
        console.error(err);
    } finally {
        setIsLoading(false);
    }
}