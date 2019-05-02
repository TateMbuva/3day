import React from 'react';
import {
    Page,
    Navbar,
    NavLeft,
    NavRight,
    Icon,
    BlockTitle,
    Block,
    Row,
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
      <Page name="deposit">
        <Navbar>
          <NavLeft>
            <Icon
              style={{
                marginLeft: 16,
                fontSize: 22,
                color: "#0000008a"
              }}
              material="account_box"
            />
            <span
              style={{
                fontSize: 14,
                marginLeft: 2,
                color: "#0000008a"
              }}
            >
              {this.state.user.firstName + " " + this.state.user.lastName}
            </span>
          </NavLeft>
          <NavRight>
            <Icon
              style={{
                marginRight: 2,
                fontSize: 20,
                color: "#007aff"
              }}
              material="account_balance_wallet"
            />
            <span
              style={{
                fontSize: 24,
                fontWeight: "500",
                marginRight: 16,
                color: "#007aff"
              }}
            >
              ${this.state.user.balance}
            </span>
          </NavRight>
        </Navbar>
        <Block
          strong
          style={{
            marginLeft: 0,
            marginRight: 0,
            marginTop: 15,
            marginBottom: 15,
            textAlign: "left"
          }}
        >
          <BlockTitle
            style={{
              marginLeft: "5%",
              marginRight: 0,
              marginTop: 0,
              marginBottom: 0,
              textAlign: "left"
            }}
          >
            Deposit Infomation
          </BlockTitle>
        </Block>
        <List
          noHairlinesMd
          style={{
            marginTop: 10,
          }}
        >
          <ListInput
            style={{ width: "90%", margin: "0 auto" }}
            label="Account Name"
            type="text"
            placeholder="Acc Name"
          />

          <ListInput
            style={{ width: "90%", margin: "0 auto" }}
            label="Account Number"
            type="text"
            placeholder="Acc Number"
          />

          <ListInput
            style={{ width: "90%", margin: "0 auto" }}
            label="Amount"
            type="number"
            placeholder="Amount"
          />

          <ListInput
            style={{ width: "90%", margin: "0 auto" }}
            type="textarea"
            label="Comment"
            placeholder="Comment"
            resizable
          />
        </List>

        <Block strong>
          <Row tag="p">
            <Button
              className="col"
              style={{ width: "80%", margin: "0 auto" }}
              fill
            >
              Deposit
            </Button>
          </Row>
        </Block>
      </Page>
    );
  }
}