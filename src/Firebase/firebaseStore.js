import {
    doc,
    setDoc,
    collection,
    addDoc,
    getDocs,
    updateDoc,
    arrayUnion,
    arrayRemove,
    deleteDoc
} from "firebase/firestore";
import { db } from "./firebase.config";


async function createPost(text, idUser) {
    const docRef = await addDoc(collection(db, "posts"), {
        texto: text,
        user: { uid: idUser }
    });
    return docRef
}

export async function deletePost(id){
   const resp = await deleteDoc(doc(db,"posts",id))
   return resp
}