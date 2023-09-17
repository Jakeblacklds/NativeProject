import { Pressable,Text } from "react-native"
import React from "react"
import {Card} from "../../../../components"
import styles from "./CategoryItem.style"

const CategoryItem = ({ category,setCategorySelected }) => {
    return (
        <Pressable onPress={() => setCategorySelected(category)}>
            <Card style={styles.cardContainer}>
                <Text style={styles.cardTitle}>{category}</Text>
            </Card>
        </Pressable>
    )
}

export default CategoryItem
