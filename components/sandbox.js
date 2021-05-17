import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Sandbox() {
    return (
        <View style={styles.container}>
            <Text style={styles.boxOne}>One</Text>
            <Text style={styles.boxTwo}>Two</Text>
            <Text style={styles.boxThree}>Three</Text>
            <Text style={styles.boxFour}>Four</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row", // this also defines the main axis 
        justifyContent: "space-around", // determines how the elements should be spread out along the main axis
        alignItems: "flex-end", // determines how we spread things out in the secondary axis
        paddingTop: 40,
        backgroundColor: "#333"
    },
    boxOne: {
        flex: 2,
        backgroundColor: "violet",
        padding: 10
    },
    boxTwo: {
        flex: 2,
        backgroundColor: "gold",
        padding: 20
    },
    boxThree: {
        flex: 10,
        backgroundColor: "coral",
        padding: 30
    },
    boxFour: {
        flex: 1,
        backgroundColor: "skyblue",
        padding: 40
    }
})