// screen para la pantalla de inicio en react native

import { StatusBar } from "expo-status-bar";
import { View, FlatList } from "react-native";
import React from "react";
import { Header } from "../../components";
import styles from "./Home.style";
import dataCategories from "../../data/dataCategories";
import { CategoryItem } from "./components";

const Home = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Header title={"Categories"} />
            <FlatList
                data={dataCategories}
                keyExtractor={(category) => category.title}
                numColumns={2}
                columnWrapperStyle={styles.flatListContainer}
                renderItem={({ item }) => (
                    <CategoryItem
                        category={item.title}
                        navigation = {navigation}
                    />
                )}
            />
            
        </View>
    );
};

export default Home;
