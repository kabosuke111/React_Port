import React from 'react';

const TopMain = () => {

    const Articles = [
        {
            classnames: 'depression' ,
            title: '悲しい事件',
            text: (<React.Fragment>凄惨な殺人事件や恐ろしいテロ事件が<br />毎日のように起きていますね。</React.Fragment>),
        },
        {
            classnames: 'disaster' ,
            title: '災害',
            text: (<React.Fragment>多くの人々を殺してしまうことが<br />できるのが災害の特徴です。</React.Fragment>),
        },
        {
            classnames: 'doom' ,
            title: '絶望的な人生',
            text: (<React.Fragment>この先どれだけ生きていても<br />きっと幸せにはなれないでしょう。</React.Fragment>),
        },
        {
            classnames: 'hideous' ,
            title: 'おぞましい',
            text: (<React.Fragment>人の行いとは思えないほど<br />残虐非道な数々があります。</React.Fragment>),
        }
    ]

    const names = function(name: string) {
        return 'top-article_item ' + name;
    }

    return (
        <section className="l-top-container">
            <h2 className="top-section_title">CONTENTS</h2>
            <div className="l-top-article_box">
                {Articles.map((value,index:number)=>(
                    <article className={names(value.classnames)}>
                        <h3 className="main_section-title"><span className="main_section-title_inner">{value.title}</span></h3>
                        <p className="main_section-caption">{value.text}</p>
                    </article>
                ))

                }
            </div>
        </section>
    );
}

export default TopMain;