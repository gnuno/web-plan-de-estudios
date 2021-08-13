import React from 'react'
import { BrowserRouter, Route } from "react-router-dom";

import Index from './pages/Index'
import OverviewFlow from './pages/OverviewFlow'

export default function App() {
	return (
		<BrowserRouter>
			<Route exact strict path='/' render={ () => <Index /> } />
			<Route exact strict path='/carrera/:name' render={ () => <OverviewFlow /> } />
    </BrowserRouter>
	)
}
