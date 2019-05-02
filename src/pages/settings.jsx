import React from "react";
import {
  Page,
  Navbar,
  List,
  ListInput,
  ListItem,
  Toggle,
  BlockTitle,
  Row,
  Button,
  Range,
  Block
} from "framework7-react";

export default () => (
  <Page name="settings">
    <Navbar title="Deposit" />

    <BlockTitle style={{ textAlign:"center", fontSize: 20, }}>
      Deposit Form
    </BlockTitle>
    <List noHairlinesMd>
      <ListInput
        style={{ width: "90%", margin: "0 auto",}}
        label="Account Name"
        type="text"
        placeholder="Acc Name"
      />

      <ListInput
        style={{ width: "90%", margin: "0 auto",}}
        label="Account Number"
        type="text"
        placeholder="Acc Number"
      />

      <ListInput
        style={{ width: "90%", margin: "0 auto",}}
        label="Amount"
        type="number"
        placeholder="Amount"
      />

      <ListInput
        style={{ width: "90%", margin: "0 auto",}}
        type="textarea"
        label="Comment"
        placeholder="Comment"
        resizable
      />
    </List>

    <Block strong>
      <Row tag="p">
        <Button className="col" style={{ width: "70%", margin: "0 auto" }} fill>
          Deposit
        </Button>
      </Row>
    </Block>
  </Page>
);
