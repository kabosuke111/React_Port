import React from 'react';
import DepressionHeader from './main_compo/DepressionHeader';
import DepressionMain from './main_compo/DepressionMain';
import DepressionAside from './main_compo/DepressionAside';
import Footer from '../Footer';



const DepressionContainer = () => {
    return (
        <main id="l-main" className="depression">
            <DepressionHeader />
            <DepressionMain />
            <DepressionAside />
            <Footer />
        </main>
    );
}

export default DepressionContainer;