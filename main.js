const draggableElements = document.querySelectorAll(".draggable");
const droppableElements = document.querySelectorAll(".droppable");

draggableElements.forEach(elem => {
  elem.addEventListener("dragstart", dragStart);
  elem.addEventListener("drag", drag);
  elem.addEventListener("dragend", dragEnd);
});

droppableElements.forEach(elem => {
  elem.addEventListener("dragenter", dragEnter);
  elem.addEventListener("dragover", dragOver);
  elem.addEventListener("dragleave", dragLeave);
  elem.addEventListener("drop", drop);
});

function dragStart(e) {
  e.dataTransfer.setData("text", e.target.id);
}

function drag() {
  console.log("drag")
}

function dragEnd() {
  console.log("drop")
}

function dragEnter(e) {
  if(!e.target.classList.contains("dropped")) {
    e.target.classList.add("droppable-hover");
  }
  }
  

function dragOver(e) {
  if(!e.target.classList.contains("dropped")) {
  e.preventDefault();
}
}

function dragLeave(e) {
  if(!e.target.classList.contains("dropped")) {
  e.target.classList.remove("droppable-hover");
}
}

function drop(e) {
  e.preventDefault();
  e.target.classList.remove("droppable-hover");
  const draggableElementData = e.dataTransfer.getData("text");
  const droppableElementData = e.target.getAttribute("data-draggable-id");
  if (draggableElementData === droppableElementData) {
    e.target.classList.add("dropped");
    const draggableElement = document.getElementById(draggableElementData);
    e.target.style.backgroundColor = draggableElement.style.color;
    // e.target.style.backgroundColor = window.getComputedStyle(draggableElement).color;
    draggableElement.classList.add("dragged");
    draggableElement.setAttribute("draggable", "false");
    e.target.insertAdjacentHTML("afterbegin", `<i class="fas fa-${draggableElementData}"></i>`);
  }
}
