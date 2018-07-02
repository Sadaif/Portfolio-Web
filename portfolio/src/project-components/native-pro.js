import React, { Component } from 'react';
import { Card,CardTitle,CardText ,CardActions,Button,CardMenu,IconButton } from 'react-mdl';
class NativePro extends Component {
    render(){
        return(
            <div className="projects-grid" >
                 
                 {/* Project #1 */}
                
                <Card shadow={5} style={{minWidth: '380px', margin: '9px'}}>
                <CardTitle style={{color: '#fff', height: '190px' , background:'url(https://www.jameelmukadam.com/wp-content/uploads/2017/10/reactnative.png) center / cover'}}>Project #1 "Digitalcru-WebSoft"</CardTitle>
                <CardText>
                <p>Digitalcru software house or company whose primary products are various forms of software, software technology, distribution,
                and software product development.Software houses are companies in the software industry.</p>  
                </CardText>
                <CardActions border>
                <Button colored>Github </Button>
                <Button colored>CodePen </Button>
                <Button colored>Live Demo </Button>
                </CardActions>
                <CardMenu style={{color : '#fff'}}>
                <IconButton name="share" />
                </CardMenu>
                </Card>

                {/* Project #2 */}

                <Card shadow={5} style={{minWidth: '380px', margin: '9px'}}>
                <CardTitle style={{color: '#fff', height: '190px' , background:'url(https://www.jameelmukadam.com/wp-content/uploads/2017/10/reactnative.png) center / cover'}}>Project #2 "Payload"</CardTitle>
                <CardText>
                <p>Digitalcru software house or company whose primary products are various forms of software, software technology, distribution,
                and software product development.Software houses are companies in the software industry.</p>  
                </CardText>
                <CardActions border>
                <Button colored>Github </Button>
                <Button colored>CodePen </Button>
                <Button colored>Live Demo </Button>
                </CardActions>
                <CardMenu style={{color : '#fff'}}>
                <IconButton name="share" />
                </CardMenu>
                </Card>


                {/* Project #3 */}

                <Card shadow={5} style={{minWidth: '380px', margin: '9px'}}>
                <CardTitle style={{color: '#fff', height: '190px' , background:'url(https://www.jameelmukadam.com/wp-content/uploads/2017/10/reactnative.png) center / cover'}}>Project #3 "Portfolio"</CardTitle>
                <CardText>
                <p>Digitalcru software house or company whose primary products are various forms of software, software technology, distribution,
                and software product development.Software houses are companies in the software industry.</p>  
                </CardText>
                <CardActions border>
                <Button colored>Github </Button>
                <Button colored>CodePen </Button>
                <Button colored>Live Demo </Button>
                </CardActions>
                <CardMenu style={{color : '#fff'}}>
                <IconButton name="share" />
                </CardMenu>
                </Card>
                </div>
        )
    }
}

export default NativePro;