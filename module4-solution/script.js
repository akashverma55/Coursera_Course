var names=new Array();
names[0]="Akash";
names[1]="Aliqyan";
names[2]="Aryan";
names[3]="Yash";
names[4]="Sahil";
names[5]="Rajveer";
names[6]="Amal";
names[7]="Shantanu";
names[8]="Joyson";
names[9]="Anuj";


for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
        console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}