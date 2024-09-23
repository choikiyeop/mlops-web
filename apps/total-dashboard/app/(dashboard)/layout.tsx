import {
  DashboardContent,
  DashboardLayout,
  DashboardTitle,
  Sidebar,
  SidebarLogo,
  SidebarMenu,
  SidebarUser,
} from '@repo/ui';
import { MENUS } from '../../constants/menu';
import { Title } from '../../components/elements/title';

export default function DashboardsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen">
      <Sidebar>
        <SidebarLogo />
        <SidebarUser />
        <SidebarMenu menus={MENUS.CLUSTER_MENU} />
      </Sidebar>
      <DashboardLayout>
        <DashboardTitle>
          <Title />
        </DashboardTitle>
        <DashboardContent>{children}</DashboardContent>
      </DashboardLayout>
    </div>
  );
}
