const botaoTrailer= document.querySelector(".botao-trailer") 
const botaoFecharModal= document.querySelector(".fechar-modal")
const video= document.getElementById("video")
const modal= document.querySelector(".modal")
const linkDoVideo= video.src;
function alternarModal(){
    modal.classList.toggle("aberto")
}

console.log(document.querySelector(".botao-trailer")) 
console.log(video.src)
                          
botaoTrailer.addEventListener("click", ()=>{
    console.log("clicou no botão veja o trailer")
    video.setAttribute("src", linkDoVideo); 
    alternarModal()
}) 

botaoFecharModal.addEventListener("click", ()=>{
    console.log("clicou no botão fechar o trailer")
    video.setAttribute("src", "")
    alternarModal()
    })

    



