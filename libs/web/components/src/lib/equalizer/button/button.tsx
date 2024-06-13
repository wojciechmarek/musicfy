import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface EqButtonProps {
  [key: string]: any;
  handleOnClick: () => void;
  label: string;
}

const EqButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: auto 0;
`;

const EqPowerButton = styled.button`
  background-color: #19181e;
  color: white;
  border: none;
  border-radius: 0.5em;
  padding: 0.5em 1em;
  cursor: pointer;
  width: 3em;
  height: 2em;
  transition: background-color 0.2s ease-in-out;
`;


const EqPowerLabel = styled.p`
  color: white;
  font-size: 0.75em;
  text-transform: uppercase;
  text-align: center;
  font-weight: bold;
  margin-bottom: 0.25em;
`;

export function EqButton(props: EqButtonProps) {
  const { handleOnClick, isActive, label, ...rest } = props;
  return (
    <EqButtonContainer {...rest}>
      <EqPowerLabel>{label}</EqPowerLabel>
      <EqPowerButton onClick={() => handleOnClick()} />
    </EqButtonContainer>
  );
}

export default EqButton;
