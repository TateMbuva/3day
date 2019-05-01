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
            phoneNumber:"",
            AccountNumber:"",
            password:"",
            CustomerNumber:""
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
              <Navbar title="Sign UP" backLink="Back"></Navbar>
          
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
                  label="Phone Number"
                  onChange={this.onChange}
                  value={this.state.phoneNumber}
                  type="tel"
                  placeholder="Phone Number"
                ></ListInput>
          
                
                <ListInput
                  label="Account Number"
                  onChange={this.onChange}
                  value={this.state.AccountNumber}
                  type="number"
                  placeholder="Account Number"
                ></ListInput>
                <ListInput
                label="Customer Number"
                onChange={this.onChange}
                value={this.state.CustomerNumber}
                type="number"
                placeholder="Customer Number"
              ></ListInput>
              <ListInput
                  label="Password"
                  type="password"
                  onChange={this.onChange}
                  value={this.state.password}
                  placeholder="Password"
                ></ListInput>
          
                <ListInput
                  label="Confirm Password"
                  onChange={this.onChange}
                  value={this.state.password2}
                  type="password"
                  placeholder="Confirm Password"
                ></ListInput>
                <Button className="col" onClick={this.SubmitIt} small round outline>Sign Up</Button>
          
                </List>
            </Page>
          );
    }
}


//var myapp   = new Framework7();
