import { FontAwesome, Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useRouter } from 'expo-router';
import * as React from 'react';
import { useRef } from 'react';
import {
  Button,
  DrawerLayoutAndroid,
  GestureResponderEvent,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useHeaderBar } from '../../hooks/headerBar';
import { styles } from "../../styles/create.styles";

function onDrawerPress(event: GestureResponderEvent): void {
  alert("Another Left Icon Pressed");
}

export default function Create() {
  const router = useRouter();

  const rightDrawer = useRef<DrawerLayoutAndroid>(null);

  // Move header definition here so it can access drawer ref
  const header = useHeaderBar({
    left: (
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Text style={styles.titleC}>create</Text>
      </View>
    ),
    center: null,
    right: (
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <TouchableOpacity onPress={onDrawerPress}>
          <FontAwesome name="save" size={30} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => rightDrawer.current?.openDrawer()} style={{ marginLeft: 12 }}>
          <Ionicons name="create-outline" size={30} color="#fff" />
        </TouchableOpacity>
      </View>
    )
  });

  // Drawer contents
  const rightNavigationView = () => (
    <View style={[styles.containerC, styles.navigationContainerC]}>
      <Text style={styles.paragraphC}>I am in the Right Drawer!</Text>
      <Button title="Close drawer" onPress={() => rightDrawer.current?.closeDrawer()} />
    </View>
  );

  return (
    <SafeAreaView style={styles.pageC}>
      <View style={styles.headerC}>
        {header.left}
        {header.center}
        {header.right}
      </View>
      <View style={styles.containerC}>
        {/* Right Drawer wraps the main content */}
        <DrawerLayoutAndroid
          ref={rightDrawer}
          drawerWidth={300}
          drawerPosition="right"
          renderNavigationView={rightNavigationView}
        >
          <ScrollView style={styles.scrollViewC}>
            <Text style={styles.paragraphC}>Upload Posts</Text>
            <TouchableOpacity style={styles.panelC} onPress={() => router.push("../(upload)/uploadPosts")}>
              <MaterialIcons name="post-add" size={30} color="#fff" />
              <Text>Posts</Text>
              <MaterialIcons name="edit-square" size={30} color="#fff" />
              <MaterialIcons name="cloud-upload" size={30} color="#fff" />
            </TouchableOpacity>

            <Text style={styles.paragraphC}>Upload Videos</Text>
            <TouchableOpacity style={styles.panelC} onPress={() => router.push("../(upload)/uploadVideos")}>
              <MaterialIcons name="ondemand-video" size={30} color="#fff" />
              <Text>Videos</Text>
              <MaterialIcons name="edit-square" size={30} color="#fff" />
              <MaterialIcons name="cloud-upload" size={30} color="#fff" />
            </TouchableOpacity>

            <Text style={styles.paragraphC}>Upload Reels</Text>
            <TouchableOpacity style={styles.panelC} onPress={() => router.push("../(upload)/uploadReels")}>
              <MaterialIcons name="video-file" size={30} color="#fff" />
              <Text>Reels</Text>
              <MaterialIcons name="edit-square" size={30} color="#fff" />
              <MaterialIcons name="cloud-upload" size={30} color="#fff" />
            </TouchableOpacity>

            <Text style={styles.paragraphC}>Upload Polls</Text>
            <TouchableOpacity style={styles.panelC} onPress={() => router.push("../(upload)/uploadPolls")}>
              <MaterialIcons name="poll" size={30} color="#fff" />
              <Text>Polls</Text>
              <MaterialIcons name="edit-square" size={30} color="#fff" />
              <MaterialIcons name="cloud-upload" size={30} color="#fff" />
            </TouchableOpacity>

            <Text style={styles.paragraphC}>Upload Postors</Text>
            <TouchableOpacity style={styles.panelC} onPress={() => router.push("../(upload)/uploadPostors")}>
              <MaterialIcons name="signpost" size={30} color="#fff" />
              <Text>Postors</Text>
              <MaterialIcons name="edit-square" size={30} color="#fff" />
              <MaterialIcons name="cloud-upload" size={30} color="#fff" />
            </TouchableOpacity>

            <Text style={styles.paragraphC}>Make Groups</Text>
            <TouchableOpacity style={styles.panelC} onPress={() => router.push("../(upload)/makeGroups")}>
              <MaterialIcons name="group-add" size={30} color="#fff" />
              <Text>Groups</Text>
              <MaterialIcons name="edit-square" size={30} color="#fff" />
              <MaterialIcons name="cloud-upload" size={30} color="#fff" />
            </TouchableOpacity>

            <Text style={styles.spaceC}>Explore</Text>
          </ScrollView>
        </DrawerLayoutAndroid>
      </View>
    </SafeAreaView>
  );
}