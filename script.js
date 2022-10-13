class User {
  constructor(name, birthDay, userAgent, capture, skills) {
    this.Name = name;
    this.BirtDay = birthDay;
	this.Skills = skills;
	this.UserAgent = userAgent;
	this.Capture = capture;
  }
  
  get Info(){ 
	let ul = document.createElement('ul');
	ul.append(this.GetImage(this.Capture));
	ul.append(this.GetField(this.Name));
	ul.append(this.GetField(this.BirtDay));
	ul.append(this.GetField(this.UserAgent));
	ul.append(this.GetArray(this.Skills));
	
	return ul;
  }
  
  GetField(field){
	let li = document.createElement('li');
	li.innerHTML = field;
	return li;
  }
  
  GetImage(capture){
	const photo = new Image(200, 200);
	photo.src = capture;
	return photo;
  }
  
  GetArray(array){
	let ul = document.createElement('ul');
	
	for(let i = 0; i < this.Skills.length; i++){
		let li = document.createElement('li');
		li.innerHTML = this.Skills[i];
		ul.append(li);
	}
	
	return ul;
  }
}

let personInfo = document.createElement('div'); 
document.body.append(personInfo);

personInfo.style.border = '6px solid green';
personInfo.style.margin = 'auto';
personInfo.style.padding = '15px';
personInfo.style.maxWidth = '50%';

const user = new User("Anton", "12.07.1977", navigator.userAgent, "Capture.PNG", ["programming", "football", "chess"]);
personInfo.append(user.Info);

let withoutPaddingSize = document.createElement('div');
withoutPaddingSize.append("Размер без паддинга: " + getComputedStyle(personInfo).width + " x " + getComputedStyle(personInfo).height);
personInfo.append(withoutPaddingSize);

let withPaddingSize = document.createElement('div');
withPaddingSize.append("Размер c паддингом: " + personInfo.clientWidth + " x " + personInfo.clientHeight);
personInfo.append(withPaddingSize);

let cursorPositionElement = document.createElement('div');
personInfo.append(cursorPositionElement);

function getPosition(event){
	let x = 0;
	let y = 0;
 
	if (!event){
		let event = window.event;
	}
 
	x = event.pageX;
	y = event.pageY;
	
	return {x: x, y: y}
}

addEventListener('mousemove', (event) => {
	let cursorPosition = getPosition(event);
	cursorPositionElement.innerHTML = "Позиция: " + cursorPosition.x + "." + cursorPosition.y;
	personInfo.append(cursorPositionElement);
});