export default function fileWrap() {
  const wraps = document.querySelectorAll(".file-wrap");

  if (wraps.length) {
    wraps.forEach((wrap) => {
      const input = wrap.querySelector("input[type='file']");
      const fileNmae = wrap.querySelector(".file-name");

      input.addEventListener("change", (e) => {
        const files = e.target.files;

        if (files.length) {
          const file = files[0];
          fileNmae.textContent = file.name;
        }
      });
    });
  }
}
