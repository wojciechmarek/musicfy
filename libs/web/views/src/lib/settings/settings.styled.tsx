import styled from '@emotion/styled';

export const SettingsContainer = styled.div`
  background-color: var(--background-color);
  height: 100%;
`;

export const SettingsContent = styled.div`
  height: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 1em;
  overflow-y: auto;
`;

export const SettingsTitle = styled.h1`
  color: var(--font-color);
  margin-top: 0.75em;
`;

export const SettingsList = styled.ul`
  margin-top: 1em;
  display: flex;
  flex-direction: column;
  gap: 1em;
`;

export const SettingsEntry = styled.li`
  padding: 0 1.5em;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1em;
  background-color: var(--tile-background-color);
  height: 5em;
  border-radius: 0.5em;
  transition: background-color 0.2s ease-in-out;
`;

export const EntryText = styled.p`
  color: var(--font-color);
  font-weight: bold;
`;
