import React from 'react';
import PageHeader from './main_compo/PageHeader';
import PageMain from './main_compo/PageMain';
import PageAside from './main_compo/PageAside';
import Footer from '../Footer';

interface OwnProps {
    site_title: string;
}

const PageContainer = (props: OwnProps) => {
    return (
        <main id="l-main" className="depression">
            <PageHeader />
            <PageMain />
            <PageAside />
            <Footer site_title={props.site_title}/>
        </main>
    );
}

export default PageContainer;