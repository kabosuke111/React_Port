import React, { useState } from 'react';
import {connect} from 'react-redux';
import FooterCompo from './footer_compo/FooterCompo';


function Footer() {

  return (
    <footer id="l-footer">
      <FooterCompo />
    </footer>
  );
}

  export default Footer;