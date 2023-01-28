let navli = document.querySelectorAll("nav li");
let navbg = document.querySelector("#navbg");
for (i=0; navli[i]; i++){
   navli[i].addEventListener ("mouseover", x => go(x.target.getAttribute("data-bg")));
   navli[i].addEventListener ("click", x => go(x.target.getAttribute("data-bg")));
}

function go(bgdata) {
  navbg.style.cssText = `top: ${16+(bgdata*10)}%`;
}
