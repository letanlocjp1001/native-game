import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
} from 'react-native'

import Colors from '../constants/colors'

const MainButton = (props) => {
  let ButtonContainer = TouchableOpacity

  if (Platform.OS === 'android' && Platform.Version >= 21) {
    ButtonContainer = TouchableNativeFeedback
  }
  return (
    <View style={styles.buttonContainer}>
      <ButtonContainer onPress={props.onPress} activeOpacity={0.6}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>{props.children}</Text>
        </View>
      </ButtonContainer>
    </View>
  )
}
const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 25,
    overflow: 'hidden',
  },
  button: {
    backgroundColor: Colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
  },
  buttonText: {
    color: 'white',
    fontFamily: 'open-sans',
    fontSize: 18,
  },
})

export default MainButton
