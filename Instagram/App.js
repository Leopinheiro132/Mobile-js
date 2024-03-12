import React, { useState } from 'react';
import {Image, ScrollView, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import {FontAwesome6, Feather, AntDesign, MaterialIcons} from "@expo/vector-icons"

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <TouchableOpacity>
          <FontAwesome6 name="paper-plane" size={32} color="black"></FontAwesome6>
        </TouchableOpacity>
        <Image/>
      </View>
      <View style={styles.StoryContainer}>
        <ScrollView horizontal={true}>
          <Image></Image>
          <Image></Image>
          <Image></Image>
          <Image></Image>
          <Image></Image>
        </ScrollView>
      </View>
      <View style={styles.FeedContainer}>
        <ScrollView>
          
        </ScrollView>
      </View>
        
      <View style={styles.FotterContainer}>
      <TouchableOpacity>
          <Feather name="home" size={32} color="black"></Feather>
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesome6 name="magnifying-glass" size={32} color="black"></FontAwesome6>
        </TouchableOpacity>
        <TouchableOpacity>
          <AntDesign name="pluscircleo" size={32} color="black"></AntDesign>
        </TouchableOpacity>
        <TouchableOpacity>
          <MaterialIcons name="ondemand-video" size={32} color="black"></MaterialIcons>
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesome6 name="paper-plane" size={32} color="black"></FontAwesome6>
        </TouchableOpacity>
      </View>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    minHeight: "100vh",
    minWidth: "100vw",
  },
  logoContainer: {
    flex: 0.5,
    backgroundColor: "#fff",
    minwidth: "100vw",
    justifyContent: "space-between",
  },
  StoryContainer: {
    flex: 1,
    minwidth: "100vw",
    backgroundColor: "#fff",
  },
  FeedContainer: {
    flex: 6,
    minwidth: "100vw",
    backgroundColor: "#fff",
  },
  FotterContainer: {
    flex: 0.5,
    minwidth: "100vw",
    flexDirection: 'row',
    justifyContent: "space-evenly",
    alignItems: 'center',
    shadowColor: 'black',
    backgroundColor: "#fff",
    shadowOpacity: 0.9,
  },
});
