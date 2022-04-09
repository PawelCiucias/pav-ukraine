let header: HTMLHeadElement;

(function(){
    document.addEventListener("scroll", documentScrolled);
    header = document.getElementsByTagName("header")[0] as HTMLHeadElement;
})();

function documentScrolled(){ 
    console.log("scroll", window.scrollY);
    if(window.scrollY === 0)
        header.classList.remove("pav-compact");
    else 
        header.classList.add("pav-compact");
};