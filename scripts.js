const botonesTarjeta = document.querySelectorAll(".tarjeta");

botonesTarjeta.forEach(tarjeta =>{
    tarjeta.addEventListener("mouseover", ()=>{
        tarjeta.classList.add("tarjetaResaltada");
    })

    tarjeta.addEventListener("mouseout", ()=>{
        tarjeta.classList.remove("tarjetaResaltada");
    });
});
