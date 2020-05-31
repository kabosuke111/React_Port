import React, {useState} from 'react';
import {useTransition,animated, config} from 'react-spring';
import './css/App.css';
import Header from './components/Header';
import TopContainer from './components/top/TopContainer';
import PageContainer from './components/page/PageContainer';
import { HashRouter as Router, Route, HashRouter } from "react-router-dom";
import {useDispatch,useSelector} from 'react-redux';
import {RootState} from './store';
import {ChangeTop, ChangeDepression, ChangeDisaster} from './store/PageAction/actions';

interface localProps {
  title: string;
}

//ページ遷移後、ページ最上部に。
const WINDOW_TOP = () => {
  window.scrollTo(0, 0)
  return null;
}

const CreatePage = (props: localProps) => {
  const selector = useSelector((state: RootState) => state.page_action);
  const dispatch = useDispatch();
  const change_to_toppage = () => dispatch(ChangeTop());
  const change_to_depression_page = () => dispatch(ChangeDepression());
  const change_to_disaster_page = () => dispatch(ChangeDisaster());

  const [toggle] = useState(props.title);

  const transitions = useTransition(toggle, null, {
    config: config.slow,
    from: { opacity: 0, },
    enter: { opacity: 1, },
    leave: { opacity: 0, },
  });

  return (
    <div>
      
      {transitions.map(({item, key, props}) => (
      item == "top" ?
        <animated.div style={props} onLoad={change_to_toppage}>
          <WINDOW_TOP />
          <Header site_title="GREY" top={165} left={50} translates={-50} colors="#6b6b6b" frags="top" />
          <TopContainer site_title="GREY" />
        </animated.div>:<div></div>
      ))}
      {transitions.map(({item, key, props}) => (
        item == "depression" ?
        <animated.div style={props} onLoad={change_to_depression_page}>
          <WINDOW_TOP />
          <Header site_title="GREY" top={10} left={3} translates={0} colors="#fff" frags="article" />
          <PageContainer site_title="GREY" />
          <p className="ppp">{selector.page_name}</p>
        </animated.div>:<div></div>
      ))}
      {transitions.map(({item, key, props}) => (
        item == "disaster" ?
        <animated.div style={props} onLoad={change_to_disaster_page}>
          <WINDOW_TOP />
          <Header site_title="GREY" top={10} left={3} translates={0} colors="#fff" frags="article" />
          <PageContainer site_title="GREY" />
          <p className="ppp">{selector.page_name}</p>
        </animated.div>:<div></div>
      ))}
    </div>
  )
}

const App:React.FC = () => {

  return (
    <div>
      <HashRouter>
        <Router>
          <Route exact path="/" render={() => <CreatePage title="top" />} ></Route>
          <Route path="/depression/"  render={() => <CreatePage title="depression" />}></Route>
          <Route path="/disaster/"  render={() => <CreatePage title="disaster" />}></Route>
        </Router>
      </HashRouter>
    </div>
  );
}

export default App;