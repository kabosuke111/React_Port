import React from 'react';
import FooterCompo from './footer_compo/FooterCompo';

interface OwnProps {
  site_title: string;
}

function Footer(props: OwnProps) {

  return (
    <footer id="l-footer">
      <FooterCompo site_title={props.site_title} />
    </footer>
  );
}

  export default Footer;