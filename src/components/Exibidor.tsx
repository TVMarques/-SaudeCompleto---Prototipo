import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

type OpcaoSeletor = {

    rotulo: string;
    valor: string;
};

type PropsSeletor = {
    titulo: string;
    opcoes: OpcaoSeletor[];
};

export default function Exibidor({ opcoes, titulo }: PropsSeletor) {
    const [aberto, setAberto] = useState(false);

    return (
        <View style={styles.container}>
            <View style={styles.containerTitulo}>
                <Text style={styles.tituloTexto}>
                    {titulo}
                </Text>
            </View>

            <View >
                <TouchableOpacity
                    style={styles.titulo}
                    onPress={() => setAberto(!aberto)}
                >

                    <View style={styles.iconCircle2}>
                        <Icon name="arrow-drop-down" size={22} color="#246536" />
                    </View>

                </TouchableOpacity>
            </View>


            {aberto && (
                <View style={styles.lista}>
                    {opcoes.map((opcao) => (
                        <View key={opcao.valor} style={styles.item}>
                            <Text style={styles.rotulo}>{opcao.rotulo}:</Text>
                            <Text style={styles.valor}>{opcao.valor}</Text>
                        </View>
                    ))}
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        margin: 20,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        overflow: 'hidden',
    },

    containerTitulo: {
        backgroundColor: '#153A71'
    },

    titulo: {
        backgroundColor: '#fff',
        padding: 12,
    },
    tituloTexto: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 4
    },

    iconCircle2: {
        width: 24,
        height: 22,
        borderRadius: 12,
        borderWidth: 2,
        borderColor: '#246536',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        marginLeft: 298
   },

    lista: {
        backgroundColor: '#f9f9f9',
        padding: 10,
    },
    item: {
        marginBottom: 8,
    },
    rotulo: {
        fontWeight: 'bold',
        color: '#333',
    },
    valor: {
        color: '#555',
    },
});