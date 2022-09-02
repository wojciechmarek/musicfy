import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface HomeProps {}

const StyledHome = styled.div`
  background-color: #1A1B20;
  height: 100%;
`;

export function Home(props: HomeProps) {
  return (
    <StyledHome>
      <h1>Welcome to Home!</h1>
    </StyledHome>
  );
}

export default Home;
