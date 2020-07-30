import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Navigation, Footer } from './components';
import { Contact, Home, Projects } from './views';
import styles from './App.module.css';

const Links = [
  {
    name: 'Home',
    link: '/',
  },
  {
    name: 'Projects',
    link: '/projects',
  },
  {
    name: 'Contact',
    link: '/contact',
  },
];

const App = () => {
  return (
    <Router>
      <Navigation Links={Links} />
      {/* 
				<FixedNavigation /> A <Switch> looks through its children <Route>s and
                  renders the first one that matches the current URL. */}
      <div className={styles.container}>
        <Switch className={styles.content}>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
      <Footer />
    </Router>
  );
};
export default App;
