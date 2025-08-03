import AsyncStorage from '@react-native-async-storage/async-storage';
import { useCallback, useEffect, useState } from 'react';
import { Keyboard } from 'react-native';



type TodoType = {
  id: number;
  title: string;
  isDone: boolean;
};


const useTodo = () => {

    const [todos, setTodos] = useState<TodoType[]>([]);
    const [allTodos, setAllTodos] = useState<TodoType[]>([]);
    const [todoText, setTodoText] = useState<string>("");
    const [searchQuery, setSearchQuery] = useState<string>("");

    useEffect(()=>{
        const loadTodos = async()=>{
            try {
                const savedTodos = await AsyncStorage.getItem('my-todos')
                if(savedTodos !== null){
                    const parsedTodos = JSON.parse(savedTodos);
                    setTodos(parsedTodos);
                    setAllTodos(parsedTodos); 
                }
            } catch (error) {
                alert(error)
            }
        }
        loadTodos();
    }, [])

    const addTodo = async ()=>{
        try {
            if (!todoText.trim()) return; 

            const newTodo ={
                id: Math.random(),
                title: todoText,
                isDone: false
            }
            const updatedTodos = [...allTodos, newTodo]; 
            setTodos(updatedTodos)
            setAllTodos(updatedTodos)
            await AsyncStorage.setItem('my-todos',JSON.stringify(updatedTodos) )
            setTodoText('')
            Keyboard.dismiss()
            
        } catch (error) {
            alert(error)
        }
    };

    const handleDone = async (id: number) => {
        try {
            const updatedAllTodos = allTodos.map((todo)=>{
                if(todo.id === id){
                    return { ...todo, isDone: !todo.isDone }; 
                }
                return todo;
            });
            await AsyncStorage.setItem("my-todos", JSON.stringify(updatedAllTodos));
            setTodos(updatedAllTodos);
            setAllTodos(updatedAllTodos);
        } catch (error) {
            alert(error)
        }
        
    };

    const deleteTodo = async (id: number) => {
        try {
            const updatedAllTodos = allTodos.filter((todo) => todo.id !== id); 
            await AsyncStorage.setItem("my-todos", JSON.stringify(updatedAllTodos))
            setTodos(updatedAllTodos)
            setAllTodos(updatedAllTodos)
            
        } catch (error) {
            alert(error)
        }
    };


    const onSearch = useCallback((query: string) => {
        if(query === ""){ 
            setTodos(allTodos)
        } else {
            const filteredTodo = allTodos.filter((todo)=>
                todo.title.toLowerCase().includes(query.toLowerCase())
            );
            setTodos(filteredTodo)
        }},[allTodos])

    useEffect(()=>{
        onSearch(searchQuery)
    }, [searchQuery, allTodos, onSearch]);

    return {
        todos,
        setTodos,
        todoText,
        setTodoText,
        addTodo,
        handleDone,
        deleteTodo,
        searchQuery,
        setSearchQuery,
    };
};
export default useTodo;