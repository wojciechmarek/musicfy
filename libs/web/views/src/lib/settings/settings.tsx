import {
  RootState,
  setAccessApiHost,
  setAccessApiKey,
  setAccessApiUrl,
  setAutoTheme,
  setSearchEngineUrl,
  setThemeMode,
} from '@musicfy/web/utils/store';
import { useDispatch, useSelector } from 'react-redux';
import {
  EntryText,
  SettingsContainer,
  SettingsContent,
  SettingsEntry,
  SettingsList,
  SettingsTitle,
} from './settings.styled';
import { ThemeSelector, ValueEditor } from '@musicfy/web/components';
import { ThemeMode } from '@musicfy/web/utils/models';
import { useCallback, useEffect } from 'react';

/* eslint-disable-next-line */
export interface SettingsProps {}

export function Settings(props: SettingsProps) {
  const dispatch = useDispatch();
  const { accessApiKey, accessApiHost, accessApiUrl } = useSelector(
    (state: RootState) => state.spotify,
  );
  const { searchEngineUrl } = useSelector((state: RootState) => state.radio);
  const { theme, isAutoThemeEnabled } = useSelector(
    (state: RootState) => state.theme,
  );

  const handleOnThemeChange = (theme: ThemeMode) => {
    dispatch(setAutoTheme(false));
    dispatch(setThemeMode(theme));

    window
      .matchMedia('(prefers-color-scheme: dark)')
      .removeEventListener('change', ({ matches }) => {
        if (matches) {
          dispatch(setThemeMode('dark'));
        } else {
          dispatch(setThemeMode('light'));
        }
      });
  };

  const handleOnAutoThemeClick = () => {
    dispatch(setAutoTheme(true));

    window
      .matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', ({ matches }) => {
        if (matches) {
          dispatch(setThemeMode('dark'));
        } else {
          dispatch(setThemeMode('light'));
        }
      });

    detectCurrentThemeAndChangeTheme();
  };

  const detectCurrentThemeAndChangeTheme = useCallback(() => {
    if (
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    ) {
      dispatch(setThemeMode('dark'));
      return;
    }

    dispatch(setThemeMode('light'));
  }, [dispatch]);

  const settings = [
    {
      title: 'Search radio engine URL',
      component: (
        <ValueEditor
          onValueChanged={(e) => dispatch(setSearchEngineUrl(e))}
          value={searchEngineUrl}
        />
      ),
    },
    {
      title: 'Spotify - RAPID API url',
      component: (
        <ValueEditor
          onValueChanged={(e) => dispatch(setAccessApiUrl(e))}
          value={accessApiUrl}
        />
      ),
    },
    {
      title: 'Spotify - X RAPID API key',
      component: (
        <ValueEditor
          onValueChanged={(e) => dispatch(setAccessApiKey(e))}
          value={accessApiKey}
        />
      ),
    },
    {
      title: 'Spotify - X RAPID API host',
      component: (
        <ValueEditor
          onValueChanged={(e) => dispatch(setAccessApiHost(e))}
          value={accessApiHost}
        />
      ),
    },
    {
      title: 'Theme',
      component: (
        <ThemeSelector
          theme={theme}
          isAutoThemeEnabled={isAutoThemeEnabled}
          onThemeChange={handleOnThemeChange}
          onAutoThemeClick={handleOnAutoThemeClick}
        />
      ),
    },
  ];

  useEffect(() => {
    if (isAutoThemeEnabled) {
      detectCurrentThemeAndChangeTheme();
    }
  }, [isAutoThemeEnabled, detectCurrentThemeAndChangeTheme]);

  return (
    <SettingsContainer>
      <SettingsContent>
        <SettingsTitle>Settings</SettingsTitle>
        <SettingsList>
          {settings.map((setting) => (
            <SettingsEntry key={setting.title}>
              <EntryText>{setting.title}</EntryText>
              {setting.component}
            </SettingsEntry>
          ))}
        </SettingsList>
      </SettingsContent>
    </SettingsContainer>
  );
}

export default Settings;
