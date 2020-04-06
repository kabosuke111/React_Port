
import React, {Component, Fragment} from 'react';
import {useSpring, animated, config} from 'react-spring';
import { useDispatch, useSelector } from "react-redux";

const Navigation: React.FC = () => {

    return (
        <nav id="l-navigation">
            <ul className="navi-ul">
                <li className="navi-item"><a>DEPRESSION</a></li>
                <li className="navi-item"><a>DOOM</a></li>
            </ul>
        </nav>
    )
}

export default Navigation;