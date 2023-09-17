// COMPONENTE PARA UNA CARTA DE PRODUCTO

import React from 'react';
import { View } from 'react-native';
import styles from './Card.styles';

const Card = ({children, style}) => {
    return <View style={[styles.card, style]}>{children}</View>;
}

export default Card
