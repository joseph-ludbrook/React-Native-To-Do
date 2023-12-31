import {
	View,
	TextInput,
	Button,
	StyleSheet,
	Modal,
	Image,
} from 'react-native';
import { useState } from 'react';

function ToDoInput(props) {
	const [enteredToDoText, setEnteredToDoText] = useState('');

	function toDoInputHandler(pEnteredText) {
		setEnteredToDoText(pEnteredText);
		// console.log(pEnteredText);
	}

	function addToDoHandler() {
		props.onAddToDo(enteredToDoText);
		setEnteredToDoText('');
	}

	return (
		<Modal
			visible={props.visible}
			animationType="fade">
			<View style={styles.inputContainer}>
				<Image
					style={styles.image}
					source={require('../assets/images/goal.png')}
				/>
				<TextInput
					onChangeText={toDoInputHandler}
					style={styles.textInput}
					placeholder="To Do"
					value={enteredToDoText}
				/>
				<View style={styles.buttonContainer}>
					<View style={styles.button}>
						<Button
							title="Cancel"
							onPress={props.onCancel}
							color="#666"
						/>
					</View>
					<View style={styles.button}>
						<Button
							onPress={addToDoHandler}
							title="Add To Do"
							color="#666"
						/>
					</View>
				</View>
			</View>
		</Modal>
	);
}

export default ToDoInput;

const styles = StyleSheet.create({
	inputContainer: {
		flex: 1,
		padding: 10,
		justifyContent: 'center',
		alignItems: 'center',
		paddingBottom: 20,
		borderBottomWidth: 1,
		borderColor: '#ccc',
		marginBottom: 10,
		backgroundColor: '#900',
	},
	textInput: {
		borderWidth: 1,
		borderColor: '#ccc',
		backgroundColor: '#ccc',
		color: '#000',
		width: '100%',
		marginRight: 8,
		padding: 8,
		borderRadius: 6,
	},
	buttonContainer: {
		flexDirection: 'row',
	},
	button: {
		width: 100,
		marginHorizontal: 8,
	},
	image: {
		width: 100,
		height: 100,
		margin: 20,
	},
});
