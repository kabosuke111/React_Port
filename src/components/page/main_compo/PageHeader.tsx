import React from 'react';
import Image from '../../../images/depression_main_image.jpg';
//import {PageData} from '../../../store/PageData';
import {useSelector} from 'react-redux';
import {RootState} from '../../../store';



const PageHeader = () => {
    const selector = useSelector((state: RootState) => state.page_action);

    return (
        <header className="l-page-header">
            <h2 className="main_contents-title"><span>{selector.page_name}</span><span>{selector.page_japanese_title}</span></h2>
            <img className="main_contents-image" src={Image} alt="悲しい事件" />
            <p className="main_contents-caption main_section-caption">
                辛く悲しい事件を揃えています。<br />
                ご冥福をお祈りします。
            </p>
        </header>
    );
}

export default PageHeader;