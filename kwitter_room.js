const firebaseConfig = {
  apiKey: "AIzaSyCSFMLIy68CpzevH4Dct06OVbFufEQ7H-Y",
  authDomain: "projetos-36312.firebaseapp.com",
  databaseURL: "https://projetos-36312-default-rtdb.firebaseio.com",
  projectId: "projetos-36312",
  storageBucket: "projetos-36312.appspot.com",
  messagingSenderId: "770481143424",
  appId: "1:770481143424:web:2a781be55f86ec8f4a7065",
};

firebaseConfig.initializeApp(firebaseConfig);

let mostrarUsuario = document.getElementById("usuario");
mostrarUsuario.innerHTML = localStorage.getItem("usuario");

function logout() {
  window.location = "index.html";
}
