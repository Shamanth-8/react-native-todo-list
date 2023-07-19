import { StyleSheet, View, Text, Pressable } from "react-native";

function GoalItem(props) {
  console.log('props ---- ', props)
  return (
    <View style={styles.goalItem}>
    <Pressable
      android_ripple={{ color: "#210644" }}
      onPress={props.onDeleteItem.bind(this, props.id)} // are you sure it was like this in tutorial yeah
    >
      
        <Text style={styles.goalText}>{props.text}</Text>
        </Pressable>
      </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
    color: "white",
  },
  goalText: {
    color: "white",
    padding: 8,
  },
});
