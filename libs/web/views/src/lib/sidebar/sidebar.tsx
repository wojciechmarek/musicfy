import styled from '@emotion/styled';
import { Links, Title } from '@musicfy/web/components';

/* eslint-disable-next-line */
export interface SidebarProps {}

const SidebarLayout = styled.div`
  width: 20em;
  background-color: #19181e;
`;

const SidebarContainer = styled.div`
  margin: 0.5em 2em 0;
  display: flex;
  flex-direction: column;
`;


export function Sidebar(props: SidebarProps) {
  return (
    <SidebarLayout>
      <SidebarContainer>
        <Title />
        <Links />
      </SidebarContainer>
    </SidebarLayout>
  );
}

export default Sidebar;
