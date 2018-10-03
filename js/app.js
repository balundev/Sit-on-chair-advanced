// slider
var image = document.querySelector(".slider-img");
var images = ["images/black_chair.png", "images/red_chair.png", "images/orange_chair.png"];
var imagesLength = images.length;
var counter = 0;
var slidePrev= document.querySelector(".move-back");
var slideNext = document.querySelector(".move-forward");
//
//nav list
var listElement = document.querySelector(".about");
var subMenu = document.querySelector(".sub-menu");
//
// picture discription
var hiddenDiscription = document.querySelector(".one");
var hiddenDiscription2 = document.querySelector(".two");
var picture1 = document.querySelector(".suggested-pool1")
var picture2 = document.querySelector(".suggested-pool2")
//
listElement.addEventListener("mouseover",function () {
    subMenu.style.display = "block";

});
listElement.addEventListener("mouseout",function () {
    subMenu.style.display = "none";

});


function slider() {

    var slide = function (){
        counter++
        if(counter>imagesLength-1){
            counter=0;
            image.src = images[counter];
        }else{
            image.src = images[counter];
        }
    };

    var autoslide = setInterval(slide ,4000);

    slideNext.addEventListener("click", function () {
        clearInterval(autoslide);
        if(counter<imagesLength-1){
            counter++
            image.src = images[counter]
        }else{
            counter=0;
            image.src = images[counter];
        }
    });
    slidePrev.addEventListener("click", function () {
        image.style.animation = "none";
        clearInterval(autoslide);
        if(counter-1<0){
            counter = imagesLength-1;
            image.src = images[counter]
        }else{
            counter--;
            image.src = images[counter];
        }
    });
}

slider();


picture1.addEventListener("mouseover", function f() {
    hiddenDiscription.style.display = "block";
});
picture2.addEventListener("mouseover", function f() {
    hiddenDiscription2.style.display = "block";
});
picture1.addEventListener("mouseout", function f() {
    hiddenDiscription.style.display = "none";
});
picture2.addEventListener("mouseout", function f() {
    hiddenDiscription2.style.display = "none";
});


/// order section
var summ1 = 0;
var summ2 = 0;
var summ3 = 0;
var finalSumm = 0;
var chairTypeSelect = document.querySelector(".type");
var inputFirstValue = chairTypeSelect.value;
var yourChairCost = document.querySelector(".chair-type-costs");
var chairColor = document.querySelector(".color");
var inputColorValue = chairColor.value;
var chairMaterial = document.querySelector(".material");
var chairName = document.querySelector(".chair-type h2");
var finalPrice = document.querySelector(".order-box-summ p");


chairTypeSelect.addEventListener("change", function () {
    var clair = 200;
    var margarita = 150;
    var selena = 250;
   inputFirstValue = chairTypeSelect.value;
    if(inputFirstValue == "Clair"){
        selena = 0;
        margarita = 0;
        chairName.innerText = "Chair Clair";
        var basicPrice = document.querySelector(".basic-price");
        if(basicPrice == null){

            var costSpan = document.createElement("span");
            costSpan.innerText = "200";
            costSpan.className = "basic-price";
            yourChairCost.appendChild(costSpan);
        }else {
            basicPrice.innerText  = "200";
        }
    }else if(inputFirstValue == "Margarita"){
        selena = 0;
        clair = 0;
        chairName.innerText = "Chair Margarita";
        var basicPrice = document.querySelector(".basic-price");
        if(basicPrice == null){
            var costSpan = document.createElement("span");
            costSpan.innerText = "150";
            costSpan.className = "basic-price";
            yourChairCost.appendChild(costSpan);
        }else {
            basicPrice.innerText  = "150";
        }

    }else if(inputFirstValue == "Selena"){
        margarita = 0;
        clair = 0
        chairName.innerText = "Chair Selena";
        summ=250;
        var basicPrice = document.querySelector(".basic-price");
        if(basicPrice == null){
            var costSpan = document.createElement("span");
            costSpan.innerText = "250";
            costSpan.className = "basic-price";
            yourChairCost.appendChild(costSpan);
        }else {
            basicPrice.innerText  = "250";
        }
    }
    summ1 = margarita + clair + selena;
    finalSumm = summ1+summ2+summ3;
    finalPrice.innerText = finalSumm;
})
// chair image input
chairColor.addEventListener("change", function () {
    var colorOfChair = document.querySelector(".order-img");
    inputColorValue = chairColor.value;
    if(inputColorValue == "Czerwony"){
        colorOfChair.style.backgroundImage = "url(../images/red_chair.png)";
        colorOfChair.style.backgroundSize = "70% 70%";
    }else if(inputColorValue == "Czarny"){
        colorOfChair.style.backgroundImage = "url(../images/black_chair.png)";
        colorOfChair.style.backgroundSize = "90% 90%";
    }else if(inputColorValue == "Pomaranczowy"){
        colorOfChair.style.backgroundImage = "url(../images/orange_chair.png)";
        colorOfChair.style.backgroundSize = "70% 70%";
    }
})
// material input
var attachmentsBox = document.querySelector(".chair-type")
chairMaterial.addEventListener("change", function () {
    var inputMaterialValue = chairMaterial.value;
    var materialName = document.querySelector(".material-span");
    var materialPrice = document.querySelector(".material-price");
    var leatherCost= 80;
    var fabricCost = 20;
    if(inputMaterialValue == "Skóra"){
        leatherCost = 80;
        fabricCost = 0;
        if(materialName==null & materialPrice==null){
            var leather = document.createElement("span");
            leather.innerText = "Skóra";
            leather.className = "material-span";
            attachmentsBox.appendChild(leather);
            var leatherPrice = document.createElement("span");
            leatherPrice.innerText = "80";
            leatherPrice.className = "material-price";
            yourChairCost.appendChild(leatherPrice);

        }else {
            materialName.innerHTML = "Skóra";
            materialPrice.innerHTML = "80";
        }
    }else if(inputMaterialValue == "Tkanina"){
        leatherCost = 0;
        fabricCost = 20;
        if(materialName==null & materialPrice==null){
            var leather = document.createElement("span");
            leather.innerText = "Tkanina";
            leather.className = "material-span";
            attachmentsBox.appendChild(leather);
            var leatherPrice = document.createElement("span");
            leatherPrice.innerText = "20";
            leatherPrice.className = "material-price";
            yourChairCost.appendChild(leatherPrice);
        }else {
            materialName.innerHTML = "Tkanina";
            materialPrice.innerHTML = "20";
        }
    }
    summ2 =leatherCost+ fabricCost;
    finalSumm = summ1+summ2+summ3;
    finalPrice.innerText = finalSumm;
})

// transport
transport.addEventListener("click",function () {
    var transport = document.querySelector("#transport");
    if(transport.checked == true){
        summ3 = 50;
        var addTransport = document.createElement("span");
        addTransport.innerText = "transport";
        addTransport.className = "transportName"
        attachmentsBox.appendChild(addTransport);
        var transportCost = document.createElement("span");
        transportCost.innerText = "50";
        transportCost.className = "transportCost"
        yourChairCost.appendChild(transportCost);
    }else{
        summ3 = 0;
        var noTransport = document.querySelector(".transportName");
        noTransport.parentElement.removeChild(noTransport);
        var noTransportCost = document.querySelector(".transportCost");
        noTransportCost.parentElement.removeChild(noTransportCost);
    }
    finalSumm = summ1+summ2+summ3;
    finalPrice.innerText = finalSumm;
})

//summ

