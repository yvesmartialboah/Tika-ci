/* eslint-disable semi */
/* eslint-disable keyword-spacing */
/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
// eslint-disable-next-line eol-last
/* eslint-disable prettier/prettier */
import React from 'react';
import { Image, Dimensions, TouchableOpacity, ImageBackground, Platform } from 'react-native';
import { Button, Text, View, Icon, Thumbnail} from 'native-base';
import { VerifConnexionComponentStyle } from './VerifConnexion.styles';
// import SplashScreen from 'react-native-splash-screen';
import NetInfo from "@react-native-community/netinfo";
import {NetworkService} from '../Services/Network.service';
import Modal from 'react-native-modal';
import { BlurView } from "@react-native-community/blur";
import {AlertService} from '../Services/AlertCustom.service';


const closemini = require('../Images/close-sm-b.png');

const { height } = Dimensions.get('window');


// Appels des styles
const styleComponent = VerifConnexionComponentStyle.getStyle();

class VerifConnexionComponent extends React.Component {

    constructor(props) {
        super(props);
        // console.log(this.props.message, 'props');
        // console.log(this.props.pro, 'props');
        this.state = {
            status: false,
            // dataModal: true, // dev
            dataModal: false, //prod
            status_image: require('../Images/offline.png'), // info, success, error
            title: 'Password Changed', // dev
            subTitle: 'You have changed your password successfully.', // dev
        };
    }

    refresh() {
        this.setState({
          refresh: !this.state.refresh,
        });
    }

    // componentDidMount() {
    //   this.CheckConnectivity();
    // }

    // componentDidUpdate(){
    //   this.CheckConnectivity();
    // }

    navigate(value){
        this.props.navigation.navigate(value);
    }

    // CheckConnectivity
    CheckConnectivity = () => {
        // For Android devices
        if (Platform.OS === "android") {
          NetInfo.fetch().then(connectionInfo => {
            // console.log("Connection type", connectionInfo.type);
            // console.log("Is connected?", connectionInfo.isConnected);
            if (connectionInfo.isConnected) {
              this.close();
            } else {
              this.open();
            }
          });
        }
    };

    // Subscribe
    subscribeNetInfo = NetInfo.addEventListener(states => {
        // console.log("states", states);
        // console.log("Connection type", state.type);
        // console.log("Is connected ?", state.isConnected);
        if (states.isConnected) {
          this.close();
        } else {
          this.open();
      }
    });

    handleFirstConnectivityChange(connectionInfo) {
        // console.log(
        //   'First change, type: ' +
        //     connectionInfo.type +
        //     ', effectiveType: ' +
        //     connectionInfo.effectiveType
        // );
        NetInfo.removeEventListener(
          'connectionChange',
          this.handleFirstConnectivityChange
        );
    }

      // componentWillUnmount() {
      //   this.subscribeNetInfo();
      // }

    open() {
        this.setState({
            dataModal: true,
        });
        // // Mise à jour du composant fils
        // Mise à jour du composant fils
        let openmessage = {
          connexion : 'open',
        };
      // Envoie des data au composant parent
      AlertService.sendMessagecheck(openmessage);
    }

    close() {
        this.setState({
            dataModal: false,
        });
        // // Mise à jour du composant fils
        // Mise à jour du composant fils
        let closemessage = {
          connexion : 'close',
        };
      // Envoie des data au composant parent
      AlertService.sendMessagecheck(closemessage);
    }

    render() {
        return (
          <View>
            {/* style={{ height }} */}
            <Modal isVisible={this.state.dataModal}  backdropOpacity={-1} animationIn="slideInUp" animationOut="slideOutDown" animationInTiming={450}>
                {/* Module du rendu flou */}
                <BlurView
                    style={styleComponent.absolute}
                    blurType="dark"
                    blurAmount={1}
                    reducedTransparencyFallbackColor="white"
                />
                {/* Rien Mettre en bas sous peine de le voir */}
                <View style={styleComponent.container}>
                    <View style={styleComponent.modalParent}>

                        <TouchableOpacity style={styleComponent.close} onPress={() => this.close()}>
                          {/* <Image source={closemini} style={styleComponent.closemini} /> */}
                        </TouchableOpacity>

                        <View style={styleComponent.modalV3}>
                            <Image source={this.state.status_image} style={styleComponent.alert} />
                        </View>

                        <View style={styleComponent.modalV1}>
                            <Text style={styleComponent.textV1}>Attention !!!</Text>
                        </View>

                        <View style={styleComponent.modalsubtitle}>
                            <Text style={styleComponent.textV2}> Vous êtes hors ligne !!! </Text>
                        </View>

                    </View>
                </View>
            </Modal>
          </View>
        );
    }
}


export default VerifConnexionComponent;
