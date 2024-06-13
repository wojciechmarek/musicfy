import { Links, Title } from '@musicfy/web/components';
import { SidebarContainer, SidebarLayout } from './sidebar.styled';

/* eslint-disable-next-line */
export interface SidebarProps {}

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
