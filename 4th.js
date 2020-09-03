let parts = ["monitor", "mouse", "keyboard", "printer", "speaker"];
console.log("Array : " + parts);
console.log("Elements containing 'a' in them are as follow : ");
for (let i = 0; i < parts.length; i++) {
  if (parts[i].includes("a")) {
    console.log("-> " + parts[i]);
  }
}
