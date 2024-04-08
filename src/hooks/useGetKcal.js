import { useEffect, useState } from "react";
import { db } from "../config/firebase-config";
import {
  query,
  collection,
  where,
  orderBy,
  onSnapshot,
} from "firebase/firestore";
import { useGetUserInfo } from "./useGetUserInfo";

export const useGetKcal = () => {
  const kcalCollectionRef = collection(db, "kcal"); //refferce for collection
  const { userID } = useGetUserInfo(); //user info
  const [kcalDb, setKcalDb] = useState([]);
  const getKcal = async () => {
    let unsubscribe;
    try {
      const queryKcal = query(
        kcalCollectionRef,
        where("userID", "==", userID),
        orderBy("createdAt")
      );
      unsubscribe = onSnapshot(queryKcal, (snapshot) => {
        let docs = [];
        snapshot.forEach((doc) => {
          const data = doc.data();
          const id = doc.id;
          docs.push({ ...data, id });
          //  this function converts the timestamp time format from second to date
          function convertTimestamp(timestamp) {
            let date = timestamp.toDate();
            let mm = date.getMonth();
            let dd = date.getDate();
            let yyyy = date.getFullYear();

            date = mm + "/" + dd + "/" + yyyy;
            console.log(date);
            return date;
          }
          convertTimestamp(data.createdAt);
        });
        setKcalDb(docs);
      });
    } catch (error) {
      console.log(error);
    }
    return () => unsubscribe();
  };
  useEffect(() => {
    getKcal();
  }, []);
  return { kcalDb };
};
