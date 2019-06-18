const height = document.querySelector("#height");
const weight = document.querySelector("#weight");
const bmi = document.querySelector("#bmi");
const result1 = document.querySelectorAll("#result1 p");
const result2 = document.querySelectorAll("#result2 p");
const bmi_calc = function(h = 0,w = 0){
    if(h <= 0 || w <= 0){
        return false;
    }

    hm = h / 100;
    const bminum = (Math.ceil((w / (hm * hm)) * 100)) / 100
    bmi.innerHTML = bminum;

    for(let x = 0;x < result1.length;x++){
        result1[x].classList.remove("bbox_bk_5");

    }
    for(let x = 0;x < result2.length;x++){
        result2[x].classList.remove("bbox_bk_5");
    }
    if(bminum < 16){
        result1[0].classList.add("bbox_bk_5");
        result2[0].classList.add("bbox_bk_5");
    }else if(bminum < 17){
        result1[0].classList.add("bbox_bk_5");
        result2[1].classList.add("bbox_bk_5");
    }else if(bminum < 18.5){
        result1[0].classList.add("bbox_bk_5");
        result2[2].classList.add("bbox_bk_5");
    }else if(bminum < 25){
        result1[1].classList.add("bbox_bk_5");
        result2[3].classList.add("bbox_bk_5");
    }else if(bminum < 30){
        result1[2].classList.add("bbox_bk_5");
        result2[4].classList.add("bbox_bk_5");
    }else if(bminum < 35){
        result1[3].classList.add("bbox_bk_5");
        result2[5].classList.add("bbox_bk_5");
    }else if(bminum < 40){
        result1[4].classList.add("bbox_bk_5");
        result2[6].classList.add("bbox_bk_5");
    }else if(40 <= bminum){
        result1[5].classList.add("bbox_bk_5");
        result2[7].classList.add("bbox_bk_5");
    }

}

height.addEventListener("input",function(){
    bmi_calc(height.value,weight.value);
});

weight.addEventListener("input",function(){
    bmi_calc(height.value,weight.value);
})
