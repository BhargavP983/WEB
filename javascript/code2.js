const messageIcon = document.querySelector("#message-icon");
const messageEl = document.querySelector("#message");
const close = messageEl.querySelector(".close");
const youtubeLink = document.querySelector(".youtubeLink");

messageIcon.addEventListener("click", () => {
  messageEl.classList.add("active");
});
close.addEventListener("click", () => {
  messageEl.classList.remove("active");
});

youtubeLink.setAttribute("href", "https://youtu.be/_HTL0XSMcRQ");