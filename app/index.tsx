import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { FlatList, Image, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

// const Index = () => {
//   return (
//     <View>
//       <Text>Index</Text>
//     </View>
//   )
// }

const chatData = [
  {
    id: '1',
    name: 'John Doe',
    lastMessage: 'Hey, how are you doing?',
    timestamp: '10:30 AM',
    unreadCount: 2,
    avatar: require('../assets/images/profile2.jpg'),
    isOnline: true,
  },
  {
    id: '2',
    name: 'Sarah Wilson',
    lastMessage: 'Did you finish the assignment?',
    timestamp: '9:15 AM',
    unreadCount: 0,
    avatar: require('../assets/images/profile2.jpg'),
    isOnline: false,
  },
  {
    id: '3',
    name: 'Work Group',
    lastMessage: 'Mike: Meeting at 3 PM tomorrow',
    timestamp: 'Yesterday',
    unreadCount: 5,
    avatar: require('../assets/images/profile2.jpg'),
    isGroup: true,
  },
  {
    id: '4',
    name: 'Mom',
    lastMessage: 'Call me when you are free ❤️',
    timestamp: 'Yesterday',
    unreadCount: 0,
    avatar: require('../assets/images/profile2.jpg'),  isOnline: true,
  },
  {
    id: '5',
    name: 'Alex Thompson',
    lastMessage: 'The party was amazing!',
    timestamp: '12/15/23',
    unreadCount: 0,
    avatar: require('../assets/images/profile2.jpg'),
    isOnline: false,
  },
  {
    id: '6',
    name: 'Tech Team',
    lastMessage: 'Sarah: New update deployed successfully',
    timestamp: '12/14/23',
    unreadCount: 3,
    avatar: require('../assets/images/profile2.jpg'),
    isGroup: true,
  },
  {
    id: '7',
    name: 'David Miller',
    lastMessage: 'See you at the gym!',
    timestamp: '12/13/23',
    unreadCount: 0,
    avatar: require('../assets/images/profile2.jpg'),
    isOnline: true,
  },
  {
    id: '8',
    name: 'Jennifer Wilson',
    lastMessage: 'Did you finish the assignment?',
    timestamp: '9:15 AM',
    unreadCount: 0,
    avatar: require('../assets/images/profile2.jpg'),
    isOnline: false,
  },
  {
    id: '9',
    name: 'Ruth Cooper',
    lastMessage: 'Did you finish the assignment?',
    timestamp: '9:15 AM',
    unreadCount: 0,
    avatar: require('../assets/images/profile2.jpg'),
    isOnline: false,
  },
  {
    id: '10',
    name: 'Clint Cooper',
    lastMessage: 'Did you finish the assignment?',
    timestamp: '9:15 AM',
    unreadCount: 0,
    avatar: require('../assets/images/profile2.jpg'),
    isOnline: false,
  },
  {
    id: '11',
    name: 'Bennett Wilson',
    lastMessage: 'Did you finish the assignment?',
    timestamp: '9:15 AM',
    unreadCount: 0,
    avatar: require('../assets/images/profile2.jpg'),
    isOnline: false,
  },
  {
    id: '12',
    name: 'Thor Odinson',
    lastMessage: 'Did you finish the assignment?',
    timestamp: '9:15 AM',
    unreadCount: 0,
    avatar: require('../assets/images/profile2.jpg'),
    isOnline: false,
  },
  {
    id: '13',
    name: 'Natasha Romanoff',
    lastMessage: 'Did you finish the assignment?',
    timestamp: '9:15 AM',
    unreadCount: 0,
    avatar: require('../assets/images/profile2.jpg'),
    isOnline: false,
  },
  {
    id: '14',
    name: 'Tony Stark',
    lastMessage: 'Did you finish the assignment?',
    timestamp: '9:15 AM',
    unreadCount: 0,
    avatar: require('../assets/images/profile2.jpg'),
    isOnline: false,
  },
];

const ChatItem = ({item}: {item: any}) => (
  <TouchableOpacity style={styles.chatItem}>
    {/* <View style={styles.avatarContainer}>
      <Image source={{uri: item.avatar}} style={styles.avatar} />
      {item.isOnline && !item.isGroup && <View style={styles.onlineIndicator} />}
      {item.isGroup && (
      <View style={styles.groupIndicator}>
        <Ionicons name="people" size={12} color="#fff" />
        </View>
      )}
      </View> */}

      <View style={styles.avatarContainer}>
        {/* <Image source={{ uri: item.avatar }} style={styles.avatar} /> */}
        <Image source={item.avatar} style={styles.avatar} />
        {/* <Image source={item.avatar
          ? { uri: item.avatar } : require('../assets/images/profile2.jpg')}
          defaultSource={require('../assets/images/profile2.jpg')}
          style={styles.avatar} 
          onError={(e) => console.log('Image failed to load for', item.name)}/> */}
      </View>

      <View style={styles.chatContentWrapper}>
      <View style={styles.chatContent}>
        <View style={styles.chatHeader}>
          <Text style={styles.chatName} numberOfLines={1}>
            {item.name}
          </Text>
          {/* <Text style={styles.timestamp}>{item.timestamp}</Text> */}
          <Text style={[styles.timestamp, item.unreadCount > 0 && styles.unreadTimestamp]}>{item.timestamp}</Text>
      </View>

      <View style={styles.chatFooter}>
        <Text style={styles.lastMessage} numberOfLines={1}>
          {item.lastMessage}
        </Text>
        <View style={styles.rightSection}>
        {item.unreadCount > 0 && (
          <View style={styles.unreadBadge}>
            <Text style={styles.unreadText}>{item.unreadCount}</Text>
          </View>
        )}
        </View>
      </View>
    </View>
    </View>
  </TouchableOpacity>
);

export default function Index() {
  const [searchQuery, setSearchQuery] = React.useState('');

  const filteredChats = chatData.filter(chat =>
    chat.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      {/*Top Bar (not scrollable*/ }
      <View style={styles.topNavbar}>
        <TouchableOpacity style={styles.circleIcon}>
          <Ionicons name="ellipsis-horizontal" size={22} color="#555" />
        </TouchableOpacity>

        <View style={styles.rightIcons}>
          <TouchableOpacity style={styles.circleIcon}>
            <Ionicons name="camera-outline" size={20} color="#555"/>
          </TouchableOpacity>

          <TouchableOpacity style={styles.greenCircleIcon}>
            <Ionicons name="add" size={22} color="#fff"/>
          </TouchableOpacity>
        </View>
      </View>

      {/* Main Content (Scrollable Section)*/}
      <ScrollView showsHorizontalScrollIndicator={false}>
        {/* Chats Header */}
        <View style={styles.headerTop}>

          <Text style={styles.headerTitle}>Chats</Text>

        </View>

        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <View style={styles.searchBar}>
            <Ionicons name="search" size={20} color="#666" style={styles.searchIcon} />
            <TextInput
              style={styles.searchInput}
              placeholder="Ask Meta AI or Search"
              placeholderTextColor="#666"
              value={searchQuery}
              onChangeText={setSearchQuery}/>

              {/* <TouchableOpacity>
                <MaterialCommunityIcons name="filter-variant" size={20} color="#666" />
              </TouchableOpacity> */}
          </View>
        </View>
      

      {/*Filter Buttons */}
      <View style={styles.filterWrapper}>
      <ScrollView 
      horizontal 
      showsHorizontalScrollIndicator={false}      
      contentContainerStyle={styles.filterScrollContent}>

        <TouchableOpacity style={[styles.filterButton, styles.activeFilter]}>
          <Text style={[styles.filterText, styles.activeFilterText]}>All</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.filterButton}>
          <Text style={styles.filterText}>Unread 2</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.filterButton}>
          <Text style={styles.filterText}>Favorites</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.filterButton}>
          <Text style={styles.filterText}>Groups 1</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.filterButton, styles.addButton]}>
          <Ionicons name="add" size={22} color="#555" />
        </TouchableOpacity>

      </ScrollView>
      </View>

      {/* Chat List */}
      
      <FlatList
        data={filteredChats}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => <ChatItem item={item} />}
        showsVerticalScrollIndicator={false}
        style={styles.chatList}

      />
      </ScrollView>

      {/* Floating Action Button */}
      <TouchableOpacity style={styles.metaOuterWrapper}>
        <View style={styles.metaOuterCircle}>
        <LinearGradient colors={['#6A00FF', '#00C2FF', '#00FFAA', '#FF00AA']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        style={styles.metaInnerGradient}>
          <View style={styles.metaFabInnerCircle}/>
          {/* <View style = {styles.metaFabInner}>
            <Ionicons name="sparkles-outline" size={28} color="#555" />
          </View> */}
        </LinearGradient>
        {/* <MaterialCommunityIcons name="message-reply-text" size={28} color="#fff" /> */}
        </View>
      </TouchableOpacity>
    </View>
    
    
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'center',
    //alignItems: 'center',
    backgroundColor: '#f0f2f5',
  },
  topNavbar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 50,
    paddingBottom:10,
    backgroundColor: '#f0f2f5',
   // borderBottomWidth: 0.5,
    //borderBottomColor: '#ddd',
  },
  header: {
    backgroundColor: '#f0f2f5',
    paddingTop: 50,
    paddingBottom: 10,
  },
  headerTop: {
    paddingHorizontal: 16,
    paddingTop: 15,
    paddingBottom: 8,
    backgroundColor: '#f0f2f5'
  },
  headerTitle: {
    color: '#000',
    fontSize: 24,
    fontWeight: 'bold',
  },
  topHeader: {
    ///
  },
  headerIcons: {
    flexDirection: 'row',
    paddingHorizontal: 16
  },
  iconButton: {
    marginLeft: 20,
  },
  searchContainer: {
    backgroundColor: '#f0f2f5',
    paddingHorizontal: 16,
    paddingTop: 6,
    paddingBottom: 2,
    //paddingVertical: 6,
    //borderBottomWidth: 1,
    //borderBottomColor: '#ccc',
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 14,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  archiveBanner: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f0f0f0',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  archiveIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#d9d9d9',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  archiveText: {
    fontSize: 16,
    color: '008069',
    fontWeight: '600',
  },
  archiveCount: {
    fontSize: 14,
    color: '#008069',
    fontWeight: '500'
  },
  chatList: {
    flex: 1,
  },
  chatItem: {
    flexDirection: 'row',
    //padding: 12,
    backgroundColor: '#f0f2f5',
    //paddingVertical: 10,
    //paddingHorizontal: 16,
    paddingTop: 2,
    paddingBottom: 4,
    paddingHorizontal: 16,
    
    //borderBottomWidth: 1,
    //borderBottomColor: '#eee',
  },
  avatarContainer: {
    position: 'relative',
  marginRight: 12,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 0.5,
    borderColor: '#ddd',
  },
  // onlineIndicator: {
  //   position: 'absolute',
  //   bottom: 2,
  //   right: 2,
  //   width: 12,
  //   height: 12,
  //   borderRadius: 6,
  //   backgroundColor: '#4CAF50',
  //   borderWidth: 2,
  //   borderColor: '#fff',
  // },
  // groupIndicator: {
  //   position: 'absolute',
  //   bottom: 0,
  //   right: 0,
  //   width: 16,
  //   height: 16,
  //   borderRadius: 8,
  //   backgroundColor: '#008069',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  // },
  chatContent: {
    flex: 1,
    justifyContent: 'center',
  },
  chatHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  chatName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
    flex: 1,

  },
  timestamp: {
    fontSize: 12,
    color: '#666',
  },
  unreadTimestamp: {
    color: "#11b14cff",
    fontWeight: "600"
  },
  chatFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  lastMessage: {
    fontSize: 14,
    color: '#666',
    flex: 1,
    marginRight: 8,
    marginBottom: 20
  },
  rightSection: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginBottom: 20
  },
  unreadBadge: {
    backgroundColor: '#11b14cff',
    borderRadius: 10,
    minWidth: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 6,
    marginTop: -1
  },
  unreadText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '600',
  },
  fab: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#25D366',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  metaFabOuter: {
    position: 'absolute',
    bottom: 25,
    right: 25,
    width: 66,
    height: 66,
    borderRadius: 33,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 6,
  },
  metaFabBorder: {
    width: 66,
    height: 66,
    borderRadius: 33,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 3,
  },
  metaFabInner: {
    width: 58,
    height: 58,
    borderRadius: 29,
    backgroundColor: '#f9f9f9',
    justifyContent: 'center',
    alignItems: 'center',
  },
  filterBar: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    //alignItems: 'center',
    //paddingVertical: 4,
    // backgroundColor: '#fff',
    // borderBottomWidth: 1,
    // borderBottomColor: '#eee',
    //marginTop: 2,
  },
  filterButton: {
    backgroundColor: '#f0f2f5',
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 5,
    marginRight: 10,
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#d9d9d9',
    // shadowColor: '#000',
    // shadowOffset: { width: 0, height: 1 },
    // shadowOpacity: 0.02,
    // shadowRadius: 2,
    // elevation: 1,
  },
  filterText: { 
    color: '#555',
    fontSize: 14,
    fontWeight: '500',
  },
  activeFilter: {
    //backgroundColor: '#d9fdd3',
    backgroundColor: '#E7FCE3',
    borderColor: "#B6EAB8",
  },
  activeFilterText: {
    color: '#075E54',
    fontWeight: '700'
  },
  filterWrapper: {
    //borderBottomWidth: 0.5,
    //borderBottomColor: '#ddd',
    backgroundColor: '#f0f2f5',
    paddingVertical: 6,
    //height: "auto",
    //justifyContent: 'center',
  },
  addButton: {
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 0,
    paddingVertical: 0,
  },
  circleIcon: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: '#eaeaeaff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  greenCircleIcon: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: '#11b14cff',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
  rightIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  filterScrollContent: {
    paddingHorizontal: 12,
    alignItems: 'center'
  },
  chatContentWrapper: {
    flex: 1,
    borderBottomWidth: 0.6,
    borderBottomColor: "#e3e3e3",
    justifyContent: "center",
    paddingTop: 2,
    paddingBottom: 0,

  },
  metaOuterWrapper: {
    position: 'absolute',
    bottom: 25,
    right: 14,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 6,
    borderRadius: 36,
    padding: 1
  },
  metaOuterCircle: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: '#f3f4f6',
    justifyContent: 'center',
    alignItems: 'center',
    

  },
  metaInnerGradient: {
    width: 60,
    height: 60,
    borderRadius: 30,
    padding: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  metaFabInnerCircle: {
    flex: 1,
    width: '100%',
    height: '100%',
    borderRadius: 30,
    backgroundColor: '#f0f2f5',
  }
})
