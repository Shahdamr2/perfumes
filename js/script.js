
var perfumes = document.querySelectorAll(".products li");
var perfumename = document.querySelector(".Show");
var btn = document.querySelector(".btn");
var priceDisplay = document.getElementById("price-display"); 

var totalprice = 0;
var selectedPerfumes = new Set(); 

perfumes.forEach(function(perf) {
    perf.onclick = function() {
        var price = parseFloat(perf.getAttribute("price"));
        var name = perf.textContent.trim();

        if (!selectedPerfumes.has(name)) {
            totalprice += price;
            selectedPerfumes.add(name);
            perfumename.innerHTML += name + ",  "; 

            if (perfumename.textContent.trim() !== "") {
            }
        }
    };
});

btn.onclick = function() {
    priceDisplay.innerText = totalprice.toFixed(2);
};
