const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');
const checkAll = document.querySelector('.special input[type="checkbox"]');
const otherBoxes = Array.prototype.slice.call(checkboxes);
otherBoxes.shift();
console.log(otherBoxes);
console.log(checkAll);
// console.log(checkboxes);

function checkAllBoxes() {
  if (checkAll.checked) {
    otherBoxes.forEach(otherBox => {
      otherBox.checked = true;
    });
  } else {
    otherBoxes.forEach(otherBox => {
      otherBox.checked = false;
    });
  }
}

let lastChecked;

function handleCheck(event) {

  // console.log(event);
  let inBetween = false;
  if (event.shiftKey && this.checked) {
    checkboxes.forEach(checkbox => {
      // console.log(checkbox);
      if (checkbox === this || checkbox === lastChecked) {
        inBetween = !inBetween;
        console.log('Between Here?');
      }

      if (inBetween) {
        checkbox.checked = true;
      }
    });
  }
  lastChecked = this;
  // console.log(lastChecked);
}


checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));
checkAll.addEventListener('click', checkAllBoxes);
