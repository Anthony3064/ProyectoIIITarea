import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Ingredients = ({ route }) => {

    const { coctel } = route.params;

    const listaCocteles = [
        {
            'nombreCoctel': 'Piña Colada',
            'ingredientes': ['100 ml de ron blanco.', '250 ml de zumo de piña.', '150 ml de leche de coco.', 'Cubitos de hielo, cantidad al gusto.', 'Unas rodajitas de piña natural para decorar.']
        },
        {
            'nombreCoctel': 'Mogito',
            'ingredientes': ['Ron de calidad.', 'Hierbabuena.', 'Azúcar blanca.', 'Hielo.', 'Soda']
        },
        {
            'nombreCoctel': 'Margarita',
            'ingredientes': ['5 cl de tequila.', '2,5 cl de triple seco que es licor de naranja.', '2,5 cl de zumo de lima recién exprimido y un trocito de lima para mojar el borde de las copas.', 'Sal.', 'Hielo.']
        },
        {
            'nombreCoctel': 'Sunrisa',
            'ingredientes': ['3/4 de taza de jugo de naranja natural.', '1 1/2 oz de tequila', '6 cubitos de hielo', '2 cucharadas de Granadina', 'a 2 naranjas cortada en rodajas Cerezas para decorar ( 1 por vaso)']
        },
        {
            'nombreCoctel': 'Mamadita',
            'ingredientes': ['15 mililitros de Amareto.', '15 mililitros de Baileys.', '15 mililitros de Kalua.', 'Crema chantilly.', 'Hielo']
        }
    ];

    const getIngredients = (nombreCoctelParam) => {

        let listaIngredientes = [];
        let condicionBreak = false;

        listaCocteles.forEach(

            c => { 
                if (condicionBreak == false) {
                    if (c.nombreCoctel.toLocaleLowerCase() == nombreCoctelParam.toLowerCase()) {
                        listaIngredientes = c.ingredientes;
                        condicionBreak = true;
                    }
                }
            }
        );

        return (
            <View style={style.viewContainer}>
                {listaIngredientes.length > 0 ? <Text style={style.textStyleTwo}>{listaIngredientes.map(i => ' * ' + i + "\n")}</Text> : <Text style={style.textStyleTwo}>No hay ingredientes para este cóctel</Text>}
            </View>
        );
    }

    return (
        <>
            <View style={style.viewContainer}>
                <Text style={style.textStyle}>El cóctel es {coctel}</Text>
            </View>
            <View>
                <Text style={style.textStyleTwo}>Ingredientes:</Text>
            </View>
            {getIngredients(coctel)}
        </>
    );
}


const style = StyleSheet.create({

    viewContainer: {
        width: '90%',
        margin: 20,
        textAlign: 'center',
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
    },
    textStyle: {
        fontSize: 25,
        textAlign: "center",
        margin: 10
    },
    inputTextStyle: {
        fontSize: 20,
        margin: 5
    },
    textStyleTwo: {
        fontSize: 25,
        textAlign: "left",
        margin: 10
    }
});

export default Ingredients;