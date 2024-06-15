import { ThemeMode } from '@musicfy/web/utils/models';
import { ThemeButton, ThemeSelectorContainer } from './theme-selector.styled';

type Props = {
  theme: ThemeMode;
  onThemeChange: (theme: ThemeMode) => void;
};

export const ThemeSelector = (props: Props) => {
  const { theme, onThemeChange } = props;

  return (
    <ThemeSelectorContainer>
      <ThemeButton
        isActive={theme === 'system'}
        onClick={() => onThemeChange('system')}
      >
        SYSTEM
      </ThemeButton>
      <ThemeButton
        isActive={theme === 'light'}
        onClick={() => onThemeChange('light')}
      >
        LIGHT
      </ThemeButton>
      <ThemeButton
        isActive={theme === 'dark'}
        onClick={() => onThemeChange('dark')}
      >
        DARK
      </ThemeButton>
      <ThemeButton
        isActive={theme === 'blue'}
        onClick={() => onThemeChange('blue')}
      >
        BLUE
      </ThemeButton>
    </ThemeSelectorContainer>
  );
};
