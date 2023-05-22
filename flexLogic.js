const panels = document.querySelectorAll(".panel");
function toggleOpen(){
  this.classList.toggle("open");
  panels.forEach((panel) => {
    if (panel !== this)
    {
      panel.classList.remove("open");
    }
  });
}
function toggleActive(e){
  if (e.propertyName.includes("flex"))
  {
    this.classList.toggle("open-active");
  }
}
panels.forEach((eachPanel) => eachPanel.addEventListener(
    "click", 
    toggleOpen
  )
);
panels.forEach((eachPanel) => eachPanel.addEventListener(
    "transitionend", 
    toggleActive
  )
);