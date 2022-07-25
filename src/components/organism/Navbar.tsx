import { ActionIcon, Avatar, Badge, Burger, Button, Container, Group, Header, MediaQuery, Text, Title, UnstyledButton, useMantineColorScheme, useMantineTheme } from '@mantine/core';
import { Sun, MoonStars } from 'tabler-icons-react';
import { useModal, ModalType } from '@contexts/ModalContext';
import SpotlightControl from '@molecules/Spotlight/SpotlightControl';
import { useUser } from '@contexts/UserProvider';
// import AvatarAdapter from '../../utils/adapters/AvatarAdapter';
import { useSidebar } from '@contexts/SidebarContext';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { NextLink } from '@mantine/next';
import MainLink from '@components/molecules/MainLink';
import Link from 'next/link';

function ToggleIcon({ colorScheme }: { colorScheme: string }) {


    if (colorScheme == "dark") {
        return <Sun size={24} />
    }
    return <MoonStars size={24} />
}

export const Navbar = () => {
    const [mounted, setMounted] = useState(false);

    const { colorScheme, toggleColorScheme } = useMantineColorScheme();
    const { showSidebar, setSidebar } = useSidebar();
    const router = useRouter();
    const theme = useMantineTheme();
    const { modalType, setModalType } = useModal();
    const { jwt, username, avatar, setSession, userId } = useUser();

    useEffect(() => setMounted(true), []);
    if (!mounted) return null;


    return (
        <Header height={60} p="xs" sx={theme => ({
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            background: theme.colorScheme === "dark" ? theme.black[8] : "#EAEAEA"
        })} >
            <Container size={'xl'} style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                <Group sx={{ height: '100%' }} px={20} position="apart">
                    <UnstyledButton onClick={() => router.push("/")}>
                        <Title order={1}>PEI</Title>
                    </UnstyledButton>

                    <MediaQuery smallerThan={"sm"} styles={{ display: 'none' }}><>
                        <Group position="center" align={"center"} >
                            <ActionIcon
                                onClick={() => toggleColorScheme()}
                                size="xl"
                                sx={(theme) => ({
                                    backgroundColor:
                                        theme.colorScheme === 'dark' ? theme.colors.dark[6] : "#EAEAEA",
                                    color: theme.colorScheme === 'dark' ? theme.colors.yellow[4] : theme.colors.blue[6],    
                                })}
                            >
                                <ToggleIcon colorScheme={colorScheme} />
                            </ActionIcon>
                            <Link href="/micarrera">
                                <Text px={20} weight={'lighter'} size={'sm'}>Mi carrera</Text>
                            </Link>
                            <Link href="/micarrera">
                                <Text px={10} weight={'lighter'} size={'sm'}>Sobre nosotros</Text>
                            </Link>
                        </Group>
                    </>
                    </MediaQuery>

                </Group>
                {/* <Group sx={{ height: '100%' }} px={20} position="center">
                    <SpotlightControl></SpotlightControl>
                </Group> */}
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
                            <NextLink href={"/profile/" + userId} style={{ textDecoration: "none" }}>
                                <Badge sx={{ paddingLeft: 0, height: "100%", cursor: "pointer" }} styles={{ leftSection: { height: "100%" } }} radius="xl" color="teal" >
                                    {username}
                                </Badge>
                            </NextLink>
                            <Button
                                onClick={async () => {
                                    setSession(null, "", "", "");
                                    // await logout();
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
                            <Button variant="gradient" onClick={() => setModalType(ModalType.SIGNUP)} gradient={{ from: '#A5537F', to: '#5845A5' }}>Registrarse</Button>
                        </Group>
                    </MediaQuery>
                </>
                )
                }
            </Container>
        </Header >
    )

}