let display=document.querySelector(".box-cards")

const mian= async ()=>{
    const url=await fetch("https://jsonplaceholder.typicode.com/posts")
    const respuesta=await url.json()
    let contador=0
    console.log(respuesta)
    respuesta.forEach(element => {
        contador++
        if(contador<=19){
            display.innerHTML+=`
            <div class="card" id=${element.id}>
                <h3>${element.title}</h3>
                <div>
                    <img src="" alt="">
                </div>
                <p>${element.body}</p>
                <button>enviar</button>
    
            </div>`
                          

        }
       

            
    
            
    
        
    });
}
mian()
document.querySelector(".box-cards").addEventListener("click",(event)=>{
    if(event.target.className=="card"){
        let id=event.target.id
        localStorage.setItem("id",JSON.stringify(id))
        location.href="index2.html"
    }
    else if(event.target.parentElement.className=="card"){
        let id =event.target.parentElement.id
        localStorage.setItem("id",JSON.stringify(id))
        location.href="index2.html"
        
    }
    

    
})


