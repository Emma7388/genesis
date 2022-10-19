const btnHambur = document.getElementById("btnHmabur");
const nav = document.querySelector(".navUl");
const navHambur = document.getElementById("transition");

btnHambur.addEventListener("click", () => {
  const navHidden = nav.classList.toggle("navUlHmbrg");
  if (navHidden) {
    return (nav.innerHTML = `
      <li class="aLi">
        <a class="liA" href="">Carrito</a></li>
      <li class="aLi">
        <a class="liA" href="">Catering</a></li>
      <li class="aLi">
        <a class="liA" href="">Servicios</a></li>
      <li class="aLi">
        <a class="liA" href="">Menú</a></li>
      <li class="aLi">
        <a class="liA" href="">Contáctanos</a></li>`);
  } else {
    return (nav.innerHTML = ``);
  }
});
