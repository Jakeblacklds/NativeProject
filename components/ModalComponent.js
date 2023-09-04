
import React, { useState } from 'react';
import { View, Text, Modal, Button, TextInput, StyleSheet } from 'react-native';

export default function ModalComponent({ isVisible, onClose, onSave, item }) {
  const [editedValue, setEditedValue] = useState(item.value);

const handleSave = () => {
    onSave(editedValue)
    onClose()
  }

return (
    <Modal visible={isVisible} animationType="slide">
      <View style={styles.modalContainer}>
        <Text>Editar ítem:</Text>
        <TextInput
        style={styles.input}
        value={editedValue}
        onChangeText={setEditedValue}
        />
        <Button title="Guardar" onPress={handleSave} />
        <Button title="Cancelar" onPress={onClose} />
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    padding: 12,
    backgroundColor: '#F1948A',
    borderColor: '#58D68D',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 20,
  },
}) 