import React, { useState } from 'react';
import { View, Text, TextInput, Modal, ScrollView, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { LinearGradient } from 'expo-linear-gradient';
import BotaoSaudeComponent from '../components/BotaoSaudeComponent';
import TextInputComponent from '../components/TextInputComponent';
import TituloSaudeComponent from '../components/TituloSaudeComponent';

import { useNavigation } from '@react-navigation/native';

const Question = ({ number, text, showFollowUp, followUpText, followUpValue, onValueChange, followUpPlaceholder }) => {
    const [selectedValue, setSelectedValue] = useState('');
    const [modalVisible, setModalVisible] = useState(false);

    const handlePickerChange = (itemValue) => {
        setSelectedValue(itemValue);
        onValueChange(itemValue === 'Sim' ? '' : null);
        if (itemValue === 'Sim' && showFollowUp) {
            setModalVisible(true);
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>
                    {text}
                </Text>
            </View>

            <View style={styles.pickerContainer}>
                <Picker
                    selectedValue={selectedValue}
                    onValueChange={handlePickerChange}
                    style={styles.picker}
                >
                    <Picker.Item label="Selecione" value="" />
                    <Picker.Item label="Sim" value="Sim" />
                    <Picker.Item label="Não" value="Não" />
                </Picker>
            </View>

            {showFollowUp && selectedValue === 'Sim' && (
                <TextInput
                    style={styles.textInput}
                    placeholder={followUpPlaceholder}
                    value={followUpValue}
                    onChangeText={onValueChange}
                />
            )}
        </View>


    );
};

export default function MedicalForm() {
    const [answers, setAnswers] = useState({});
    const navigation = useNavigation();

    const handleAnswerChange = (key, value) => {
        setAnswers((prev) => ({ ...prev, [key]: value }));
    };

    const handleNext = () => {
        console.log('Próximo passo:', answers);
    };

    return (
        <LinearGradient colors={['#79DDF3', '#5E845F']} style={styles.container1}>
            <ScrollView contentContainerStyle={{ padding: 20 }}>

                <TituloSaudeComponent
                    rotulo="NOVO CADASTRO"
                    containerStyle={{ position: 'relative', bottom: 60, paddingHorizontal: 6, paddingVertical: 4 }}
                    textStyle={{ widht: 80, fontSize: 17,  position: 'relative', left: 40}}
                />
                <TextInputComponent rotulo="Nome" />
                <TextInputComponent rotulo="Endereço" />
                <TextInputComponent rotulo="Número" />
                <TextInputComponent rotulo="Complemento" />
                <TextInputComponent rotulo="Bairro" />
                <TextInputComponent rotulo="CEP" />
                <TextInputComponent rotulo="Cidade" />
                <TextInputComponent rotulo="UF" />
                <TextInputComponent rotulo="Telefone" />
                <TextInputComponent rotulo="E-Mail" />
                <TextInputComponent rotulo="Data de Nascimento" />
                <TextInputComponent rotulo="Sexo" />
                <TextInputComponent rotulo="CPF" />
                <TextInputComponent rotulo="Defina a Senha" />
                <TextInputComponent rotulo="Confirme a Senha" />

                <Question number={1} text="Possui diagnóstico válido de transtorno ou condição médica?" showFollowUp={true}
                    followUpText="Caso sim, qual?" followUpPlaceholder="Descreva aqui"
                    followUpValue={answers.q1_detail || ''}
                    onValueChange={(value) => handleAnswerChange('q1_detail', value)}
                />
                <Question number={2} text="Faz uso de medicação controlada?" showFollowUp={true}
                    followUpText="Caso sim, qual?" followUpPlaceholder="Descreva aqui"
                    followUpValue={answers.q2_detail || ''}
                    onValueChange={(value) => handleAnswerChange('q2_detail', value)}
                />
                <Question number={3} text="Passou por internação hospitalar nos últimos 12 meses?" showFollowUp={true}
                    followUpText="Caso sim, qual motivo?" followUpPlaceholder="Motivo"
                    followUpValue={answers.q3_detail || ''}
                    onValueChange={(value) => handleAnswerChange('q3_detail', value)}
                />
                <Question number={4} text="Já passou por procedimento cirúrgico?" showFollowUp={true}
                    followUpText="Caso sim, qual?" followUpPlaceholder="Descreva aqui"
                    followUpValue={answers.q4_detail || ''}
                    onValueChange={(value) => handleAnswerChange('q4_detail', value)}
                />
                <Question number={5} text="Possui histórico de diabetes na família?" showFollowUp={false}
                    onValueChange={(value) => handleAnswerChange('q5', value)}
                />
                <Question number={6} text="Possui histórico de transtorno mental na família?" showFollowUp={true}
                    followUpText="Caso sim, qual?" followUpPlaceholder="Descreva aqui"
                    followUpValue={answers.q6_detail || ''}
                    onValueChange={(value) => handleAnswerChange('q6_detail', value)}
                />
                <Question number={7} text="Possui histórico de doença cardiovascular na família?" showFollowUp={false}
                    onValueChange={(value) => handleAnswerChange('q7', value)}
                />
                <Question number={8} text="Possui histórico de câncer na família?" showFollowUp={false}
                    onValueChange={(value) => handleAnswerChange('q8', value)}
                />
                <Question number={9} text="Realizou exame laboratorial nos últimos 12 meses?" showFollowUp={true}
                    followUpText="Caso sim, qual?" followUpPlaceholder="Descreva aqui"
                    followUpValue={answers.q9_detail || ''}
                    onValueChange={(value) => handleAnswerChange('q9_detail', value)}
                />
                <Question number={10} text="Possui alergia a algum medicamento?" showFollowUp={true}
                    followUpText="Caso sim, qual?" followUpPlaceholder="Descreva aqui"
                    followUpValue={answers.q10_detail || ''}
                    onValueChange={(value) => handleAnswerChange('q10_detail', value)}
                />

                <View style={styles.container}>
                    <View style={styles.header}>
                        <Text style={styles.headerText}>Por favor insira:</Text>
                    </View>

                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Peso Atual (KG)</Text>
                        <TextInput
                            keyboardType="numeric"
                            placeholder="Ex: 70"
                             placeholderTextColor='#153A71'
                            style={styles.input}
                            value={answers.weight || ''}
                            onChangeText={(value) => handleAnswerChange('weight', value)}
                        />
                    </View>

                    <View style={styles.separator} />

                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Altura</Text>
                        <TextInput
                            keyboardType="numeric"
                            placeholder="Ex: 175"
                            placeholderTextColor='#153A71'
                            style={styles.input}
                            value={answers.height || ''}
                            onChangeText={(value) => handleAnswerChange('height', value)}
                        />
                    </View>
                </View>

                <View style={styles.buttonRow}>
                    <View style={{ flex: 1, marginRight: 5 }}>
                        <BotaoSaudeComponent
                            rotulo="Voltar"
                            onPress={() => navigation.goBack()}
                            estiloContainer={styles.btnVoltar}
                            estiloTexto={styles.btnText}
                        />
                    </View>
                    <View style={{ flex: 1, marginLeft: 5 }}>
                        <BotaoSaudeComponent
                            rotulo="Registrar"
                            onPress={() => navigation.navigate('Opcoes')}
                            estiloContainer={styles.btnAgendar}
                            estiloTexto={styles.btnText}
                        />
                    </View>
                </View>
            </ScrollView>
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

    container: {
        marginBottom: 20,
        borderRadius: 10,
        overflow: 'hidden',
    },
    header: {
        backgroundColor: '#153A71', // azul escuro
        padding: 2,
        height: 22
    },

    headerText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 12,
    },

    pickerContainer: {
        backgroundColor: '#fff',
        paddingHorizontal: 10,
        paddingVertical: 1,
        height: 40
    },

    picker: {
        color: '#153A71', // azul escuro
        fontWeight: 'bold',
        marginLeft: -16,
        width: 360
    },

   separator: {
        borderBottomWidth: 1,
        borderBottomColor: '#153A71',
    },

    inputGroup: {
        backgroundColor: '#fff'
    },

    label:{
        color: '#153A71',
        fontSize: 16,
    },

    textInput: {
        backgroundColor: '#fff',
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 8,
        padding: 8,
        marginTop: 10,
    },

    buttonRow: {
        flexDirection: 'row',
        gap: 100,
        position: 'relative',
        top: 20
    },
});
