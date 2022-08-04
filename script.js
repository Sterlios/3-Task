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

let border = document.createElement('div'); 
document.body.append(border);

border.style.border = '6px solid green';
border.style.margin = '0 auto';
border.style.padding = '16px';
border.style.maxWidth = '50%';

const user = new User("Anton", "12.07.1977", navigator.userAgent, "Capture.PNG", ["programming", "football", "chess"]);
border.append(user.Info);

const user2 = new User("Dima", "12.07", navigator.userAgent, "Capture.PNG", ["programming", "football", "chess"]);
border.append(user2.Info);

