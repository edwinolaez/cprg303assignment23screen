import { MaterialCommunityIcons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

interface MenuItemProps {
  iconName: string;
  title: string;
  subtitle?: string;
  showChevron?: boolean;
}

const MenuItem: React.FC<MenuItemProps> = ({ iconName, title, subtitle, showChevron = true }) => (
    <TouchableOpacity style={styles.menuItem}>
      <View style={styles.menuIconContainer}>
        <MaterialCommunityIcons icon={iconName} size={22} color="#000" />
      </View>
      <View style={styles.menuTextContainer}>
        <Text style={styles.menuTitle}>{title}</Text>
        {subtitle && <Text style={styles.menuSubtitle}>{subtitle}</Text>}
      </View>
      {showChevron && (<MaterialCommunityIcons name="chevron-right" size={20} color="#C7C7CC" />)}
    </TouchableOpacity>
)


export default function Settings(){
  const [showBanner, setShowBanner] = useState<boolean>(true);

  return (
    <SafeAreaView style={styles.container}>
    <ScrollView style={styles.scrollView}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Settings</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchBar}>
          <MaterialCommunityIcons name="magnify" size={18} color="#8E8E93" />
          <TextInput 
            placeholder="Search"
            placeholderTextColor="#8E8E93"
            style={styles.searchInput}
          />
        </View>
      </View>

      {showBanner && (
        <View style={styles.banner}>
          <View style={styles.bannerHeader}>
            <Text style={styles.bannerTitle}>Allow contact access</Text>
            <TouchableOpacity onPress={() => setShowBanner(false)}>
              <Text style={styles.closeButton}>X</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.bannerText}>Manage your contacts to easily connect with your friends and family
          </Text>
          <TouchableOpacity style={styles.manageButton}>
            <Text style={styles.manageButtonText}>Manage contacts</Text>
          </TouchableOpacity>
        </View>
      )}

      <View style={styles.section}>
        <TouchableOpacity style={styles.profileItem}>
          <View style={styles.avatar}>
            <MaterialCommunityIcons name="account" size={32} color="#666" />
          </View>
          <View style={styles.profileTextContainer}>
            <Text style={styles.profileName}>Edwin Olaez</Text>
            <Text style={styles.profileStatus}>Available</Text>
          </View>
          <View style={styles.qrBadge}>
            <Text style={styles.qrText}>QR</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <MenuItem iconName="mdi:account-circle-outline" title="Avatar"/>
        <MenuItem iconName="mdi:format-list-bulleted" title="Lists"/>
        <MenuItem iconName="mdi:radio-tower" title="Broadcast messages"/>
        <MenuItem iconName="mdi:star-outline" title="Starred"/>
        <MenuItem iconName="mdi:laptop" title="Linked Devices"/>
      </View>

      <View style={{ height: 20 }} />
    </ScrollView>
 </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F7', 
  },
  scrollView: {
    flex: 1,
  },
  header: {
    paddingTop: 16,
    backgroundColor: '#fff',
    paddingBottom: 12,
    paddingHorizontal: 16,
  },
  headerTitle: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#000',
  },
  searchContainer: {
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5EA',
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F2F2F7',
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  searchInput: {
    flex: 1,
    marginLeft: 8,
    fontSize: 16,
    color: '#000',
  },
  banner: {
    backgroundColor:'#fff',
    marginHorizontal: 16,
    marginVertical: 12,
    padding: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E5E5EA',
  },
  bannerHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  bannerTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    flex: 1,
  },
  closeButton: {
    fontSize: 16,
    color: '#8E8E93',
    marginLeft: 8,
  },
  bannerText: {
    fontSize: 14,
    color: '#666',
    marginBottom: 12,
    lineHeight: 20,
  },
  manageButton: {
    backgroundColor: '#25D366',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  manageButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  section: {
    backgroundColor: '#fff',
    marginBottom:8,
  }, 
  profileItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
  avatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#E5E5EA',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  profileTextContainer: {
    flex: 1,
  },
  profileName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
  },
  profileStatus: {
    fontSize: 14,
    marginTop: 4,
    color: '#8E8E93',
  },
  qrBadge: {
    backgroundColor: '#25D366',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  qrText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '600',
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F2F2F7',
  },
  menuIconContainer: {
    width: 32,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  menuTextContainer: {
    flex: 1,
  },
  menuTitle: {
    fontSize: 16,
    color: '#000',
  },
  menuSubtitle: {
    fontSize: 14,
    color:'#8E8E93',
    marginTop: 2,
  },
});