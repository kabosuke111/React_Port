
import React, {Component, Fragment, useState} from 'react';
import {useSpring, animated, config} from 'react-spring';
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navigation: React.FC = () => {
    const [state, stateAct] = useState({
        classnames: "",
    });


    const [booleans, boolAct] = useState(true);

    const classname_toggle = () => {
        boolAct(!booleans);

        if(booleans){
            stateAct({classnames: "is-navigation_open"})
        } else {
            stateAct({classnames: ""})
        }
        return state;
    }

    const Urls = [
        {
            url_name: '/',
            names: "TOP",
        },
        {
            url_name: '/depression/',
            names: "DEPRESSION"
        },
        {
            url_name: '/disaster/',
            names: "DISASTER"
        },
        {
            url_name: '/doom/',
            names: "DOOM"
        },
        {
            url_name: '/hideous/',
            names: "HIDEOUS",
        },
    ]

    return (
        <React.Fragment>
            <nav id="l-navigation" className={state.classnames}>
                <div className="hamburger-menu" onClick={()=>classname_toggle()}>
                   <span className="hamburger-line"></span><span className="hamburger-line"></span><span className="hamburger-line"></span>
                </div>
                <ul className="navi-ul">
                    {Urls.map((value,index)=>(
                        <li className="navi-item"><Link to={value.url_name}  onClick={()=>classname_toggle()}>{value.names}</Link></li>
                    ))}
                </ul>
            </nav>
        </React.Fragment>
    )
}

export default Navigation;