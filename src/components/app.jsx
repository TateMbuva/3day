import React from 'react';
import {
  App,
  Panel,
  Views,
  View,
  Statusbar,
  Popup,
  Page,
  Navbar,
  Toolbar,
  NavRight,
  Link,
  Block,
  BlockTitle,
  LoginScreen,
  LoginScreenTitle,
  List,
  ListItem,
  ListInput,
  ListButton,
  BlockFooter
} from 'framework7-react';

import cordovaApp from '../js/cordova-app';
import routes from '../js/routes';

export default class extends React.Component {
  constructor() {
    super();

    this.state = {
      // Framework7 Parameters
      f7params: {
        id: 'io.framework7.stanbic', // App bundle ID
        name: 'stanbic-mobile', // App name
        theme: 'auto', // Automatic theme detection
        // App root data
        data: function () {
          return {
            user: {
              firstName: 'Tate',
              lastName: 'Mbuva',
              balance: '243.50',
            },
            // Payment History
            payments: [
                {
                    to: 'Trevor Munyanyi (EazyElectronics)',
                    datetime: '11 April, 15:35',
                    comment: 'Bluetooth speaker purchase, JBL-Zf290k...',
                    subtitle: '$89.99 successfully paid',
                },
                {
                    to: 'Chinken Inn (Avondale)',
                    datetime: '1 April, 13:15',
                    comment: 'Lunch...',
                    subtitle: '$25.00 successfully paid',
                },
                {
                    to: 'Shingirirai Bishi',
                    datetime: '27 March, 08:00',
                    comment: 'Debt repayment...',
                    subtitle: '$12.00 successfully paid',
                },
                {
                    to: 'OK Supermarket (Marimba)',
                    datetime: '23 March, 12.48',
                    comment: '...',
                    subtitle: '$50.00 successfully paid',
                },
                {
                    to: 'Mrs. J. Mbeva (RotoRealEstate)',
                    datetime: '1 March, 09:00',
                    comment: 'Rent payment...',
                    subtitle: '$235.00 successfully paid',
                },
            ],

          };
        },

        // App routes
        routes: routes,

        // Input settings
        input: {
          scrollIntoViewOnFocus: this.$device.cordova && !this.$device.electron,
          scrollIntoViewCentered: this.$device.cordova && !this.$device.electron,
        },
        // Cordova Statusbar settings
        statusbar: {
          overlay: this.$device.cordova && this.$device.ios || 'auto',
          iosOverlaysWebView: true,
          androidOverlaysWebView: false,
        },
      },
      // Login screen demo data
      username: '',
      password: '',
    }
  }
  render() {
    return (
      <App params={ this.state.f7params }>
        {/* Status bar overlay for fullscreen mode*/}
        <Statusbar></Statusbar>


        {/* Views/Tabs container */}
        <Views tabs className="safe-areas">
          {/* Tabbar for switching views-tabs */}
          <Toolbar tabbar labels bottom>
            <Link tabLink="#view-home" tabLinkActive iconMd="material:payment" text="Pay" />
            <Link tabLink="#view-history" iconMd="material:history" text="History" />
            <Link tabLink="#view-deposit" iconMd="material:receipt" text="Deposit" />
            <Link tabLink="#view-about"  iconMd="material:info" text="About" />
          </Toolbar>

          {/* Sign In View */}
          <View id="view-signIn" name="signIn" tab url="/" />

          {/* Sign Up View */}
          <View id="view-signIn" name="history" tab url="/signUp/" />

          {/* Your main view/tab, should have "view-main" class. It also has "tabActive" prop */}
          <View id="view-pay" main tab tabActive url="/pay/" />

          {/* History View */}
          <View id="view-history" name="history" tab url="/history/" />

           {/* History View */}
          <View id="view-deposit" name="history" tab url="/deposit/" />

           {/* History View */}
          <View id="view-about" name="about" tab url="/about/" />


        </Views>


      </App>
    )
  }
  alertLoginData() {
    this.$f7.dialog.alert('Username: ' + this.state.username + '<br>Password: ' + this.state.password);
  }
  componentDidMount() {
    this.$f7ready((f7) => {
      // Init cordova APIs (see cordova-app.js)
      if (f7.device.cordova) {
        cordovaApp.init(f7);
      }
      // Call F7 APIs here
    });
  }
}