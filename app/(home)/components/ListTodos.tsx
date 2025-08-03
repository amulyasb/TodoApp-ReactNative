import AntDesign from '@expo/vector-icons/AntDesign';
import { FlatList, Pressable, Text, TouchableOpacity, View } from "react-native";

interface TodoListProps {
  todoState: any;
}

const TodoList = ({ todoState }: TodoListProps) => {

  const { todos, handleDone, deleteTodo } = todoState;


  return (
    <View className="flex-1 justify-center items-center border-0  bg-slate-100 p-5">
            <Text className='font-bold text-xl bg-slate-100'>Your Todos</Text>
            <View className='flex-1'>
              <FlatList
              data={[...todos].reverse()}
              keyExtractor={item => item.id.toString()}
              className='px-4 border-0'
              showsVerticalScrollIndicator={false}
              removeClippedSubviews={true}
              maxToRenderPerBatch={10}
              windowSize={10}
              initialNumToRender={10}
              getItemLayout={(data, index) => ({
                length: 80,
                offset: 80 * index,
                index,
              })}
              renderItem={({item})=>(
              <View className='w-[90%] mx-auto mb-3 flex-1'>
                  <View className='mt-5 flex-row justify-between w-full'>
                  <View className='flex-row gap-5 flex-1'>
                      <Pressable 
                        className="border w-6 h-6 border-black items-center justify-center"
                        onPress={() => handleDone(item.id)}
                      >
                      {item.isDone &&(
                          <AntDesign name="checksquare" size={24} color="black" />
                      )}
                      </Pressable> 
                      {item.isDone ? (
                        <Text 
                        numberOfLines={1} 
                        className={`flex-shrink mr-5 line-through text-gray-500`}
                      >
                        {item.title}
                      </Text>
                      ):
                      <Text 
                        numberOfLines={1} 
                        className={`flex-shrink mr-5`}
                      >
                        {item.title}
                      </Text>
                      }

                  </View>
                  <TouchableOpacity onPress={() => deleteTodo(item.id)}>
                      <AntDesign name="delete" size={24} color="black" />
                  </TouchableOpacity>
                  </View>
              </View>
              )}  
              />
            </View>

    </View>
  )
}

export default TodoList

