const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');
const checkAll = document.querySelector('.special input[type="checkbox"]');

// console.log(checkboxes);
console.log(checkAll);

function checkAllBoxes() {
  if (checkAll.checked) {
    checkboxes.forEach(checkbox => {
      checkbox.checked = !checkbox.checked;
    });
    console.log(checkbox);
  }
}

let lastChecked;

function handleCheck(event) {

  // console.log(event);
  let inBetween = false;
  if(event.shiftKey && this.checked) {
    checkboxes.forEach(checkbox => {
      // console.log(checkbox);
      if(checkbox === this || checkbox === lastChecked) {
        inBetween = !inBetween;
        console.log('Between Here?');
      }

      if(inBetween) {
        checkbox.checked = true;
      }
    });
  }
  lastChecked = this;
  // console.log(lastChecked);
}


checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));
checkAll.addEventListener('click', checkAllBoxes);
