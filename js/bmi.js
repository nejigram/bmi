const
height = document.querySelector("#height"),
weight = document.querySelector("#weight"),
bmi = document.querySelector("#bmi"),
bmi_right = document.querySelector("#bmi_right"),
bmi_beauty = document.querySelector("#bmi_beauty"),
bmi_model = document.querySelector("#bmi_model"),
weight_right = document.querySelector("#weight_right"),
weight_beauty = document.querySelector("#weight_beauty"),
weight_model = document.querySelector("#weight_model"),
b_pm_right = document.querySelector("#b_pm_right"),
b_pm_beauty = document.querySelector("#b_pm_beauty"),
b_pm_model = document.querySelector("#b_pm_model"),
w_pm_right = document.querySelector("#w_pm_right"),
w_pm_beauty = document.querySelector("#w_pm_beauty"),
w_pm_model = document.querySelector("#w_pm_model"),
result1 = document.querySelectorAll("#result1 p"),
result2 = document.querySelectorAll("#result2 p");


height.addEventListener("input",function(){
    weight_calc(height.value);
    bmi_calc(height.value,weight.value);
});

weight.addEventListener("input",function(){
    bmi_calc(height.value,weight.value);
});
const bmi_calc = function(h = 0,w = 0){
    if(h <= 0 || w <= 0){
        return false;
    }

    const hm = h / 100;
    const bminum = (Math.ceil((w / (hm * hm)) * 100)) / 100
    bmi.innerHTML = bminum;


    b_pm_right.innerHTML = (Math.ceil((bminum - parseFloat(bmi_right.innerHTML)) * 100) /100);
    if(parseFloat(b_pm_right.innerHTML) > 0){
        b_pm_right.innerHTML = "+" + b_pm_right.innerHTML;
    }
    b_pm_beauty.innerHTML = (Math.ceil((bminum - parseFloat(bmi_beauty.innerHTML)) * 100) /100);
    if(parseFloat(b_pm_beauty.innerHTML) > 0){
        b_pm_beauty.innerHTML = "+" + b_pm_beauty.innerHTML;
    }
    b_pm_model.innerHTML = (Math.ceil((bminum - parseFloat(bmi_model.innerHTML)) * 100) /100);
    if(parseFloat(b_pm_model.innerHTML) > 0){
        b_pm_model.innerHTML = "+" + b_pm_model.innerHTML;
    }
    w_pm_right.innerHTML = (Math.ceil((w - parseFloat(weight_right.innerHTML)) * 100) /100);
    if(parseFloat(w_pm_right.innerHTML) > 0){
        w_pm_right.innerHTML = "+" + w_pm_right.innerHTML;
    }
    w_pm_beauty.innerHTML = (Math.ceil((w - parseFloat(weight_beauty.innerHTML)) * 100) /100);
    if(parseFloat(w_pm_beauty.innerHTML) > 0){
        w_pm_beauty.innerHTML = "+" + w_pm_beauty.innerHTML;
    }
    w_pm_model.innerHTML = (Math.ceil((w - parseFloat(weight_model.innerHTML)) * 100) /100);
    if(parseFloat(w_pm_model.innerHTML) > 0){
        w_pm_model.innerHTML = "+" + w_pm_model.innerHTML;
    }



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
const weight_calc = function(h){
    const b_r = parseInt(bmi_right.innerHTML);
    const b_b = parseInt(bmi_beauty.innerHTML);
    const b_m = parseInt(bmi_model.innerHTML);
    const hm = h / 100;
    weight_right.innerHTML = (Math.ceil(((hm * hm) * b_r)* 100)) / 100;
    weight_beauty.innerHTML = (Math.ceil(((hm * hm) * b_b)* 100)) / 100;
    weight_model.innerHTML = (Math.ceil(((hm * hm) * b_m)* 100)) / 100;
}
