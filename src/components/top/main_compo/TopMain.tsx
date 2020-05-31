import React from 'react';
import {useTrail, animated, config} from 'react-spring';
import { Link } from "react-router-dom";

//このコンポーネントのみで使う
interface LocalValue {
    origin_title: string;
    change_title: string;
    slice_text: Array<string>;
}

const TopMain = () => {

    //記事の内容をここに書く。ループ処理で一気に表示する。
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

    //localvalueを初期化
    const local_value: LocalValue = {
        origin_title: "CONTENTS",
        change_title: "",
        slice_text: [],
    }

    //アニメーション処理のため、メインタイトルを分割する。
    for(let i = 0; i < local_value.origin_title.length; i++) {
        local_value.change_title = local_value.origin_title.slice(i, i+1);
        local_value.slice_text.push(local_value.change_title);
    }

    //トレイルアニメーション
    const trail_anim = useTrail(local_value.slice_text.length, {
        config: config.slow,
        display: "inline-block",
        opacity: 1,
        transform : `translateY(0em)`,
        from: {opacity: 0, transform : `translateY(1em)`}
    });
    //----------------ここまで----------------

    //クラス名に変数を入れる処理
    const names = function(name: string) {
        return 'top-article_item ' + name;
    }

    const linkNames = function(name: string) {
        return `/${name}/`;
    }

    return (
        <section className="l-top-container">
            <h2 className="top-section_title">{trail_anim.map((value,index)=>(
                <animated.span className="top-section_title-text" style={{...value}}>
                    {local_value.slice_text[index]}
                </animated.span>
            ))}</h2>
            <div className="l-top-article_box">
                {Articles.map((value,index:number)=>(
                    <Link to={linkNames(value.classnames)} className={names(value.classnames)}>
                        <article className="main_section">
                            <h3 className="main_section-title"><span className="main_section-title_inner">{value.title}</span></h3>
                            <p className="main_section-caption">{value.text}</p>
                        </article>
                    </Link>
                ))}
            </div>
            
        </section>
    );
}

export default TopMain;