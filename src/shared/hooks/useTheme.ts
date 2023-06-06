import { useMemo } from 'react';
import Themes from '../../constants/themesList';
import { ThemeType } from '../../constants';

export function useTheme(themeType: ThemeType) {
    return useMemo(() => {
        return {
            colors: Themes.find(item => item.id === themeType),
            buttonPaddings: {
                default: '10px',
                sizeL: '10px',
                sizeM: '8px',
                sizeS: '6px'
            },
            fontSizes: {
                default: '18px',
                sizeL: '18px',
                sizeM: '14px',
                sizeS: '12px'
            },
            media: {
                sizeL: '(max-width: 1300px) and (min-width: 768px)',
                sizeM: '(max-width: 767px) and (min-width: 425px)',
                sizeS: '(max-width: 500px)'
            }
        };
    }, [themeType]);
}
