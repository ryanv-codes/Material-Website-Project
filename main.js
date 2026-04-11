const copyBtn = document.getElementById("copyBtn");
const npmText = document.getElementById("npmText");
const copyIcon = document.getElementById("copyIcon");

copyBtn.addEventListener("click", () => {
  navigator.clipboard.writeText(npmText.innerText);

  copyIcon.innerHTML = `<path d="M20 6L9 17l-5-5" stroke="#99a1af" stroke-width="2" fill="none"/>`;

  setTimeout(() => {
    copyIcon.innerHTML = `<rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
                          <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>`;
  }, 2000);
});
