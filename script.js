function showView(view) {
  [...document.querySelectorAll(".view")].forEach(view => view.hidden = true);
  document.getElementById(view).hidden = false;
}
showView("main");

[...document.querySelectorAll(".back")].forEach(view => { view.onclick = () => showView("main") });

document.getElementById("show-tabs").onclick = () => showView("tabs");
document.getElementById("show-text-fields").onclick = () => showView("text-fields");
document.getElementById("show-buttons").onclick = () => showView("buttons");
