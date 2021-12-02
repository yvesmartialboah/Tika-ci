/* eslint-disable prettier/prettier */
export const VerifConnexionComponentStyle = new (class StyleProvider {
    getStyle() {
      return {
        // containers: {
        //     justifyContent: "flex-start",
        //     alignItems: "center",
        //     backgroundColor: 'white',
        //     height: '42%',
        //     borderRadius: 5,
        //     width: '100%',
        // },
        container: {
          justifyContent: "flex-start",
          alignItems: "center",
          // backgroundColor: '#080708',
          backgroundColor: 'white',
          height: '45%',
          borderRadius: 5,
          width: '100%',
      },
      absolute: {
          position: 'absolute',
          // top: 100,
          // left: 100,
          // bottom: 100,
          // right: 100,
          width:'100%',
          // marginLeft: '0%',
          height:'110%',
      },
      modalParent: {
          // backgroundColor: '#080708',
          borderRadius: 5,
          width: '100%',
      },
      modalV1: {
          // width: 300,
          width: '100%',
          marginTop: 20,
          marginBottom: 10,
      },
      textV1: {
          color: '#080708',
          fontWeight: 'bold',
          fontSize: 22,
          textAlign: 'center',
          bottom: 15,
      },
      modalV2: {
          width: 300,
      },
      modalsubtitle: {
          width: '100%',
      },
      textV2: {
          color: '#707070',
          // fontWeight: 'bold',
          fontSize: 14,
          textAlign: 'center',
          bottom: 15,
      },
      modalV3: {
          width: '100%',
          marginTop: 20,
          marginBottom: 10,
          alignItems: 'center',
          justifyContent: 'center',
      },
      buttonV3: {
          height: 50,
          borderRadius: 4,
          backgroundColor: '#FFFFFF',
          borderColor: '#D8D8D8',
      },
      buttonbottom: {
          height: 50,
          width: '100%',
          borderRadius: 4,
          borderWith: 1,
          backgroundColor: '#FFFFFF',
          borderColor: '#080708',
      },
      TextV3: {
          color: '#000000',
          fontSize: 14,
          fontWeight:'bold',
      },
      buttonV4: {
          height: 50,
          borderRadius: 4,
          backgroundColor: '#080708',
      },
      TextV4: {
          color: '#FFFFFF',
          fontSize: 14,
          fontWeight:'bold',
      },
      modalV5: {
          width: 300,
          marginTop: 10,
          marginBottom: 10,
          alignItems: 'center',
      },
      buttonLeave: {
          justifyContent: 'flex-end',
          alignItems: 'center',
          marginTop: 20,
          height: '30%',
      },
      close: {
          justifyContent: 'flex-end',
          alignItems: 'flex-end',
          top: 10,
          height: 30,
          marginRight: 20,
          // backgroundColor: 'red',
      },
      closemini: {
          // left: 15,
          height: 30,
          width: 30,
          resizeMode: 'contain',
      },
      alert:{
          height: 160,
          width: 120
      }
      };
    }
  })();