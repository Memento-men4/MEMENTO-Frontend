import React from "react";
import styled from "styled-components/native";
import { View, Text, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const Risk = ({ navigation: { navigate } }) => (
  <Container>
    <View style={{ justifyContent: "center", alignContent: "flex-start" }}>
      <TouchableOpacity
        style={{ marginTop: 30 }}
        onPress={() => navigate("Main", { screen: "Home" })}
      >
        <Text style={{ fontSize: 30 }}>π</Text>
      </TouchableOpacity>
      <Txt>
        {"\n"}
        μΉλ§€λ μμ§κΉμ§ μμΉκ° λΆκ°λ₯νλ©°, μ‘°κΈ°μ μνμμΈμ μ κ±°νκ±°λ κ΄λ¦¬νλ
        κ² μΈμλ λ°©λ²μ΄ μ‘΄μ¬νμ§ μλλ€.{"\n"}
        {"\n"}μ€μμΉλ§€μΌν°μ νκ΅­κ°€λ½μ΄ μ§νν μΉλ§€μΈμλ μ‘°μ¬μ λ°λ₯΄λ©΄, 60~69μΈ
        λΈμΈλ€μ΄ κ°μ₯ λλ €μνλ μ§λ³μ μΉλ§€(43%)μλ€.{"\n"}
        {"\n"}λνλ―Όκ΅­ 10λ μ¬λ§μμΈμ μ, μ¬μ₯ μ§ν, νλ ΄, λνκ΄ μ§ν, μμ΄,
        λΉλ¨λ³, μμΈ νμ΄λ¨Έλ³, κ° μ§ν, ν¨νμ¦, κ³ νμμ± μ§ν μμΌλ‘ λνλ¬λ€.
        {"\n"}
        {"\n"}μΉλ§€ νμλ μ λ°μ μΈ μΈμ§ λ₯λ ₯, κ³΅κ°μΈμ κ°κ°, κΈ°μ΅λ ₯ κ°ν΄, νλ¨λ ₯
        μ ν λ±μ μΌκΈ°νλ€.
      </Txt>
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
  width: 337px;
  height: 200px;
  border: 1px solid gray;
`;

const Txt = styled.Text`
  text-align: justify;
`;
export default Risk;
