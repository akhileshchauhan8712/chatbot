let chatBox = document.getElementById("chat");
let messageInput = document.getElementById("message");
let sendButton = document.getElementById("send-btn");

function addMessage(text, who) {
  let newMessage = document.createElement("div");
  newMessage.className = "message " + who;
  newMessage.innerText = text;
  chatBox.appendChild(newMessage);
}

function sendMessage() {
  let text = messageInput.ariaValueMax;

  if (text === "") {
    return;
  }

  addMessage(text, "user");
  messageInput.value = "";

  addMessage("I hear you! We will connect this to flask next.", "bot");
}

sendButton.onclick = sendMessage;

messageInput.onkeydown = function (event) {
  if (event.key === "Enter") {
    sendMessage();
  }
};
