import { View,Text, TextInput, Pressable } from "react-native"
import {useState} from 'react'
import styles from './SearchInput'
import AntDesign from 'react-native-vector-icons/AntDesign'


const SearchInput = ({onSearch}) => {
    const [value,setValue] = useState('')
    
    const search = () => {
        onSearch(value)
        }

    const clearInput = () => {
        setValue('')
        onSearch('')
    }

    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput 
                    style={styles.input}
                    placeholder='Search'
                    value={value}
                    onChangeText={setValue}
                />
                <Pressable onPress={search}>
                    <AntDesign name='search1' size={20} color='black'/>
                </Pressable>
                <Pressable onPress={clearInput}>
                    <AntDesign name='closecircleo' size={20} color='black'/>
                </Pressable>
            </View>
        </View>
    )
}

export default SearchInput

