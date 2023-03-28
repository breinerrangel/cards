const id=JSON.parse(localStorage.getItem("id"))

console.log(id)
document.querySelector(".titulo").innerHTML=`Post ${id}`
let comentario=async()=>{
    let url=await fetch(`https://jsonplaceholder.typicode.com/posts//comments`)
    let respuesta=await url.json()
    console.log(respuesta)
    document.querySelector(".body").textContent=`${respuesta[id].body}`
    document.querySelector(".comentatio").textContent=`${respuesta[id].name}`

}
comentario()