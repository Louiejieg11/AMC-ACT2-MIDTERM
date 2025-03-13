import React,{useState} from 'react';
import {View, 
        TextInput,
        Button,
        FlatList,
        Text,
        TouchableOpacity,
        StyleSheet} from 'react-native';

export default function App() {

const [enteredGoalText, setEnteredGoalText] = useState ('');

const [courseGoal, setCourseGoal] = useState([]);

const goalInputHandler = (enteredtext) => {
  setEnteredGoalText(enteredtext);
};

const addGoalHandler = () => {
  if(enteredGoalText.trim() === '') return
  setCourseGoal((currentCourseGoals) => [...currentCourseGoals, enteredGoalText]);
  setEnteredGoalText('');
};

const deleteGoal = (index) => {
  const updateGoals = [...courseGoal];
  updateGoals.splice(index, 1)
  setCourseGoal(updateGoals)

};

const getRainbowColor = (index) => {
  const color = ['#6495ed', '#7764ed', '#ed64da']
  return {backgroundColor: color[ index % color.length]}
}

return (

<View>
  <View style={style.container}>
    <TextInput
    placeholder="My Goal!"
    onChangeText={goalInputHandler}
    value={enteredGoalText}
    style={style.textInputGoal}
    />
    <Button title="My Goal" onPress={addGoalHandler} 
            style={{width: '30%'}}/>
  </View>

  <FlatList
    data={courseGoal}
    renderItem={({ item, index}) => (
      <View style={[style.goalContainer, getRainbowColor(index)]}>
      <Text>{item}</Text>
      <TouchableOpacity 
          onPress={() => deleteGoal(index)}
          style={style.deleteGoal}>
      <Text style={{textAlign: 'center', }}>x</Text>
      </TouchableOpacity>
      </View>
    )}

    keyExtractor={(item, index) => index.toString()}

  />

</View>
);
};

const style = StyleSheet.create({
    container: {
      flexDirection: 'row',
      width: '100%'
    },
    textInputGoal: {
      width: '80%',
      borderWidth: 1,
      height: 50,
      textAlign: 'center'
    },
    goalContainer : {
      justifyContent: 'space-between',
      flexDirection: 'row',
      marginVertical: 5,
      padding: 20,
      
    },
    deleteGoal: {
      backgroundColor: 'white', 
      width: 30,
      borderRadius: 12
    }

})
