//estilos del CategoryItem

import { StyleSheet } from 'react-native';
import { colors } from '../../../../constants/colors';

export default StyleSheet.create({

    cardContainer: {
        flex: 1,
        backgroundColor: colors.secondary,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        height: 150,
        borderRadius: 10,
        shadowColor: 'black',
        shadowOffset: { height: 5, width: 3 },
        shadowRadius: 6,
        shadowOpacity: 0.26,
        padding: 20,
        width: 150,
       
    },
    
    cardTitle: {
        color: 'white',
        fontSize: 18, 
        fontFamily: 'Mastji'
    }
})
