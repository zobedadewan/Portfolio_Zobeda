import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import LandingPage from './landingpage';
import Resume from './resume';
import Jobexperience from './jobexperience';
import About from './aboutme';
import Contact from './contactme';
import Project from './project';

const Main = () => (
    <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/resume" component={Resume} />
        <Route path="/about" component={About} />
        <Route path="/project" component={Project} />
        <Route path="/contact" component={Contact}/>
        <Route path="/jobexperience" component={Jobexperience}/>
    </Switch>
) 
export default Main;

