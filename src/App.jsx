import React from 'react'
import { BrowserRouter, Route } from "react-router-dom";

import Index from './pages/Index';
import Career from './pages/Career';

import Footer from './components/molecules/Footer';

export default function App() {
  return (
    <BrowserRouter>
      <Route exact strict path='/' render={() => <Index />} />
      <Route exact strict path='/carrera/:name' render={() => <Career />} />
      <Footer />
    </BrowserRouter>
  )
}
