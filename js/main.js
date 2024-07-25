function copyCode() {
    var code = document.getElementById("code");
    var textarea = document.createElement("textarea");
    textarea.value = code.textContent;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
    alert("Code copied to clipboard: " + code.textContent);
  }
  
  function toggleButton() {
    var checkbox = document.getElementById("codeChecked");
    var button = document.getElementById("submitButton");
    button.disabled = !checkbox.checked;
  }
  const toggleoverlay = () => {
    let overlayIsOpen = false;
  
    return function openOverlay(addBackgroundClose, uload) {
      console.log("opo",overlayIsOpen)
      var overlay = document.getElementById("overlay");
      var background = document.getElementsByClassName("background")[0];
      
      overlay.style.display = overlayIsOpen ? "none" : "block";
      background.style.display = overlayIsOpen ? "none" : "block";
      if (addBackgroundClose) {
        background.addEventListener("click", openOverlay);
      }
      if (uload) {
        uload();
      }
      
      overlayIsOpen= !overlayIsOpen;
    };
  };
  
  const uload = ()=> window.addEventListener('beforeunload', (e) => {
    e.preventDefault();
    e.returnValue = " "
     // Custom confirmation message (not all browsers support showing this message)
     var confirmationMessage = 'Are you sure you want to leave this page?';

     // You can customize the confirmation message here
     (e || window.event).returnValue = confirmationMessage; // Standard method
     return confirmationMessage; // Some browsers may use this method
    // event.returnValue = 'Are you sure you want to leave this page?';
  });
  
  const toCalculator= ()=>{
    window.removeEventListener("beforeunload",uload)
    // Using the Navigator API (if supported)
    if (navigator.push) {
        navigator.push({
        path: window.location.origin + "/calculator"
        });
    } else {
        // Fallback to window.location.href
        window.location.href = 'https://www.example.com';
    }
  }
