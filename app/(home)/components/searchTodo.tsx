import React from 'react';
import { TextInput, View } from 'react-native';


interface SearchTodoProps{
  todoState: any
}

const SearchTodo = ({todoState}: SearchTodoProps) => {

  const {searchQuery,setSearchQuery} = todoState;

  return (
    <View className="justify-center items-center my-3">
        <TextInput
        placeholder="Search Your Task"
        placeholderTextColor="grey"
        className="border p-4 w-[360px] rounded-lg text-center"
        value={searchQuery}
        onChangeText={setSearchQuery}
        />
    </View>

  )
}

export default SearchTodo;

