import React, { Component } from 'react';
import {Tabs ,Tab   } from 'react-mdl';
import ReactPro from '../project-components/react-project';
import NativePro from '../project-components/native-pro';
import RubyPro from '../project-components/ruby-pro';
import PythonPro from '../project-components/python-pro';
 
class Project extends Component{
    constructor(props){
        super(props);
        this.state = { activeTab: 0 };
    }
    toggleCategories(){
        if(this.state.activeTab === 0){
            return(
                <ReactPro />
            )
        } else if(this.state.activeTab === 1){
            return(
                <NativePro />
            )
        }else if(this.state.activeTab === 2){
            return(
                 <RubyPro />
            )
        }else if(this.state.activeTab === 3){
            return(
                <PythonPro />
            )
        }
    }
    render(){
        return(
          <div className="category-tabs">
           <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple> 
           <Tab>React</Tab>
           <Tab>React-Native</Tab>
           <Tab>Ruby</Tab>
           <Tab>Python</Tab>
           </Tabs>
           <section className="projects-grid">
             {this.toggleCategories()}

               </section>
               </div>
        )
    }
}

export default Project;