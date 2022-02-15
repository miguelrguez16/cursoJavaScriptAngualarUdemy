"use strict";

// Fetch (ajax) y peticiones a servicicios / apis rest

var usuarios= [];


var div_users = document.querySelector("#usuarios")
if(div_users==null) alert("div null");

fetch("https://reqres.in/api/users")
    // capturamos los datos y lo convertirmos
  .then(data => data.json()) // la funcion de fecha ya te hace el return
    //filtramos los datos
  .then(users => {          //then tb llamados promesas
    usuarios = users.data;
    usuarios.map((user,index
    )=>{
        let nombre = document.createElement("h3");
        nombre.innerHTML = index + " : " + user.first_name + " " + user.last_name;
        div_users.appendChild(nombre);
    })
    console.table(usuarios);
  })
  .catch((err) => {
      console.error("Error cargando datos ", err);
  });

document.querySelector(".loading").style.display = "none";



