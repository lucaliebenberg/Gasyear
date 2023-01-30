import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";

// import images
import UserCar from "../../assets/settings-car-image.png";
import SettingsNotificationIcon from "../../assets/notification-settings-icon.png";
import LogOutIcon from "../../assets/log-out-icon.png";
import EditProfileIcon from "../../assets/edit-icon.png";

const Settings = () => {
  return (
    <View style={styles.container}>
      <View style={styles.userInfoContainer}>
        <View style={styles.userInfo}>
          <Image source={UserCar} style={styles.userInfoImage} />
          <Text style={styles.userEmail}>thomasb@gmail.com</Text>
          <Text style={styles.userLocation}>South Africa</Text>
        </View>
      </View>
      <View style={styles.settingsInfoContainer}>
        <TouchableOpacity>
          <View style={styles.settingsInfo}>
            <Image
              source={SettingsNotificationIcon}
              style={styles.settingsInfoIcon}
            />
            <Text style={styles.settingsInfoText}>Notifications</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={styles.settingsInfo}>
            <Image source={EditProfileIcon} style={styles.settingsInfoIcon} />
            <Text style={styles.settingsInfoText}>Edit Profile</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={styles.settingsInfoLastItem}>
            <Image source={LogOutIcon} style={styles.settingsInfoIcon} />
            <Text style={styles.settingsInfoText}>Log Out</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: 50,
  },
  userInfoContainer: {
    paddingTop: 40,
  },
  userInfo: {
    justifyContent: "center",
    alignItems: "center",
  },
  userInfoImage: {
    width: 250,
    height: 170,
  },
  userEmail: {
    fontSize: 22,
    paddingTop: 18,
  },
  userLocation: {
    fontSize: 14,
    color: "grey",
    paddingTop: 10,
  },
  settingsInfoContainer: {
    display: "flex",
    flexDirection: "column",
    paddingTop: 120,
    paddingRight: 40,
    paddingLeft: 60,
  },
  settingsInfo: {
    display: "flex",
    flexDirection: "row",
    width: 300,
    paddingTop: 20,
    paddingBottom: 20,
    borderBottomWidth: 0.5,
    borderBottomColor: "#EBEAEA",
  },
  settingsInfoLastItem: {
    display: "flex",
    flexDirection: "row",
    width: 280,
    paddingTop: 20,
    paddingBottom: 20,
  },
  settingsInfoIcon: {
    width: 24,
    height: 24,
    marginRight: 20,
  },
  settingsInfoText: {
    fontSize: 20,
    marginLeft: 20,
  },
});
