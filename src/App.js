import React from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './Components/main';
import {Link} from 'react-router-dom';


function App() {
  return (
    <div className="demo-big-content">
    <Layout>
        <Header className="header-color" title="Zobeda Dewan" scroll>
            <Navigation>
                <Link to= "/about">About</Link>
                <Link to="/resume">Resume</Link>
                <Link to= "/jobexperience">Jobexperience</Link>
                <Link to= "/project">Project</Link>
                <Link to ="/contact">Contact</Link>
            </Navigation>
        </Header>
        <Drawer title="Zobeda Dewan">
            <Navigation>
                <Link to= "/about">About</Link>
                <Link to="/resume">Resume</Link>
                <Link to= "/jobexperience">Jobexperience</Link>
                <Link to= "/project">Project</Link>
                <Link to ="/contact">Contact</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
</div>
  );
}

export default App;
