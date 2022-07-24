import { AppShell, GlobalStyles, useMantineTheme } from "@mantine/core";
import React from "react";
import {Navbar} from "@organism/Navbar"
import Sidebar from '@organism/Sidebar';

export default function BodyWrapper({children}:{children: React.ReactNode}){
    const theme = useMantineTheme();
    console.log(theme.colorScheme)
    return (<>
        <GlobalStyles theme={theme} />
            <AppShell
                padding="md"
                fixed

                navbar={<Sidebar />}
                // footer={<Footer withNavbar />}
                header={<Navbar />}

            >
                {children}
            </AppShell>
    </>)
}