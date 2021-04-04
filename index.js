const rideButton = document.getElementById("rideButton");

rideButton.addEventListener("click", () => {
  const cycle = document.getElementById("cycleAnimation");
  console.log(cycle);
  cycle.play();
  cycle.style.left = window.innerWidth + 200 + "px";
});
