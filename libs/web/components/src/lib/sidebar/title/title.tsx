import styled from "@emotion/styled";

/* eslint-disable-next-line */
export interface TitleProps {}

const SidebarLogo = styled.p`
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 2rem;
  margin: 0.5em 0.75em;
`;

export function Title(props: TitleProps) {
  return (
    <SidebarLogo>Musicfy</SidebarLogo>
  );
}

export default Title;
