import React from "react";
import styled from "styled-components/native";
import { View, Text, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const CurrentSituation = ({ navigation: { navigate } }) => (
  <Container>
    <View style={{ justifyContent: "center", alignContent: "flex-start" }}>
      <TouchableOpacity
        style={{ marginTop: 30 }}
        onPress={() => navigate("Main", { screen: "Home" })}
      >
        <Text style={{ fontSize: 30 }}>๐</Text>
      </TouchableOpacity>
      <Txt>
        {"\n"}2020๋ ๊ธฐ์ค ๋ํ๋ฏผ๊ตญ ์ ์ฒด ์ธ๊ตฌ๋ 51,349,259๋ช์ด๋ฉฐ, ์ด์ค 15.8%๊ฐ
        65์ธ ์ด์ ๋ธ์ธ์ผ๋ก 8,134,675๋ช์ด๋ค. 65์ธ ์ด์ ๋ธ์ธ ์ค ์น๋งค๋ฅผ ์๊ณ  ์๋
        ์ฌ๋์ ์ฝ 83๋ง๋ช์ผ๋ก 10.2%์ ๋น์จ์ ๋ํ๋ธ๋ค. 65์ธ ์ด์ ์น๋งคํ์ ์ค
        ์์ธ ํ์ด๋จธํ ์น๋งค๊ฐ ๊ฐ์ฅ ๋ง๊ณ (์ฝ 75.5%), ๊ธฐํ ์ ํ์ ์น๋งค๋ 25%์
        ๋ถ๊ณผํ๋ค.{"\n"}
      </Txt>
      <View style={{ alignSelf: "center" }}>
        <Attached
          source={require("/Users/leesukcheol/memento/assets/images/current1.png")}
        />
      </View>
      <Txt>
        {"\n"}์ค์์น๋งค์ผํฐ๋ ์ ๊ตญ 65์ธ ์ด์ ์ถ์ ์น๋งคํ์์๋ 2020๋ ์ฝ 84๋ง๋ช,
        2030๋ 136๋ง๋ช, 2040๋ 217๋ง๋ช, 2050๋์๋ 300๋ง๋ช์ ๋์ ๊ฒ์ผ๋ก
        ์์ํ๋ค.{"\n"}
      </Txt>
      <View style={{ alignSelf: "center" }}>
        <Attached2
          source={require("/Users/leesukcheol/memento/assets/images/current2.png")}
        />
      </View>
      <Txt>
        {"\n"}์ธ๊ณ๋ณด๊ฑด๊ธฐ๊ตฌ(WHO)์ ๋ฐ๋ฅด๋ฉด ์  ์ธ๊ณ ์น๋งค์ธ๊ตฌ๋ ์ฝ 5,000๋ง๋ช์ด๋ฉฐ
        2050๋์๋ 1์ต 5,200๋ง๋ช์ผ๋ก 3๋ฐฐ ๋๊ฒ ์ฆ๊ฐํ  ๊ฒ์ผ๋ก ์ถ์ ๋๋ค.
        ์ธ๊ณ๋ณด๊ฑด๊ธฐ๊ตฌ๋ ์ธ๊ณ ์ฌ๋ง ์์ธ 5์๊ฐ ์น๋งค์์ ๋ฐํ๋ค. ์น๋งค๋ธ์ธ์คํ์กฐ์ฌ์
        ๋ฐ๋ฅด๋ฉด 2010๋ ์น๋งคํ์ 1์ธ๋น ์ฐ๊ฐ ๊ด๋ฆฌ๋น์ฉ์ 1,851๋ง์์ด๋ฉฐ 2020๋์๋
        2,061๋ง์์ผ๋ก ์ถ์ ๋๋ค. ์น๋งคํ์ 1์ธ๋น ์ฐ๊ฐ ๊ด๋ฆฌ๋น์ฉ์ ๊ฐ๊ตฌ๋น ์ํ๊ท 
        ์๋์ ์ด์ฉํ์ฌ ์ฐ์ถํ ์ฐ๊ฐ ๊ฐ๊ตฌ ์๋ 6,193๋ง์์ 33.2%๋ฅผ ์ฐจ์งํด, ๊ฒฝ์ ์ 
        ๋ถ๋ด์ด ๋งค์ฐ ํฌ๋ค.{"\n"}
      </Txt>
      <View style={{ alignSelf: "center" }}>
        <Attached3
          source={require("/Users/leesukcheol/memento/assets/images/current3.png")}
        />
      </View>
      <Txt>
        {"\n"}2020๋ ๊ธฐ์ค ์น๋งคํ์ ์ฐ๊ฐ ์ด ๊ตญ๊ฐ์น๋งค๊ด๋ฆฌ๋น์ฉ์ 17์กฐ 3์ฒ์ต์์ผ๋ก
        GDP์ ์ฝ 1%๋ฅผ ์ฐจ์งํ๋ค. 2020๋ ์ถ์ ์น๋งคํ์์ ๋๋ ๊ตญ๊ฐ ๋จ์
        ์น๋งค๊ด๋ฆฌ๋น์ฉ์ 17.3์กฐ์, 2040๋์๋ ์ฝ 56.9์กฐ์๊น์ง ์ฆ๊ฐํ  ๊ฒ์ผ๋ก
        ์ถ์ ๋๋ค.{"\n"}
      </Txt>
      <View style={{ alignSelf: "center" }}>
        <Attached4
          source={require("/Users/leesukcheol/memento/assets/images/current4.png")}
        />
      </View>
      <Txt>
        {"\n"}
        {"\n"}
        {"\n"}
      </Txt>
    </View>
  </Container>
);

const Container = styled.ScrollView`
  padding: 10px;
`;
const Attached = styled.Image`
  width: 300px;
  height: 200px;
  border: 1px solid gray;
`;
const Attached2 = styled.Image`
  width: 300px;
  height: 300px;
  border: 1px solid gray;
`;
const Attached3 = styled.Image`
  width: 314px;
  height: 144px;
  border: 1px solid gray;
`;
const Attached4 = styled.Image`
  width: 325px;
  height: 130px;
  border: 1px solid gray;
`;
const Txt = styled.Text`
  text-align: justify;
`;
export default CurrentSituation;
