
let mijnDiv = document.querySelector(".Florre");

window.addEventListener("keydown", function(event) {
      if (event.key === "d") {
          nieuwPos = mijnDiv.getBoundingClientRect().left + 30;
          mijnDiv.style.left = nieuwPos + "px";
      }
      if (event.key === "q") {
            nieuwPos = mijnDiv.getBoundingClientRect().left - 30;
            mijnDiv.style.left = nieuwPos + "px";
      }
      if (event.key === "s") {
            nieuwPos = mijnDiv.getBoundingClientRect().top + 30;
            mijnDiv.style.top = nieuwPos + "px";
      }
      if (event.key === "z") {
            nieuwPos = mijnDiv.getBoundingClientRect().top - 30;
            mijnDiv.style.top = nieuwPos + "px";
      }

      let getBottom = mijnDiv.getBoundingClientRect().bottom;
      let getHeight = mijnDiv.getBoundingClientRect().height;
      let getLeft = mijnDiv.getBoundingClientRect().left;
      let getRight = mijnDiv.getBoundingClientRect().right;
      let getTop = mijnDiv.getBoundingClientRect().top;
      let getWidth = mijnDiv.getBoundingClientRect().width;
      });
