import {
    collection,
    addDoc,
    serverTimestamp,
    query,
    getDocs,
    orderBy
} from "firebase/firestore";
import {
    db
} from "../Firebase/firebase.config"


export async function createPost(text, idUser) {
    const docRef = await addDoc(collection(db, "posts"), {
        texto: text,
        user: { uid: idUser },
        timestamp: serverTimestamp()

    });
    return docRef
}

export async function getPosts() {
    const postsCollection = query(collection(db, "posts"), orderBy("timestamp", "asc"));

    try {
        const querySnapshot = await getDocs(postsCollection);
        const posts = [];

        querySnapshot.forEach((doc) => {
            // é aqui que você pode mapear os dados de cada documento para o formato desejado crys
            const post = {
                id: doc.id,
                ...doc.data(),
            };
            posts.push(post);
        });

        return posts;
    } catch (error) {
        console.error("Erro ao buscar posts do Firestore:", error);
        return [];
    }
}