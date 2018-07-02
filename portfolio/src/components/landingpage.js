import React, { Component } from 'react';
import {Grid,Cell} from 'react-mdl';
import i from './ceo.jpg';
class Landing extends Component{
    render(){
        return(
          <div style={{width: '100%', margin: 'auto'}}>  
           <Grid className="landing-grid">
           <Cell col={12}></Cell>
            <img 
            src={i}
            alt="avator"
           className ="avator-img"
            />  
            <div className="banner-text">
            <h1> Syed Murtza </h1>
            <h2> Full Stack Web Developer  </h2>
            <hr/>
            <p>HTML/CSS | Javascript | Bootstrap | React | React-Native | Ruby | Python</p>
            <div className="social-links">
            <a href="http://linkedin.com" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-linkedin-square" aria-hidden="true" />
                </a>
                <a href="http://youtube.com" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-youtube-square" aria-hidden="true" />
                </a>
                <a href="http://facebook.com" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-facebook-square" aria-hidden="true" />
                </a>
                <a href="http://github.com" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-github-square" aria-hidden="true" />
                </a>
                <a href="http://twitter.com" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-twitter-square" aria-hidden="true" />
                </a>
              
                </div>
            </div>
           </Grid>
          </div>
        )
    }
}

export default Landing;