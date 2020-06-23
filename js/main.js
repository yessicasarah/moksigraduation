// functie voor de kolommen
function toggleColumn(id) {
  let element = document.getElementById(id),
  parent = element.parentNode;

  if (element.style.visibility === "hidden") {
    element.style.visibility = "visible";
    parent.style.overflow = "scroll";
  } else {
    element.style.visibility = "hidden";
    parent.style.overflow = "hidden";
  }
}

// functie voor de overlay
function toggleOverlay(id) {
  let elementToToggle = document.getElementById(id);
  let otherElement;

  if (elementToToggle.id === "overlayPlaylist") {
    otherElement = document.getElementById("overlaySources")
  } else {
    otherElement = document.getElementById("overlayPlaylist")
  }

  if (elementToToggle.style.display === "none") {
    if (otherElement.style.display === "block") {
      otherElement.style.display = "none"
    }
    elementToToggle.style.display = "block";
  } else {
    if (otherElement.style.display === "block") {
      otherElement.style.display = "none"
    }
    elementToToggle.style.display = "none";
  }
}
