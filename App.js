import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from 'react-native';
import ModalComponent from './components/ModalComponent';

export default function App() {
  const [modalVisible, setModalVisible] = useState(false); // Estado para controlar la visibilidad del modal
  const [textValue, setTextValue] = useState('');
  const [itemList, setItemList] = useState([]);
  const [editingItemId, setEditingItemId] = useState(null);

  const onHandleChangeItem = (text) => setTextValue(text);

  const addItem = () => {
    setItemList((prevState) => [
      ...prevState,
      { id: Math.random(), value: textValue, completed: false },
    ]);
    setTextValue(''); // Limpiar el campo de entrada después de agregar un ítem
  };

  const deleteItem = (itemId) => {
    const updatedList = itemList.filter((item) => item.id !== itemId);
    setItemList(updatedList);
  };

  const toggleCompletion = (itemId) => {
    const updatedList = itemList.map((item) => {
      if (item.id === itemId) {
        return { ...item, completed: !item.completed };
      }
      return item;
    });
    setItemList(updatedList);
  };

  const openModal = (itemId) => {
    setEditingItemId(itemId);
    setModalVisible(true);
  };

  const closeModal = () => {
    setEditingItemId(null);
    setModalVisible(false);
  };

  const saveChanges = (editedValue) => {
    const updatedList = itemList.map((item) => {
      if (item.id === editingItemId) {
        return { ...item, value: editedValue };
      }
      return item;
    });
    setItemList(updatedList);
    closeModal();
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Ingresa un texto"
          placeholderTextColor="#000"
          style={styles.input}
          value={textValue}
          onChangeText={onHandleChangeItem}
        />
        <Button title="ADD" onPress={addItem} />
      </View>
      <View style={styles.listContainer}>
        {itemList.map((item) => (
          <View style={styles.textContainer} key={item.id}>
            <Text
              style={[
                styles.text,
                { textDecorationLine: item.completed ? 'line-through' : 'none' },
              ]}
            >
              {item.value}
            </Text>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.completeButton}
                onPress={() => toggleCompletion(item.id)}
              >
                <Text style={styles.buttonText}>
                  {item.completed ? 'Revertir' : 'Completar'}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.deleteButton}
                onPress={() => deleteItem(item.id)}
              >
                <Text style={styles.buttonText}>Borrar</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.editButton}
                onPress={() => openModal(item.id)}
              >
                <Text style={styles.buttonText}>Editar</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </View>
      <ModalComponent
        isVisible={modalVisible}
        onClose={closeModal}
        onSave={saveChanges}
        item={
          itemList.find((item) => item.id === editingItemId) || {
            id: null,
            value: '',
            completed: false,
          }
        }
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2C3E50',
    padding: 20,
    paddingTop: 50,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  input: {
    width: '70%',
    padding: 12,
    backgroundColor: '#F1948A',
    borderColor: '#58D68D',
    borderWidth: 1,
    borderRadius: 10,
    color: '#ECF0F1',
  },
  listContainer: {
    width: '100%',
  },
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 12,
    backgroundColor: '#3498DB',
    borderColor: '#1ABC9C',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  text: {
    color: '#ECF0F1',
    fontSize: 18,
    lineHeight: 24,
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  completeButton: {
    backgroundColor: '#58D68D',
    padding: 5,
    borderRadius: 5,
    marginRight: 10,
  },
  deleteButton: {
    backgroundColor: '#E74C3C',
    padding: 5,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
  },
})
