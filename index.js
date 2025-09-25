const main = document.getElementById("main");
main.remove();

// ✅ Create a new <h1> element and store it in newHeader
const newHeader = document.createElement("h1");

// ✅ Give the newHeader an id of "victory"
newHeader.id = "victory";

// ✅ Add the text "Joanne is the champion"
newHeader.textContent = "Joanne is the champion";

// ✅ Append the newHeader to the document body
document.body.append(newHeader);