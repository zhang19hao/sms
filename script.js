function saveMessage() {
  var messageInput = document.getElementById("messageInput");
  var message = messageInput.value;

  if (message.trim() !== "") {
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "/messages", true);
    xhr.setRequestHeader("Content-Type", "text/plain");
    xhr.onreadystatechange = function() {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
          console.log("Message saved successfully");
        } else {
          console.error("Error:", xhr.statusText);
        }
      }
    };
    xhr.send(message);
  }
}
