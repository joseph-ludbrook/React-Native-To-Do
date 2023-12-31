import { useState } from 'react';
import ToDoItem from './components/ToDoItem';
import ToDoInput from './components/ToDoInput';
import { StatusBar } from 'expo-status-bar';

import { StyleSheet, View, FlatList, Button } from 'react-native'; //StyleSheet = styles, Text = added text, View = div
//full list found https://reactnative.dev/docs/intro-react-native-components

//ScrollView is required in ordered to make ANY content scrollable
//Sizing styles should be applied to the parent View
//good for limited length items

//FlatList should be used for very long lists because it uses lazy load
//FlatList will automatically apply the 'key' value
//An array of objects should be used
//can use keyExtractor to generate key uses arrow function

export default function App() {
	const [toDo, setToDo] = useState([]);
	const [modalVisible, setModalVisible] = useState(false);

	function startAddToDoHandler() {
		setModalVisible(true);
	}
	function endAddToDoHandler() {
		setModalVisible(false);
	}

	function addToDoHandler(enteredToDoText) {
		setToDo((prevToDo) => [
			...prevToDo,
			{ text: enteredToDoText, id: Math.random().toString() },
		]);
		console.log(toDo);
		endAddToDoHandler();
	}

	function deleteToDoHandler(id) {
		setToDo((currentToDo) => {
			return currentToDo.filter((item) => item.id !== id);
		});
		console.log('Delete');
	}

	return (
		<>
			<StatusBar style="light" />
			<View style={styles.appContainer}>
				<Button
					title="Add New To Do"
					color="#03F"
					onPress={startAddToDoHandler}
				/>
				<ToDoInput
					visible={modalVisible}
					onAddToDo={addToDoHandler}
					onCancel={endAddToDoHandler}
				/>
				<View style={styles.toDoContainer}>
					<FlatList
						data={toDo}
						renderItem={(itemData) => {
							return (
								<ToDoItem
									text={itemData.item.text}
									id={itemData.item.id}
									onDeleteItem={deleteToDoHandler}
								/>
							);
						}}
					/>
				</View>
			</View>
		</>
	);
}

//not all CSS styles exist in react native

//Flexbox enabled by default

//styles do not cascade

//container styles should be applied at the View level
//text styles should be added at the Text level
//This is to ensure cross platform consistency

const styles = StyleSheet.create({
	appContainer: {
		paddingTop: 50,
		paddingHorizontal: 10,
		flex: 1,
		backgroundColor: '#654321',
	},
	toDoContainer: {
		flex: 4,
	},
});
