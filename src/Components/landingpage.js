import React, {Component} from 'react';
import { Grid, Cell } from 'react-mdl';

class Landing extends Component{
    render(){
        return (
            <div style={{width:'100%', margin:'auto' }}>
                <Grid className= "landing-grid">
                    <Cell col={12}>
                       <img src="https://miro.medium.com/max/525/1*lyyXmbeoK5JiIBNCnzzjjg.png" alt="Avatar" className="avatar-img" />                  
                       <div className="banner-text">
                           <h1>Web Developer</h1>
                           <hr/>
                           <p>HTML/CSS | Bootstrap | JavaScript | React | NodeJS | Express | MongoDB</p>
                            <div className="social-links">
                            {/* LinkedIn */}
                            <a href="http://www.linkedin.com/in/zobeda-dewan" rel="noopener noreferrer" target="_blank">
                            <i class="fa fa-linkedin-square" aria-hidden="true"></i>
                            </a>

                            {/* Github */}
                            <a href="http://https://github.com/zobedadewan" rel="noopener noreferrer" target="_blank">
                            <i class="fa fa-github" aria-hidden="true"></i>
                            </a>

                            {/* Youtube */}
                            <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                            <i class="fa fa-youtube" aria-hidden="true"></i>
                            </a>
                       </div>
                       </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}
export default Landing;