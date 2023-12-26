let container = document.getElementById('container');
let buttonSection = document.createElement('div');
buttonSection.id = 'buttonSection';
container.append(buttonSection);

let clockContainer = document.createElement('div');
clockContainer.id = 'clockContainer';
container.append(clockContainer);

let analogButton = document.createElement('div');
analogButton.id = 'analogButton';
analogButton.innerText = 'Analog';
buttonSection.appendChild(analogButton);

let digitalButton = document.createElement('div');
digitalButton.id = 'digitalButton';
digitalButton.innerText = 'Digital';
buttonSection.appendChild(digitalButton);

let clockCircle = document.getElementById('clockCircle');
clockCircle.style.visibility = 'hidden';

function handleOnAnalogBtn(){
    clockContainer.appendChild(clockCircle);
    if(clockCircle.style.visibility == 'hidden'){
        clockCircle.style.visibility = 'visible'
        
    }
    else if(clockCircle.style.visibility == 'visible'){
        clockCircle.style.visibility = 'hidden';
    }
}
analogButton.addEventListener("click",handleOnAnalogBtn)

let digitalWatch = document.createElement('div');
digitalWatch.style.visibility = "hidden";
digitalWatch.id = 'digitalWatch';

function handleOnDigitalBtn(){
    clockContainer.appendChild(digitalWatch);
    if(digitalWatch.style.visibility == "hidden"){
        digitalWatch.style.visibility = "visible";
        clockCircle.style.visibility = 'hidden';
    }
    else if(digitalWatch.style.visibility == "visible"){
        digitalWatch.style.visibility = "hidden";
    }
    setInterval(()=>{
        let date = Date();
        let time = date.slice(15,25);
        digitalWatch.innerText = time;
    },100)
}
digitalButton.addEventListener("click",handleOnDigitalBtn)


