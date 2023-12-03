$(document).ready(function(){
    // Adicione a classe 'active' ao item da barra de navegação correspondente à página atual
    var path = window.location.pathname;
    path = path.replace(/\/$/, "");
    path = decodeURIComponent(path);

    $(".navbar-nav a").each(function () {
      var href = $(this).attr('href');
      if (path.substring(0, href.length) === href) {
        $(this).closest('li').addClass('active');
      }
    });
  });