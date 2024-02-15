let currentDate = new Date();
let currentYear = currentDate.getFullYear();
let currentYearElement = document.getElementById('currentYear')
let agejokeElement = document.getElementById('ageJoke')

let birthDate = () => prompt('Enter your birth year')
const calcAge = (birthDate) =>{
    if(birthDate==true){
    let age = currentYear - birthDate()
    return age
    }else{
        birthDate();
    }
}
let ageJoke = (age) =>{
    if(age>18){
        agejokeElement.innerText = "Dang you old! LMAO";
        document.getElementById('gif').innerHTML = '<div style="width:100%;height:0;padding-bottom:99%;position:relative;"><iframe src="https://giphy.com/embed/bAjJ1jfbDrgCk" width="100%" height="100%" style="position:absolute;border-radius: 5px;" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div>';

    }else{
        agejokeElement.innerText = "what's up kiddo :)";
        document.getElementById('gif').innerHTML = '<div style="width:100%;height:0;padding-bottom:100%;position:relative;"><iframe src="https://giphy.com/embed/13hxeOYjoTWtK8" width="100%" height="100%" style="position:absolute;border-radius: 5px;" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div>';
    }
} 
let getAge = (calcAge,ageJoke) => {
    var age = calcAge(birthDate);
    if(age<0||age==false){
        currentYearElement.innerText = `Please enter an appropriate date, And try again.`;
    }else{
    currentYearElement.innerText = `You are ${age} Years old.`;
    ageJoke(age)
    }
}
