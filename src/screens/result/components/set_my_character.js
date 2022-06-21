import { character_src } from "../../../data/secret";

// mbti맞춤
function setMBTI(result) {
  const result1 = result[0] ? 0 : 1;
  const result2 = result[1] ? 0 : 1;
  const result3 = result[2] ? 1 : 0;
  const result4 = result[3] ? 0 : 1;
  // const result5 = result[4] ? 1 : 0;
  // const result6 = result[5] ? 1 : 0;
  const result7 = result[6] ? 0 : 1;
  // const result8 = result[7] ? 1 : 0;
  const result9 = result[8] ? 1 : 0;
  const result10 = result[9] ? 0 : 1;
  const result11 = result[10] ? 1 : 0;
  const result12 = result[11] ? 1 : 0;
  const result13 = result[12] ? 1 : 0;

  const IorE = result1 + result4 + result11 >= 2 ? "I" : "E";
  const SorN = result7 + result9 + result13 >= 2 ? "S" : "N";
  const TorF = result2 + result12 >= 1 ? "T" : "F";
  const PorJ = result3 + result10 >= 2 ? "P" : "J";

  return IorE + SorN + TorF + PorJ;
}

// 도라에몽 캐릭터 맞춤
function setCharacter(result) {
  const result1 = result[0] ? 0 : 1;
  const result2 = result[1] ? 0 : 1;
  const result3 = result[2] ? 1 : 0;
  const result4 = result[3] ? 0 : 1;
  // const result5 = result[4] ? 1 : 0;
  const result6 = result[5] ? 1 : 0;
  const result7 = result[6] ? 0 : 1;
  const result8 = result[7] ? 1 : 0;
  const result9 = result[8] ? 1 : 0;
  const result10 = result[9] ? 0 : 1;
  const result11 = result[10] ? 1 : 0;
  const result12 = result[11] ? 1 : 0;
  const result13 = result[12] ? 1 : 0;

  const IorE = result1 + result4 + result11 >= 2 ? "I" : "E";
  const SorN = result7 + result9 + result13 >= 2 ? "S" : "N";
  const TorF = result2 + result12 >= 1 ? "T" : "F";
  const PorJ = result3 + result10 >= 2 ? "P" : "J";

  const myMBTI = IorE + SorN + TorF + PorJ;
  // 공식 MBTI
  if (myMBTI === "INFP") {
    return "노진구";
  }
  if (myMBTI === "ENFP") {
    return "도라에몽";
  }
  if (myMBTI === "ESFJ") {
    return "도라미";
  }
  if (myMBTI === "ISFJ") {
    return "신이슬";
  }
  if (myMBTI === "ESTP") {
    return "만퉁퉁";
  }
  if (myMBTI === "ENTP") {
    return "왕비실";
  }
  if (myMBTI === "ENFJ") {
    return "박영민";
  }
  if (myMBTI === "INFJ") {
    return "만퉁순";
  }
  if (myMBTI === "ISFP") {
    return "노석구";
  }
  if (myMBTI === "ISTP") {
    return "오진숙";
  }
  /// 여기서부터 추측
  if (myMBTI === "ISTJ") {
    return "만퉁순";
  }
  if (myMBTI === "INTP") {
    return "노진구";
  }
  if (myMBTI === "INTJ") {
    if (result8) {
      return "노진구";
    } else {
      return "만퉁순";
    }
  }
  if (myMBTI === "ESTJ") {
    return "만퉁퉁";
  }
  if (myMBTI === "ESFP") {
    if (result6) {
      return "만퉁퉁";
    } else {
      return "도라에몽";
    }
  }
  if (myMBTI === "ENTJ") {
    return "왕비실";
  }
}

function setCharacterSrc(name) {
  switch (name) {
    case "도라에몽":
      return character_src.doraemon;
    case "노진구":
      return character_src.nojingoo;
    case "도라미":
      return character_src.dorami;
    case "신이슬":
      return character_src.sinisuel;
    case "만퉁퉁":
      return character_src.mantoongtoong;
    case "만퉁순":
      return character_src.mantoongsoon;
    case "왕비실":
      return character_src.wangbisil;
    case "노석구":
      return character_src.nosukgoo;
    case "오진숙":
      return character_src.ojinsook;
    case "박영민":
      return character_src.parkyoungmin;
    default:
      return "error";
  }
}

export { setMBTI, setCharacter, setCharacterSrc };
