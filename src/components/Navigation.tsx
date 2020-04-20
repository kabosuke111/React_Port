
import React, {useState, useRef} from 'react';
import {useTrail, animated, useChain, useSpring} from 'react-spring';
import { Link } from "react-router-dom";

const Navigation: React.FC = () => {
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

    const [booleans, boolAct] = useState(false);

    const spring = useSpring({
        delay: 0,
        width: booleans ? `100vw` : `0vw`,
        height: booleans ? `100vh` : `0vh`,
    });

    const trails = useTrail(Urls.length, {
        delay: booleans ? 800 : 0,
        transform: booleans ? `translateX(-50%)` : `translateX(0%)`,
        opacity: booleans ? 1 : 0,
    });

    //ハンバーガーメニュー
    const line_spring_L = useSpring({
        transform: booleans ? `rotate(45deg)` : `rotate(0deg)`,
        width: booleans ? `40px` : `44px`,
        top: booleans ? `10px` : `0px`,
    });

    const line_spring_C = useSpring({
        transform: booleans ? `rotate(-45deg)` : `rotate(0deg)`,
        width: booleans ? `40px` : `20px`,
        top: booleans ? `10px` : `12px`,
    });

    const line_spring_R = useSpring({
        transform: booleans ? `rotate(-45deg)` : `rotate(0deg)`,
        width: booleans ? `40px` : `32px`,
        top: booleans ? `10px` : `22px`,
    });

    return (
        <React.Fragment>
            <animated.nav id="l-navigation" style={spring}>
                <div className="hamburger-menu" onClick={()=>boolAct(!booleans)}>
                   <animated.span className="hamburger-line" style={line_spring_L}></animated.span>
                   <animated.span className="hamburger-line" style={line_spring_C}></animated.span>
                   <animated.span className="hamburger-line" style={line_spring_R}></animated.span>
                </div>
                <animated.ul className="navi-ul">
                    {trails.map((key, index)=>(
                        <animated.li className="navi-item" style={{...key}}><Link to={Urls[index].url_name}  onClick={()=>boolAct(!booleans)}>{Urls[index].names}</Link></animated.li>
                    ))}
                </animated.ul>
            </animated.nav>
        </React.Fragment>
    )
}

export default Navigation;