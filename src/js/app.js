import burger from "./functions/burger.js";
import fileWrap from "./functions/fileWrap.js";
import heroOffset from "./functions/heroOffset.js";
import inputmask from "./functions/inputmask.js";
import map from "./functions/map.js";
import more from "./functions/more.js";
import sliders from "./functions/sliders.js";
import spoller from "./functions/spollers.js";
import tab from "./functions/tabs.js";

document.addEventListener("DOMContentLoaded", () => {
  burger();
  inputmask();
  fileWrap();
  heroOffset();
  sliders();
  more();
  tab();
  map();
  spoller();

  Fancybox.bind("[data-fancybox]", {
    closeButton: false,
    on: {
      destroy: (instance) => {
        const id = instance.getSlide().src;

        if (id.includes("#modal")) {
          const modal = document.querySelector(id);
          const inputNote = modal.querySelector(".input-note");
          const modalTitle = modal.querySelector(".modal__title[data-text]");

          if (inputNote) inputNote.value = "";
          if (modalTitle) modalTitle.textContent = modalTitle.dataset.text;
        }
      },
    },
  });
});
