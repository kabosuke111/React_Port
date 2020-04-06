import React, { useState } from 'react';
import {connect} from 'react-redux';
import Header_Content from './page_depression/main_compo/Header_Anim';
import Navigation from './Navigation';
interface Props {
  site_title: string;
}

function Header(props: Props) {

  return (
    <header id="l-header">
      <Navigation />
    </header>
  );
}

connect()(Header);
  export default Header;

//  <Header_Content site_title={props.site_title} />