const textAreaEl = document.getElementById("txt");
const totalCounterEl = document.getElementById("total-counter");
const remainingCounterEl = document.getElementById("remainingcounter");

textAreaEl.addEventListener("keyup", () => {
    updateCounter();
})

    updateCounter()
    
   function updateCounter(){
  totalCounterEl.innerText = textAreaEl.value.length;
  remainingCounterEl.innerText = textAreaEl.getAttribute("maxlength") - textAreaEl.value.length;
   }