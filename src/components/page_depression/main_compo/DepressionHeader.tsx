import React from 'react';
import Image from '../../../images/depression_main_image.jpg';

const DepressionHeader = () => {
    return (
        <header className="l-depression-header">
            <h2 className="main_contents-title">悲しい事件</h2>
            <img className="main_contents-image" src={Image} alt="悲しい事件" />
            <p className="main_section-caption">
                辛く悲しい事件を揃えています。<br />
                ご冥福をお祈りします。
            </p>
        </header>
    );
}

export default DepressionHeader;