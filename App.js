import React, {Component} from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';
import {WebView} from 'react-native-webview';
import SplashScreen from 'react-native-splash-screen';
import VerifConnexionComponent from './Jobs/VerifConnexion/VerifConnexion.component';
import RNAndroidLocationEnabler from 'react-native-android-location-enabler';
import Toast from 'react-native-toast-message';
import Geolocation from '@react-native-community/geolocation';
// ...
const {height} = Dimensions.get('window');
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      load: false,
      status: true,
    };
  }

  positionInitial(){
    Geolocation.getCurrentPosition(info => {
      const {latitude, longitude} = info.coords;
      // console.log(latitude, 'latitude')
      // console.log(longitude, 'longitude')
      // console.log(info.coords, 'info.coords')
    });

}

  componentDidMount() {
    setTimeout(() => {
      SplashScreen.hide();
    }, 2000);
     // Service de mise à jour de la Localisation
    //   RNAndroidLocationEnabler.promptForEnableLocationIfNeeded({
    //     interval: 5000,
    //     fastInterval: 5000,
    //   })
    //   .then((data) => {
    //     this.positionInitial();
    //     // console.log(data, 'data');
    //     Toast.show({
    //       type: 'success', // success | error | info'
    //       position: 'top', // 'top | bottom',
    //       visibilityTime: 8000,
    //       bottomOffset: 30,
    //       autoHide: true,
    //       onShow: () => {},
    //       onHide: () => {},
    //       text1: 'Analyse en cours',
    //       text2: 'Récupération de votre position en cours',
    //     });
    //     this.setState({
    //       positionUser: false,
    //     });
    //   })
    // // eslint-disable-next-line handle-callback-err
    //   .catch((err) => {
    //     Toast.show({
    //       type: 'error', // success | error | info'
    //       position: 'top', // 'top | bottom',
    //       visibilityTime: 8000,
    //       bottomOffset: 30,
    //       autoHide: true,
    //       onShow: () => {},
    //       onHide: () => {},
    //       text1: 'Attention !!!',
    //       text2:"Votre Position n'a pas pu être récupérer, Veuillez réactiver la localisation svp.",
    //     });
    //     // this.setState({
    //     //   positionUser: true,
    //     // });
    // });

}

  // alert() {
  //   this.setState({
  //     status: false,
  //   });
  //   alert('error');
  // }

  handleWebViewNavigationStateChange = newNavState => {
    // newNavState looks something like this:
    // {
    //   url?: string;
    //   title?: string;
    //   loading?: boolean;
    //   canGoBack?: boolean;
    //   canGoForward?: boolean;
    // }
    const {url} = newNavState;
    console.log('webview', url);
    if (!url) {
      return;
    }

    // // one way to handle a successful form submit is via query strings
    if (url.includes('livreurmobile')) {
      console.log('livreurmobile', url);
      // Alert.alert('Paiement effectuer ok');
      //this.webview.stopLoading();
    }

    // if (url.includes('?message=success')) {
    //   this.webview.stopLoading();
    //   // maybe close this view?
    // }

    // // one way to handle errors is via query string
    // if (url.includes('?errors=true')) {
    //   this.webview.stopLoading();
    // }

    // // redirect somewhere else
    // if (url.includes('google.com')) {
    //   const newURL = 'https://logrocket.com/';
    //   const redirectTo = 'window.location = "' + newURL + '"';
    //   this.webview.injectJavaScript(redirectTo);
    // }
  };

  render() {
    // https://google.com/
    // https://livreurmobile.tika-ci.com/
    return (
      <View style={{height}}>
        {this.state.status == true && (
          <WebView
            source={{uri: 'https://tika.ci/'}}
            javaScriptEnabled={true}
            geolocationEnabled={true}
            // onMessage={event => console.log('ze' + event.nativeEvent.data)}
            // onNavigationStateChange={this.handleWebViewNavigationStateChange}
            // renderError={this.alert()}
          />
        )}
        <VerifConnexionComponent />
        <Toast ref={(ref) => Toast.setRef(ref)} />
      </View>
    );
  }
}

export default App;
