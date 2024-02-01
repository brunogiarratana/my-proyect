import { StyleSheet, View, FlatList } from 'react-native'
import React from 'react'
import Card from './Card'

const ListTasks = ({ tasks, onHandlerModalDelete, screenWidth, updateTaskCompleted }) => {

  return (
    <View style={styles.tasksContainer}>
      <FlatList
        snapToAlignment={'center'}
        horizontal={false}
        pagingEnabled={true}
        data={tasks}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (<Card
          item={item}
          onHandlerModalDelete={onHandlerModalDelete}
          screenWidth={screenWidth}
          updateTaskCompleted={updateTaskCompleted}
        />)}
      />

    </View>
  )
}

export default ListTasks

const styles = StyleSheet.create({
  tasksContainer: {
    flex: 1,
    padding: 10
  }
})