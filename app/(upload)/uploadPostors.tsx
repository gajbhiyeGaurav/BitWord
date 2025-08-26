import { AntDesign, FontAwesome, Ionicons, MaterialIcons } from "@expo/vector-icons";
import * as ImagePicker from 'expo-image-picker';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Alert, Button, Image, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useHeaderBar } from '../../hooks/headerBar';
import { styles } from "../../styles/upload.styles";

// ...Main body...
export default function uploadPostors() {
  const [imageUri, setImageUri] = useState<string | null>(null);
  const [text, setText] = useState<string>('');

  const uploadText = async () => {
    if (!text.trim()) {
      Alert.alert('Validation', 'Please enter some text before uploading.');
      return;
    }

    try {
      const response = await fetch('https://your-api.com/upload-text', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text }),
      });

      const data = await response.json();

      Alert.alert('Success', 'Text uploaded successfully!');
      setText('');
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'Failed to upload text.');
    }
  };


  const pickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permission denied', 'Camera roll permissions are required!');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
      allowsEditing: true,
    });

    if (!result.canceled) {
      setImageUri(result.assets[0].uri);
    }
  };

  const uploadImage = async () => {
    if (!imageUri) return;

    const formData = new FormData();
    formData.append('file', {
      uri: imageUri,
      name: 'upload.jpg',
      type: 'image/jpeg',
    } as any);

    try {
      const response = await fetch('https://your-api.com/upload', {
        method: 'POST',
        body: formData,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      const data = await response.json();
      Alert.alert('Upload Success', JSON.stringify(data));
    } catch (error) {
      console.error(error);
      Alert.alert('Upload Failed', 'Something went wrong.');
    }
  };

  const router = useRouter();

  // Move header definition here so it can access drawer ref
  const header = useHeaderBar({
    left: (
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <TouchableOpacity onPress={() => router.back()} >
          <Ionicons name="arrow-back-outline" size={30} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.titleU}>Postors</Text>
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
            <View style={styles.container}>
              <Text style={styles.header}>Create a Post</Text>
              <Button title="Pick an image" onPress={pickImage} />
              {imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}
              {imageUri && <Button title="Upload Image" onPress={uploadImage} />}
              <TextInput
                style={styles.input}
                placeholder="Type your message here..."
                value={text}
                onChangeText={setText}
                multiline
              />
              <Button title="Upload Text" onPress={uploadText} />
            </View>
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
