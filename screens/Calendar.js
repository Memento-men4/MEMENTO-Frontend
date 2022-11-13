import React from "react";
import { Calendar } from "react-native-calendars";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import styled from "styled-components/native";

const Body = styled.View``;
const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 10px;
  margin-bottom: 0px;
`;
const Footer = styled.View``;
const Target = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  background-color: #ffda79;
  border-radius: 10px;
  padding: 20px;
  margin: 5px;
  flex: 1;
  border: 2px solid black;
`; // margin: 두 버튼 사이 간격

const Txt = styled.Text`
  font-size: 20px;
  font-weight: bold;
  padding: 5px;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 0px;
  padding-right: 0px;
  text-align: center;
`;

const Gom = styled.Image`
  width: 100px;
  height: 100px;
`;

const CalendarView = ({ navigation: { navigate } }) => {
  const markedDates = {
    "2022-11-01": { selected: true, marked: true, selectedColor: "#ffda79" },
    "2022-11-02": { marked: true },
    "2022-11-03": { marked: true, dotColor: "#ffda79", activeOpacity: 0 },
    "2022-11-04": { disabled: true, disableTouchEvent: true },
  };
  return (
    <Body>
      <Header>
        <Gom
          source={require("/Users/leesukcheol/noovies/assets/images/gom-unscreen.gif")}
        />
        <Text style={{ fontSize: 20, marginTop: 30, fontWeight: "bold" }}>
          안녕하세요 {"\n"} 이하늘 님!
        </Text>
        <Gom
          source={require("/Users/leesukcheol/noovies/assets/images/gom.png")}
        />
      </Header>
      <Calendar
        onDayPress={(day) => navigate("Stack", { screen: "Days" })} // 날짜 클릭하면 스택으로 이동
        //onDayPress={(day) => console.log("selected day", day)}
        markedDates={markedDates}
        hideExtraDays={true}
        style={styles.calendar}
        theme={{
          selectedDayBackgroundColor: "#ffda79",
          arrowColor: "#ffda79",
          dotColor: "#ffda79",
          todayButtonFontWeight: "bold",
          //textDayFontWeight: "bold",
          //textDayHeaderFontSize: 14,
          textDayHeaderFontWeight: "bold",
          textMonthFontWeight: "bold",
          arrowWidth: 100,
          arrowStyle: { padding: 10, margin: 10 },
          textMonthFontSize: 20,
          textDayFontSize: 15,
        }}
      ></Calendar>
      <Footer
        style={{
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <Target onPress={() => navigate("Stack", { screen: "Infos" })}>
          <Txt>영츠하이머 {"\n"} 예방 방법</Txt>
        </Target>
        <Target onPress={() => navigate("Stack", { screen: "Game" })}>
          <Txt>영츠하이머 {"\n"} 예방 게임</Txt>
        </Target>
      </Footer>
    </Body>
  );
};

const styles = StyleSheet.create({
  calendar: {
    marginTop: 10,
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
    borderRadius: 10,
  },
});

export default CalendarView;

// 그 기록 있는 날짜는 파랑 마크업 필요한데 그거 찾아서 넣기
