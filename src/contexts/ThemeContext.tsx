import { ColorScheme, ColorSchemeProvider, GlobalStyles, MantineProvider, NormalizeCSS } from '@mantine/core';
import { useColorScheme, useLocalStorageValue } from '@mantine/hooks';
import React, { useContext, useState } from 'react'

const Context = React.createContext<{
    colorScheme: string,
    toggleColorScheme: (value?: ColorScheme) => void
}>({
    colorScheme: "light",
    toggleColorScheme: () => console.log("Initializing Theme Context ")
});

type ThemeContextProviderProps = {
    children: React.ReactNode
}

export const ThemeContextProvider: React.FC<ThemeContextProviderProps> = ({ children }) => {
    const defaultColorScheme = useColorScheme();
    const [colorScheme, setColorScheme] = useLocalStorageValue<ColorScheme>({
        key: 'mantine-color-scheme',
        defaultValue: defaultColorScheme,
    });
    const toggleColorScheme = (value?: ColorScheme) => {
        console.log("AAA")
        const nextColorScheme = value || (colorScheme === 'dark' ? 'light' : 'dark');
        setColorScheme(nextColorScheme);
    };

    return <Context.Provider value={{ colorScheme, toggleColorScheme }}>
        <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
            <MantineProvider
          withGlobalStyles
          withNormalizeCSS
          theme={{
            /** Put your mantine theme override here */
            colorScheme: 'light',
          }}>
                {children}
            </MantineProvider>
        </ColorSchemeProvider>
    </Context.Provider>
}

export const useTheme = () => useContext(Context);
