import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

const Home = ({ navigation }) => {

  const [coctel, setCoctel] = useState('');
  const [loading, setLoading] = useState(true);

  return (
    <View>

      <View style={style.viewContainer}>
        <Text style={style.textStyle}>Digite el nombre de un cóctel</Text>
      </View>

      <View style={style.viewContainer}>
        <TextInput
          style={style.inputTextStyle}
          onChangeText={(coctel) => setCoctel(coctel)}
          defaultValue={coctel}
        />
      </View>

      <View style={style.viewContainer}>
        <Button title='Confirmar' onPress={() => {
          navigation.navigate('Ingredients', {coctel})
        }}></Button>

      </View>

    </View>

  );
};


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
  }

});

export default Home;


