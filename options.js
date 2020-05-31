function saveOptions(e) {
  e.preventDefault();
  browser.storage.sync.set({
    hidechatlist: document.querySelector("#hidechatlist").checked
  });
}

function restoreOptions() {
  function setCurrentChoice(result) {
    document.querySelector("#hidechatlist").checked = result.hidechatlist || false;
  }

  function onError(error) {
    console.log(`Error: ${error}`);
  }

  let getting = browser.storage.sync.get("hidechatlist");
  getting.then(setCurrentChoice, onError);
}

document.addEventListener("DOMContentLoaded", restoreOptions);
document.querySelector("form").addEventListener("submit", saveOptions);
