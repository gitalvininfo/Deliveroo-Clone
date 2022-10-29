import React from 'react'
import { ScrollView, Text } from 'react-native'
import CategoryCard from './CategoryCard'

const Categories = () => {
    return (
        <ScrollView horizontal
            contentContainerStyle={{
                paddingHorizontal: 15,
                paddingTop: 10
            }}
            showsHorizontalScrollIndicator={false}>

            <CategoryCard imgUrl="https://images.pexels.com/photos/5083910/pexels-photo-5083910.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" title="Testing"/>
            <CategoryCard imgUrl="https://images.pexels.com/photos/5083910/pexels-photo-5083910.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" title="Testing"/>
            <CategoryCard imgUrl="https://images.pexels.com/photos/5083910/pexels-photo-5083910.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" title="Testing"/>
            <CategoryCard imgUrl="https://images.pexels.com/photos/5083910/pexels-photo-5083910.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" title="Testing"/>
            <CategoryCard imgUrl="https://images.pexels.com/photos/5083910/pexels-photo-5083910.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" title="Testing"/>
            <CategoryCard imgUrl="https://images.pexels.com/photos/5083910/pexels-photo-5083910.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" title="Testing"/>
            <CategoryCard imgUrl="https://images.pexels.com/photos/5083910/pexels-photo-5083910.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" title="Testing"/>
            <CategoryCard imgUrl="https://images.pexels.com/photos/5083910/pexels-photo-5083910.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" title="Testing"/>

        </ScrollView>
    )
}

export default Categories