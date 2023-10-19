function menuOnClick() {
    document.getElementById("menu-bar").classList.toggle("change");
    document.getElementById("nav").classList.toggle("change");
    document.getElementById("menu-bg").classList.toggle("change-bg");
  }
  const container = document.querySelector('.container');
  const scrollSpeed = 2; // Ajuste a velocidade de rolagem conforme necessário
  
  function scrollHorizontally() {
    container.scrollLeft += scrollSpeed;
  }
  
  setInterval(scrollHorizontally, 30); // Ajuste o intervalo de rolagem conforme necessário
  