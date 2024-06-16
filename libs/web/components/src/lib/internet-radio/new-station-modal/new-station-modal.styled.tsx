import styled from '@emotion/styled';

export const FormContent = styled.form`
  width: 30em;
  background-color: var(--tile-background-color);
  padding: 1em 1.5em;
  border-radius: 0.5em;
`;

export const Header = styled.h3``;

export const InputRow = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 0.5em;
`;
export const InputLabel = styled.label``;

export const Input = styled.input<{ isError?: boolean }>`
  border: ${(props) => (props.isError ? '1px solid red' : '#062626')};
  color: var(--font-color);
  background-color: var(--tile-button-color);
  font-weight: bold;
  outline: none;
  padding: 0.25em 0.5em;
  border-radius: 0.5em;
`;

export const ButtonsRow = styled.div`
  margin-top: 1.5em;
  display: flex;
  justify-content: center;
  gap: 1em;
`;

export const CancelButton = styled.button`
  border: none;
  background-color: var(--tile-button-color);
  color: var(--font-color);
  text-decoration: none;
  font-weight: bold;
  padding: 0.5em 1em;
  border-radius: 0.5em;
  cursor: pointer;
  width: 6em;

  &:hover {
    background-color: var(--tile-button-hover-color);
  }
`;

export const AddButton = styled.input`
  border: none;
  background-color: var(--tile-button-color);
  color: var(--font-color);
  text-decoration: none;
  font-weight: bold;
  padding: 0.5em 1em;
  border-radius: 0.5em;
  cursor: pointer;
  width: 6em;

  &:hover {
    background-color: var(--tile-button-hover-color);
  }
`;

export const Asterisk = styled.span`
  color: red;
  font-weight: bold;
`;
