import { useCallback, useEffect, useState } from '@lynx-js/react'
import { MemoryRouter, Routes, Route } from 'react-router'
import { useNavigate } from 'react-router'
import { Bruh } from './screens/Bruh.tsx'
import { Home } from './screens/Home/Home.tsx'

function App() {
    return (
    <MemoryRouter>
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/Bruh' element={<Home />}/>
            </Routes>
    </MemoryRouter>
    )
}
export default App;
