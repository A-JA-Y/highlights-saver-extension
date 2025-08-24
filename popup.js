document.addEventListener("DOMContentLoaded", () => {
  chrome.storage.local.get(["highlights"], (result) => {
    const highlights = result.highlights || [];
    const container = document.getElementById("highlights-container");
    container.innerHTML = "";
    if (highlights.length > 0) {
      // Loop through each highlight and create an element for it
      highlights.forEach((text,index) => {
        const highlightElement = document.createElement("div");
        highlightElement.textContent = text;
        const textElement = document.createElement("span");
        textElement.textContent = text;
        
        // Create the delete button
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        highlightElement.appendChild(textElement);
        highlightElement.appendChild(deleteButton);


        deleteButton.addEventListener('click',()=>{
             chrome.runtime.sendMessage({ action: 'delete_highlight', index: index });
             highlightElement.remove();
        })


        container.appendChild(highlightElement);
      });
    } else {
      // Show a message if there are no highlights
      container.innerHTML = "<p>No highlights saved yet!</p>";
    }
  });
});
