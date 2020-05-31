import React from 'react';
import TopHeader from './main_compo/TopHeader';
import TopMain from './main_compo/TopMain';
import Footer from '../Footer';

interface OwnProps {
    site_title: string;
  }

const TopContainer = (props: OwnProps) => {
    return (
        <main id="l-main" className="top">
            <TopHeader />
            <TopMain />
            <Footer site_title={props.site_title} />
        </main>
    );
}

export default TopContainer;