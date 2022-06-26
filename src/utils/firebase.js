import { initializeApp } from "firebase/app";
import { doc, getFirestore, setDoc } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";
import getTimeNow from "./get_time_now";

const firebaseConfig = {
  apiKey: "AIzaSyCXwNwrwrCWn_eFhC9uu9plCpVj3Y7LSqc",
  authDomain: "doraemon-mbti-test.firebaseapp.com",
  projectId: "doraemon-mbti-test",
  storageBucket: "doraemon-mbti-test.appspot.com",
  messagingSenderId: "440204461574",
  appId: "1:440204461574:web:60906a8072fc227ff2e587",
  measurementId: "G-GEDMXMMWEC",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

//log information save
export const saveLogInfo = async (log_data) => {
  const time = getTimeNow();
  await setDoc(doc(db, "log_data", time), {
    deviceInfo: window.navigator.userAgent,
    test_result: log_data.test_result,
    myMBTI: log_data.myMBTI,
    myCharacter: log_data.myCharacter,
    time_full: new Date(),
    time: time,
  });
};

// const analytics = getAnalytics(app);
