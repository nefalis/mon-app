import React from 'react';
import { Routes, Route } from "react-router-dom"

import Home from './Home/Home';
import Logement from './Logement/Logement';
import Propos from './Propos/Propos';
import Error from './Error/Error';
import Layout from '../components/Layout';

const Router = () => {
    return (
        <Routes>

            <Route element={<Layout />} >

                {/* définie page par default*/}
                <Route index element={<Home />} />

                <Route path='/home' element={<Home />} />
                <Route path='/logement/:id' element={<Logement />} /> {/* logement.html?id=jfdhjggbbrtkvb*/}
                <Route path='/propos' element={<Propos />} />

                {/*si trouve pas execute cette route*/}
                <Route path='*' element={<Error />} />

            </Route>

        </Routes>
    );
};

export default Router;