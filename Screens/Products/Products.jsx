import React from "react";
import { FlatList, Text, View, Button,Image } from "react-native";
import { useEffect, useState } from 'react';
import Allproducts from '../../data/products';
import { Header } from "../../components";
import styles from './Products.style';
import SearchInput from "../../components/SearchInput/SearchInput";

const Products = ({ category, onBackToHome }) => {

    const [arrProducts, setArrProducts] = useState([]);
    const [keyword, setKeyword] = useState('');

    useEffect(() => {

        if (category) {
            const products = Allproducts.filter(
                product => product.category === category);

            const productsFiltered = products.filter(
                product => product.title.includes(keyword));
            setArrProducts(productsFiltered);

        } else {
            const productsFiltered = Allproducts.filter(
                product => product.title.includes(keyword));
            setArrProducts(productsFiltered);

        }
    }, [keyword, category]);

    return (
        <View style={styles.container}>
            <Header title={category} />
            <SearchInput onSearch={setKeyword} />
            <View style={styles.productsContainer}>
                <FlatList
                    data={arrProducts}
                    renderItem={({ item }) => (
                        <View style={productStyles.productItem}>
                            <Image source={{ uri: item.thumbnail }} style={productStyles.productImage} />
                            <Text style={productStyles.productTitle}>{item.title}</Text>
                        </View>
                    )}
                    keyExtractor={(item) => item.id.toString()} // Asegúrate de convertir el ID a una cadena
                    numColumns={2}
                />
            </View>
            <Button title="Volver a la pantalla de inicio" onPress={onBackToHome} />
        </View>
    )
}

export default Products;
