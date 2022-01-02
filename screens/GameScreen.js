import React, { useState } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

import Number from '../components/NumberContainer'
import Card from '../components/Card'

const generateRandomBetween = (min, max, exclude) => {
  // Tao ra 1 so ngau nhien o muc toi thieu va toi da trong 1 khoang nao do
  min = Math.ceil(min)
  max = Math.floor(max)
  const rndNum = Math.floor(Math.random() * (max - min)) + min
  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude)
  } else {
    return rndNum
  }
}

const GameScreen = (props) => {
  const [currentGuess, setCurrentGuess] = useState(
    generateRandomBetween(1, 100, props.userChoice)
  )
  return (
    <View style={styles.screen}>
      <Text>Opponent's Guess</Text>
      <Number>{currentGuess}</Number>
      <Card style={styles.buttonContainer}>
        <Button title='LOWER' onPress={() => {}} />
        <Button title='GREATER' onPress={() => {}} />
      </Card>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    width: 300,
    maxWidth: '80%',
  },
})

export default GameScreen
