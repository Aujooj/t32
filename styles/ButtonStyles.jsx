import { StyleSheet } from 'react-native'

const ButtonStyles = StyleSheet.create({
    green: {
        width: 290,
        height: 70,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#28c047',
    },
    red: {
        width: 290,
        height: 70,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#c67b7b',
    },
    blue: {
        width: 290,
        height: 70,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#50808e',
    },
    text: {
        fontSize: 24,
        fontWeight: '600',
        fontFamily: 'Poppins-SemiBold',
        color: '#fff'
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default ButtonStyles;