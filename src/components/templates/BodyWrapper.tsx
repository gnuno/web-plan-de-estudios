import { AppShell, GlobalStyles, useMantineTheme } from "@mantine/core";
import React from "react";
import {Navbar as Sidebar} from "@organism/Navbar"

export default function BodyWrapper({children}:{children: React.ReactNode}){
    const theme = useMantineTheme();

    return (<>
        <GlobalStyles theme={theme} />
            <AppShell
                padding="md"
                fixed

                navbar={<Sidebar />}
                // footer={<Footer withNavbar />}
                // header={<Navbar />}

                styles={(theme) => ({
                    main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0], padding: 0, marginTop: 50 },
                })}
            >
                {children}
            </AppShell>
    </>)
}