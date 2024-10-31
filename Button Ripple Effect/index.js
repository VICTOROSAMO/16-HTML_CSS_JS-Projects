 const btnEl = document.querySelector(".btn");

 btnEl.addEventListener("mouserover", (event) =>{

    const x = (event.pageX - btnEl.offsetLeft);
    const y = (event.pageY - btnEl.offsetTop);

    btnEl.setProperty("--xPos", x + "px");
    btnEl.setProperty("--yPos", y + "px"); 
 });