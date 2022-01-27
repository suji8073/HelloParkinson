import React from "react";

export default React.createContext({
  user_id: "q",
  user_pw: "q",
  user_name: "관리자",
  change_exercise: [
    { id: "4-1", name: "  아에이오우 소리내기", set: 10 },
    { id: "4-2", name: "파파파파파 소리내기", set: 12 },
    { id: "4-3", name: "쪽 소리내기", set: 5 },
    { id: "4-4", name: "혀로 볼 밀기", set: 5 },
    { id: "4-5", name: "혀로 입천장 밀기", set: 3 },
    { id: "4-6", name: "똑딱 소리내기", set: 2 },
    { id: "4-7", name: "혀 물고 침 삼키기", set: 2 },
    { id: "4-8", name: "아 짧게 소리내기", set: 20 },
    { id: "4-9", name: "아 길게 소리내기", set: 2 },
    { id: "4-10", name: "고음 가성으로 소리내기", set: 2 },
    { id: "4-11", name: "도레미파솔라시도", set: 2 },
    { id: "4-12", name: "큰 소리로 음절 읽기", set: 2 },
  ],
  changePW: (pw) => {},
  changeID: (id) => {},
  changeNAME: (name) => {},
  changeEXCERCISE: (task) => {},
  deleteEXCERCISE: () => {},
});
