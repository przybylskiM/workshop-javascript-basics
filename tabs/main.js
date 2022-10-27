function main() {
    windows.addEventListener('click', function (evt) {
        console.dir(evt.target)
        
        if (evt.target.className.toLowerCase() === "tab") {
            const tabs= Array.from(document.querySelector('.tabs')?.children);
            
           const index = tabs.indexOf(evt.target);
            
           document.querySelector('.tabs.active')?.classList.remove('active');
           tabs[index].classList.add('active')
           
           const query=document.querySelectorAll('.tabContent')
           document.querySelector('.tabCOntent.active')?.classList.remove('active');
           query[index].classList.add('active')
        }
    })
}