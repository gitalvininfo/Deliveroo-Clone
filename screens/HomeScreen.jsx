import { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect, useLayoutEffect } from 'react';
import { Image, SafeAreaView, ScrollView, Text, TextInput, View } from 'react-native';
import {
  UserIcon,
  ChevronDownIcon,
  SearchIcon,
  AdjustmentsIcon
} from "react-native-heroicons/outline";
import Categories from '../components/Categories';
import FeaturedRow from '../components/FeaturedRow';
import sanityClient from '../sanity';

const HomeScreen = () => {

  const [featuredCategories, setFeaturedCategories] = useState([]);

  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false
    })
  }, [])

  useEffect(() => {
    const query = `*[_type == "featured"]`;
    sanityClient.fetch(query).then(data => {
      console.log('datas', data)
      // setFeaturedCategories(data)
    });
  }, [])


  return (
    <SafeAreaView className="bg-white pt-5" style={{ paddingTop: 25 }}>
      <View className="flex-row pb-3 items-center mx-4 space-x-2">
        <Image
          source={{
            uri: "https://images.pexels.com/photos/14018213/pexels-photo-14018213.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          }}
          className="w-7 h-7 bg-gray-300 p-4 rounded-full" />

        <View className="flex-1">
          <Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
          <Text className="font-bold text-xl">
            Current Location
            <ChevronDownIcon size={20} color="#00CCBB" />
          </Text>
        </View>

        <UserIcon size={35} color="#00CCBB" />
      </View>

      <View className="flex-row items-center space-x-2 pb-2 mx-4">
        <View className="flex-row flex-1 space-x-2 bg-gray-200 p-3">
          <UserIcon color="gray" size={20} />
          <TextInput placeholder='Restaurants and causines' keyboardType='default' />
        </View>
        <UserIcon color="#00CCBB" />
      </View>


      <ScrollView className="bg-gray-100"
        contentContainerStyle={{
          paddingBottom: 100
        }}>
        <Categories />

        <FeaturedRow
          id="123"
          title="Featured"
          description="Paid placements from our partners"
        />

        <FeaturedRow
          id="456"
          title="Featured"
          description="Paid placements from our partners"
        />

        <FeaturedRow
          id="789"
          title="Featured"
          description="Paid placements from our partners"
        />

      </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen