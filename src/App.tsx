import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import './css/App.css';
import Header from './components/Header';
import TopContainer from './components/top/TopContainer'
import State from './store';

interface OwnProps {
  site_title: string;
}

const App:React.FC = () => {
  const dispatch = useDispatch();
  const selector = useSelector((state: OwnProps) => state);

  const [values, valueAct] = useState<OwnProps>({
    site_title: 'DEPRESSION',
  });

  return (
    <React.Fragment>
      <Header site_title={selector.site_title} />
      <TopContainer />
    </React.Fragment>
  );
}

export default App;
