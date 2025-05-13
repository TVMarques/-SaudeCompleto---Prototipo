import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import TextInputComponent from '../components/TextInputComponent';
import BotaoSaudeComponent from '../components/BotaoSaudeGrandeComponent';



export default function LoginScreen({navigation}) {
  return (
    <LinearGradient colors={['#79DDF3', '#5E845F']} style={styles.container1}>
      <View style={styles.container}>
        <Image 
          source={require('../../assets/images/logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />

        <Text style={styles.title}>+SAÚDE</Text>
        <TextInputComponent
            rotulo='LOGIN'
        />
        <TextInputComponent
            rotulo='SENHA' 
           secureTextEntry={true}
        /> 

        <BotaoSaudeComponent
            rotulo='Entrar'//Coloque titulo pois o é !!
            onPress={() => navigation.navigate('Opcoes')}
        />

         <BotaoSaudeComponent
            rotulo='Não é cadastrado? Clique aqui'
        />
      </View>
    </LinearGradient>
    
  );
}

const styles = StyleSheet.create({
  container1: {
    flex:1,
    borderRadius: 29,
    overflow: 'hidden',
    marginTop: 24,
    marginBottom: 48
  },

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },

  logo: {
    width: 150,
    height: 150,
    marginBottom: 80,
  },

  title: {
    fontSize: 52,
    fontWeight: 'bold',
    color: '#ffffff',
    position: 'relative',
    bottom: 80
  },

  label: {
    color: '#001F54',
    fontWeight: 'bold',
    marginBottom: 5,
    marginLeft: 10,

  },

  input: {
    backgroundColor: '#F0F0F0',
    borderRadius: 8,
    height: 40,
    marginBottom: 20,
    paddingHorizontal: 10,
  },

  loginButton: {
    backgroundColor: '#256D1B',
    paddingVertical: 6,
    borderRadius: 32,
    width: '100%',
    height: 31,
    alignItems: 'center',
    marginBottom: 15,
  },

  loginButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },

  registerButton: {
    backgroundColor: '#256D1B',
    paddingVertical: 10,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
  },

  registerButtonText: {
    color: '#fff',
    fontSize: 14,
  },
});