import React from 'react';
import {
  Page,
  Navbar,
  List,
  ListInput,
  BlockTitle,
  Button,
 
} from 'framework7-react';
import Framework7 from 'framework7';


export default class extends React.Component{
    constructor(){
        super();
        this.state={
            name:'',
            password:""
           
        }
    }
    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
      };

      SubmitIt = e => {
       /// we gonna  store all this in local storage 🚋

       
      };
    

    render(){
        return(
            <Page name="form">
              <Navbar title="Sign In" backLink="Back"></Navbar>
          
              <BlockTitle>Sign UP</BlockTitle>
              <List noHairlinesMd>
                <ListInput
                  label="Name"
                  value={this.state.name}
                  onChange={this.onChange}
                  type="text"
                  placeholder="Your name"
                ></ListInput>
      
              <ListInput
                  label="Password"
                  type="password"
                  onChange={this.onChange}
                  value={this.state.password}
                  placeholder="Password"
                ></ListInput>
          
                <Button className="col" onClick={this.SubmitIt} small round outline>Sign Ip</Button>
          
                </List>
            </Page>
          );
    }
}


//var myapp   = new Framework7();
