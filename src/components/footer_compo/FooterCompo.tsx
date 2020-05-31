import React from 'react';
interface OwnProps {
  site_title: string;
}

function FooterCompo(props: OwnProps) {

  return (
    <footer id="l-footer">
      <h1 className="top-footer_title">{props.site_title}</h1>
    </footer>
  );
}

  export default FooterCompo;