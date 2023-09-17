//componente react native para crear una vista del Header con sus estilos

import React from 'react';
import { View,Text } from 'react-native';
import styles from './Header.styles';

const Header = ({ title }) => {
    return <View style={styles.header}>
        <Text style={styles.headerText}>{title}</Text>
        </View>;
    }


export default Header