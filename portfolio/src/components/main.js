import React from 'react';
import {Switch ,Route} from 'react-router-dom';

import Landing from './landingpage';
import Contact from './contact';
 
import Project from './projects';
import Resume from './resume';


const Main = () => {
    return(
    <Switch>
        <Route exact path="/" component ={Landing} />
         
        <Route   path="/Contact" component ={Contact} />
        <Route   path="/Project" component ={Project} />
        <Route   path="/Resume" component ={Resume} />
        </Switch>
)
}

export default Main;