import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, onValue } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCJlxHyeqayc2decU3mZY3HkvylpgpSwNY",
  authDomain: "barbearia-will-estilos-ecc85.firebaseapp.com",
  projectId: "barbearia-will-estilos-ecc85",
  storageBucket: "barbearia-will-estilos-ecc85.appspot.com",
  messagingSenderId: "296207088239",
  appId: "1:296207088239:web:398f1ff801f2fe7ffdab9a",
  measurementId: "G-B48L8ESKC1"
};

const app = initializeApp(firebaseConfig);

// Obtenha uma referência ao banco de dados
const db = getDatabase(app);
const usersRef = ref(db, 'users');

// Função para adicionar um usuário ao banco de dados
function adicionarUsuario(nome, email, number, password) {
  set(ref(usersRef, nome), {
    nome: nome,
    email: email,
    number: number,
    password: password
  })
  .then(() => {
    console.log("Usuário adicionado com sucesso!");
  })
  .catch((error) => {
    console.error("Erro ao adicionar usuário: ", error);
  });
}

adicionarUsuario();

// Função para buscar todos os usuários do banco de dados
function buscarUsuarios() {
  onValue(usersRef, (snapshot) => {
    const data = snapshot.val();
    console.log("Lista de usuários:", data);
  });
}

// Exemplo de uso
buscarUsuarios();