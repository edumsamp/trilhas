window.onload = function(){

  const headerMenor = function(){
    let header = document.getElementById("header");
    let menu = document.getElementById("menu");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        header.className += " header2";
        menu.className += " menu1";
// console.log('oi');
    } else {
      header.className = "header";
      menu.className = "menu";
    }
  }

  const menuSumir = function(){
    let menu = document.getElementById("menu");
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        menu.className = "menu2";
        // console.log('oi');
    } else {
      menu.className = "menu";
    }
  }

  const aberturaSumir = function(){
    let abertura = document.getElementById("abertura");
    let intro = document.getElementById("intro");
    if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
        abertura.className += " abertura2";
        intro.className += " intro2";
  // console.log('oi');
    } else {
      abertura.className = "abertura";
      intro.className = "intro";
    }
  }

  const scroll = function(){
    aberturaSumir();
    menuSumir();
    headerMenor();
  }

  const trocarBanner = function(){

    let img1 = document.getElementById("img1");
    let img2 = document.getElementById("img2");
    let img3 = document.getElementById("img3");

    if (img1.className==="ativo") {
      img1.className = "inativo";
      img2.className = "ativo";
    }
      else if (img2.className === "ativo") {
      img2.className= "inativo";
      img3.className= "ativo";
      }
      else if (img3.className === "ativo") {
      img3.className= "inativo";
      img1.className= "ativo";
      }
  }

  const realce = function(){
    this.className += ' categoria2';
    let intro = document.getElementById("intro");
        // intro.className += " intro3";
  }

  const desrealce = function(){
    this.className = 'categoria';
    let intro = document.getElementById("intro");
        // intro.className += " intro4";
  }

  let categorias = document.getElementsByClassName('categoria');

  for (let categoria of categorias) {
    categoria.addEventListener('mouseover', realce);
    categoria.addEventListener('mouseleave', desrealce);
  }

  window.onscroll = scroll;
  setInterval(trocarBanner, 3000);

}
