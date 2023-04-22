import React from 'react';
import { Routes, Route } from "react-router-dom"

import Home from './pages/Home/Home';
import Logement from './pages/Logement/Logement';
import Propos from './pages/Propos/Propos';
import Error from './pages/Error/Error';
import Layout from './pages/Layout';

const Router = () => {
    return (
        <Routes>

            <Route element={<Layout />} >

                {/* définie page par default*/}
                <Route index element={<Home />} />

                <Route path='/home' element={<Home />} />
                <Route path='/logement/:id' element={<Logement />} />
                <Route path='/propos' element={<Propos />} />

                {/*si trouve pas execute cette route*/}
                <Route path='*' element={<Error />} />

            </Route>

        </Routes>
    );
};

export default Router;