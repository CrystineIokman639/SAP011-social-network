import {
    collection,
    addDoc
} from "firebase/firestore";
import{
    db
} from "../Firebase/firebase.config"
export async function createPost(text, idUser) {
    const docRef = await addDoc(collection(db, "posts"), {
        texto: text,
        user: { uid: idUser },
        timestamp: serverTimestamp() // Cria um timestamp representando a data/hora do servidor
    });
    return docRef
}
