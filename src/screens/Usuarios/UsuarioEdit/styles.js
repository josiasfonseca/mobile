import { StatusBar, StyleSheet, useWindowDimensions } from 'react-native'
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        color: '#fff',
        marginTop: StatusBar.currentHeight || 0,
    },
    title: {
        marginTop: 10,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        fontSize: 20,
        justifyContent: 'center',
        color: '#fff',
    },
    viewCodigo: {
        height: 50,
        marginTop: 50,
        marginLeft: 30,
        marginRight: 30,
        width: '85%',
        borderColor: '#ccccdd',
        borderWidth: 1,
        borderRadius: 50,
        padding: 10,
    },
    inputTextCodigo: {
        fontSize: 13,
        color: '#ffffff',
        marginLeft: 10,
    },
    viewNome: {
        height: 50,
        marginTop: 20,
        marginLeft: 30,
        marginRight: 30,
        width: '85%',
        borderColor: '#ccccdd',
        borderWidth: 1,
        borderRadius: 50,
        padding: 10,
    },
    inputTextNome: {
        fontSize: 13,
        color: '#ffffff',
        marginLeft: 10,
    },
    viewEmail: {
        height: 50,
        marginTop: 20,
        marginLeft: 30,
        marginRight: 30,
        width: '85%',
        borderColor: '#ccccdd',
        borderWidth: 1,
        borderRadius: 50,
        padding: 10,
    },
    inputTextEmail: {
        fontSize: 13,
        color: '#ffffff',
        marginLeft: 10,
    },
    buttonSalvar: {
        width: '100%',
    },
    inputButtonSalvar: {
        marginTop: 20,
        marginLeft: 30,
        marginRight: 30,
        width: '85%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 50,
        backgroundColor: '#cccccc',
    },
    textButtonSalvar: {
        fontSize: 17
    },
    viewButtonSalvar: {
        padding: 5,
    },
})

export default styles
