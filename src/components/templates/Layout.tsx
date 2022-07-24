import { ColorScheme, NormalizeCSS } from "@mantine/core";
import { NotificationsProvider } from "@mantine/notifications";
import React from "react";
import { ModalContextProvider } from "@contexts/ModalContext";
import { SidebarContextProvider } from "@contexts/SidebarContext";
import { SpotlighContextProvider } from "@contexts/SpotlighContext";
import { ThemeContextProvider } from "@contexts/ThemeContext";
import { UserContextProvider } from "@contexts/UserProvider";
import BodyWrapper from "./BodyWrapper";


export default function Layout({ children,  colorScheme }: { children: React.ReactNode, colorScheme: ColorScheme }) {

    return (
        <UserContextProvider>
            <ThemeContextProvider initialColorScheme={colorScheme}>
                <NormalizeCSS />
                <NotificationsProvider>
                    <SpotlighContextProvider>
                        <SidebarContextProvider>
                            <ModalContextProvider>
                                <BodyWrapper>
                                    {children}
                                </BodyWrapper>
                            </ModalContextProvider>
                        </SidebarContextProvider>
                    </SpotlighContextProvider>
                </NotificationsProvider>
            </ThemeContextProvider>
        </UserContextProvider>
    )

}