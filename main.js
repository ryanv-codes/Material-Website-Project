// npm copy button
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

// FAQ Section
const questions = document.querySelectorAll(".question");

questions.forEach(function(question) {
  question.addEventListener("click", function() {
    const answer = question.nextElementSibling;
    const isOpen = answer.classList.contains("open");

    // Close all
    document.querySelectorAll(".answer").forEach(function(ans) {
      ans.classList.remove("open");
    });
    document.querySelectorAll(".question").forEach(function(q) {
      q.classList.remove("open");
    });

    // Open clicked one if it was closed
    if (!isOpen) {
      answer.classList.add("open");
      question.classList.add("open");
    }
  });
});
 
