import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

// use icons that come with any expo project
import { MaterialIcons } from '@expo/vector-icons'; 

export default function TodoItem({ item, pressHandler }) { // destructures and takes the item field from props
    return (
        <TouchableOpacity onPress={() => pressHandler(item.key)}>
            <View style={styles.item}>
                <MaterialIcons name="delete" size={18} color="#333"/> 
                <Text style={styles.itemText}>{item.text}</Text>
                
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    item: {
        flexDirection: "row",
        padding: 16, 
        marginTop: 16,
        borderColor: '#bbb',
        borderWidth: 1,
        borderStyle: 'dashed',
        borderRadius: 10
    },
    itemText: {
        marginLeft: 10
    }
})