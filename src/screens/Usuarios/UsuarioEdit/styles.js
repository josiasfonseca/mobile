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
})

export default styles
