import React, { useState } from 'react';
import { StyleSheet, 
  Text, 
  FlatList, 
  View, 
  Alert, 
  TouchableWithoutFeedback,
  Keyboard } from 'react-native';
import Header from './components/header';
import TodoItem from './components/todoitem';
import AddTodo from './components/addtodo';
import Sandbox from './components/sandbox';

export default function App() {
  console.log("App started")

  const [todos, setTodos] = useState([
    { text: 'buy coffee', key: '1'},
    { text: 'create an app', key: '2'},
    { text: 'play on the switch', key: '3'},
  ])

  // delete the item from the set of todos with the given key
  const pressHandler = (key) => {
    console.log("pressed!")
    setTodos((prevTodos) => {
      return prevTodos.filter(todoItem => todoItem.key != key) 
    })
  }

  const submitHandler = (inputText) => {
    console.log(`submitting item: ${inputText}`)
    if (inputText.length > 3) {
      setTodos((prevTodos) => {
        return [
          { 
            text: inputText, 
            key: Math.random().toString() 
          }, 
          ...prevTodos
        ]
      })
    } else {
      Alert.alert("Title: Oops", "Message: Todos must be more than 3 chars", [
        {text: "Understood", onPress: () => console.log("Alert Closed")}
      ])
    }
  }

  return (
    // <Sandbox/>
    <TouchableWithoutFeedback onPress={() => {
      console.log("Dismissed Keyboard");
      Keyboard.dismiss();
    }}>
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <AddTodo submitHandler={submitHandler}/>
          <View style={styles.list}>
            <FlatList 
              data={todos}
              renderItem={({ item }) => 
                <TodoItem item={item} pressHandler={pressHandler}/>} 
            />
          </View> 
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  content: {
    flex: 1,
    padding: 40,
    // backgroundColor: "tomato"
  },
  list: {
    flex: 1,
    marginTop: 20,
    // backgroundColor: "yellow"
  }
});
