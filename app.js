const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');
// console.log(checkboxes);

let lastChecked;

function handleCheck(event) {
  console.log(event);
  let inBetween = false
  if(event.shiftKey && this.checked) {
checkboxes.forEach(checkbox => {
  console.log(checkbox);
  if(checkbox === this || checkbox === lastChecked) {
    inBetween = true;
  }
});
  }
  lastChecked = this;
  console.log(lastChecked);
}


checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));
