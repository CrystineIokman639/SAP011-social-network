import {
    collection,
    addDoc,
    serverTimestamp,
    getDocs
} from "firebase/firestore";
import { db } from "./firebase.config";


export async function createPost(text, idUser) {
    const docRef = await addDoc(collection(db, "posts"), {
        texto: text,
        user: { uid: idUser },
        timestamp: serverTimestamp()

    });
    return docRef
}

export async function deletePost(id){
   const resp = await deleteDoc(doc(db,"posts",id))
   return resp
}