import React from 'react';
import Nav from './components/Nav'
import TittleAndDescription from './components/TittleAndDescription';
import Filter from './components/Filters'
import Product from './components/Product'
import './App.css'

const App = () => {
    return (
        <>
            <Nav />
            <TittleAndDescription />
            <Filter/>
            <Product/>
        </>
    );
}

export default App;
