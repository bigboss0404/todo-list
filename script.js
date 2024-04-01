const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function AddTask() {
  if (inputBox.value === "") {
    alert("You Must Write Something");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);

    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = " ";
  SaveDate();
}

listContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      SaveDate();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      SaveDate();
    }
  },
  false
);

function SaveDate() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function ShowList() {
  listContainer.innerHTML = localStorage.getItem("data");
}
ShowList();
