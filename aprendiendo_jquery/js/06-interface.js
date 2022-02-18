"use strict";

$(document).ready(function () {
  console.log("Cargado 06-interface.js");

    // ! Moverlos 
    $(".elemento").draggable();

    // ! resizable
    $(".elemento").resizable();


    // ! seleccionar elmentos
   // $(".lista_seleccionable").selectable();

    //! Ordenar elementos
    $(".lista_seleccionable").sortable();

    $("#save").click(function(){
        $("li").each(function(index, element){
            console.log(element.innerHTML);
            //console.log(index);
        })
    })

});
