
(function () {
  function copyProcessedToKeyboard () {
    document.getElementById('processed').select();
    document.execCommand("copy");
  }

  document.getElementById('message').addEventListener('input', function () {
    document.getElementById('processed').value =  document.getElementById('message').value.trim().split(/\s+/)
      .map(function (word) {
      return word.split("").map(function (letter) {
        const l = letter.toLowerCase();
        if ( letter.length == 1 && l.match(/[a-z]/i) ) {
          return `:regional_indicator_${l}:`
        }
      }).join(" ");
    }).join("\n");
  });

  document.getElementById('copy').addEventListener('click', function () {
    copyProcessedToKeyboard();
  });

  document.getElementById('message').select();
})();