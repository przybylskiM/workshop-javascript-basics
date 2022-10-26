function main() {
    let counter = 0;
    
    const $plus = document.querySelector('#plus');
    const $minus = document.querySelector('#minus');
    const $counter = document.querySelector('#counter');
    
    function renderCounter() {
        $counter.value = counter;
    }
    
    renderCounter()
    
    $plus.addEventListener("click", function () {
        ++counter
        renderCounter();
    });
    
    $minus.addEventListener("click", function () {
        --counter
        renderCounter();
    });
}
main();
//window.addEventListener('load', main)


