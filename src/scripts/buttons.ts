
function scrollToDonation(){
    const section = document.getElementById("donationsSection") as HTMLElement;
    section.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
}


(function(){
    document.getElementById("donateButton")?.addEventListener("click", scrollToDonation);
    document.getElementById("smallDonateButton")?.addEventListener("click", scrollToDonation);
})()