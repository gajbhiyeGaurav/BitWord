import { AntDesign, FontAwesome, Ionicons, MaterialIcons } from "@expo/vector-icons";
import { Video } from 'expo-av';
import React from 'react';
import { GestureResponderEvent, Image, Text, TouchableOpacity, View, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useHeaderBar } from '../../hooks/headerBar';
import { styles } from "../../styles/notifications.styles";


function onDrawerPress(event: GestureResponderEvent): void {
  alert("Another Left Icon Pressed");
}

export default function Notifications() {
  // const leftDrawer = useRef<DrawerLayoutAndroid>(null);
  // const rightDrawer = useRef<DrawerLayoutAndroid>(null);

  // Move header definition here so it can access drawer ref
  const header = useHeaderBar({
    left: (
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <TouchableOpacity onPress={() => alert("Left Icon Pressed")}>
          <FontAwesome name="user-circle" size={30} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.titleN}>Notifications</Text>
      </View>
    ),
    center: null,
    right: (
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <TouchableOpacity onPress={onDrawerPress}>
          <FontAwesome name="bell" size={28} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => alert("Right icon Pressed")} style={{ marginLeft: 12 }}>
          <Ionicons name="settings-outline" size={30} color="#fff" />
        </TouchableOpacity>
      </View>
    )
  });


  return (
    <SafeAreaView style={styles.pageN}>
      <View style={styles.headerN}>
        {header.left}
        {header.center}
        {header.right}
      </View>
      <View style={styles.containerN}>
        <ScrollView style={styles.scrollViewC}>
          <TouchableOpacity style={styles.panelAccountListE} >
            <FontAwesome name="user-circle" size={30} color="#fff" />
            <Text style={styles.paragraphE}>Gaurav Gajbhiye</Text>
            <MaterialIcons name="bookmark-add" size={30} color="#fff" />
            <Ionicons name="person-add" size={30} color="#fff" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.panel1} >
            <View style={styles.panelAccountE}>
              <FontAwesome name="user-circle" size={30} color="#fff" />
              <Text style={styles.paragraphE}>Name</Text>
              <TouchableOpacity>
                <MaterialIcons name="bookmark" size={30} color="#fff" />
              </TouchableOpacity>
            </View>
            <Text style={styles.text1}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio nesciunt alias quam nobis fugit iste veniam quibusdam. Temporibus accusamus amet nam minima!</Text>
            <Image
              source={require('../../assets/images/memes-8280097_1280.jpg')}
              style={{ width: 200, height: 200, marginBottom: 5 }}
            />
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

          <View style={styles.containerVideoE}>
            <Video
              source={{ uri: 'https://www.w3schools.com/html/mov_bbb.mp4' }}
              rate={1.0}
              volume={1.0}
              isMuted={false}
              resizeMode="cover"
              shouldPlay
              useNativeControls
              style={styles.videoE}
            />
            <Text style={styles.paragraphE}>Upload Videos</Text>
          </View>

          <Text style={styles.spaceC}>Explore</Text>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
