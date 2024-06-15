import {
  RootState,
  setAccessApiHost,
  setAccessApiKey,
  setAccessApiUrl,
  setSearchEngineUrl,
  setThemeMode,
} from '@musicfy/web/utils/store';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  EntryText,
  SettingsContainer,
  SettingsContent,
  SettingsEntry,
  SettingsList,
  SettingsTitle,
} from './settings.styled';
import { ThemeMode } from '@musicfy/web/utils/models';
import { ThemeSelector, ValueEditor } from '@musicfy/web/components';

/* eslint-disable-next-line */
export interface SettingsProps {}

export function Settings(props: SettingsProps) {
  const dispatch = useDispatch();
  const { accessApiKey, accessApiHost, accessApiUrl } = useSelector(
    (state: RootState) => state.spotify,
  );
  const { searchEngineUrl } = useSelector((state: RootState) => state.radio);
  const { theme } = useSelector((state: RootState) => state.theme);

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
          onThemeChange={(e) => dispatch(setThemeMode(e))}
          theme={theme}
        />
      ),
    },
  ];

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
