export default function heroOffset() {
  const hero = document.querySelector(".s-hero");

  if (hero) {
    const formWrap = document.querySelector(".s-hero__form-wrap");

    function handlerOffset() {
      if (window.matchMedia("(min-width: 1026px)").matches) {
        hero.style.paddingBottom = formWrap.clientHeight + "px";
      }
    }

    handlerOffset();

    window.visualViewport.addEventListener("resize", handlerOffset);
    window.visualViewport.addEventListener("scroll", handlerOffset);
  }
}
