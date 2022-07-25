import { ColorScheme, ColorSchemeProvider, GlobalStyles, MantineProvider, NormalizeCSS } from '@mantine/core';
import { useColorScheme, useLocalStorageValue } from '@mantine/hooks';
import { setCookie } from 'cookies-next';
import React, { useContext, useState } from 'react'

const Context = React.createContext<{
    colorScheme: string,
    toggleColorScheme: (value?: ColorScheme) => void
}>({
    colorScheme: "light",
    toggleColorScheme: () => console.log("Initializing Theme Context ")
});

type ThemeContextProviderProps = {
    children: React.ReactNode,
    initialColorScheme: ColorScheme
}

export const ThemeContextProvider: React.FC<ThemeContextProviderProps> = ({ children, initialColorScheme }) => {
    const defaultColorScheme = useColorScheme();
    const [colorScheme, setColorScheme] = useState(initialColorScheme);
    // const [colorScheme, setColorScheme] = useLocalStorageValue<ColorScheme>({
    //     key: 'mantine-color-scheme',
    //     defaultValue: defaultColorScheme,
    //     getInitialValueInEffect: true,
    // });
    const toggleColorScheme = (value?: ColorScheme) => {
        console.log("AAA")
        const nextColorScheme = value || (colorScheme === 'dark' ? 'light' : 'dark');
        setColorScheme(nextColorScheme);
        setCookie('mantine-color-scheme', nextColorScheme, { maxAge: 60 * 60 * 24 * 30 });
    };

    return <Context.Provider value={{ colorScheme, toggleColorScheme }}>
        <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
            <MantineProvider
          withGlobalStyles
          withNormalizeCSS
          theme={{
              /** Put your mantine theme override here */
              fontFamily: 'Roboto',
              headings: { fontFamily: 'Roboto' },
              colorScheme,
              colors:{
                "brand": ['#C892AF', '#C185A5', '#BB779B', '#B46A91', '#A5537F', '#954B73', '#884468', '#7A3E5E', '#7A3E5E','#5F3048'],
                "darkBrand": ['#998CCF', '#8D7EC9', '#806FC3', '#7361BD', '#6652B7', '#5845A5', '#55429E', '#4D3C90', '#453681','#3E3073']
              },
              primaryColor: "brand",
          }}>
                {children}
            </MantineProvider>
        </ColorSchemeProvider>
    </Context.Provider>
}  

export const useTheme = () => useContext(Context);
