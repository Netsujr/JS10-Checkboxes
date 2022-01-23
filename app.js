const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');
// console.log(checkboxes);

let lastChecked;

function handleCheck(event) {
  // console.log(event);
  if(event.shiftKey && this.checked) {

  }
  lastChecked = this;
  console.log(lastChecked);
}


checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));
