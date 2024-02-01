import { StyleSheet, View, Dimensions } from 'react-native';
import AddTarea from './src/components/AddTarea';
import uuid from 'react-native-uuid'
import { useState } from 'react'
import ListTarea from './src/components/ListTarea';
import ModalDeleteTask from './src/components/ModalDeleteTask';

export default function App() {

  const [taskTitle, setTaskTitle] = useState("")
  const [taskDescripcion, setTaskDescription] = useState("")
  const [tasks, setTasks] = useState([])
  const screenWidth = Dimensions.get('window').width
  const [modalVisible, setModalVisible] = useState(false)
  const [taskSelected, setTaskSelected] = useState({})

  const onHandlerTitle = (t) => {
    setTaskTitle(t)
  }
  const onHandlerDescription = (t) => {
    setTaskDescription(t)
  }
  const addTask = () => {

    const newTask = {
      id: uuid.v4(),
      createAt: new Date().toLocaleString(),

      completed: false,
      title: taskTitle,
      description: taskDescripcion
    }

    setTasks([...tasks, newTask])
    setTaskTitle("")
    setTaskDescription("")

  }
  const onHandlerModalDelete = (task) => {
    setTaskSelected(task)
    setModalVisible(!modalVisible)
  }

  const updateTaskCompleted = (id) => {
    setTasks(tasks.map(task => {
      if (task.id === id) return { ...task, ...{ completed: !task.completed } }
      return task
    }))
  }
  const deleteTask = () => {
    setTasks(tasks.filter(task => task.id != taskSelected.id))
    setModalVisible(!modalVisible)
  }


  return (
    <View style={styles.container}>
      <AddTarea
        taskTitle={taskTitle}
        onHandlerTitle={onHandlerTitle}
        taskDescripcion={taskDescripcion}
        onHandlerDescription={onHandlerDescription}
        addTask={addTask}
      />
      <ListTarea
        tasks={tasks}
        onHandlerModalDelete={onHandlerModalDelete}
        screenWidth={screenWidth}
        updateTaskCompleted={updateTaskCompleted}
      />
      <ModalDeleteTask
        modalVisible={modalVisible}
        taskSelected={taskSelected}
        deleteTask={deleteTask}
        onHandlerModalDelete={onHandlerModalDelete}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',

    backgroundColor: 'grey',
    paddingTop: 30,
  },
});
