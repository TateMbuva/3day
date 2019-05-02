import React from 'react';
import {
    Page,
    Navbar,
    NavLeft,
    NavRight,
    Icon,
    BlockTitle,
    Block,
    Card,
    CardContent,
    CardHeader,
    Link,
    List,
    ListInput,
    Button
} from 'framework7-react';

export default class extends React.Component {
  constructor() {
    super();

    this.state = {
      user: this.$f7.data.user,
    }
  }
  render() {
    return (
      <Page name="about">
        <Navbar>
              <NavLeft>
                  <Icon style={{
                    marginLeft: 16,
                    fontSize: 22,
                    color: '#0000008a',
                  }} material="account_box"></Icon>
                  <span style={{
                    fontSize: 14,
                    marginLeft: 2,
                    color: '#0000008a',
                  }}>{this.state.user.firstName + " " + this.state.user.lastName}</span>
              </NavLeft>
              <NavRight>
                  <Icon style={{
                    marginRight: 2,
                    fontSize: 20,
                    color: '#007aff',
                  }} material="account_balance_wallet"></Icon>
                  <span style={{
                    fontSize: 12,
                    fontWeight: '500',
                    marginRight: 16,
                    color: '#007aff',
                  }}>${this.state.user.balance}</span>
              </NavRight>
          </Navbar>
        
      </Page>
    );
  }
}