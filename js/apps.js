window.addEventListener("DOMContentLoaded", function() {

const elForm = document.querySelector(".form");
const elFormInput = document.querySelector(".form-input");
const elFormResult = document.querySelector(".form-result");
const elHeading = document.querySelector(".heading");
const elResetBtn = document.querySelector(".reset-btn");



elForm.addEventListener("submit", function(evt) {
  evt.preventDefault()

  const formInput = elFormInput.value;

  elHeading.textContent = `Bugungi kuningizni ko'rishingiz mumkin!`

  switch(formInput) {
    case "1" :
      elFormResult.textContent = "Dushanba";
      break;
    case "2" :
      elFormResult.textContent = "Seshanba";
      break;
    case "3" :
      elFormResult.textContent = "Chorshanba";
      break;
    case "4" :
      elFormResult.textContent = "Payshanba";
      break;
    case "5" :
      elFormResult.textContent = "Juma";
      break;
    case "6" :
      elFormResult.textContent = "Shanba";
      break;
    case "7" :
      elFormResult.textContent = "Yakshanba";
      break;
    default :
      elFormResult.textContent = "Xato ketdi";
      break;
  }

})

elResetBtn.addEventListener("click", function() {
  elHeading.textContent = "Hafta kunlarini aniqlash uchun ushbu sayt yaratildi!";
  elFormResult.textContent = "...."
})

})