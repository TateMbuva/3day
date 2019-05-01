import React from 'react';
import {
    Page,
    Navbar,
    NavLeft,
    Icon,
    BlockTitle,
    Block,
    Card,
    CardContent,
    CardHeader,
    Link
} from 'framework7-react';

export default class extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    };

  }
  render() {
    return (
      <Page name="pay">
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
                  }}>Tatenda Mbuvayesango</span>
              </NavLeft>
          </Navbar>
        <BlockTitle>Make A Payment</BlockTitle>
        <Card expandable>
          <CardContent padding={false}>
            <div className="bg-color-blue" style={{height: '300px'}}>
              <CardHeader textColor="white" className="display-block">
                New Payment
                <br />
                <small style={{opacity: 0.7}}>Make a new mobile money payment</small>
              </CardHeader>
              <Link cardClose color="white" className="card-opened-fade-in" style={{position: 'absolute', right: '15px', top: '15px'}} iconF7="close_round_fill" />
            </div>
            <div className="card-content-padding">
              <p>Framework7 - is a free and open source HTML mobile framework to develop hybrid mobile apps or web apps with iOS or Android (Material) native look and feel...</p>
            </div>
          </CardContent>
        </Card>
      </Page>
    );
  }
}