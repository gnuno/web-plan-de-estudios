import { Sx } from "@mantine/core";
import { Container, ScrollArea, Text } from "@mantine/core";
import { Center, Group, Paper, Title } from "@mantine/core";


export default function HomeConnected() {
    const greenTextBgGradient: Sx = {
        background: "linear-gradient(90.83deg, #39A55E 0%, #D1B937 99.67%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
        "text-fill-color": "transparent"
    }
    const aquaTextBgGradient: Sx = {
        background: "linear-gradient(97.46deg, #32A3B1 0%, #32B1A2 57.13%, #57B885 98.71%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
        "text-fill-color": "transparent"
    }

    return (
        <>
            <Container my={50}>
                <Center>
                    <Title>Bienvenide de nuevo @user</Title>
                </Center>
                <Paper p={25} radius={"md"} mt={50}>
                    <Container>
                        <Text size="lg" color={"brand"} weight="bolder">Tus estadisticas:</Text>
                        <Group position="apart" direction="row" noWrap grow>
                            <Container>
                                materias aprobadas porcentaje de intermedio porcentaje de lic
                            </Container>
                            <Container>
                                promedio sin aplazos promedio con aplazos materias x cuatrimestre
                            </Container>
                            <Container>
                                finales x año materias aprobadas ultimo año cuatrimestres para recibirte con este ritmo
                            </Container>
                        </Group>
                    </Container>
                </Paper>
                <Paper p={25} radius={"md"} mt={50}>
                    <Container>
                        <Text size="lg" sx={aquaTextBgGradient} weight="bolder">Cursando actualmente:</Text>
                        <Group position="apart" align={"stretch"} py={20} direction="row" noWrap grow sx={{
                            overflowY: "hidden",
                            overflowX: "auto",
                            scrollSnapType: "x mandatory"
                        }}>
                            {Array.from(Array(10).keys()).map(value => (
                                <Paper key={value} shadow="sm" radius="md" p="md" withBorder sx={{
                                    minWidth: 200,
                                    border: "2px solid transparent",
                                    background: "linear-gradient(white, white) padding-box, linear-gradient(97.46deg, #32A3B1 0%, #32B1A2 57.13%, #57B885 98.71%) border-box"
                                }}>
                                    <Text sx={aquaTextBgGradient}>Nombre de materia</Text>
                                    <Text sx={aquaTextBgGradient}>Cursando</Text>
                                </Paper>
                            ))}
                        </Group>
                    </Container>
                </Paper>
                <Paper p={25} radius={"md"} mt={50}>
                    <Container>
                        <Text size="lg" sx={greenTextBgGradient} weight="bolder">No te olvides de Rendir:</Text>
                        <Group position="apart" align={"stretch"} py={20} direction="row" noWrap grow sx={{
                            overflowY: "hidden",
                            overflowX: "auto",
                            scrollSnapType: "x mandatory"
                        }}>
                            {Array.from(Array(10).keys()).map(value => (
                                <Paper key={value} shadow="sm" radius="md" p="md" withBorder sx={{
                                    minWidth: 200,
                                    border: "2px solid transparent",
                                    background: "linear-gradient(white, white) padding-box, linear-gradient(90.83deg, #39A55E 0%, #D1B937 99.67%) border-box"
                                }}>
                                    <Text sx={greenTextBgGradient} >Nombre de materia</Text>
                                    <Text sx={greenTextBgGradient} >Regularizada</Text>
                                </Paper>
                            ))}

                        </Group>
                    </Container>
                </Paper>
                <Paper p={25} radius={"md"} mt={50}>
                    <Container>
                        <Text size="lg" color={"#656565"} weight="bolder">El proximo cuatrimestre podrás cursar:</Text>
                        <Group position="apart" align={"stretch"} py={20} direction="row" noWrap grow sx={{
                            overflowY: "hidden",
                            overflowX: "auto",
                            scrollSnapType: "x mandatory"
                        }}>
                            {Array.from(Array(10).keys()).map(value => (
                                <Paper key={value} shadow="sm" radius="md" p="md" withBorder sx={{
                                    minWidth: 200,
                                    border: "2px solid #656565",
                                }}>
                                    <Text color={"#656565"} >Nombre de materia</Text>
                                    <Text color={"#656565"} >Regularizada</Text>
                                </Paper>
                            ))}

                        </Group>
                    </Container>
                </Paper>
            </Container>
        </>
    )
}