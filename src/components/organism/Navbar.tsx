import { ActionIcon, Avatar, Badge, Burger, Button, Container, Group, Header, MediaQuery, Title, UnstyledButton, useMantineColorScheme, useMantineTheme } from '@mantine/core';
import { Sun, MoonStars } from 'tabler-icons-react';
import { useModal, ModalType } from '@contexts/ModalContext';
import SpotlightControl from '@molecules/Spotlight/SpotlightControl';
import { useUser } from '@contexts/UserProvider';
// import AvatarAdapter from '../../utils/adapters/AvatarAdapter';
import { useSidebar } from '@contexts/SidebarContext';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

function ToggleIcon({colorScheme}: {colorScheme:string}){


    if(colorScheme == "dark"){
        return <Sun size={24} />
    } 
    return <MoonStars size={24} />
}

export const Navbar = () => {
    const { colorScheme, toggleColorScheme } = useMantineColorScheme();
    const { showSidebar, setSidebar } = useSidebar();
    const router = useRouter();
    const theme = useMantineTheme();
    const { modalType, setModalType } = useModal();
    const { jwt, username, avatar, setSession, userId } = useUser();

    useEffect(() => {

    }, [])

    return (
        <Header height={60} p="xs" >
            <Container size={'xl'} style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                <Group sx={{ height: '100%' }} px={20} position="apart">
                    <UnstyledButton onClick={() => router.push("/")}>
                        <Title order={1}>Plan de Estudio</Title>
                    </UnstyledButton>

                    <MediaQuery smallerThan={"sm"} styles={{ display: 'none' }}>
                        <Group position="center" align={"center"} >
                            <ActionIcon
                                onClick={() => toggleColorScheme()}
                                size="xl"
                                sx={(theme) => ({
                                    backgroundColor:
                                        theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
                                    color: theme.colorScheme === 'dark' ? theme.colors.yellow[4] : theme.colors.blue[6],
                                })}
                            >
                                {typeof window !== "undefined" &&  <ToggleIcon colorScheme={colorScheme} />}
                            </ActionIcon>
                        </Group>
                    </MediaQuery>

                </Group>
                <Group sx={{ height: '100%' }} px={20} position="center">
                </Group>
                <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
                    <Burger
                        opened={showSidebar}
                        onClick={() => setSidebar((o: boolean) => !o)}
                        size="sm"
                        color={theme.colors.gray[6]}
                        mr="xl"
                    />
                </MediaQuery>
                {jwt ? (<>
                    <MediaQuery smallerThan={"sm"} styles={{ display: 'none' }}>
                        <Group position="center" align={"center"} sx={{ height: "100%" }}>
                            {/* <Link to={"/profile/" + userId} style={{textDecoration: "none"}}>
                                <Badge sx={{ paddingLeft: 0, height: "100%", cursor: "pointer" }} styles={{ leftSection: { height: "100%" } }} radius="xl" color="teal" leftSection={<Avatar
                                    alt="Avatar for badge"
                                    styles={{
                                        root: {
                                            height: "100%",
                                        }
                                    }}
                                    mr={5}
                                    src={(!avatar || avatar.length === 0) ? null : AvatarAdapter(avatar)}
                                >
                                    {username}
                                </Avatar>}>
                                    {username}
                                </Badge>
                            </Link> */}
                            <Button
                                onClick={async () => {
                                    setSession(null, "", "", "");
                                }}
                                size="sm"
                                color="blue"
                                sx={{ borderColor: theme.colors.blue[6] }}
                            >
                                Cerrar sesión
                            </Button>
                        </Group>
                    </MediaQuery>
                </>
                ) : (<>
                    <MediaQuery smallerThan={"sm"} styles={{ display: 'none' }}>
                        <Group sx={{ height: '100%' }} px={20} position="center">
                            <Button variant='outline' onClick={() => setModalType(ModalType.LOGIN)}>
                                Conectarse
                            </Button>
                            <Button variant="gradient" onClick={() => setModalType(ModalType.SIGNUP)} gradient={{ from: 'indigo', to: 'cyan' }}>Registrarse</Button>
                        </Group>
                    </MediaQuery>
                </>
                )
                }
            </Container>
        </Header >
    )

}