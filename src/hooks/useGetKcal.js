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
    try {
      const queryKcal = query(
        kcalCollectionRef,
        where("userID", "=", userID),
        orderBy("createdAt")
      );
      onSnapshot(queryKcal, (snapshot) => {
        let docs = [];
        snapshot.forEach((doc) => {
          const data = doc.data();
          const id = doc.id;
          docs.push({ ...data, id });
        });
        setKcalDb(docs);
        console.log(kcalDb);
      });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getKcal();
  }, []);
};
