import React from 'react';
import {useSpring, useTrail, animated, config} from 'react-spring';

interface Animation {
    o:number;
    from: {o:number};
}

interface LocalValue {
    origin_title: string;
    change_title: string;
    slice_text: Array<string>;
}

const DepressionMain = () => {

    return (
        <section className="l-depression-container">
            <div className="l-depression-article_box">

            </div>
        </section>
    );
}

export default DepressionMain;