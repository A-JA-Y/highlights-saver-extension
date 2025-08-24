document.addEventListener("mouseup", (e) => {
  if (e.target.tagName === "BUTTON") return;
  const selectedText = window.getSelection().toString().trim();
  if (selectedText.length > 0) {
    const saveButton = document.createElement('button');
    saveButton.innerText = 'Save Highlight?';
    saveButton.style.position = 'absolute';
    saveButton.style.top = e.pageY + 'px';
    saveButton.style.left = e.pageX + 'px';


    document.body.appendChild(saveButton);

    saveButton.addEventListener('click',()=>{
        chrome.runtime.sendMessage({
            action:'save_highlight',
            text:selectedText
        })
        saveButton.remove()
    })

  }
});


