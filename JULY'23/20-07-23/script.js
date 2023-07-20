// KEYBOARD EVENTS

var x = 0;
var y = 0;
var z = 0;

// KEYUP
document.addEventListener("keyup", (e) => {
  let msg = (document.querySelector("#up span").textContent = x += 1);
  //   msg.textContent = alert("This is Keyup");
  //   console.log('This is Keyup');
});

// KEYDOWN
document.addEventListener("keydown", (e) => {
  let msg = (document.querySelector("#down span").textContent = y += 1);
  //     msg.textContent = alert("This is keydown");
  //   console.log("This is keydown");
});

// KEYPRESS
document.addEventListener("keydown", (e) => {
  let msg = (document.querySelector("#press span").textContent = z += 1);
  //   msg.textContent = alert("This is keypress");
  //   console.log("This is keypress");
});

// MOUSE EVENTS

var a = 0;
var b = 0;
var c = 0;
var d = 0;
var e = 0;
var f = 0;
var h = 0;

// MOUSE CLICK
click.addEventListener("click", () => {
  let msg = (document.querySelector("#click span").textContent = e += 1);
  // msg.textContent = alert('The Mouse CLicked');
//   console.log("The Mouse CLicked");
});

// MOUSE DOUBLE CLICK
dblclick.addEventListener("dblclick", () => {
  let msg = (document.querySelector("#dblclick span").textContent = f += 1);
  // msg.textContent = alert('The Mouse CLicked');
//   console.log("The Mouse Double CLicked");
});

// MOUSE ENTER
enter.addEventListener("mouseenter", (e) => {
  let msg = (document.querySelector("#enter span").textContent = a += 1);
  //   msg.textContent = alert('The Mouse Entered');
});

// MOUSE OVER
over.addEventListener("mouseover", (e) => {
  let msg = (document.querySelector("#over span").textContent = b += 1);
  // msg.textContent = alert("The Mouse overed");
});

// MOUSE MOVE
move.addEventListener("mousemove", (e) => {
  let msg = (document.querySelector("#move span").textContent = c += 1);
  //   msg.textContent = alert("The Mouse Moved");
});

// MOUSE LEAVE
leave.addEventListener("mouseleave", (e) => {
  let msg = (document.querySelector("#leave span").textContent = d += 1);
  // msg.textContent = alert("The Mouse Left");
});

// MOUSE OUT
    out.addEventListener("mouseout", (e) => {
  let msg = (document.querySelector("#out span").textContent = h += 1);
  // msg.textContent = alert("The Mouse Out");
});
