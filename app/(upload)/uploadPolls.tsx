import { AntDesign, FontAwesome, Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useHeaderBar } from '../../hooks/headerBar';
import { styles } from "../../styles/upload.styles";
import Poll from '../../hooks/Poll';

// ...Main body...
export default function uploadPolls() {
  const router = useRouter();

  // Move header definition here so it can access drawer ref
  const header = useHeaderBar({
    left: (
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <TouchableOpacity onPress={() => router.back()} >
          <Ionicons name="arrow-back-outline" size={30} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.titleU}>Polls</Text>
      </View>
    ),
    center: null,
    right: (
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <TouchableOpacity onPress={() => alert("y")}>
          <Ionicons name="reload" size={30} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => alert("ki")} style={{ marginLeft: 12 }}>
          <Ionicons name="checkmark-sharp" size={28} color="#fff" />
        </TouchableOpacity>
      </View>
    )
  });

  const pollData = {
    question: "What's your favorite programming language?",
    options: [
      { id: 1, text: 'JavaScript', votes: 0 },
      { id: 2, text: 'TypeScript', votes: 0 },
      { id: 3, text: 'Python', votes: 0 },
      { id: 4, text: 'Go', votes: 0 },
    ],
  };

  return (
    <SafeAreaView style={styles.pageU}>
      <View style={styles.headerU}>
        {header.left}
        {header.center}
        {header.right}
      </View>
      <View style={styles.containerU}>
        <ScrollView style={styles.scrollViewE}>
          <TouchableOpacity style={styles.panel1} >
            <View style={styles.panelAccountE}>
              <FontAwesome name="user-circle" size={30} color="#fff" />
              <Text style={styles.paragraphE}>Name</Text>
              <TouchableOpacity>
                <MaterialIcons name="bookmark" size={30} color="#fff" />
              </TouchableOpacity>
            </View>
            <Poll question={pollData.question} options={pollData.options} />
            <View style={styles.subPostE}>
              <TouchableOpacity>
                <AntDesign name="like2" size={25} color="#fff" />
              </TouchableOpacity>
              <TouchableOpacity>
                <AntDesign name="dislike2" size={25} color="#fff" />
              </TouchableOpacity>
              <TouchableOpacity>
                <AntDesign name="message1" size={25} color="#fff" />
              </TouchableOpacity>
              <TouchableOpacity>
                <AntDesign name="sharealt" size={25} color="#fff" />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
          <Text style={styles.spaceC}>Explore</Text>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
