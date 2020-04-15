const fb= document.querySelector("#filter-btns").children;
const pg= document.querySelector(".portfolio-gallery").children;

for(let i=0;i<fb.length;i++){
    fb[i].addEventListener("click",function(){
        for(let j=0;j<fb.length;j++){
            fb[j].classList.remove("active")
        }
        this.classList.add("active")
        const target = this.getAttribute("data-target")
        
        for(let k=0;k<pg.length;k++){
            pg[k].style.display="none"
            if(target==pg[k].getAttribute("data-id")){
                pg[k].style.display="block"
                
            }
            if(target=="all"){
                pg[k].style.display="block"
            }
            
        }
    
    })
}

const closelb= document.querySelector(".close-lightbox");
const lightbox= document.querySelector(".lightbox");

closelb.addEventListener("click",function(){
    lightbox.classList.remove("show")
    lightbox.classList.add("hide")
})

const gallery= document.querySelector(".portfolio-gallery");
const galleryItem =gallery.querySelectorAll(".item");

galleryItem.forEach(function(element){
    element.querySelector(".fa-plus").addEventListener("click",function(){
        lightbox.classList.remove("hide")
        lightbox.classList.add("show")
    })
})

