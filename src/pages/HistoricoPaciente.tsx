import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, Image, Platform } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import TituloSaudeComponent from '../components/TituloSaudeComponent';
import ComponentSeletor from '../components/ConponentSeletor';
import BotaoSaudeComponent from '../components/BotaoSaudeComponent';



export default function HistoricoPaciente({ navigation }) {
    const [valor, setValor] = useState<string>('')

    return (
        <LinearGradient colors={['#79DDF3', '#5E845F']} style={styles.container1}>
            <TituloSaudeComponent
                rotulo='HISTÓRICO DO PACIENTE'
                containerStyle={{ position: 'relative', bottom: 60, paddingHorizontal: 10, paddingVertical: 4, }}//Usando a props para mexer no estilo do componente
                textStyle={{ fontSize: 18, fontFamily: 'Rubik-SemiBold' }}
            />

            <ComponentSeletor
                titulo='Consultas Agendadas'
                valorSelecionado={valor}
                aoSelecionar={setValor}
                opcoes={[
                    { rotulo: 'Opção A', valor: 'a' },
                    { rotulo: 'Opção B', valor: 'b' },
                    { rotulo: 'Opção B', valor: 'b' },
                    { rotulo: 'Opção B', valor: 'b' },
                ]}
            />


            <ComponentSeletor
                titulo='Exames Agendadas'
                valorSelecionado={valor}
                aoSelecionar={setValor}
                opcoes={[
                    { rotulo: 'Opção A', valor: 'a' },
                    { rotulo: 'Opção B', valor: 'b' },
                    { rotulo: 'Opção B', valor: 'b' },
                    { rotulo: 'Opção B', valor: 'b' },
                ]}
            />

            <BotaoSaudeComponent
                rotulo='Voltar'
                onPress={() => navigation.goBack()}
                estiloContainer={{ width: 95, marginLeft: 145, marginTop: 40, }}
                estiloTexto={{ fontSize: 16, paddingVertical: 4 }}
            />

        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container1: {
        flex: 1,
        borderRadius: 29,
        overflow: 'hidden',
        marginTop: 24,
        marginBottom: 48
    },

});