import React from 'react';
import Navigation from './Navigation';
import {useSpring, animated, config} from 'react-spring';
import { Link } from "react-router-dom";

interface OwnProps {
  site_title: string;
  top: number;
  left: number;
  translates: number;
  colors: string;
  frags: string;
}

interface statusSet {
  top: number;
  left: number;
  transX: number;
  color: string;
}

function Header(props: OwnProps) {
  const status: statusSet = {
    top: props.frags == "top" ? 10 : 165,
    left: props.frags == "top" ? 3 : 50,
    transX: props.frags == "top" ? 0 : -50,
    color: props.frags == "top" ? "#fff" : "#6b6b6b",
  }

  const spring_anim = useSpring({
    config: config.slow,
    top: `${props.top}px`,
    left: `${props.left}%`,
    transform: `translateX(${props.translates}%)`,
    color: `${props.colors}`,
    from: {top: `${status.top}px`, left: `${status.left}%`, transform: `translateX(${status.transX}%)`, color: `${status.color}`}
  });

  return (
    <header id="l-header">
      <Navigation />
      <Link to="/">
        <animated.h1 className="top-header_title" style={{...spring_anim}}>{props.site_title}</animated.h1>
      </Link>
    </header>
  );
}

export default Header;