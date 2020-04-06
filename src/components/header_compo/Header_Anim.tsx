
import React, {Component, Fragment} from 'react';
import {useSpring, useTrail, animated, config} from 'react-spring';
import Image from './../../../images/depression_main_image.jpg';
import { useDispatch, useSelector } from "react-redux";
import { getDefaultNormalizer } from '@testing-library/react';

interface Props {
    site_title: string;
}

interface Animation {
    o:number;
    from: {o:number};
}

interface LocalValue {
    change_title: string;
    slice_text: Array<string>;
}

const Header_Content: React.FC<Props> = (props: Props) => {
    const local_value: LocalValue = {
        change_title: "",
        slice_text: [],
    }

    for(let i = 0; i < props.site_title.length; i++) {
        local_value.change_title = props.site_title.slice(i, i+1);
        local_value.slice_text.push(local_value.change_title);
    }

    //アニメーション
    const spring_anim = useSpring<Animation>({
        o: 1,
        from: {o: 0},
        config: {velocity: 0.2, duration: 2000},
    });



    const trail_anim = useTrail(local_value.slice_text.length, {
        config: config.slow,
        display: "inline-block",
        opacity: 1,
        transform : `translateY(0em)`,
        from: {opacity: 0, transform : `translateY(1em)`}
    });

    return (
        <div className="header_group">
            <h1 className="head_title">{trail_anim.map((value,index)=>(
                <animated.span className="head_title_text" style={{...value}}>
                    {local_value.slice_text[index]}
                </animated.span>
            ))}</h1>
            <figure className="header_image">
                <animated.img src={Image} alt="TOP" draggable="false" style={{
                    opacity: spring_anim.o.interpolate({
                        range: [0, 0.5, 0.6, 0.65, 0.7, 0.75,  1],
                        output: [0, 0.5, 0.1, 0.3, 0.1, 0.3, 1]
                    })}}/>
            </figure>
        </div>
    )
}

export default Header_Content;

