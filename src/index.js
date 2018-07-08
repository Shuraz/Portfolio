import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import ContactMe from './ContactMe';
import AboutMe from './AboutMe';
import Home from './Home';
import News from './components/news/News';
import Portfolio from './components/portfolio/portfolio'
import ImageGallary from './ImageGallary'

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
