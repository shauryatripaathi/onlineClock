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

function handleOnAnalogBtn(){
    alert("handleOnAnalogBtn");
}
analogButton.addEventListener("click",handleOnAnalogBtn)

let analogWatch = document.createElement('div');
analogWatch.id = 'analogWatch';

function handleOnDigitalBtn(){
    clockContainer.appendChild(analogWatch);
    setInterval(()=>{
        let date = Date();
        let time = date.slice(15,25);
        analogWatch.innerText = time;
    },100)
}
digitalButton.addEventListener("click",handleOnDigitalBtn)


