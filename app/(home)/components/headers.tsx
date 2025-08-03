import React from 'react'
import { Image, Text, View } from 'react-native'

const Headers = () => {
  return (
      <View className="items-center m-3 flex-row justify-between p-3 shadow-lg">
        <Text className="text-xl font-bold mr-[160px]">Hi,{' '}
          <Text className="text-3xl">Amulya</Text>
        </Text>
        <View className="overflow-hidden">
          <Image 
          source={require("../../../assets/images/Todo.jpg")}
          className="h-[50px] w-[50px] rounded-[25px]"
          resizeMode="cover"
          ></Image>
        </View>
        <View>
        </View>
      </View>
  )
}

export default Headers

