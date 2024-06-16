import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

/* eslint-disable-next-line */
export interface WarningMessageProps {}

const HomeBlurFilterWarningContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1em;
  height: calc(100% - 5em);
  width: calc(100% - 20em);
  position: absolute;
  z-index: 1;
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  background-color: rgba(0, 0, 0, 0.5);
`;

const MessageBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1em;
  padding: 2em;
  background-color: var(--tile-background-color);
  border-radius: 0.5em;
`;

const MessageTitle = styled.h1`
  color: var(--font-color);
  margin: 0;
`;

const MessageText = styled.p`
  color: var(--font-color);
  margin: 0;

  a {
    color: var(--font-color);
  }
`;

const MessageTextRed = styled.p`
  color: red;
  margin: 0;
  font-weight: bold;
`;

const MessageLink = styled(Link)`
  margin-top: 1em;
  background-color: var(--tile-button-color);
  color: var(--font-color);
  text-decoration: none;
  font-weight: bold;
  padding: 0.5em 1em;
  border-radius: 0.5em;

  &:hover {
    background-color: var(--tile-button-hover-color);
  }
`;

export function WarningMessage(props: WarningMessageProps) {
  return (
    <HomeBlurFilterWarningContent>
      <MessageBox>
        <MessageTitle>Warning</MessageTitle>
        <MessageTextRed>
          This audio source needs to provide the API key. Update it's value in
          the Settings tab (X RAPID API key).
        </MessageTextRed>
        <MessageText>
          This application is configured to the RapidAPI endpoints to reach the
          Spotify services.{' '}
          <a
            href="https://rapidapi.com/Glavier/api/spotify23"
            target="_blank"
            rel="noreferrer"
          >
            Get your API key from here.
          </a>
        </MessageText>
        <MessageLink to="/settings">Go to settings</MessageLink>
      </MessageBox>
    </HomeBlurFilterWarningContent>
  );
}

export default WarningMessage;
