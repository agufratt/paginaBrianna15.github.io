var loop
var shake
var casa
var i = 0

const casas = document.getElementById("casas")
const nombre = document.getElementById("input")

setTimeout(() => {
    gsap.timeline()
        .to("#titulo", {y: 100, duration: 0.5, ease: "power.out",})
        .to(["#boton"], {delay: 0.05,alpha: 1, duration: 0.5})
        .to(["#input","#name"], {alpha: 1, duration: 0.75})
}, 1000);

function move() {
    for ( i ; i< 1 ; i++) {
        loop = gsap.to("#boton", {y: -15, duration: 2, ease: "power1.inOut", yoyo: true, repeat: -1})
    }
}

function start() {

    if (nombre.value.length > 3) {
        if (nombre.value == "Brianna" || nombre.value == "brianna" || nombre.value == "Briana" || nombre.value == "briana"
         || nombre.value == "Brianna Moreno" || nombre.value == "brianna Moreno" || nombre.value == "Briana Moreno" || nombre.value == "briana Moreno"
         || nombre.value == "Brianna moreno" || nombre.value == "brianna moreno" || nombre.value == "Briana moreno" || nombre.value == "briana moreno") {
            casa = "#cas3"
         }else {
            casa =  `#cas${Math.floor(Math.random() * 4)}`
         }
        
        console.log(casa)
    
        loop.pause()
        shake = gsap.timeline({repeat: 5})
        .to("#boton", 0.1, {x:"+=10"})
        .to("#boton", 0.1, {x:"-=10"})
    
        shake.pause()
        gsap.timeline()
            .to("#boton", {scale: 0.95, duration: 0.15, ease: "none", yoyo: true})
            .to("#boton", {scale: 1.25, duration: 1, ease: "power.out"})
            .to(["#name", "#titulo", "#sello"], {delay: -1,alpha: 0, duration: 0.5})
            .to("#input", {delay: -0.75, scale: 0, duration: 1})
            .to("#input", {delay: -0.65, y: -100, duration: 0.5}).then(()=> {
                shake.play()
            })
            shake.then(()=> {
                gsap.to("#boton", {x:0}).then(()=> {
                    casas.style.setProperty('top', "50%")
                    gsap.timeline()
                        .set(casa, {scale: 0.25})
                        .to("#boton", {y: -800, duration: 1.5, ease: "power.in"})
                        .to(casa, {delay: -1.4,scale: 1.5, alpha: 1, duration: 1}).then(() => {
                            setTimeout(() => {
                                //if (casa == "#cas0") {
                                //    window.location.assign("https://drive.google.com/file/d/1nUveQ3SItVDqnXxcfcoXEaCe-IFLPdRG/view?usp=sharing")
                                //}else if (casa == "#cas1")  {
                                //    window.location.assign("https://drive.google.com/file/d/1AJ7uRfy466weCreKDd56tsAFbziCejX5/view?usp=sharing")
                                //}else if (casa == "#cas2")  {
                                //    window.location.assign("https://drive.google.com/file/d/1b4UO2B_CSs_ZyoC6f2eu0_h4z4bh4CGw/view?usp=sharing")
                                //}else if (casa == "#cas3")  {
                                //    window.location.assign("https://drive.google.com/file/d/1CYahz4SvxVehycpg0DpEYOfDL7u0VrAF/view?usp=sharing")
                                //}
                            }, 250);
                        })
                })
        })
    }
    
}