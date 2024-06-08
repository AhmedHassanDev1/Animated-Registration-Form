let placeholder=document.getElementsByClassName("placeholder")

Array.from(placeholder).forEach(word => {
  return word.innerHTML= word.textContent.split("").map((char,ind)=>
   `<span style="transition-delay:${ind*50}ms">${char}</span>`).join("")   
});
