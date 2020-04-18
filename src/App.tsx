import React, {useState} from 'react';
import {useTransition,animated, config} from 'react-spring';
import {useSelector, useDispatch} from 'react-redux';
import './css/App.css';
import Header from './components/Header';
import TopContainer from './components/top/TopContainer';
import DepressionContainer from './components/page_depression/DepressionContainer';
import State from './store';
import { BrowserRouter as Router, Route, RouteComponentProps } from "react-router-dom";

interface OwnProps {
  site_title: string;
  
}

interface localProps {
  title: string;
}

//ページ遷移後、ページ最上部に。
const WINDOW_TOP = () => {
  window.scrollTo(0, 0)
  return null;
}
const CreatePage = (props: localProps) => {
  const dispatch = useDispatch();
  const selector = useSelector((state: OwnProps) => state);

  const [toggle, toggleSet] = useState(props.title);

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
      <animated.div style={props}>
        <WINDOW_TOP />
        <Header site_title={selector.site_title} top={165} left={50} translates={-50} colors="#6b6b6b" frags="top" />
        <TopContainer />
      </animated.div>:<div></div>
    ))}
    {transitions.map(({item, key, props}) => (
      item == "depression" ?
      <animated.div style={props}>
        <WINDOW_TOP />
        <Header site_title={selector.site_title} top={10} left={3} translates={0} colors="#fff" frags="article" />
        <DepressionContainer />
      </animated.div>:<div></div>
    ))}
  </div>)
}

const App:React.FC = () => {
  
  return (
    <React.Fragment>
      <Router>
        <Route exact path="/" render={() => <CreatePage title="top" />} ></Route>
        <Route path="/depression/"  render={() => <CreatePage title="depression" />} ></Route>
      </Router>
    </React.Fragment>
  );
}

export default App;