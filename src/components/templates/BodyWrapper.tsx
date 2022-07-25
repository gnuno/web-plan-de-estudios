import { AppShell, GlobalStyles, useMantineTheme } from "@mantine/core";
import React from "react";
import {Navbar} from "@organism/Navbar"
import Sidebar from '@organism/Sidebar';
import Footer from "@components/organism/Footer";

export default function BodyWrapper({children}:{children: React.ReactNode}){
    const theme = useMantineTheme();
    console.log(theme.colorScheme)
    return (<>
        <GlobalStyles theme={theme} />
            <AppShell
                padding="md"
                fixed

                navbar={<Sidebar />}
                footer={<Footer />}
                header={<Navbar />}
                sx={(theme) =>({
                    main:{
                        background:  "linear-gradient(97.46deg, #32A3B1 0%, #32B1A2 57.13%, #57B885 98.71%)",
                        paddingLeft: 0, 
                    },
                    footer:{
                        background:  "linear-gradient(97.46deg, #32A3B1 0%, #32B1A2 57.13%, #57B885 98.71%)",
                        paddingLeft: 0, 
                    }
                })}
            >
                {children}
            </AppShell>
    </>)
}