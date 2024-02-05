import { addDoc } from "firebase/firestore";
import { db } from "../config/firebase-config";
export const useAddKcal = () => {
  const kcalCollectionRefercence = collection(db, "kcal");
  const addKcal = async () => {
    await addDoc();
  };
};
