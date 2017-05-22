function Wizard(name, application, os) {
	this.name = name;
	this.application = application;
	this.os = os;

	this.info = () => {
		console.log(`this is ${name} used for ${application} with ${os}`);
	}
}

Wizard.prototype.RAM;
Wizard.prototype.system_config = function(){
	console.log(`this is ${this.name} wizard runs with ${this.RAM} system`);
};

let wizard = new Wizard("play", "vlc", "ubuntu");
wizard.RAM = "2 GB";

// console.log(wizard);
// wizard.info();
// wizard.system_config();