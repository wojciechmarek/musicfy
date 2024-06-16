import { ThemeMode } from '@musicfy/web/utils/models';
import { ThemeButton, ThemeSelectorContainer } from './theme-selector.styled';

type Props = {
  theme: ThemeMode;
  isAutoThemeEnabled: boolean;
  onThemeChange: (theme: ThemeMode) => void;
  onAutoThemeClick: () => void;
};

export const ThemeSelector = (props: Props) => {
  const { theme, isAutoThemeEnabled, onThemeChange, onAutoThemeClick } = props;

  return (
    <ThemeSelectorContainer>
      <ThemeButton isActive={isAutoThemeEnabled} onClick={onAutoThemeClick}>
        SYSTEM
      </ThemeButton>
      <ThemeButton
        isActive={theme === 'light' && !isAutoThemeEnabled}
        onClick={() => onThemeChange('light')}
      >
        LIGHT
      </ThemeButton>
      <ThemeButton
        isActive={theme === 'dark' && !isAutoThemeEnabled}
        onClick={() => onThemeChange('dark')}
      >
        DARK
      </ThemeButton>
      <ThemeButton
        isActive={theme === 'blue' && !isAutoThemeEnabled}
        onClick={() => onThemeChange('blue')}
      >
        BLUE
      </ThemeButton>
    </ThemeSelectorContainer>
  );
};
