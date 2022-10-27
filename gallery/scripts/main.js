

function buildImage(url) {
    const $image = document.createElement("img");
    $image.src = url;
    return $image;
}

function buildOriginalUrl(thumbUrl) {
    return thumbUrl.replace("thumbs", "originals").replace("300x200", "900x600")
}
   
function main() {
   // console.log('main');
    
window.addEventListener("click", function handleClick(evt) {
    if (evt.target.tagName.toLowerCase() === "img") {
        
        const thumbUrl = evt.target.src;
        
        const originalUrl = buildOriginalUrl(thumbUrl);
       
        const $original = document.querySelector("#original");        
        
        
        const $image = buildImage( originalUrl);
        
        $original.firstElementChild?.remove();        
        $original.append($image);
    }
})

}

window.addEventListener("load", main)