import React, { useState } from "react";
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Modal,
  Image,
} from "react-native";

function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText("");
  }

  return (
    <Modal visible={props.visible} animationType="slide">
    <View style={styles.inputContainer}>
      <Image style={styles.Image}source={require('../assets/images/goal.png')} />
      <TextInput
        style={styles.textInput}
        placeholder="Your course goal!"
        onChangeText={goalInputHandler}
        value={enteredGoalText}
      />
      <View styles = {styles.buttonContainer}>
    <View styles={styles.button}>
      <Button title="Add Goal" onPress={props.onCancel} color='#f31282' />
      </View>
      <View styles={styles.button}>
      <Button title="Add a goal" onPress={addGoalHandler} color='#5e0acc' />
    </View>
      </View>
      </View>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex:1,
    justifyContent: "centre",
    alignItems: "center",
    padding:16,
    backfaceVisibility: '#311b6b'
  },
  Image:{
    width:100,
    height:100,
    margin:20
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#e4d40ff",
    color:'#120438',
    borderRadius:6,
    width: '100',
    padding: 16,
  },
  buttonContainer:{
    marginTop: 16,
    flexDirection:'row',
  },
  button:{
    width:100,
    marginHorizontal:8 
  }
});
