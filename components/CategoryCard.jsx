import React from 'react'
import { Text, TouchableOpacity, View, Image } from 'react-native'

const CategoryCard = ({ imgUrl, title }) => {
    return (
        <TouchableOpacity className="relative mr-2">
            <Image
                source={{
                    uri: imgUrl,
                }}
                className="w-20 h-20 p-4" />
            <Text className="absolute bottom-1 left-1 text-white font-bold">
                {title}
            </Text>
        </TouchableOpacity>
    )
}

export default CategoryCard