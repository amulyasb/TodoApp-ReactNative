import useTodo from '@/hooks/todo';
import { SafeAreaView, View } from "react-native";
import AddTodo from './components/addTodo';
import Headers from "./components/headers";
import TodoList from './components/ListTodos';
import SearchTodo from './components/searchTodo';

export default function Index() {
  const todoState = useTodo();

  return (
    <SafeAreaView className='flex-1'>

      <Headers/>

      <SearchTodo todoState={todoState}/>

      <View className="flex-1">
        <TodoList todoState={todoState} />

      </View>

      <AddTodo todoState={todoState} />

      

  </SafeAreaView>
    

  );
}
