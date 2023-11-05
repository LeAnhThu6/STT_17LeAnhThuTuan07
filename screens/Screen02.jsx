import React, { useEffect, useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
  CheckBox,
} from "react-native";
import { Color, FontSize } from "../GlobalStyles";

const Screen02 = (props) => {
  const { navigation, route } = props;
  const { navigate, goBack } = navigation;
  var [dt, setDt] = useState({});
  const [checkedItems, setCheckedItems] = useState({});
  const [flag, setFlag] = useState(false);

  const handleUpdateData = () => {
    fetch("https://653f2fdd9e8bd3be29e00ea4.mockapi.io/todos/1")
      .then((response) => response.json())
      .then((json) => {
        setDt(json);
      });
  };

  console.log(dt);
  const handleCheck = (name) => {
    setDt({
      ...dt,
      todoList: dt.todoList.map((item) =>
        item.name === name ? { ...item, check: !item.check } : item
      ),
    });
    setFlag(!flag);
  };
  useEffect(() => {
    handleUpdateData();
    fetch(`https://653f2fdd9e8bd3be29e00ea4.mockapi.io/todos/1`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        todoList: dt.todoList,
      }),
    });
  }, [flag]);
  return (
    <View style={[styles.apiScreen02, styles.groupChildShadowBox]}>
      <View style={[styles.textbox18Parent, styles.textbox18Layout]}>
        <View style={[styles.textbox18, styles.textbox18Border]}>
          <Text style={[styles.text, styles.textTypo]} />
        </View>
        <Image
          style={styles.frameIcon}
          contentFit="cover"
          source={require("../assets/search.png")}
        />
        <Text style={[styles.search, styles.textTypo]}>Search</Text>
      </View>

      <View
        style={{
          width: "100%",
          height: 380,
          top: 200,
          borderBlockColor: "red",
        }}
      >
        {dt && (
          <FlatList
            data={dt.todoList}
            renderItem={({ item }) => (
              <View
                style={[styles.rectangleParent, styles.groupChildLayout]}
                key={item.name}
              >
                <CheckBox
                  style={[styles.frameIcon1, styles.frameIconLayout]}
                  value={item.check}
                  onValueChange={() => handleCheck(item.name)}
                />
                <Text style={styles.toCheckEmail}>{item.name}</Text>
                <Image
                  style={{
                    width: 20,
                    height: 20,
                    top: 11,
                    left: 291,
                    position: "absolute",
                  }}
                  contentFit="cover"
                  source={require("../assets/write.png")}
                />
              </View>
            )}
            keyExtractor={(item) => item.name}
          />
        )}
      </View>
      <TouchableOpacity
        onPress={() => {
          navigate("Screen03", { handleUpdateData });
        }}
      >
        <Image
          style={styles.apiScreen02Child}
          contentFit="cover"
          source={require("../assets/add.png")}
        />
      </TouchableOpacity>
      <View style={styles.iconButton11Parent}>
        <TouchableOpacity
          onPress={() => {
            goBack();
          }}
        >
          <Image
            style={styles.iconButton11}
            contentFit="cover"
            source={require("../assets/back.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={1}
          style={styles.frameParent}
          onPress={() => {
            handleUpdateData();
          }}
        >
          <View style={[styles.frame, styles.frameLayout]}>
            <Image
              style={[styles.rectangleIcon, styles.frameLayout]}
              contentFit="cover"
              source={require("../assets/avatar.png")}
            />
          </View>
          <Text style={[styles.hiTwinkle, styles.hiTwinkleTypo]}>
            Hi Twinkle
          </Text>
          <Text style={[styles.haveAgrateDay, styles.hiTwinkleTypo]}>
            Have agrate day a head
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupChildShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 3,
    },
  },
  textbox18Layout: {
    height: 44,
    width: 334,
  },
  textbox18Border: {
    borderWidth: 1,
    borderColor: Color.colorLightslategray,
    borderStyle: "solid",
    top: 0,
    position: "absolute",
  },
  textTypo: {
    textAlign: "left",
    color: Color.colorGray,
    lineHeight: 22,
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  groupChildLayout: {
    height: 48,
    width: 335,
  },
  frameIconLayout: {
    height: 24,
    width: 24,
    top: 12,
    position: "absolute",
    overflow: "hidden",
  },
  frameLayout: {
    width: 50,
    height: 50,
    position: "absolute",
  },
  hiTwinkleTypo: {
    textAlign: "center",
    fontWeight: "700",
    color: Color.colorGray,
    position: "absolute",
  },
  text: {
    marginTop: -10.5,
    left: 12,
    top: "50%",
  },
  textbox18: {
    borderRadius: 4,
    left: 0,
    height: 44,
    width: 334,
    backgroundColor: Color.colorWhite,
  },
  frameIcon: {
    top: 8,
    left: 8,
    width: 26,
    height: 26,
    position: "absolute",
    overflow: "hidden",
  },
  search: {
    top: 9,
    left: 43,
    width: 51,
    height: 28,
  },
  textbox18Parent: {
    top: 138,
    left: 28,
    position: "absolute",
  },
  groupChild: {},
  frameIcon1: {
    left: 22,
  },
  frameIcon2: {
    left: 291,
  },
  toCheckEmail: {
    top: 11,
    left: 59,
    fontSize: 16,
    lineHeight: 26,
    fontWeight: "700",
    textAlign: "left",
    color: Color.colorGray,
    position: "absolute",
  },
  rectangleParent: {
    marginTop: 10,
    left: 27,
    borderRadius: 24,
    backgroundColor: "rgba(222, 225, 230, 0.47)",
    shadowColor: "rgba(23, 26, 31, 0.12)",
    shadowRadius: 2,
    elevation: 2,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 3,
    },
  },
  apiScreen02Child: {
    top: 250,
    margin: "auto",
    height: 50,
    width: 50,
  },
  iconButton11: {
    borderRadius: 18,
    width: 36,
    height: 36,
    overflow: "hidden",
  },
  rectangleIcon: {
    marginTop: -25,
    marginLeft: -25,
    left: "50%",
    top: "50%",
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
  },
  haveAgrateDay: {
    top: 26,
    left: 57,
    opacity: 0.75,
    lineHeight: 22,
    fontSize: FontSize.size_sm,
    textAlign: "center",
  },
  frameParent: {
    width: 225,
    marginLeft: 99,
    height: 50,
  },
  iconButton11Parent: {
    marginLeft: -180,
    top: 51,
    flexDirection: "row",
    left: "50%",
    position: "absolute",
  },
  apiScreen02Item: {
    left: 1,
    backgroundColor: "rgba(222, 225, 230, 0.17)",
    width: 389,
    height: 843,
  },
  apiScreen02: {
    shadowColor: "rgba(18, 15, 40, 0.12)",
    shadowRadius: 6,
    elevation: 6,
    flex: 1,
    width: "100%",
    height: "100%",
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
});

export default Screen02;
