let btnTick = document.getElementById('btn-tick');
let tickIcon = document.getElementById('tick-icon')

btnTick.onclick = function(){
    if (btnTick.classList.contains('bg-gray-300')){
        btnTick.classList.remove('bg-gray-300');
        btnTick.classList.add('bg-blue-700');
        tickIcon.classList.remove('hidden');
    }
    else{
        btnTick.classList.remove('bg-blue-700');
        btnTick.classList.add('bg-gray-300');
        tickIcon.classList.add('hidden');
    }
}
let check = true;
function changeTheme(){
    document.documentElement.classList.toggle('dark');
    const img =document.getElementById("TagChange");
    let imgTagChange =document.getElementById('TagChange');
    let imgHeader = document.getElementById('imgHeader');
    let imgCarousel = document.getElementById('imgCarousel');
    let imgSolution = document.getElementById('imgSolution');
    let imgBenefit1= document.getElementById('imgBenefit1');
    let imgBenefit2 = document.getElementById('imgBenefit2');
    let imgBenefit3 = document.getElementById('imgBenefit3');
    let imgStatistic = document.getElementById('imgStatistic');
    let imgIntegrations = document.getElementById('imgIntegrations');
    let imgContact = document.getElementById('imgContact');

    if (check){ // light
        imgTagChange.src="/src/img/icon-sun.svg";
        imgHeader.src="/src/img/logo-light.svg";
        imgCarousel.src="/src/img/hero-light.svg";
        imgSolution.src="/src/img/about-light-01.png";
        imgBenefit1.src="/src/img/features-light-01.png";
        imgBenefit2.src="/src/img/features-light-01.png";
        imgBenefit3.src="/src/img/features-light-01.png";
        imgStatistic.src="/src/img/shape-dotted-light-02.svg";
        imgIntegrations.src="/src/img/shape-dotted-light-02.svg";
        imgContact.src="/src/img/logo-light.svg";
    }
    else { // dark
        imgTagChange.src="/src/img/icon-moon.svg";
        imgHeader.src="/src/img/logo-dark.svg";
        imgCarousel.src="/src/img/hero-dark.svg";
        imgSolution.src="/src/img/about-dark-01.png";
        imgBenefit1.src="/src/img/features-dark-01.svg"
        imgBenefit2.src="/src/img/features-dark-01.svg"
        imgBenefit3.src="/src/img/features-dark-01.svg"
        imgStatistic.src="/src/img/shape-dotted-dark.svg";
        imgIntegrations.src="/src/img/shape-dotted-dark.svg";
        imgContact.src="/src/img/logo-dark.svg";
    }
    check = !check;
}

