import { StatusBar, StyleSheet, useWindowDimensions } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        color: '#fff',
        marginTop: StatusBar.currentHeight || 0,
    },
    header: {
        fontSize: 20,
        color: '#fff',
    },
    item: {
        backgroundColor: '#69aff0',
        padding: 8,
        marginVertical: 5,
    },
    row: {
        flexDirection: "row",
        flexWrap: "wrap",
    },
    itemNome: {
        color: '#fff',
        width: '80%'
    },
    textItemNome: {
        color: '#fff',
        marginRight: 30,
        textAlign: 'right',
        width: '100%'
    },
    itemCodigo: {
        width: '20%',
        color: '#fff',
        textAlign: 'right',
    },
    textItemCodigo: {
        color: '#fff',
        textAlign: 'left',
    },
    itemEmail: {
        alignItems: 'flex-end',
        textAlign: 'right',
    },
    textItemEmail: {
        color: '#cecece',
        fontSize: 18,
    },
    title: {
        fontSize: 18,
    },
    viewFlatList: {
        width: '100%',
    },
})

export default styles
