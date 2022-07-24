import { MediaQuery, Navbar, Text, UnstyledButton } from "@mantine/core";
import { AlertCircle, Database, GitPullRequest, Login, Logout, Messages } from "tabler-icons-react";
import { ModalType, useModal } from "../../contexts/ModalContext";
import { useSidebar } from "../../contexts/SidebarContext";
import { useUser } from "../../contexts/UserProvider";
import MainLink from "../molecules/MainLink";

const data = [
  { icon: <GitPullRequest size={16} />, color: 'blue', label: 'Pull Requests' },
  { icon: <AlertCircle size={16} />, color: 'teal', label: 'Open Issues' },
  { icon: <Messages size={16} />, color: 'violet', label: 'Discussions' },
  { icon: <Database size={16} />, color: 'grape', label: 'Databases' },
];
export default function Sidebar() {
  const { showSidebar, setSidebar } = useSidebar();
  const links = data.map((link) => <MainLink {...link} key={link.label} />);
  const { modalType, setModalType } = useModal();
  const { jwt, username, avatar, setSession } = useUser();


  return (
    <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
      <Navbar
        p="md"
        // Breakpoint at which navbar will be hidden if hidden prop is true
        hiddenBreakpoint="sm"
        // Hides navbar when viewport size is less than value specified in hiddenBreakpoint
        hidden={!showSidebar}
        // when viewport size is less than theme.breakpoints.sm navbar width is 100%
        // viewport size > theme.breakpoints.sm – width is 300px
        // viewport size > theme.breakpoints.lg – width is 400px
        width={{ sm: 300, lg: 400 }}
      >

        {jwt ? (<>
          <MainLink icon={<Logout />} label="Cerrar sesión" color={"blue"} onClick={async () => {
            setSession(null, "", "","");
            // await logout();
          }} />
        </>) : (<>
          <MainLink icon={<Login />} label="Conectarse" color={"blue"} onClick={() => {
            setSidebar(false);
            setModalType(ModalType.LOGIN);
          }} />
        </>)}
        <Text>Application navbar</Text>
        {links}
      </Navbar>
    </MediaQuery>
  )
}