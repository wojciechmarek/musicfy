import styled from '@emotion/styled';

export const EntryInputAndSave = styled.div`
  display: flex;
  align-items: center;
  gap: 1em;
`;

export const EntryInput = styled.input`
  border: none;
  color: var(--font-color);
  background-color: var(--tile-button-color);
  font-weight: bold;
  width: 40em;
  outline: none;
  padding: 0.25em 0.5em;
  border-radius: 0.5em;
`;

export const EntryText = styled.p`
  color: var(--font-color);
  font-weight: bold;
`;

export const EntrySave = styled.button`
  border: none;
  background-color: var(--tile-button-color);
  color: var(--font-color);
  font-weight: bold;
  outline: none;
  cursor: pointer;
  padding: 0.25em 0.75em;
  border-radius: 0.5em;

  &:hover {
    background-color: var(--tile-button-hover-color);
  }
`;
