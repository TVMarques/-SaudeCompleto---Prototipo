import React from 'react';
import { View, Text, Button, StyleSheet, Image} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts } from 'expo-font';
import TituloSaudeComponent from '../components/TituloSaudeComponent';

export default function SucessoScreen({ navigation }) {
  const [fontsLoaded] = useFonts({
    'Rubik-SemiBold': require('../../assets/fonts/Rubik-SemiBold.ttf'),
    'Rubik-Bold': require('../../assets/fonts/Rubik-Bold.ttf'),
  });

   if (!fontsLoaded) {
    return null;
  }
  
  return (
    <LinearGradient colors={['#79DDF3', '#5E845F']} style={styles.container}>
        <TituloSaudeComponent
                rotulo='AGENDAMENTO DE CONSULTAS'
                containerStyle={{position:'relative', bottom: 60, paddingHorizontal: 6, paddingVertical: 4,}}//Usando a props para mexer no estilo do componente
                textStyle={{fontSize: 14}}
        />

       <View style={styles.card}>
          <View style={styles.containerText}>
             <Text style={styles.text}>Agendamento da consulta realizado com sucesso!</Text>
          </View>
       </View>

      <View style={styles.button}>
        <Button title="Voltar"  onPress={() => navigation.goBack()} color={'#246536'} ></Button>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 29,
    overflow: 'hidden',
    marginTop: 24,
    marginBottom: 48
  },
  innerContainer: {
    padding: 10,
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 55
  },

  card: {
    backgroundColor: '#0E5ED6',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 2,
    width: 370,
    height: 24,
    marginBottom: 560,
    marginLeft: 6
  },

  containerText: {
    width: 365,
    height: 300,
    marginTop: 20,
    backgroundColor: '#f0f0f0',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    overflow: 'hidden', // Isso faz o conteúdo respeitar o border radius
  },

  text:{
      textAlign: 'center',
      color:'#0E5ED6',
      fontSize: 26,
      fontWeight: 600,
      marginTop: 90,
      fontFamily: 'Rubik-Bold'
  },

   button:{
    width: 115,
    height: 31,
    marginLeft: 138,
    position: 'relative',
    bottom: 185,
    borderRadius: 32,
    overflow: 'hidden',
   },
});