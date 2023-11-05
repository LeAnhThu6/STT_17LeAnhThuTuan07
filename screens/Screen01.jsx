import * as React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";

const Screen01 = (props) => {
  const { navigation, route } = props;
  const { navigate } = navigation;
  return (
    <View style={styles.apiScreen01}>
      <View style={[styles.apiScreen01Child, styles.textbox5Border]} />
      <Text style={styles.manageYourtask}>{`MANAGE YOUR TASK`}</Text>

      <View style={[styles.textbox5, styles.textbox5Layout]}>
        <TextInput
          placeholder="Enter your name"
          placeholderTextColor="#bcc1ca"
          style={[styles.enterYourName, styles.getStartedTypo]}
        ></TextInput>
        <Image
          style={styles.frameIcon}
          source={require("../assets/mail.png")}
        />
      </View>

      <Image
        style={styles.image92Icon}
        contentFit="cover"
        source={require("../assets/note.png")}
      />
      <TouchableOpacity
        style={[styles.button10]}
        onPress={() => navigate("Screen02")}
      >
        <Text style={[styles.getStarted]}>GET STARTED {"->"}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  textbox5Border: {
    borderWidth: 1,
    borderColor: "#9095a0",
    borderStyle: "solid",
  },
  container14IconPosition: {
    left: 0,
    top: 0,
    position: "absolute",
  },

  getStartedTypo: {
    textAlign: "left",
    lineHeight: 26,
    fontSize: 16,
    top: "50%",
    position: "absolute",
    width: "80%",
  },
  apiScreen01Child: {
    backgroundColor: "rgba(222, 225, 230, 0.17)",
    width: 389,
    height: 843,
    left: 0,
    top: 0,
    position: "absolute",
  },
  manageYourtask: {
    marginLeft: -194,
    top: 395,
    fontSize: 24,
    lineHeight: 36,
    fontWeight: "700",
    color: "#8353e2",
    textAlign: "center",
    width: 390,
    left: "50%",
    position: "absolute",
  },
  container14Icon: {
    right: 0,
    maxWidth: "100%",
    height: 40,
    overflow: "hidden",
  },
  enterYourName: {
    marginTop: -12.5,
    left: 44,
  },
  frameIcon: {
    marginTop: -9.5,
    left: 16,
    width: 20,
    height: 20,
    top: "50%",
    position: "absolute",
    overflow: "hidden",
  },
  textbox5: {
    top: 527,
    right: 28,
    left: 28,
    backgroundColor: "rgba(0, 0, 0, 0)",
    height: 43,
    width: "85%",
    borderWidth: 1,
    borderColor: "#9095a0",
    borderStyle: "solid",
  },
  getStarted: {
    color: "white",
    margin: "auto",
    fontWeight: "700",
    fontSize: 17,
  },
  button10: {
    top: 550,
    margin: "center",
    backgroundColor: "#00bdd6",
    height: 44,
    overflow: "hidden",
    borderRadius: 12,
    width: 300,
    left: 50,
  },
  image92Icon: {
    top: 100,
    left: 74,
    width: 243,
    height: 243,
    position: "absolute",
  },
  image95Icon: {
    top: 82,
    left: 60,
    width: 271,
    height: 271,
    position: "absolute",
  },
  apiScreen01: {
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default Screen01;
