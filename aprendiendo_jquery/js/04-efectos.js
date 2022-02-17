"use strict";

$(document).ready(function () {
  console.log("CARGADO");

  $("#caja").hide();

  var btnMostar = $("#mostrar");
  var btnOcultar = $("#ocultar");
  btnOcultar.hide();

  btnMostar.click(function () {
    btnMostar.hide();
    btnOcultar.show();
    //$("#caja").fadeIn("slow");
    $("#caja").fadeTo("normal", 2);
  });

  btnOcultar.click(function () {
    btnMostar.show();
    btnOcultar.hide();
    //$("#caja").fadeOut("slow"); // TAmbien hay fast, slow y normal
    $("#caja").fadeTo("normal", 0);
  });

  $("#todoEnUno").click(function () {
    //$("#caja").toggle("normal");+
    $("#caja").fadeToggle("normal");


  });
});
