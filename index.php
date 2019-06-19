<!DOCTYPE html>
<html lang="ja">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0">

<link rel="shortcut icon" type="image/x-icon" href="//www.nejigram.com/assets/img/itemicon.ico" />
<title>bmi</title>
<link rel='stylesheet' href='css/style.css?<?=time();?>' type='text/css' />
<script src='js/bmi.js?<?=time();?>' async></script>
</head>
<body>
<header>
<h1>bmi 計算機</h1>
</header>
<div class="box font_sawarabi_gothic">
    <form>
    <p class="tc">身長 : <input type="number" id="height">cm</p>
    <p class="tc">体重 : <input type="number" id="weight"> kg</p>
    </form>
    <ul class="flex">
        <li class="tc bmiline w100">
            現在のbmi : <span id="bmi">----</span>
        </li>
    </ul>
    <ul class="flex">
        <li class="tc bmiline w33">
            適正bmi : <span id="bmi_right">22</span>
        </li>
        <li class="tc bmiline w33">
            美容bmi : <span id="bmi_beauty">20</span>
        </li>
        <li class="tc bmiline w33">
            モデルbmi : <span id="bmi_model">18</span>
        </li>
    </ul>
    <ul class="flex">
        <li class="tc bmiline w33">
            +- : <span id="b_pm_right">----</span>
        </li>
        <li class="tc bmiline w33">
            +- : <span id="b_pm_beauty">----</span>
        </li>
        <li class="tc bmiline w33">
            +- : <span id="b_pm_model">----</span>
        </li>
    </ul>
    <ul class="flex">
        <li class="tc bmiline w33">
            適正体重 : <span id="weight_right">----</span>
        </li>
        <li class="tc bmiline w33">
            美容体重 : <span id="weight_beauty">----</span>
        </li>
        <li class="tc bmiline w33">
            モデル体重 : <span id="weight_model">----</span>
        </li>
    </ul>
    <ul class="flex">
        <li class="tc bmiline w33">
            +- : <span id="w_pm_right">----</span>
        </li>
        <li class="tc bmiline w33">
            +- : <span id="w_pm_beauty">----</span>
        </li>
        <li class="tc bmiline w33">
            +- : <span id="w_pm_model">----</span>
        </li>
    </ul>
    <div class="flex">
        <div class="result ja" id="result1">
            <p>18.5未満　低体重</p>
            <p>18.5～25未満	普通体重</p>
            <p>25～30未満	肥満（１度）</p>
            <p>30～35未満	肥満（２度）</p>
            <p>35～40未満	肥満（３度）</p>
            <p>40以上	肥満（４度）</p>
        </div>
        <div class="result who" id="result2">
            <p>16未満　痩せすぎ</p>
            <p>16～17未満　痩せ</p>
            <p>17～18.5未満　痩せぎみ</p>
            <p>18.5～25未満　普通体重</p>
            <p>25～30未満　過体重</p>
            <p>30～35未満　肥満（１度）</p>
            <p>35～40未満　肥満（２度）</p>
            <p>40以上　肥満（３度）</p>
        </div>
    </div>
</div>

</body>
</html>
