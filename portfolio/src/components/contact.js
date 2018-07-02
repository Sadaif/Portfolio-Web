import React, { Component } from 'react';
import {Grid ,Cell ,List ,ListItem ,ListItemContent} from 'react-mdl';
import i from './ceo.jpg';
class Contact extends Component{
    render(){
        return(
          <div className="contact-body" >
          <Grid className="contact-grid">
          <Cell col={6}>
          <h2> Syed Murtza</h2>
          <img
          src={i}
          alt="avator"
          style={{height: '250px'}}
          />
          <p style={{width: '75%' , margin: 'auto' , paddingTop: 'lem' }}>
          Experienced Senior Developer with a demonstrated history of working in the computer software industry. <hr /> Lahore, Pakistan </p>
          </Cell>
          <Cell col={6}>
          <h2>Contact Me</h2>
          <hr />
    
           <div className="contact-list">
           <List>
            <ListItem>
                <ListItemContent style={{fontSize: '30px' , fontFamily: 'Antom'}} >
                <i className="fa fa-phone-square" aria-hidden="true" />
                +92 235667787
                </ListItemContent>
            </ListItem>

             <ListItem>
                <ListItemContent style={{fontSize: '30px' , fontFamily: 'Antom'}} >
                <i className="fa fa-fax" aria-hidden="true" />
                +92 235667787
                </ListItemContent>
            </ListItem>
            <ListItem>
                <ListItemContent style={{fontSize: '25px' , fontFamily: 'Antom'}} >
                <i className="fa fa-envelope" aria-hidden="true" />
                Murtza@gmail.com
                </ListItemContent>
            </ListItem>
            <ListItem>
                <ListItemContent style={{fontSize: '30px' , fontFamily: 'Antom'}} >
                <i className="fa fa-skype" aria-hidden="true" />
                Syed Murtza
                </ListItemContent>
            </ListItem>

             
            </List>
               </div>
          </Cell>

              </Grid>  

          </div>
        )
    }
}

export default Contact;