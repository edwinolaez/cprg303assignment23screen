import { Feather, Ionicons } from "@expo/vector-icons";
import React from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

interface Call {
  name: string;
  sub?: string;
  type: "Incoming" | "Missed" | "Outgoing";
  date: string;
  image: string;
}

const calls: Call[] = [
  { name: "Book", type: "Incoming", date: "Monday", image: "../assets/images/profile1.jpg" },
  { name: "Book", type: "Missed", date: "2025-10-06", image: "../assets/images/profile1.jpg" },
  { name: "Book", type: "Outgoing", date: "2025-10-06", image: "../assets/images/profile1.jpg" },
  { name: "+1 (587) 429-4787", sub: "Gavin", type: "Outgoing", date: "2025-10-03", image: "../assets/images/profile2.jpg" },
  { name: "Book", type: "Incoming", date: "2025-10-02", image: "../assets/images/profile1.jpg" },
  { name: "+1 (587) 429-4787", sub: "Gavin", type: "Outgoing", date: "2025-09-23", image: "../assets/images/profile2.jpg" },
  { name: "Book", type: "Outgoing", date: "2025-09-17", image: "../assets/images/profile1.jpg" },
];

const getImage = (name: Call["name"]): number => {
  switch (name) {
    case "Book":
      return require("../assets/images/profile1.jpg");
    case "+1 (587) 429-4787":
      return require("../assets/images/profile2.jpg");
    default:
      return require("../assets/images/default.jpg"); // fallback
  }
};

export default function CallsScreen() {
  return (
    <View style={styles.container}>
      {/* Top Bar */}
       {/* Top bar with dots + plus */}
      <View style={styles.topBar}>
        <TouchableOpacity>
          <Feather name="more-vertical" size={22} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="add-circle" size={28} color="#25D366" />
        </TouchableOpacity>
      </View>

      {/* Bold Calls title */}
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Calls</Text>
      </View>

      {/* Search */}
      <View style={styles.searchContainer}>
        <TextInput placeholder="Search" style={styles.searchInput} />
      </View>

      {/* Favorites */}
      <View style={styles.favoritesContainer}>
        <Text style={styles.sectionTitle}>Favorites</Text>
        <TouchableOpacity style={styles.addFavorite}>
          <View style={styles.addIconContainer}>
            <Ionicons name="add" size={20} color="#000" />
          </View>
          <Text style={styles.addFavoriteText}>Add favorite</Text>
        </TouchableOpacity>
      </View>

      {/* Recent */}
      <ScrollView style={styles.recentContainer}>
        <Text style={styles.sectionTitle}>Recent</Text>

        {calls.map((call, index) => (
          <View key={index} style={styles.callRow}>
            <View style={styles.callInfo}>
              <Image source={getImage(call.name)} style={styles.profileImage} />
              <View style={styles.callTextContainer}>
                <Text style={styles.callName}>{call.name}</Text>
                <Text
                  style={[
                    styles.callType,
                    call.type === "Missed"
                      ? styles.missedCall
                      : call.type === "Incoming"
                      ? styles.incomingCall
                      : styles.outgoingCall,
                  ]}
                >
                  {call.type} {call.sub ? `(${call.sub})` : ""}
                </Text>
              </View>
            </View>

            <View style={styles.callDateContainer}>
              <Text style={styles.callDate}>{call.date}</Text>
              <Feather name="info" size={18} color="#777" />
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 60,
  },
  topBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  titleContainer: {
    paddingHorizontal: 20,
    marginTop: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
  },
  searchContainer: {
    paddingHorizontal: 20,
    marginTop: 15,
  },
  searchInput: {
    backgroundColor: "#f2f2f2",
    padding: 10,
    borderRadius: 10,
    fontSize: 16,
  },
  favoritesContainer: {
    marginTop: 25,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontWeight: "600",
    fontSize: 16,
    marginBottom: 10,
  },
  addFavorite: {
    flexDirection: "row",
    alignItems: "center",
  },
  addIconContainer: {
    height: 40,
    width: 40,
    borderRadius: 20,
    backgroundColor: "#eaeaea",
    justifyContent: "center",
    alignItems: "center",
  },
  addFavoriteText: {
    fontSize: 16,
    marginLeft: 10,
  },
  recentContainer: {
    marginTop: 25,
    paddingHorizontal: 20,
  },
  callRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 12,
    borderBottomColor: "#f0f0f0",
    borderBottomWidth: 1,
  },
  callInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  profileImage: {
    width: 45,
    height: 45,
    borderRadius: 25,
  },
  callTextContainer: {
    marginLeft: 12,
  },
  callName: {
    fontSize: 16,
    fontWeight: "500",
  },
  callType: {
    fontSize: 14,
  },
  missedCall: {
    color: "red",
  },
  incomingCall: {
    color: "green",
  },
  outgoingCall: {
    color: "gray",
  },
  callDateContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  callDate: {
    color: "#666",
    marginRight: 6,
  },
});
