import React, { useEffect } from "react";
import { Text, Alert, View } from "react-native";
//import { RecordText1, RecordText2, RecordText3, RecordText4 } from "../../atom";
import { TodayDate, TimelineData } from "../../atom";
import { RecordResponse, UserIDNumber } from "../../atom";
import { useRecoilState, atom } from "recoil";
import Timeline from "react-native-timeline-flatlist";
import styled from "styled-components/native";
import axios from "axios";
const TimeLine = () => {
  const [userIDNumber, setUserIDNumber] = useRecoilState(UserIDNumber);
  const [recordResponse, setRecordResponse] = useRecoilState(RecordResponse);
  const [timelineData, setTimelineData] = useRecoilState(TimelineData); // 타임라인 데이터
  return (
    <Timeline
      data={timelineData}
      separator={true}
      lineColor="#D4D4D4"
      innerCircle="icon"
      circleColor="white"
      circleSize={30}
      descriptionStyle={{ color: "gray" }}
      options={{
        style: { padding: 20 },
      }}
      onEventPress={(event) => {
        console.log(event);
        Alert.alert("선택하신 가전 제품을 실행합니다.");
      }}
    />
  );
};
const DailyQuizButton = () => {
  const tmp = "Request the quiz";
  const postToServer = () => {
    axios
      .post(
        "http://ec2-52-79-187-71.ap-northeast-2.compute.amazonaws.com:8080/quiz",
        tmp
      )
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <Target
      onPress={() => {
        postToServer();
        Alert.alert("오늘의 퀴즈를 생성합니다.");
      }}
    >
      <Txt>📝 퀴즈 생성</Txt>
    </Target>
  );
};
const Days = ({ navigation: { navigate } }) => {
  // 하늘: 서버로부터 추천 목록이랑 실제 실행 목록 두가지 api가 넘어온다.
  // 실제실행: [세탁기] 전체(=추천): [세탁기, 스타일러]인데
  // 둘 다 띄워주면 세탁기 세탁기 스타일러. 이렇게 뜨면 안되니까
  // 전체에 있는 세탁기가 실제실행 리스트에 있을 경우 전체에서 빼주는 식으로 해야할듯
  const [todayDate, setTodayDate] = useRecoilState(TodayDate);
  return (
    <Body style={{ flex: 1 }}>
      <Back
        style={{ marginTop: 20, marginLeft: 10 }}
        onPress={() => navigate("Main", { screen: "Home" })} // Root에 있는 name=""을 앞에 적어줘야함
      >
        <Text style={{ fontSize: 30 }}>🔙</Text>
      </Back>
      <View style={{ flex: 2.5 }}>
        <Title style={{ marginBottom: 30 }}>{todayDate} 타임라인</Title>
        <TimeLine />
      </View>
      <View style={{ flex: 1, marginTop: 5 }}>
        <View style={{ flex: 1, marginTop: 20 }}>
          <DailyQuizButton />
        </View>
      </View>
    </Body>
  );
};

const Txt = styled.Text`
  font-size: 13px;
  font-weight: bold;
`;
const Target = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  background-color: #ffda79;
  border-radius: 10px;
  margin-left: 140px;
  margin-right: 140px;
  margin-bottom: 150px;
  padding: 10px;
  box-shadow: 1px 1px 3px rgba(41, 30, 95, 0.9);
  flex: 1;
`;
const Body = styled.View`
  flex-direction: column;
  padding-top: 20px;
  background-color: white;
`;
const Back = styled.TouchableOpacity``;
const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
  margin-top: 20px;
  text-align: center;
`;
export default Days;
