const postBtn = document.getElementById("post-btn");
const userComment = document.getElementsByClassName("user-comment");
const userName = document.getElementsByClassName("user-name");
const userMsg = document.getElementById("user-msg");

//post btn event
postBtn.addEventListener("click", function () {
  // comment container
  const commentContainer = document.getElementById("comment-container");
  // user single comment
  const singleComment = document.createElement("div");
  singleComment.classList.add("user-comment");
  // coment top
  const commentTop = document.createElement("div");
  commentTop.classList.add("comment-top");
  // comment user
  const commentUser = document.createElement("h4");
  commentUser.classList.add("user-name");
  //apend comment user as child of comment top
  commentTop.appendChild(commentUser);

  //user comment msg
  const userText = document.createElement("p");

  //appending element in single user comment
  singleComment.appendChild(commentTop);
  singleComment.appendChild(userText);

  //form area
  const textArea = document.getElementById("textarea");
  const inputName = document.getElementById("nameInput");

  userText.innerText = textArea.value;
  commentUser.innerText = inputName.value;

  //append child in comment container
  commentContainer.appendChild(singleComment);
  textArea.value = "";
  inputName.value = "";
  //   console.log(commentContainer);
});
