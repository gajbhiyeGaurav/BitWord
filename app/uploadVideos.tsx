import { AntDesign, FontAwesome, Ionicons, MaterialIcons } from "@expo/vector-icons";
import { Video } from 'expo-av';
import * as ImagePicker from 'expo-image-picker';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Alert, Button, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useHeaderBar } from '../../hooks/headerBar';
import { styles } from "../../styles/upload.styles";

// ...Main body...
export default function uploadVideos() {
  const router = useRouter();

  // Move header definition here so it can access drawer ref
  const header = useHeaderBar({
    left: (
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <TouchableOpacity onPress={() => router.back()} >
          <Ionicons name="arrow-back-outline" size={30} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.titleU}>Videos</Text>
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

  const [videoUri, setVideoUri] = useState<string | null>(null);

  const pickVideo = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permission Denied', 'Media library permissions are required!');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Videos,
      quality: 1,
    });

    if (!result.canceled && result.assets.length > 0) {
      setVideoUri(result.assets[0].uri);
    }
  };

  const uploadVideo = async () => {
    if (!videoUri) return;

    const formData = new FormData();
    formData.append('file', {
      uri: videoUri,
      name: 'video.mp4',
      type: 'video/mp4',
    } as any);

    try {
      const response = await fetch('https://your-api.com/upload-video', {
        method: 'POST',
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        body: formData,
      });

      const data = await response.json();
      Alert.alert('Upload Success', JSON.stringify(data));
    } catch (error) {
      console.error(error);
      Alert.alert('Upload Failed', 'An error occurred while uploading the video.');
    }
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
            <Button title="Pick a video" onPress={pickVideo} />
              {videoUri && (
                <>
                  <Video
                    source={{ uri: videoUri }}
                    rate={1.0}
                    volume={1.0}
                    isMuted={false}
                    resizeMode="contain"
                    shouldPlay
                    isLooping
                    style={styles.video}
                    useNativeControls
                  />
                  <Button title="Upload Video" onPress={uploadVideo} />
                </>
              )}
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
