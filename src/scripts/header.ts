let header: HTMLHeadElement;

(function(){
    document.addEventListener("scroll", documentScrolled);
    window.addEventListener('resize', documentScrolled);
    header = document.getElementsByTagName("header")[0] as HTMLHeadElement;
})();

function documentScrolled(){ 
    console.log("scroll", window.scrollY, window.innerWidth);
    if(window.scrollY === 0 && window.innerWidth > 768)
        header.classList.remove("pav-compact");
    else 
        header.classList.add("pav-compact");
};