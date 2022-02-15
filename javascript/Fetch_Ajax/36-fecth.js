"use strict";

// Fetch (ajax) y peticiones a servicicios / apis rest

// las peticiones son fetch --> peticiones asincronas
// las promesas, los then, nos aseguran que va a ir poco a poco

var div_users = document.querySelector("#usuarios");
var div_janet = document.querySelector("#janet");
function getUsers() {
  return fetch("https://reqres.in/api/users");
}

function getJanet() {
  return fetch("https://reqres.in/api/users/2");
}

var usuarios = [];

function listaUsuarios(usuarios) {
  usuarios.map((user, index) => {
    let nombre = document.createElement("h3");
    nombre.innerHTML = index + " : " + user.first_name + " " + user.last_name;
    div_users.appendChild(nombre);
  });
  document.querySelector(".loading1").style.display = "none";
  console.table(usuarios);
}

function mostrarJanet(janet) {
  let nombre = document.createElement("h3");
  let imagen = document.createElement("img");
  nombre.innerHTML =
    janet.id + " : " + janet.first_name +" --> " + janet.email;
  div_janet.appendChild(nombre);

  imagen.src = janet.avatar;
  div_janet.appendChild(imagen);



  document.querySelector(".loading2").style.display = "none";
  console.log(janet);
}

getUsers()
  .then((data) => data.json())
  .then((users) => {
    listaUsuarios(users.data);
    return getJanet();
  })
  .then((data) => data.json())
  .then((janet) => {
    mostrarJanet(janet.data);
  })
  .catch((err) => {
    console.error("Error cargando datos ", err);
  });
