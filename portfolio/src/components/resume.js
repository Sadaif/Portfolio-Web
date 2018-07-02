import React, { Component } from 'react';
import {Grid , Cell} from 'react-mdl';
import i from './ceo.jpg';
import Education from './Education';
import Experience from './Experience';
import Skills from './Skills';
class Resume extends Component{
    render(){
        return(
          <div> 
              <Grid>
                  <Cell col={4}> 
                  <div style={{textAlign: 'center'}}>
                  <div className="resume-img">
                  <img
                  src={i}
                  alt="avator"
                  style={{height: '200px'}}
                  />
                  </div>
                      </div>
                      <h2 style={{paddingTop: '2em'}}>Syed Murtza</h2>
                      <h4 style={{color: 'grey'}}>Sr. Backend Developer at Semaphore Mobile & TauSpace</h4>
                      <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}  />
                      <p>Experienced Senior Developer with a demonstrated history of working in the computer software industry. Skilled in Scala, Rust, Elixir, Python, Erlang, Java, Ruby, Akka, Apache Kafka, Apache Spark, Apache Storm, Apache Hadoop, Cassandra, Scylla, Riak, PostgreSQL, ElasticSearch, React.js, Haskell & TensorFlow. 
                      Strong engineering professional with a SUN Certified(1999) Java Programmer focused in Computer Science from 
                    University of Indianapolis. </p>
                    <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}  />
                    <h5>Address </h5>
                    <p> Lahore , Pakistan </p>
                    <h5>Contact</h5>
                    <p>+92 235667787</p>
                    <h5>Email</h5>
                    <p>Murtza@gmail.com</p>
                    <h5> Web </h5>
                    <p> SyedMurtza.com</p>
                    <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}  />
                  </Cell>
                  <Cell className="resume-right-col" col={8} >
                  <h1> Education </h1>
                  <Education 
                  startYear={2000}
                  endYear={2001}
                  schoolName="University of Indianapolis"
                  schoolDesc="The University of Indianapolis is a private, comprehensive institution of higher education founded in 1902, with a home campus of 5,400 students and partnership sites around the world. UIndy offers a strong liberal arts foundation along with cutting-edge business and professional preparation in a close-knit community that enjoys the opportunities and amenities of a major city."
                  />
                  <Education 
                  startYear={1999}
                  endYear={2001}
                  schoolName="COMSIT"
                  schoolDesc="Intermediate, Information Technology"
                 />
                 <hr style={{borderTop: '3px solid #e22947'}} />
                 <h2>Experience  </h2>
                 <Experience
                 startYear={2017}
                 endYear="Present"
                 jobName="Sr.Backend Developer"
                 jobDesc="TauSapce"
                 country="South Africa"
                 />

                  <Experience
                 startYear={2015}
                 endYear="Present"
                 jobName="Sr.Backend Developer"
                 jobDesc="Semaphore Mobile"
                 country="USA"
                 />

                  <Experience
                 startYear={2012}
                 endYear={2015}
                 jobName="Full Stack Developer"
                 jobDesc="TauSapce"
                 country="Australia"
                 />

                  <Experience
                 startYear={2010}
                 endYear={2012}
                 jobName="Full Stack Developer"
                 jobDesc="Fashion Space"
                 country="Singapore"
                 />

                 <Experience
                 startYear={2008}
                 endYear={2010}
                 jobName="Project Manager"
                 jobDesc="Pace Solution"
                 country="Pakistan"
                 />
                  <hr style={{borderTop: '3px solid #e22947'}} />
                  <h2>Skills</h2>
                  <Skills 
                  skill="Javascript"
                  progress={100}
                  />

                  <Skills 
                  skill="Ruby-on-Rails"
                  progress={80}
                  />

                   <Skills 
                  skill="Python"
                  progress={50}
                  />

                   </Cell>
                  </Grid>
          </div>
        )
    }
}

export default Resume;