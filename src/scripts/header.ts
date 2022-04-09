let header: HTMLHeadElement;

(function(){
    document.addEventListener("scroll", documentScrolled);
    header = document.getElementsByTagName("header")[0] as HTMLHeadElement;
})();

function documentScrolled(){ 
    // const topOffset = window.scrollY;
    // console.log(topOffset);
    // if(topOffset === 0)
    //     header.classList.add("pav-is-top");
    // else 
    //     header.classList.remove("pav-is-top");
};