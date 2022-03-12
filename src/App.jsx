import React from 'react'
import { BrowserRouter, Route } from "react-router-dom";
import "./assets/index.css";

import Index from './pages/Index';
import Career from './pages/Career';

import Header from './components/molecules/Header2';
import Footer from './components/molecules/Footer2';
import ScrollToTop from './components/helper/ScrollToTop';
import { ModalProvider } from './components/helper/ModalContext';

export default function App() {
  return (
    <BrowserRouter>
    <ModalProvider>
        <Header />
        <ScrollToTop />
        <Route exact strict path='/' render={() => <Index />} />
        <Route exact strict path='/carrera/:name' render={() => <Career />} />
        <Footer />
    </ModalProvider>
      </BrowserRouter>
  )
}