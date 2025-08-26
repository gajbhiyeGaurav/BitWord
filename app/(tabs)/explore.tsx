import { AntDesign, FontAwesome, Ionicons, MaterialIcons } from '@expo/vector-icons';
import { Video } from 'expo-av';
import React, { useRef, useState } from 'react';
import { Animated, FlatList, Image, ScrollView, Text, TouchableOpacity, View, useWindowDimensions } from "react-native";
import { Searchbar } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { SceneMap, TabBar, TabView } from 'react-native-tab-view';
import { styles } from "../../styles/explore.styles";



const FirstRoute = () => (
  <View style={{ flex: 1, backgroundColor: 'green' }}>
    <ScrollView style={styles.scrollViewE}>
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
)

const SecondRoute = () => (
  <View style={{ flex: 1, backgroundColor: 'blue' }}>
    <ScrollView style={styles.scrollViewE}>
      <TouchableOpacity style={styles.panelAccountListE} >
        <FontAwesome name="user-circle" size={30} color="#fff" />
        <Text style={styles.paragraphE}>Gaurav Gajbhiye</Text>
        <MaterialIcons name="bookmark-add" size={30} color="#fff" />
        <Ionicons name="person-add" size={30} color="#fff" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.panelAccountListE} >
        <FontAwesome name="user-circle" size={30} color="#fff" />
        <Text style={styles.paragraphE}>Name</Text>
        <MaterialIcons name="bookmark-add" size={30} color="#fff" />
        <Ionicons name="person-add" size={30} color="#fff" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.panelAccountListE} >
        <FontAwesome name="user-circle" size={30} color="#fff" />
        <Text style={styles.paragraphE}>Name</Text>
        <MaterialIcons name="bookmark-add" size={30} color="#fff" />
        <Ionicons name="person-add" size={30} color="#fff" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.panelAccountListE} >
        <FontAwesome name="user-circle" size={30} color="#fff" />
        <Text style={styles.paragraphE}>Name</Text>
        <MaterialIcons name="bookmark-add" size={30} color="#fff" />
        <Ionicons name="person-add" size={30} color="#fff" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.panelAccountListE} >
        <FontAwesome name="user-circle" size={30} color="#fff" />
        <Text style={styles.paragraphE}>Name</Text>
        <MaterialIcons name="bookmark-add" size={30} color="#fff" />
        <Ionicons name="person-add" size={30} color="#fff" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.panelAccountListE} >
        <FontAwesome name="user-circle" size={30} color="#fff" />
        <Text style={styles.paragraphE}>Name</Text>
        <MaterialIcons name="bookmark-add" size={30} color="#fff" />
        <Ionicons name="person-add" size={30} color="#fff" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.panelAccountListE} >
        <FontAwesome name="user-circle" size={30} color="#fff" />
        <Text style={styles.paragraphE}>Name</Text>
        <MaterialIcons name="bookmark-add" size={30} color="#fff" />
        <Ionicons name="person-add" size={30} color="#fff" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.panelAccountListE} >
        <FontAwesome name="user-circle" size={30} color="#fff" />
        <Text style={styles.paragraphE}>Name</Text>
        <MaterialIcons name="bookmark-add" size={30} color="#fff" />
        <Ionicons name="person-add" size={30} color="#fff" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.panelAccountListE} >
        <FontAwesome name="user-circle" size={30} color="#fff" />
        <Text style={styles.paragraphE}>Name</Text>
        <MaterialIcons name="bookmark-add" size={30} color="#fff" />
        <Ionicons name="person-add" size={30} color="#fff" />
      </TouchableOpacity>
      <Text style={styles.paragraphE1}>Upload Videos</Text>
      <Text style={styles.spaceC}>Explore</Text>
    </ScrollView>
  </View>
);

const ThirdRoute = () => (
  <View style={{ flex: 1, backgroundColor: 'orange' }}>
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
          source={require('../../assets/images/action-figures-7243778_1280.jpg')}
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
          source={require('../../assets/images/batmen-8536604_1280.jpg')}
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
          source={require('../../assets/images/andrew-jackson-statue-5411831_1280.jpg')}
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
      <Text style={styles.spaceC}>Explore</Text>
    </ScrollView>
  </View>
);

type PollOption = {
  id: number;
  text: string;
  votes: number;
};

type PollQuestion = {
  id: number;
  question: string;
  options: PollOption[];
};

const initialPolls: PollQuestion[] = [
  {
    id: 1,
    question: 'Which is your favorite programming language?',
    options: [
      { id: 1, text: 'TypeScript', votes: 0 },
      { id: 2, text: 'JavaScript', votes: 0 },
      { id: 3, text: 'Python', votes: 0 },
      { id: 4, text: 'Java', votes: 0 },
    ],
  },
];

const PollsPage: React.FC = () => {
  const [polls, setPolls] = useState<PollQuestion[]>(initialPolls);

  const handleVote = (pollId: number, optionId: number) => {
    setPolls(prevPolls =>
      prevPolls.map((poll) =>
        poll.id === pollId
          ? {
            ...poll,
            options: poll.options.map(option =>
              option.id === optionId
                ? { ...option, votes: option.votes + 1 }
                : option
            ),
          }
          : poll
      )
    );
  };

  const renderOptions = (poll: PollQuestion) => (
    <FlatList
      data={poll.options}
      keyExtractor={item => item.id.toString()}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={styles.optionButton}
          onPress={() => handleVote(poll.id, item.id)}
        >
          <Text style={styles.optionText}>{item.text} ({item.votes} votes)</Text>
        </TouchableOpacity>
      )}
    />
  );

  return (
    <View style={{ flex: 1, backgroundColor: 'red' }}>
      <ScrollView style={styles.scrollViewE}>
        <TouchableOpacity style={styles.panel1} >
          <View style={styles.containerPoll}>
            {polls.map((poll: PollQuestion) => (
              <View key={poll.id} style={styles.pollContainer}>
                <Text style={styles.questionText}>{poll.question}</Text>
                {renderOptions(poll)}
              </View>
            ))}
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.panel1} >
          <View style={styles.containerPoll}>
            {polls.map((poll: PollQuestion) => (
              <View key={poll.id} style={styles.pollContainer}>
                <Text style={styles.questionText}>{poll.question}</Text>
                {renderOptions(poll)}
              </View>
            ))}
          </View>
        </TouchableOpacity>
        <Text style={styles.spaceC}>Explore</Text>
      </ScrollView>
    </View>
  );
}

const FourthRoute = PollsPage;

const FifthRoute = () => (
  <View style={{ flex: 1, backgroundColor: 'orange' }}>
    <ScrollView style={styles.scrollViewE}>
      <TouchableOpacity style={styles.panelAccountListE} >
        <FontAwesome name="user-circle" size={30} color="#fff" />
        <Text style={styles.paragraphE}>Gaurav Gajbhiye</Text>
        <MaterialIcons name="bookmark-add" size={30} color="#fff" />
        <Ionicons name="person-add" size={30} color="#fff" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.panelAccountListE} >
        <FontAwesome name="user-circle" size={30} color="#fff" />
        <Text style={styles.paragraphE}>Name</Text>
        <MaterialIcons name="bookmark-add" size={30} color="#fff" />
        <Ionicons name="person-add" size={30} color="#fff" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.panelAccountListE} >
        <FontAwesome name="user-circle" size={30} color="#fff" />
        <Text style={styles.paragraphE}>Name</Text>
        <MaterialIcons name="bookmark-add" size={30} color="#fff" />
        <Ionicons name="person-add" size={30} color="#fff" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.panelAccountListE} >
        <FontAwesome name="user-circle" size={30} color="#fff" />
        <Text style={styles.paragraphE}>Name</Text>
        <MaterialIcons name="bookmark-add" size={30} color="#fff" />
        <Ionicons name="person-add" size={30} color="#fff" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.panelAccountListE} >
        <FontAwesome name="user-circle" size={30} color="#fff" />
        <Text style={styles.paragraphE}>Name</Text>
        <MaterialIcons name="bookmark-add" size={30} color="#fff" />
        <Ionicons name="person-add" size={30} color="#fff" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.panelAccountListE} >
        <FontAwesome name="user-circle" size={30} color="#fff" />
        <Text style={styles.paragraphE}>Name</Text>
        <MaterialIcons name="bookmark-add" size={30} color="#fff" />
        <Ionicons name="person-add" size={30} color="#fff" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.panelAccountListE} >
        <FontAwesome name="user-circle" size={30} color="#fff" />
        <Text style={styles.paragraphE}>Name</Text>
        <MaterialIcons name="bookmark-add" size={30} color="#fff" />
        <Ionicons name="person-add" size={30} color="#fff" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.panelAccountListE} >
        <FontAwesome name="user-circle" size={30} color="#fff" />
        <Text style={styles.paragraphE}>Name</Text>
        <MaterialIcons name="bookmark-add" size={30} color="#fff" />
        <Ionicons name="person-add" size={30} color="#fff" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.panelAccountListE} >
        <FontAwesome name="user-circle" size={30} color="#fff" />
        <Text style={styles.paragraphE}>Name</Text>
        <MaterialIcons name="bookmark-add" size={30} color="#fff" />
        <Ionicons name="person-add" size={30} color="#fff" />
      </TouchableOpacity>
      <Text style={styles.paragraphE1}>Upload Videos</Text>
      <Text style={styles.spaceC}>Explore</Text>
    </ScrollView>
  </View>
);

export default function Explore() {

  const [searchQuery, setSearchQuery] = React.useState('');

  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'Videos' },
    { key: 'second', title: 'Accounts' },
    { key: 'third', title: 'Posts' },
    { key: 'fourth', title: 'Polls' },
    { key: 'fifth', title: 'Groups' },
  ]);
  const Page = ({ label }: { label: string }) => (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>{label}</Text>
    </View>
  );
  const scrollY = useRef(new Animated.Value(0)).current;
  // Opacity interpolates from 1 to 0 as you scroll down 100px
  const headerOpacity = scrollY.interpolate({
    inputRange: [0, 100],
    outputRange: [1, 0],
    extrapolate: 'clamp',
  });
  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
    third: ThirdRoute,
    fourth: FourthRoute,
    fifth: FifthRoute,
  });

  // const initialLayout = { width: Dimensions.get('window').width };

  // Example: you can pass scrollY to your scenes and attach it to a ScrollView
  const renderTabBar = (props: any) => (
    <TabBar
      {...props}
      scrollEnabled // Make TabBar scrollable for >3 tabs
      indicatorStyle={{ backgroundColor: 'blue' }}
      style={{ backgroundColor: '#2ec4b6' }}
      labelStyle={{ color: 'white' }}
    />
  );

  return (
    <SafeAreaView style={styles.pageE}>
      <View style={styles.headerE}>
        <Searchbar
          placeholder="Search"
          onChangeText={setSearchQuery}
          value={searchQuery}
          style={styles.searchbarE}
        />
      </View>
      <View style={styles.containerE}>

        <TabView
          navigationState={{ index, routes }}
          renderScene={renderScene}
          onIndexChange={setIndex}
          initialLayout={{ width: 400 }}
          renderTabBar={renderTabBar}
        />
      </View>
    </SafeAreaView>
  );
}