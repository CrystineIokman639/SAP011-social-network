import { doc, 
    setDoc,
    collection,
    addDoc,
    getDocs,
    updateDoc,
    arrayUnion,
    arrayRemove,
    deleteDoc} from "firebase/firestore"; 


    function createPost(text, idUser){
        const docRef = await addDoc(collection(db, "posts"), {
         texto: text,
         uid: idUser
        });
       }