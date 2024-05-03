import styled from '@emotion/styled';

export const LayoutContainer = styled.div`
  color: #fff;
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
`;

export const LayoutContent = styled.div`
  flex: 1;
  display: flex;
  height: calc(100vh - 5em);

`;

export const ContentContainer = styled.div`
  flex: 1;
`;

export const WrongResolutionContainer = styled.div`
  position: absolute;
  background-color: #0a0a0a;
  width: 100%;
  height: 100vh;
  place-items: center;
  z-index: 1;
  display: none;

  @media (max-width: 1450px) {
    display: grid;
  }
`;

export const WrongResolutionText = styled.p`
  font-size: 2em;
  font-weight: bold;
  color: #fff;
`;
