import {
    collection,
    addDoc,
    serverTimestamp,
    query,
    getDocs,
    orderBy,
    onSnapshot,
} from "firebase/firestore";
import {
    db
} from "../Firebase/firebase.config"


export async function createPost(text, idUser) {
    const docRef = await addDoc(collection(db, "posts"), {
        texto: text,
        user: { uid: idUser },
        timestamp: serverTimestamp(),
        nickname: "NICKNAME_DO_USUÁRIO",

    });
    return docRef
}

export function extractNicknameFromEmail(email) {
    const emailParts = email.split('@'); // Divide o email em duas partes
    if (emailParts.length > 0) {
        return emailParts[0]; // O nickname é a primeira parte do email
    }
    return 'usuario'; // Retorna um valor padrão caso o email não seja válido
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