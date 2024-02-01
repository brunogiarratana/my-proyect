import { Pressable, StyleSheet, Text,Keyboard } from 'react-native'
import React from 'react'

const ButtonPrimary = ({ title, onPress }) => {

  const handleCloseKeyboard = () => {
    Keyboard.dismiss();
  };
  return (
    <Pressable style={styles.container} onPress={() => {
      onPress();
      handleCloseKeyboard();
    }} >
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  )
}

export default ButtonPrimary

const styles = StyleSheet.create({
  container: {
    backgroundColor: "lightskyblue",
    width: "60%",
    paddingHorizontal: 10,
    paddingVertical: 5,
    alignItems: "center",
    borderRadius: 5
  },
  text: {
    color: "white",
    fontSize: 16
  }
})