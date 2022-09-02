import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface SidebarProps {}

const StyledSidebar = styled.div`
  width: 20em;
  background-color: #18191E;
`;

export function Sidebar(props: SidebarProps) {
  return (
    <StyledSidebar>
      <h1>Welcome to Sidebar!</h1>
    </StyledSidebar>
  );
}

export default Sidebar;
