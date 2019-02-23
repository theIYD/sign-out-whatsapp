let btn = document.querySelector("#close");

btn.addEventListener("click", e => {
  chrome.tabs.query({ active: true, currentWindow: true }, tab => {
    chrome.tabs.executeScript(tab[0].id, {
        code: "localStorage.clear();"
    })
    chrome.tabs.remove(tab[0].id);
  });
});
