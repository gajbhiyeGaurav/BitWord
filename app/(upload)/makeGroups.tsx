import { AntDesign, FontAwesome, Ionicons, MaterialIcons } from "@expo/vector-icons";
import React from 'react';
import { useHeaderBar } from '../../hooks/headerBar';
import { useRouter } from 'expo-router';
import { Text, TouchableOpacity, View, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "../../styles/upload.styles";

// ...Main body...
export default function makeGroups() {
  const router = useRouter();

  // Move header definition here so it can access drawer ref
  const header = useHeaderBar({
    left: (
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <TouchableOpacity onPress={() => router.back()} >
          <Ionicons name="arrow-back-outline" size={30} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.titleU}>Groups</Text>
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
            <Text style={styles.text1}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio nesciunt alias quam nobis fugit iste veniam quibusdam. Temporibus accusamus amet nam minima!</Text>

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
