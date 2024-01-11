//objsect literal
let petSalon ={
    name:"Picture Pawfect Pets",
    address: {
        street:"Av. Universidad",
        number:"7250",
        zip:"22900" 
    },
    hours:{
        open:"9:00 am",
        close:"8:00 pm"
    },
    pets:[] //array
}
//object constructor (function)
function Pet(name,age,gender,breed,service){
    this.name=name;
    this.age=age;
    this.gender=gender;
    this.breed=breed;
    this.service=service;
}

function register(){
    console.log("Registering")
    // get values from the inputs
    let inputName = document.getElementById("txtName").value;
    let inputAge = document.getElementById("txtName").value;
    let inputGender = document.getElementById("txtName").value;
    let inputBreed = document.getElementById("txtName").value;
    let inputService = document.getElementById("txtName").value;


    //creating the obj
    let newPet = new Pet(inputName,inputAge,inputGender,inputBreed,inputService);
    console.log(petSalon.pets);

    //push the obj
    petSalon.pets.push(newPet);

    //display the pets array on the console
    console.log(petSalon.pets);
}

function init(){
    // creating pets using constuctor
    let p1 = new Pet("JoJo",16,"Male","Jack-Russle","Teeth Cleaning");
    let p2 = new Pet("Mocha",13,"Female","Yorkie","Grooming");
    let p3 = new Pet("Bunnie",1,"Female","Multipooh","Play Day");
    let p4 = new Pet("Onyx",1,"Male","Pikapooh","Training");

    //pushing pets into the pets array
    petSalon.pets.push(p1,p2,p3,p4);

    displayPetCards();
}

window.onload=init; //wait for HTML to render
