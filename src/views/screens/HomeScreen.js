import React from 'react';
import {
  Dimensions,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import DetailsScreen from './DetailsScreen';

import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../consts/colors';
import Milk from '../../assets/milk.png';
import Eggs from '../../assets/eggs.png';

function Header() {
  return (
    <SafeAreaView>
      <View style={{ backgroundColor: COLORS.white }}>
        <View style={style.header}>
          <View>
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ fontSize: 24 }}>Hello,</Text>
              <Text
                style={{ fontSize: 24, fontWeight: 'bold', marginLeft: 10 }}>
                Badar
              </Text>
            </View>
            <Text style={{ marginTop: 5, fontSize: 22, color: COLORS.grey }}>
              What do you want today
            </Text>
          </View>
        </View>
        <View
          style={{
            marginTop: 10,
            flexDirection: 'row',
            paddingHorizontal: 20,
          }}>
          <View style={style.inputContainer}>
            <Icon name="search" size={28} />
            <TextInput
              style={{ flex: 1, fontSize: 18 }}
              placeholder="Search for food"
            />
          </View>
          <View style={style.sortBtn}>
            <Icon name="tune" size={28} color={COLORS.white} />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

{
  /*My Products Section*/
}

const MyProducts = (prop, { navigation }) => {
  return (
    <View style={{ flexDirection: 'row' }}>
      <TouchableOpacity style={style.card} onPress={prop.click}>
        <View style={{ alignItems: 'center', top: -60 }}>
          <Image source={prop.product} style={{ height: 120, width: 150 }} />

          <View style={{ marginHorizontal: 20, alignItems: 'center' }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
              {prop.tittle}
            </Text>
            <Text style={{ fontSize: 14, color: COLORS.grey, marginTop: 2 }}>
              {prop.ingredients}
            </Text>
          </View>

          <View
            style={{
              marginTop: 5,
              marginHorizontal: 20,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold', marginRight: 50 }}>
              {prop.quantity}
            </Text>
            <View style={style.addToCartBtn}>
              <Icon name="add" size={20} color={COLORS.white} />
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

function HomeScreen({ navigation }) {
  return (
    <View style={style.container}>
      <Header />
      <View style={{ paddingHorizontal: 10 }}>
        <View style={{ flexDirection: 'row' }}>
          <MyProducts
            product={Milk}
            tittle="Milk"
            ingredients="Cow Milk"
            quantity="1kg"
            click={() => {
              navigation.navigate('Details_Screen');
            }}
          />
          <MyProducts
            product={Eggs}
            tittle="Eggs"
            ingredients="Desi Eggs"
            quantity="1Dozen"
            click={() => {
              navigation.navigate('Details_Screen');
            }}
          />
        </View>
        <View style={{ flexDirection: 'row' }}>
          <MyProducts
            product={Eggs}
            tittle="Fruit"
            ingredients="Fresh Fruits"
            quantity="1kg"
            click={() => {
              navigation.navigate('Details_Screen');
            }}
          />
          <MyProducts
            product={Milk}
            tittle="Vegetables"
            ingredients="Fesh Vegs"
            quantity="1Kg"
            click={() => {
              navigation.navigate('Details_Screen');
            }}
          />
        </View>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 5,
  },
  header: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  inputContainer: {
    flex: 1,
    height: 50,
    borderRadius: 10,
    flexDirection: 'row',
    backgroundColor: COLORS.light,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  sortBtn: {
    width: 50,
    height: 50,
    marginLeft: 10,
    backgroundColor: COLORS.primary,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    height: 150,
    width: 160,
    marginHorizontal: 10,
    marginBottom: 20,
    marginTop: 90,
    borderRadius: 15,
    elevation: 13,
    backgroundColor: COLORS.white,
  },
  addToCartBtn: {
    height: 30,
    width: 30,
    borderRadius: 20,
    marginLeft: 10,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;