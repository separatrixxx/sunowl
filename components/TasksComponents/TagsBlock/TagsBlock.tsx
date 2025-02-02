import { TagsBlockProps } from './TagsBlock.props';
import { useSetup } from '../../../hooks/useSetup';
import { setLocale } from '../../../helpers/locale.helper';
import { BorderButton } from '../../Buttons/BorderButton/BorderButton';
import { copyToClipboard } from '../../../helpers/clipboard.helper';


export const TagsBlock = ({ type, tags }: TagsBlockProps): JSX.Element => {
    const { tgUser } = useSetup();

    return (
        <BorderButton text={setLocale(tgUser?.language_code).copy_tags}
            isPrimary={true} isDisabled={type !== 'active'}
            onClick={() => copyToClipboard(tags.reduce((t, acc) => t + ' ' + acc, ''),
                setLocale(tgUser?.language_code).tags_copied,
                setLocale(tgUser?.language_code).tags_were_not_copied)} />
    );
};
