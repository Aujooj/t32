import * as React from 'react';
import { Pressable, View, Text } from 'react-native';
import ButtonStyles from '../styles/ButtonStyles';

const styles = ButtonStyles;

const Button = ({ text, type }) => {
    return (
        type == 'green' ?
            <View style={styles.green}>
                <Pressable
                    style={styles.button}
                    onPress={() => {
                        console.log('Pressionou green!')
                    }}>
                    <Text style={styles.text}>{text}</Text>
                </Pressable>
            </View>
            : type == 'red' ?
                <View style={styles.red}>
                    <Pressable style={styles.button} onPress={() => { console.log('Pressionou red!') }}>
                        <Text style={styles.text}>{text}</Text>
                    </Pressable>
                </View>
                :
                <View style={styles.blue}>
                    <Pressable style={styles.button} onPress={() => { console.log('Pressionou blue!') }}>
                        <Text style={styles.text}>{text}</Text>
                    </Pressable>
                </View>
    );
};

export default Button;