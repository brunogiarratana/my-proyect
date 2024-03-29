import { StyleSheet, Text, View, Switch } from 'react-native'
import React from 'react'
import ButtonPrimary from './ButtonPrimary'

const CartTaskList = ({ item, onHandlerModalDelete, screenWidth, updateTaskCompleted }) => {
  return (
    <View style={[styles.taskCard, { width: screenWidth - 60 }]}>
      <Text style={styles.text}>Creación: {item.createAt}</Text>
      <Text style={styles.text}>Título: {item.title}</Text>
      <Text style={styles.text}>Descripción: {item.description}</Text>
      <View style={styles.completedContanier}>
        <Switch
          value={item.completed}
          onValueChange={() => updateTaskCompleted(item.id)}
        />
        <Text style={styles.textCompleted}>{item.completed ? "Completada" : "Pendiente"}</Text>
      </View>
      <ButtonPrimary title='DEL' onPress={() => onHandlerModalDelete(item)} />
    </View>
  )
}

export default CartTaskList

const styles = StyleSheet.create({
  taskCard: {
    backgroundColor: "darkgrey",
    padding: 20,
    marginHorizontal: 10,
    marginVertical: 10,
    alignItems: "flex-start",
    borderRadius: 5,
    gap: 25
  },
  text: {
    width: "100%",
    color: "white",
    fontSize: 18
  },
  completedContanier: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 15
  },
  textCompleted: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold"
  }
})