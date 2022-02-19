"use strict";
$(document).ready(function () {
  //console.log("cargado");

  // ! SLIDER
  $(".bxslider").bxSlider({
    mode: "fade",
    captions: true,
    slideWidth: 1200,
    pager: false,
  });

  // ! LOS DIFERENTES POST
  var posts = [
    {
      title: "Titulo de miguel 1",
      date: moment().format("[Publicado el] D [de] MMMM [del] YYYY, h:mm A"),
      content:
        "El Samsung Galaxy S22 Ultra supone uno de los movimientos mas importantes de la compañía en los últimos años. Muere el Galaxy Note, en pos de un modelo Ultra que hereda tanto su diseño como el aspecto más diferencial de esta familia, el S-Pen.",
    },
    {
      title: "Titulo de miguel 2",
      date: moment().format("[Publicado el] D [de] MMMM [del] YYYY, h:mm A"),
      content:
        "El Samsung Galaxy S22 Ultra supone uno de los movimientos mas importantes de la compañía en los últimos años. Muere el Galaxy Note, en pos de un modelo Ultra que hereda tanto su diseño como el aspecto más diferencial de esta familia, el S-Pen.",
    },
    {
      title: "Titulo de miguel 3",
      date: moment().format("[Publicado el] D [de] MMMM [del] YYYY, h:mm A"),
      content:
        "El Samsung Galaxy S22 Ultra supone uno de los movimientos mas importantes de la compañía en los últimos años. Muere el Galaxy Note, en pos de un modelo Ultra que hereda tanto su diseño como el aspecto más diferencial de esta familia, el S-Pen.",
    },
    {
      title: "Titulo de miguel 4",
      date: moment().format("[Publicado el] D [de] MMMM [del] YYYY, h:mm A"),
      content:
        "El Samsung Galaxy S22 Ultra supone uno de los movimientos mas importantes de la compañía en los últimos años. Muere el Galaxy Note, en pos de un modelo Ultra que hereda tanto su diseño como el aspecto más diferencial de esta familia, el S-Pen.",
    },
  ];
  //console.table(posts);

  posts.forEach((item, index) => {
    var post = `<article class="post">
            <h2>${item.title}</h2>
            <span class="date">${item.date}</span>
            <p>
            ${item.content}
            </p>
            <a href="" class="button-more">Leer más...</a>
          </article>`;
    // console.log(post);
    $("#posts").append(post);
  });

  // * ID del enlace al css
  var theme = $("#theme");

  $("#to-purple").click(function () {
    theme.attr("href", "css/purple.css");
  });
  $("#to-red").click(function () {
    theme.attr("href", "css/red.css");
  });
  $("#to-blue").click(function () {
    theme.attr("href", "css/blue.css");
  });
});
