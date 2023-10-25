import {
    collection,
    addDoc,
    serverTimestamp,
    query,
    orderBy,
    onSnapshot,
    deleteDoc,
    doc,
    updateDoc,
} from "firebase/firestore";
import {
    db
} from "../Firebase/firebase.config"
import { getUserData } from "./firebaseauth.js";


export async function createPost(text, idUser) {
    const docRef = await addDoc(collection(db, "posts"), {
        texto: text,
        user: { uid: idUser },
        timestamp: serverTimestamp(),
        nickname: getUserData().displayName,

    });
    return docRef
}

export async function getPosts(callback) {
    const postsCollection = query(collection(db, "posts"), orderBy("timestamp", "asc"));
    onSnapshot(postsCollection, function (querySnapshot) {
        const posts = [];

        querySnapshot.forEach((doc) => {
            // é aqui que você pode mapear os dados de cada documento para o formato desejado crys
            const post = {
                id: doc.id,
                ...doc.data(),
            };
            posts.push(post);
        });
        callback(posts);
    })

}

export async function deletePost(id) {
    const resp = await deleteDoc(doc(db, "posts", id))
    return resp
}
    
export function atualizaPost(postId, novoTexto) {
    const postRef = doc(db, "posts", postId);
    updateDoc(postRef, {
        texto: novoTexto
    });  
}