import { StyleSheet, Text, View, Modal, Button,TouchableOpacity } from 'react-native'

const ModalDeleteTask = ({ taskSelected,
  deleteTask,
  onHandlerModalDelete,
  modalVisible }) => {

  return (
    <Modal
      visible={modalVisible}
      animationType='fade'
      transparent={true}
      onRequestClose={() => onHandlerModalDelete({})}
    >
      <TouchableOpacity
          style={styles.centeredView}
          activeOpacity={1}
          onPressOut={() => onHandlerModalDelete({})} 
        >
      <View style={styles.container}>
        <View style={styles.modalView}>
          <Text style={styles.text}>Esta seguro que quiero eliminar la tarea :{taskSelected.title}</Text>
          <Button title='si' onPress={deleteTask} />
          <Button title='no' onPress={() => onHandlerModalDelete({})} />
        </View>
      </View>
      </TouchableOpacity>
    </Modal>
  )
}

export default ModalDeleteTask

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    backgroundColor: 'red',
    borderRadius: 10,
    padding: 20,
  },
  text:{
    color:"white",
    fontSize: 19,
  }

})