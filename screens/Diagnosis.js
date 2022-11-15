import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Alert,
} from "react-native";
import styled from "styled-components/native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { useNavigation } from "@react-navigation/native";

const Header = styled.ScrollView`
  flex-direction: column;
  padding: 10px;
  padding-top: 20px;
  background-color: "#D8D8D8";
`;
const Target = styled.View`
  flex-direction: row;
  margin: 5px;
`; // 3분할. 1. 질문 2. 예 체크박스 3. 아니오 체크박스

const Question = styled.Text`
  margin-left: 5px;
  margin-right: 5px;
  font-size: 15px;
`;

const goAlert = () => {
  Alert.alert(
    "자가진단 결과",
    "위험! 가까운 보건소나 치매안심센터를 방문하셔서 더 정확한 치매검진을 받아보시기 바랍니다.",
    [
      {
        text: "아니요",
        //onPress: () => navigate("Main"),
      },
      {
        text: "네",
        onPress: () => console.log("그렇다는데"),
        style: "cancel",
      },
    ],
    { cancelable: false }
  );
};

const goAlert2 = () => {
  Alert.alert(
    "자가진단 결과",
    "안전! 운동과 외부 사회 활동을 유지하시고 치매예방수칙 3.3.3을 잘 실천하셔서 치매를 예방하세요. 좀 더 정확한 치매검진을 원하신다면 가까운 보건소나 치매안심센터를 방문해주세요.", // 두번째 text: 그 밑에 작은 제목
    [
      {
        text: "아니요",
        //onPress: () => navigate("Main"),
      },
      {
        text: "네",
        onPress: () => console.log("그렇다는데"),
        style: "cancel",
      },
    ],
    { cancelable: false }
  );
};

const Submit = styled.TouchableOpacity`
  background-color: #ffda79;
  border-radius: 10px;
  padding: 10px;
  margin: 30px;
  margin-left: 120px;
  margin-right: 120px;
  border: 2px solid black;
`;
const NewLine = styled.Text`
  font-size: 5px;
`; // 줄간격이라고 보면 될듯

var cnt = 0;

const Diagnosis = ({ navigation: { navigate } }) => (
  <SafeAreaView>
    <Header>
      <Text>무언가를 자주 까먹는 나, 젊은 나이에 벌써 치매?</Text>
      <Text>혹시, 나도 영츠하이머?</Text>
      <Text>
        국립중앙의료원 산하 기관인 중앙치매센터에서 제시한 주관적 기억감퇴
        설문(SMCQ, Subjective Memory Complaints Questionnaire)에 지금
        참여해보세요. {`\n`}
      </Text>
      <Target>
        <Question>1. 기억력에 문제가 있다고 생각하십니까? </Question>
        <BouncyCheckbox
          size={15}
          fillColor="#ffda79"
          unfillColor="#FFFFFF"
          iconStyle={{ borderColor: "#ffda79" }}
          onPress={(isChecked) => (isChecked ? (cnt += 1) : (cnt -= 1))}
        />
      </Target>
      <NewLine>{"\n"}</NewLine>
      <Target>
        <Question>2. 기억력이 10년 전보다 나빠졌다고 생각하십니까?</Question>
        <BouncyCheckbox
          size={15}
          fillColor="#ffda79"
          unfillColor="#FFFFFF"
          iconStyle={{ borderColor: "#ffda79" }}
          onPress={(isChecked) => (isChecked ? (cnt += 1) : (cnt -= 1))}
        />
      </Target>
      <NewLine>{"\n"}</NewLine>
      <Target>
        <Question>3. 기억력이 또래에 비해 나쁘다고 생각하십니까?</Question>
        <BouncyCheckbox
          size={15}
          fillColor="#ffda79"
          unfillColor="#FFFFFF"
          iconStyle={{ borderColor: "#ffda79" }}
          onPress={(isChecked) => (isChecked ? (cnt += 1) : (cnt -= 1))}
        />
      </Target>
      <NewLine>{"\n"}</NewLine>
      <Target>
        <Question>4. 기억력 저하로 인해 일상생활에 불편을 느끼십니까?</Question>
        <BouncyCheckbox
          size={15}
          fillColor="#ffda79"
          unfillColor="#FFFFFF"
          iconStyle={{ borderColor: "#ffda79" }}
          onPress={(isChecked) => (isChecked ? (cnt += 1) : (cnt -= 1))}
        />
      </Target>
      <NewLine>{"\n"}</NewLine>
      <Target>
        <Question>5. 최근에 일어난 일을 기억하는 것이 어렵습니까?</Question>
        <BouncyCheckbox
          size={15}
          fillColor="#ffda79"
          unfillColor="#FFFFFF"
          iconStyle={{ borderColor: "#ffda79" }}
          onPress={(isChecked) => (isChecked ? (cnt += 1) : (cnt -= 1))}
        />
      </Target>
      <NewLine>{"\n"}</NewLine>
      <Target>
        <Question>6. 며칠 전에 나눈 대화 내용을 기억하기 어렵습니까?</Question>
        <BouncyCheckbox
          size={15}
          fillColor="#ffda79"
          unfillColor="#FFFFFF"
          iconStyle={{ borderColor: "#ffda79" }}
          onPress={(isChecked) => (isChecked ? (cnt += 1) : (cnt -= 1))}
        />
      </Target>
      <NewLine>{"\n"}</NewLine>
      <Target>
        <Question>7. 며칠 전에 한 약속을 기억하기 어렵습니까?</Question>
        <BouncyCheckbox
          size={15}
          fillColor="#ffda79"
          unfillColor="#FFFFFF"
          iconStyle={{ borderColor: "#ffda79" }}
          onPress={(isChecked) => (isChecked ? (cnt += 1) : (cnt -= 1))}
        />
      </Target>
      <NewLine>{"\n"}</NewLine>
      <Target>
        <Question>8. 친한 사람의 이름을 기억하기 어렵습니까?</Question>
        <BouncyCheckbox
          size={15}
          fillColor="#ffda79"
          unfillColor="#FFFFFF"
          iconStyle={{ borderColor: "#ffda79" }}
          onPress={(isChecked) => (isChecked ? (cnt += 1) : (cnt -= 1))}
        />
      </Target>
      <NewLine>{"\n"}</NewLine>
      <Target>
        <Question>9. 물건 둔 곳을 기억하기 어렵습니까?</Question>
        <BouncyCheckbox
          size={15}
          fillColor="#ffda79"
          unfillColor="#FFFFFF"
          iconStyle={{ borderColor: "#ffda79" }}
          onPress={(isChecked) => (isChecked ? (cnt += 1) : (cnt -= 1))}
        />
      </Target>
      <NewLine>{"\n"}</NewLine>
      <Target>
        <Question>10. 이전에 비해 물건을 자주 잃어버립니까?</Question>
        <BouncyCheckbox
          size={15}
          fillColor="#ffda79"
          unfillColor="#FFFFFF"
          iconStyle={{ borderColor: "#ffda79" }}
          onPress={(isChecked) => (isChecked ? (cnt += 1) : (cnt -= 1))}
        />
      </Target>
      <NewLine>{"\n"}</NewLine>
      <Target>
        <Question>11. 집 근처에서 길을 잃은 적이 있습니까?</Question>
        <BouncyCheckbox
          size={15}
          fillColor="#ffda79"
          unfillColor="#FFFFFF"
          iconStyle={{ borderColor: "#ffda79" }}
          onPress={(isChecked) => (isChecked ? (cnt += 1) : (cnt -= 1))}
        />
      </Target>
      <NewLine>{"\n"}</NewLine>
      <Target>
        <Question>12. 물건을 사려고 할 때 이름을 기억하기 어렵습니까?</Question>
        <BouncyCheckbox
          size={15}
          fillColor="#ffda79"
          unfillColor="#FFFFFF"
          iconStyle={{ borderColor: "#ffda79" }}
          onPress={(isChecked) => (isChecked ? (cnt += 1) : (cnt -= 1))}
        />
      </Target>
      <NewLine>{"\n"}</NewLine>
      <Target>
        <Question>13. 가스불, 전기불 끄는 것을 기억하기 어렵습니까?</Question>
        <BouncyCheckbox
          size={15}
          fillColor="#ffda79"
          unfillColor="#FFFFFF"
          iconStyle={{ borderColor: "#ffda79" }}
          onPress={(isChecked) => (isChecked ? (cnt += 1) : (cnt -= 1))}
        />
      </Target>
      <NewLine>{"\n"}</NewLine>
      <Target>
        <Question>14. 자주 사용하는 전화번호를 기억하기 어렵습니까?</Question>
        <BouncyCheckbox
          size={15}
          fillColor="#ffda79"
          unfillColor="#FFFFFF"
          iconStyle={{ borderColor: "#ffda79" }}
          onPress={(isChecked) => (isChecked ? (cnt += 1) : (cnt -= 1))}
        />
      </Target>
      <Submit onPress={() => (cnt >= 6 ? goAlert() : goAlert2())}>
        <Text style={{ textAlign: "center", fontSize: 20 }}>제출</Text>
      </Submit>
    </Header>
  </SafeAreaView>
);

export default Diagnosis;