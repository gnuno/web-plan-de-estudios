import { Group, Sx } from "@mantine/core";
import { Divider, Text, Title } from "@mantine/core";
import { Container } from "@mantine/core";


export default function Footer() {
    const purpleTextBgGradient: Sx = {
        background: "linear-gradient(103.22deg, #A5537F 7.47%, #5845A5 95.11%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
        "text-fill-color": "transparent"
    }
    return (
        <footer>
            <Container p={1}>
                <Divider sx={{
                    border: "0px solid transparent",
                    borderTop: "1px solid transparent",
                    background: "linear-gradient(white, white) padding-box, linear-gradient(103.22deg, #A5537F 7.47%, #5845A5 95.11%) border-box"
                }} />
                <Container p={19}>
                    <Group>
                        <Title sx={purpleTextBgGradient}>PEI</Title>
                        <Text sx={purpleTextBgGradient}>© Copyright 2022 PEI Software GNUno. Todos los derechos reservados.</Text>
                    </Group>
                </Container>
            </Container>
        </footer>
    )
}