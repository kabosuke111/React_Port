import React, {useState} from 'react';
import {useTransition,animated} from 'react-spring';
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

// const [toggle, set] = useState(false)
// const transitions = useTransition(toggle, null, {
// from: { position: 'absolute', opacity: 0 },
// enter: { opacity: 1 },
// leave: { opacity: 0 },
// })
// return transitions.map(({ item, key, props }) => 
// item
//   ? <animated.div style={props}>😄</animated.div>
//   : <animated.div style={props}>🤪</animated.div>
// )

const CreatePage = (props: localProps) => {
  const dispatch = useDispatch();
  const selector = useSelector((state: OwnProps) => state);
  switch(props.title){
    case "top":
      return (
          <React.Fragment>
            <WINDOW_TOP />
            <Header site_title={selector.site_title} top={165} left={50} translates={-50} colors="#6b6b6b" frags="top" />
            <TopContainer />
          </React.Fragment>
        );
    case "depression":
      return (
            <React.Fragment>
              <WINDOW_TOP />
              <Header site_title={selector.site_title} top={10} left={3} translates={0} colors="#fff" frags="article" />
              <DepressionContainer />
            </React.Fragment>
          );
    default:
      return (
        <React.Fragment>
          <WINDOW_TOP />
          <Header site_title={selector.site_title} top={165} left={50} translates={-50} colors="#6b6b6b" frags="top" />
          <TopContainer />
        </React.Fragment>
      );
  }
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