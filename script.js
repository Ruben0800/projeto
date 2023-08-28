function toggleMode () {
    const html = document.documentElement
    html.classList.toggle("light")
    
    // pegar a tag img
    const img = document.querySelector("#profile img")
    
    //susbtituir a imagem
    if(html.classList.contains("light")) {
        // se tiver light mode, adicionar a imagem light
        img.setAttribute(
          "src","./assets/bike.png")
    } else {
        // se tiver sem light mode, manter a imagem normal
        img.setAttribute(
          "src",
          "https://avatars.githubusercontent.com/u/113808474?s=400&u=257e23045146013fa7d3579e1f3a9b3a0d635152&v=4"
        )
    }

    // substituir o texto
    if(html.classList.contains("light")) {
        img.setAttribute(
            "alt", "ruben de capacete")
    // se tiver sem light mode manter o texto normal
    } else{
        img.setAttribute(
            "alt", "Foto de Ruben Miguel"
        )
    }
}

 document.addEventListener("DOMContentLoaded", function () {
   const image = document.querySelector("#profile img")
   const imageContainer = document.querySelector("#profile img")

   image.onerror = function () {
     imageContainer.style.borderRadius = "0"
   }
 })