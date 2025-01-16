import { SubscribeItemProps } from './SubscribeItem.props';
import styles from './SubscribeItem.module.css';
import { useSetup } from '../../../hooks/useSetup';
import { setLocale } from '../../../helpers/locale.helper';
import { Htag } from '../../Common/Htag/Htag';
import { Button } from '../../Buttons/Button/Button';
import cn from 'classnames';


export const SubscribeItem = ({ type, isBorder }: SubscribeItemProps): JSX.Element => {
    const { tgUser } = useSetup();

    return (
        <div className={cn(styles.subscribeItem, {
            [styles.borderItem]: isBorder,
        })}>
            <Htag tag='s'>
                {setLocale(tgUser?.language_code).join_owl + ' ' + type}
            </Htag>
            <Button text={setLocale(tgUser?.language_code).join} type='primary'
                onClick={() => {}} />
        </div>
    );
};
