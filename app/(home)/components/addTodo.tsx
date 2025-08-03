import AntDesign from '@expo/vector-icons/AntDesign';
import { KeyboardAvoidingView, TextInput, TouchableOpacity, View } from "react-native";

interface AddTodoProps {
  todoState: any;
}

const AddTodo = ({ todoState }: AddTodoProps) => {

    const { todoText, setTodoText, addTodo } = todoState;

    const handleAddTodo = () => {
        addTodo();
    };


  return (

    <KeyboardAvoidingView behavior='padding' keyboardVerticalOffset={10} className="px-4">
        <View className="flex-row items-center gap-1">
          <TextInput
          value={todoText}
          onChangeText={setTodoText}
          onSubmitEditing={handleAddTodo}
          autoCorrect={false}
            className="flex-1 border-2 rounded-l-lg p-3"
            placeholder="Add a new todo"
          />
          <TouchableOpacity
            onPress={addTodo}
            className="bg-black p-3 rounded-r-lg"
          >
            <AntDesign name="plus" size={20} color="white" />
          </TouchableOpacity>
        </View>
    </KeyboardAvoidingView>
  )
}

export default AddTodo

