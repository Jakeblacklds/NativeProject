import { StyleSheet } from "react-native"
import { colors} from "../../constants/colors"

export default productStyles = StyleSheet.create({
    productItem: {
        flex: 1,
        alignItems: 'center',
        margin: 10,
    },
    productImage: {
        width: 100,
        height: 100,
        resizeMode: 'cover',
    },
    productTitle: {
        fontSize: 16,
        marginTop: 5,
    },
});
