import styled from '@emotion/styled';
import { RootState, setAccessApiKey } from '@musicfy/web/utils/store';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

/* eslint-disable-next-line */
export interface SettingsProps {}

const SettingsContainer = styled.div`
  background-color: #1a1b20;
  height: 100%;
`;

const SettingsContent = styled.div`
  height: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0.5em 1em 0;
`;

const SettingsTitle = styled.h1`
  color: white;
  margin-top: 0.75em;
`;

const SettingsList = styled.ul`
  margin-top: 1em;
  display: flex;
  flex-direction: column;
  gap: 1em;
`;

const SettingsEntry = styled.li`
  padding: 0 1.5em;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1em;
  background-color: #2a2b30;
  height: 5em;
  border-radius: 0.5em;
  transition: background-color 0.2s ease-in-out;
`;

const EntryText = styled.p`
  color: white;
  font-weight: bold;
`;

const EntryInputAndSave = styled.div`
  display: flex;
  align-items: center;
  gap: 1em;
`;

const EntryInput = styled.input`
  border: none;
  color: white;
  font-weight: bold;
  width: 40em;
  outline: none;
  background-color: #1a1b20;
  padding: 0.25em 0.5em;
  border-radius: 0.5em;
`;

const EntrySave = styled.button`
  border: none;
  background-color: #1a1b20;
  color: white;
  font-weight: bold;
  outline: none;
  cursor: pointer;
  padding: 0.25em 0.75em;
  border-radius: 0.5em;
`;

export function Settings(props: SettingsProps) {
  const dispatch = useDispatch();
  const { accessApiKey } = useSelector((state: RootState) => state.spotify);

  const [isSpotifyKeyInEditMode, setIsSpotifyKeyInEditMode] = useState(false);
  const [spotifyKey, setSpotifyKey] = useState(accessApiKey);

  const handleOnSaveOrEditButtonClick = () => {
    if (isSpotifyKeyInEditMode) {
      dispatch(setAccessApiKey(spotifyKey));
    } else {
      setSpotifyKey(accessApiKey);
    }

    setIsSpotifyKeyInEditMode(!isSpotifyKeyInEditMode);
  };

  return (
    <SettingsContainer>
      <SettingsContent>
        <SettingsTitle>Settings</SettingsTitle>
        <SettingsList>
          <SettingsEntry>
            <EntryText>Spotify API key:</EntryText>
            <EntryInputAndSave>
              {isSpotifyKeyInEditMode ? (
                <EntryInput onChange={(e) => setSpotifyKey(e.target.value)} value={spotifyKey} />
              ) : (
                <EntryText>{spotifyKey}</EntryText>
              )}
              <EntrySave onClick={() => handleOnSaveOrEditButtonClick()}>
                {isSpotifyKeyInEditMode ? 'Save' : 'Edit'}
              </EntrySave>
            </EntryInputAndSave>
          </SettingsEntry>
        </SettingsList>
      </SettingsContent>
    </SettingsContainer>
  );
}

export default Settings;
