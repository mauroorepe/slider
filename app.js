//Elementos del DOM
const slider = document.querySelector(".imgContainer");
const sliderImagenes = document.querySelectorAll(".imgContainer img")
const pagination = document.querySelector("#pagination")
const containerTexto = document.querySelector(".textContainer");
const swiperBar = document.querySelector(".swiperBar")

//Buttons

const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");

document.addEventListener("DOMContentLoaded", function() {
    disableButton(prevBtn)
});

//Counter

let counter = 0;
const size = sliderImagenes[0].clientWidth;

//Buttons Listeners

nextBtn.addEventListener("click", ()=> {
    slider.style.transition  = "transform 0.4s ease-in-out";
    counter++;
    slider.style.transform = "translateX(" + ((-size-20) * counter) + "px)";
})
prevBtn.addEventListener(`click`, ()=> {
    slider.style.transition  = "transform 0.4s ease-in-out";
    counter--;
    slider.style.transform = "translateX(" + ((-size-20) * counter) + "px)";
})


//Activar y desactivar botones al comenzar las transiciones

slider.addEventListener("transitionstart", ()=>{
    changeContent();
    if(counter<1){
        disableButton(prevBtn)
        return;
    }
    else{
        enableButton(nextBtn);
    }
    
    if(counter>=3){
        disableButton(nextBtn)
        return;
    }else{
        enableButton(prevBtn);
    }
} )

//Funciones de activacion / Desactivacion de botones

const disableButton = (button) => {
    button.disabled = true;
    button.classList.add("buttonDisabled");
};
const enableButton = (button) => {
    button.disabled = false;
    button.classList.remove("buttonDisabled");
};

//Cambio del contenido de los textos y movimiento del swiper

const changeContent=()=>{
    if(counter==0){
        containerTexto.innerHTML = '<div class="textContainer"><h3>EL PRIMER GEL ENERGÉTICO</h3><h5>Un padre ayudando a su hija</h5><p>Todo comenzó en 1993 en una cocina de Berkeley, CA. Nuestro fundador, Dr. Bill Vaughan tenía la misión de crear un combustible mejor y más fácil de digerir para que su hija, una ultramaratonista, pudiera alcanzar su máximo rendimiento para competir en la icónica Western States 100.</p></div>';
        pagination.innerHTML = '1/4';
        swiperBar.style.transform = "translateX(0%)";
    }else if(counter==1){
        containerTexto.innerHTML = '<div class="textContainer"><h3>EL PRIMER GEL ENERGÉTICO</h3><h5>Respaldado por científicos, aprobado por atletas</h5><p>Ingerir el nutriente correcto en el momento adecuado, te permite rendir al máximo y sentirte bien al mismo tiempo. Nuestros geles energéticos contienen carbohidratos, electrolitos y aminoácidos para mantenerte fuerte.</p></div>';
        pagination.innerHTML = '2/4';
        swiperBar.style.transform = "translateX(100%)";
    }else if(counter==2){
        containerTexto.innerHTML = '<div class="textContainer"><h3>EL PRIMER GEL ENERGÉTICO</h3><h5>¡Efectivo, conveniente y sabroso!</h5><p>Si no fuera sabroso, los atletas no lo usarían. Es por eso que continuamos agregando nuevos sabores a nuestra línea cada año. Nos enfocamos en lo dulce, agrio, amargo y salado para asegurarnos de que haya un sabor de GU para cada gusto.</p></div>';
        pagination.innerHTML = '3/4';
        swiperBar.style.transform = "translateX(200%)";
    }else if(counter==3){
        containerTexto.innerHTML = '<div class="textContainer"><h3>EL PRIMER GEL ENERGÉTICO</h3><h5>Creado para aquellos que están en constante movimiento</h5><p>Primero creamos nuestros paquetes de gel originales para maratonistas que superan los límites del deporte, pero más de 30 años después, nuestros geles energéticos son tan beneficiosos para alguien que va al gimnasio después del trabajo como para triatletas, ciclistas y campeones del mundo.</p></div>';
        pagination.innerHTML = '4/4';
        swiperBar.style.transform = "translateX(300%)";
    }
}