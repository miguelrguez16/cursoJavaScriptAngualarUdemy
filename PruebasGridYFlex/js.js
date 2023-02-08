"use strict";

$(document).ready(function () {
    var caja = $("#caja");

    $("#button-to-collapse").click(function () {
        caja.hide();
        $("#button-to-collapse").css("display", "none");
        $("#button-to-show").css("display", "");
        $("#leftSideDiv").css("background-color", "rgb(73, 162, 240)")
        $("#leftSideDiv").css("height", "100vh")

    })

    $("#button-to-show").click(function () {
        caja.show();
        $("#button-to-show").css("display", "none");
        $("#button-to-collapse").css("display", "");
        $("#leftSideDiv").css("height", "fit-content");
        $("#leftSideDiv").css("background-color", "")


    })
})
