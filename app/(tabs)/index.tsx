import { FontAwesome } from "@expo/vector-icons";
import React, { useRef, useState } from 'react';
import { Button, DrawerLayoutAndroid, GestureResponderEvent, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useHeaderBar } from '../../hooks/headerBar';
import { styles } from "../../styles/index.styles";

// header will be defined inside the Index component to access drawer ref
function onDrawerPress(event: GestureResponderEvent): void {
  alert("Another Left Icon Pressed");
}

// ...Main body...
export default function Index() {
  const leftDrawer = useRef<DrawerLayoutAndroid>(null);
  const rightDrawer = useRef<DrawerLayoutAndroid>(null);


  // Move header definition here so it can access drawer ref
  const header = useHeaderBar({
    left: (
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <TouchableOpacity onPress={() => leftDrawer.current?.openDrawer()} >
          <FontAwesome name="user-circle" size={30} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.titleI}>Home</Text>
      </View>
    ),
    center: null,
    right: (
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <TouchableOpacity onPress={onDrawerPress}>
          <FontAwesome name="bookmark" size={30} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => rightDrawer.current?.openDrawer()} style={{ marginLeft: 12 }}>
          <FontAwesome name="align-right" size={28} color="#fff" />
        </TouchableOpacity>
      </View>
    )
  });

  // Drawer contents
  const leftNavigationView = () => (
    <View style={[styles.containerI, styles.navigationContainerI]}>
      <Text style={styles.paragraphI}>I am in the Left Drawer!</Text>
      <Button title="Close drawer" onPress={() => leftDrawer.current?.closeDrawer()} />
    </View>
  );
  const rightNavigationView = () => (
    <View style={[styles.containerI, styles.navigationContainerI]}>
      <Text style={styles.paragraphI}>I am in the Right Drawer!</Text>
      <Button title="Close drawer" onPress={() => rightDrawer.current?.closeDrawer()} />
    </View>
  );

  return (
    <SafeAreaView style={styles.pageI}>
      <View style={styles.headerI}>
        {header.left}
        {header.center}
        {header.right}
      </View>
      <View style={styles.containerI}>
        {/* Left Drawer */}
        <DrawerLayoutAndroid
          ref={leftDrawer}
          drawerWidth={300}
          drawerPosition="left"
          renderNavigationView={leftNavigationView}
        >
          {/* Right Drawer wraps the main content */}
          <DrawerLayoutAndroid
            ref={rightDrawer}
            drawerWidth={300}
            drawerPosition="right"
            renderNavigationView={rightNavigationView}
          >
            <Text style={styles.paragraphI}>Main Content Here</Text>
          </DrawerLayoutAndroid>
        </DrawerLayoutAndroid>
      </View>
    </SafeAreaView>
  );
}
