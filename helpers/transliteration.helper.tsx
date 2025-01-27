type TranslitDirection = 'ru-to-en' | 'en-to-ru';

const ruToEnMap: { [key: string]: string } = {
    'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd',
    'е': 'e', 'ё': 'yo', 'ж': 'zh', 'з': 'z', 'и': 'i',
    'й': 'y', 'к': 'k', 'л': 'l', 'м': 'm', 'н': 'n',
    'о': 'o', 'п': 'p', 'р': 'r', 'с': 's', 'т': 't',
    'у': 'u', 'ф': 'f', 'х': 'kh', 'ц': 'ts', 'ч': 'ch',
    'ш': 'sh', 'щ': 'sch', 'ъ': '', 'ы': 'y', 'ь': '',
    'э': 'e', 'ю': 'yu', 'я': 'ya'
};

const enToRuMap: { [key: string]: string } = {
    'a': 'а', 'b': 'б', 'v': 'в', 'g': 'г', 'd': 'д',
    'e': 'е', 'yo': 'ё', 'zh': 'ж', 'z': 'з', 'i': 'и',
    'y': 'й', 'k': 'к', 'l': 'л', 'm': 'м', 'n': 'н',
    'o': 'о', 'p': 'п', 'r': 'р', 's': 'с', 't': 'т',
    'u': 'у', 'f': 'ф', 'kh': 'х', 'ts': 'ц', 'ch': 'ч',
    'sh': 'ш', 'sch': 'щ', 'yu': 'ю', 'ya': 'я'
};

export function transliterate(text: string, direction: TranslitDirection): string {
    const map = direction === 'ru-to-en' ? ruToEnMap : enToRuMap;
    let result = '';
    let i = 0;
    
    while (i < text.length) {
        let matched = false;
        
        if (direction === 'en-to-ru') {
            for (let len = 3; len >= 2; len--) {
                const chunk = text.slice(i, i + len).toLowerCase();
                if (map[chunk]) {

                    const originalChunk = text.slice(i, i + len);
                    const replacement = map[chunk];

                    result += originalChunk[0] === originalChunk[0].toUpperCase() 
                        ? replacement.charAt(0).toUpperCase() + replacement.slice(1)
                        : replacement;

                    i += len;
                    matched = true;

                    break;
                }
            }
        }
        
        if (!matched) {
            const char = text[i];
            const lowerChar = char.toLowerCase();

            if (map[lowerChar]) {
                result += char === char.toUpperCase()
                    ? map[lowerChar].charAt(0).toUpperCase() + map[lowerChar].slice(1)
                    : map[lowerChar];
            } else {
                result += char;
            }

            i++;
        }
    }
    
    return result;
}
