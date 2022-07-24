import { SpotlightAction, SpotlightProvider } from '@mantine/spotlight';
import React, { useContext, useState} from 'react'
import { Dashboard, FileText, Home, Search } from 'tabler-icons-react';
// import ActionsWrapper from '../components/molecules/Spotlight/ActionsWrapper';

type SpotlighContextProviderProps = {
  children: React.ReactNode
}

export const SpotlighContextProvider: React.FC<SpotlighContextProviderProps> = ({children}) => {
  const actions: SpotlightAction[] = [
    {
      title: 'Home',
      description: 'Get to home page',
      onTrigger: () => console.log('Home'),
      group: 'general',
      icon: <Home size={18} />,
    },
    {
      title: 'Dashboard',
      description: 'Get full information about current system status',
      onTrigger: () => console.log('Dashboard'),
      group: 'general',
      icon: <Dashboard size={18} />,
    },
    {
      title: 'Documentation',
      description: 'Visit documentation to lean more about all features',
      onTrigger: () => console.log('Documentation'),
      group: 'general',
      icon: <FileText size={18} />,
    }
  ];

  return <SpotlightProvider
  actions={actions}
  searchIcon={<Search size={18} />}
  searchPlaceholder="Buscar..."
  limit={100}
  shortcut="mod + shift + 1"
  // nothingFoundMessage="No se encontro nada..." actionsWrapperComponent={ActionsWrapper}
  styles={{
    actions: {
      height: "300px",
      overflow: "auto",

    }
  }}
  onQueryChange={(query) => console.log(query)}
>
    {children}
  </SpotlightProvider>
}