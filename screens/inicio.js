import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  ImageBackground,
  Image,
  TextInput,
} from 'react-native';

import{RFValue} from 'react-native-responsive-fontsize'
import RegistrodeRutas from "../screens/registrodeRutas";
import * as SplashScreen from 'expo-splash-screen';
import DropDownPicker from 'react-native-dropdown-picker';

SplashScreen.preventAutoHideAsync();

let customFonts = {
  'Bubblegum-Sans': require('../assets/fonts/BubblegumSans-Regular.ttf'),
};

export default class InicioScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontsLoaded: false,
      dropdownHeight: 40,
    };
  }

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
  }
  render() {
    if (this.state.fontsLoaded) {
      SplashScreen.hideAsync();
      };
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.droidSafeArea} />

        <ImageBackground
          source={require('../assets/background.png')}
          style={styles.backgroundImage}>
          <View style={styles.titleBar} />
          <View style={styles.routeCards}>
            <Text style={styles.titulo}>Buses</Text>
          </View>

          <Image
            style={styles.imageIcon}
            source={{
              uri: 'https://cdn.discordapp.com/attachments/970837396465807422/1113301843020369961/logo.png',
            }}
          />

          <Text style={styles.routeText}>Buscar:</Text>
          <DropDownPicker
                items={[
                  { label: 'Ruta_1', value: 'Ruta_1' },
                  { label: 'Ruta_2', value: 'Ruta_2' },
                  { label: 'Ruta_3', value: 'Ruta_3' },
                  { label: 'Ruta_4', value: 'Ruta_4' },
                  { label: 'Ruta_5', value: 'Ruta_5' },
                ]}
                open={this.state.dropdownHeight == 170 ? true : false}
                onOpen={() => {
                  this.setState({ dropdownHeight: 170 });
                }}
                onClose={() => {
                  this.setState({ dropdownHeight: 40 });
                }}
                style={{
                  backgroundColor: '#C8C8C8',
                  borderWidth: 1,
                  borderColor: 'black',
                }}
                textStyle={{
                  color: this.state.dropdownHeight == 170 ? 'black' : '#FFFFFF',
                  fontFamily: 'Bubblegum-Sans',
                }}
                
              />

          <Text style={styles.routeText2}> Rutas populares</Text>

          <TouchableOpacity style={styles.container}>
            <ImageBackground
              source={require('../assets/contenedor.png')}
              style={styles.iconImage}>
              <Text style={styles.routeText3}> Unam a Banorte </Text>
              <Image source={require('../assets/IMG.png')}
             style={styles.storyImage} />
            </ImageBackground>
          </TouchableOpacity>

             
     <TouchableOpacity style={styles.container}>
            <ImageBackground
              source={require('../assets/contenedor.png')}
              style={styles.iconImage}>
              <Text style={styles.routeText3}> Walmart a Sams </Text>
              <Image source={require('../assets/IMG.png')}
             style={styles.storyImage} />
            </ImageBackground>
          </TouchableOpacity>
          
        </ImageBackground>
        <View>
         <TouchableOpacity style={styles.container2}
           onPress={() => this.props.navigation.navigate('Rutas')}>

            <ImageBackground
              source={require('../assets/iconomapa.png')}
              style={styles.iconbotton}>
              <Text style={styles.routeText4}> Agregar ruta </Text>
            </ImageBackground>
          </TouchableOpacity>
  
        </View>
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
 
 container2: {
    flex: 1,
  },

  droidSafeArea: {
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  titleBar: {
    flex: 0.05,
    justifyContent: 'center',
    color: 'white',
  },
  titulo: {
    flex: 1,
    fontSize: 33,
    fontWeight: 'bold',
    color: '#000000',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 6,
    height:1
  },
  inputBox: {
    marginTop: 25,
    width: '80%',
    alignSelf: 'center',
    height: 40,
    textAlign: 'center',
    borderWidth: 4,
    outline: 'none',
    backgroundColor:'#BEBEBE'
  },
  routeCards: {
    flex: 0.26,
    marginLeft: 1,
    marginRight: 1,
    marginTop: 0,
    borderRadius: 10,
    backgroundColor: '#F38C45',
  },
  routeText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 30,
    paddingLeft: 120,
  },
  routeText2: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginLeft: 5,
    marginTop: 10,
    paddingLeft: 70,
  },
  routeText3: {
    fontSize: 20,
    justifyContent: 'center',
    alignItems:'center',
     padding:RFValue(10),
    fontWeight: 'bold',
    color: 'black',
    marginLeft:RFValue(25),
    marginTop: 10,
  },
  routeText4: {
    fontSize: 12,
    justifyContent: 'center',
    alignItems:'center',
    fontWeight: 'bold',
    color: 'black',
    marginTop: 12,

  },
  imageIcon: {
    width: 260,
    height: 130,
    marginLeft: 40,
    marginTop: 20,
  },
  iconImage: {
    position: 'absolute',
    resizeMode: 'contain',
    width: 250,
    height: 150,
    marginLeft: 35,
    marginTop: 20,
  },
storyImage: { resizeMode: 'contain', 
width: '100%', 
alignSelf: 'center', 
height: RFValue(78),
},
iconbotton: {
    position: 'absolute',
    resizeMode: 'contain',
    alignItems:"center",
    width: 50,
    height: 50,
    marginLeft: 230,
    marginTop: 50,
  },
});
