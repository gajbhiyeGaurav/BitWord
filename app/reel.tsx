import { FontAwesome, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { Video } from 'expo-av';
import React, { useRef, useState } from 'react';
import { Dimensions, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { styles } from "../../styles/reel.styles";

const { height } = Dimensions.get('window');

type Reel = {
  id: string;
  uri: string;
  accountName: string; // Add this line
};

const reelsData: Reel[] = [
  { id: '1', uri: require('../../assets/videos/video1.mp4'), accountName: 'user1' },
  { id: '2', uri: require('../../assets/videos/video2.mp4'), accountName: 'user2' },
  { id: '3', uri: require('../../assets/videos/video3.mp4'), accountName: 'user3' },
  { id: '4', uri: require('../../assets/videos/video4.mp4'), accountName: 'user4' },
  { id: '5', uri: require('../../assets/videos/video5.mp4'), accountName: 'user5' },
  { id: '6', uri: require('../../assets/videos/video6.mp4'), accountName: 'user6' },
];

const ReelPage = () => {
  const videoRefs = useRef<any[]>([]);
  const [playingIndex, setPlayingIndex] = useState(0);

  const handlePlayPause = (index: number) => {
    if (videoRefs.current[index]) {
      if (playingIndex === index) {
        videoRefs.current[index].pauseAsync();
        setPlayingIndex(-1);
      } else {
        // Pause all other videos
        videoRefs.current.forEach((video, i) => {
          if (video) {
            if (i === index) {
              video.playAsync();
            } else {
              video.pauseAsync();
            }
          }
        });
        setPlayingIndex(index);
      }
    }
  };

  const renderItem = ({ item, index }: { item: Reel; index: number }) => (
    <View style={styles.videoContainerR}>
      <Video
        ref={(ref) => { videoRefs.current[index] = ref; }}
        source={item.uri}
        style={StyleSheet.absoluteFill}
        resizeMode="cover"
        isLooping
        shouldPlay={playingIndex === index}
      />
      <TouchableOpacity style={{ position: 'absolute', top: 40, left: 20 }} onPress={() => console.log("redirect account page")}>
        <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 18 }}>
          <FontAwesome name="user-circle" size={30} color="#fff" />
          <View style={{ width: 12 }} />
          {item.accountName}
        </Text>
      </TouchableOpacity>
      <View style={styles.buttonContainer1R}>
        <TouchableOpacity style={styles.button1R}>
          <Ionicons size={25} color="#fff" name="heart-outline" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button1R}>
          <MaterialCommunityIcons name="share-outline" size={25} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button1R}>
          <Ionicons name="notifications-outline" size={25} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button1R}
          onPress={() => handlePlayPause(index)}
        >
          <Ionicons
            name={playingIndex === index ? "pause" : "play"}
            size={25}
            color="#fff"
          />
        </TouchableOpacity>
      </View>
    </View>
  );

  const handleViewableItemsChanged = useRef(({ viewableItems }: any) => {
    viewableItems.forEach((item: any) => {
      const { index } = item;
      videoRefs.current.forEach((video, i) => {
        if (video) {
          if (i === index) {
            video.playAsync();
          } else {
            video.pauseAsync();
          }
        }
      });
    });
  });

  return (
    <FlatList
      data={reelsData}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      pagingEnabled
      snapToInterval={height}
      decelerationRate="fast"
      showsVerticalScrollIndicator={false}
      onViewableItemsChanged={handleViewableItemsChanged.current}
      viewabilityConfig={{ itemVisiblePercentThreshold: 80 }}
    />
  );
};

export default ReelPage;