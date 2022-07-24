import { NormalizeCSS } from "@mantine/core";
import { NotificationsProvider } from "@mantine/notifications";
import React from "react";
import { ModalContextProvider } from "@contexts/ModalContext";
import { SidebarContextProvider } from "@contexts/SidebarContext";
import { SpotlighContextProvider } from "@contexts/SpotlighContext";
import { ThemeContextProvider } from "@contexts/ThemeContext";
import { UserContextProvider } from "@contexts/UserProvider";
import BodyWrapper from "./BodyWrapper";


export default function Layout({ children }: { children: React.ReactNode }) {

    return (
        <UserContextProvider>
            <ThemeContextProvider>
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