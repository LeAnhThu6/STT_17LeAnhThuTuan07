import React, { useEffect, useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Image } from "expo-image";
import { FontFamily, FontSize, Color } from "../GlobalStyles";

const Screen03 = ({ navigation, route }) => {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const { handleUpdateData } = route.params;

  useEffect(() => {
    // Lấy danh sách todo từ API khi component được tạo lần đầu tiên
    fetch("https://653f2fdd9e8bd3be29e00ea4.mockapi.io/todos/1")
      .then((response) => response.json())
      .then((json) => {
        setTodos(json.todoList);
      });
  }, []); // Sử dụng mảng rỗng để đảm bảo useEffect chỉ chạy một lần

  const handleAddTodo = () => {
    // Thêm todo mới vào danh sách todo hiện tại
    const newTodo = {
      name: inputText,
      check: false,
    };

    fetch("https://653f2fdd9e8bd3be29e00ea4.mockapi.io/todos/1", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        todoList: [...todos, newTodo],
      }),
    });
    handleUpdateData();
    navigation.push("Screen02", { update: handleUpdateData });
  };

  return (
    <View style={styles.apiScreen03}>
      <Text style={[styles.addYourJob, styles.hiTwinkleTypo]}>
        ADD YOUR JOB
      </Text>
      <TouchableOpacity
        onPress={() => {
          handleAddTodo();
        }}
      >
        <View style={styles.button58}>
          <Text style={[styles.finish, styles.textTypo]}>{`FINISH ->`}</Text>
        </View>
      </TouchableOpacity>
      <Image
        style={styles.image96Icon}
        contentFit="cover"
        source={require("../assets/note.png")}
      />
      <View style={[styles.groupParent, styles.groupFlexBox]}>
        <View style={styles.frameParent}>
          <TouchableOpacity style={[styles.frame, styles.frameLayout]}>
            <Image
              style={[styles.rectangleIcon, styles.frameLayout]}
              contentFit="cover"
              source={require("../assets/avatar.png")}
            />
          </TouchableOpacity>
          <Text style={[styles.hiTwinkle, styles.hiTwinkleTypo]}>
            Hi Twinkle
          </Text>
          <Text style={[styles.haveAgrateDay, styles.textLayout]}>
            Have agrate day a head
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Image
            style={styles.iconButton12}
            contentFit="cover"
            source={require("../assets/back.png")}
          />
        </TouchableOpacity>
      </View>

      <View style={[styles.textbox20Parent, styles.textbox20Layout]}>
        <View style={[styles.textbox20, styles.textbox20Layout]}></View>
        <View style={[styles.frameGroup, styles.groupFlexBox]}>
          <Image
            style={styles.frameIcon}
            contentFit="cover"
            source={require("../assets/frame.png")}
          />
          <TextInput
            value={inputText}
            onChangeText={(text) => setInputText(text)}
            placeholder="input your job"
            placeholderTextColor="#bcc1ca"
            style={[styles.inputYourJob, styles.textLayout]}
          ></TextInput>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  hiTwinkleTypo: {
    textAlign: "center",
    fontFamily: FontFamily.epilogueBold,
    fontWeight: "700",
    position: "absolute",
  },
  textTypo: {
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
  },
  groupFlexBox: {
    flexDirection: "row",
    position: "absolute",
  },
  frameLayout: {
    width: 50,
    height: 50,
    position: "absolute",
  },
  textLayout: {
    lineHeight: 22,
    fontSize: FontSize.size_sm,
    color: Color.colorGray,
  },
  textbox20Border: {
    borderWidth: 1,
    borderColor: Color.colorLightslategray,
    borderStyle: "solid",
    top: 0,
  },
  textbox20Layout: {
    width: 334,
    height: 44,
    position: "absolute",
  },
  addYourJob: {
    marginLeft: -114,
    top: 154,
    fontSize: 32,
    lineHeight: 48,
    color: Color.colorGray,
    textAlign: "center",
    fontFamily: FontFamily.epilogueBold,
    fontWeight: "700",
    left: "50%",
  },
  finish: {
    marginTop: -13,
    marginLeft: -36,
    fontSize: 16,
    lineHeight: 26,
    color: Color.colorWhite,
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  button58: {
    top: 339,
    borderRadius: 12,
    backgroundColor: "#00bdd6",
    height: 44,
    width: 190,
    marginLeft: -95,
    left: "50%",
    position: "absolute",
    overflow: "hidden",
  },
  image96Icon: {
    top: 497,
    height: 170,
    width: 190,
    marginLeft: -95,
    left: "50%",
    position: "absolute",
  },
  rectangleIcon: {
    marginTop: -25,
    marginLeft: -25,
    top: "50%",
    left: "50%",
  },
  frame: {
    borderRadius: 25,
    backgroundColor: "#d9cbf6",
    left: 0,
    top: 0,
    overflow: "hidden",
  },
  hiTwinkle: {
    left: 69,
    fontSize: 20,
    lineHeight: 30,
    top: 0,
    color: Color.colorGray,
    textAlign: "center",
    fontFamily: FontFamily.epilogueBold,
    fontWeight: "700",
  },
  haveAgrateDay: {
    top: 26,
    left: 57,
    opacity: 0.75,
    textAlign: "center",
    fontFamily: FontFamily.epilogueBold,
    fontWeight: "700",
    position: "absolute",
    fontSize: FontSize.size_sm,
  },
  frameParent: {
    width: 225,
    height: 50,
  },
  iconButton12: {
    borderRadius: 18,
    width: 36,
    height: 36,
    marginLeft: 56,
    overflow: "hidden",
  },
  groupParent: {
    marginLeft: -158,
    top: 51,
    alignItems: "center",
    left: "50%",
  },
  apiScreen03Child: {
    left: 1,
    backgroundColor: "rgba(222, 225, 230, 0.17)",
    width: 389,
    height: 843,
    position: "absolute",
  },
  text: {
    marginTop: -10.5,
    left: 12,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    top: "50%",
    position: "absolute",
  },
  textbox20: {
    borderRadius: 4,
    borderWidth: 1,
    borderColor: Color.colorLightslategray,
    borderStyle: "solid",
    top: 0,
    left: 0,
    backgroundColor: Color.colorWhite,
  },
  frameIcon: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  inputYourJob: {
    width: 250,
    marginLeft: 11,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
  },
  frameGroup: {
    marginTop: -12,
    left: 9,
    top: "50%",
  },
  textbox20Parent: {
    top: 232,
    left: 28,
  },
  apiScreen03: {
    shadowColor: "rgba(18, 15, 40, 0.12)",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 6,
    elevation: 6,
    shadowOpacity: 1,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
});

export default Screen03;
