import React from 'react';
import TopHeader from './main_compo/TopHeader';
import TopMain from './main_compo/TopMain';
import Footer from '../Footer';

const TopContainer = () => {
    return (
        <main id="l-main" className="top">
            <TopHeader />
            <TopMain />
            <Footer />
        </main>
    );
}

export default TopContainer;