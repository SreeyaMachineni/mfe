import React from 'react'
import {StylesProvider} from '@material-ui/core/styles'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Landing from './components/Landing'
import Pricing from './components/Pricing'

const App = () => {
    return <div>
        <StylesProvider>
        <BrowserRouter>
      <Routes>
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/" element={<Landing />} />
      </Routes>
    </BrowserRouter>
        </StylesProvider>
    </div>
}

export default App