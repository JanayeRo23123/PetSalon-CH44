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
let counter=0;

//object constructor (function)
function Pet(name,age,gender,breed,service,price){
    this.name=name;
    this.age=age;
    this.gender=gender;
    this.breed=breed;
    this.service=service;
    this.price=price;
    this.id=counter++;
}

function register(){
    console.log("Registering")
    // get values from the inputs
    let inputName = document.getElementById("txtName").value;
    let inputAge = document.getElementById("txtAge").value;
    let inputGender = document.getElementById("txtGender").value;
    let inputBreed = document.getElementById("txtBreed").value;
    let inputService = document.getElementById("txtService").value;


    //creating the obj
    let newPet = new Pet(inputName,inputAge,inputGender,inputBreed,getServicePrice(inputService));
    //push the obj
    if(isValid(newPet)==true){
        petSalon.pets.push(newPet);
            //display the pets array on the console
            displayPetCards();
            $("input").val("");// clear the inputs
            showNotifications("notifications","alet-success","Registration was sucessful");
    }else{
        showNotifications("notifications","alet-danger","Please add all the required fields!");
    }
}
function getServicePrice(serviceDescription){
    let services = readArray();//get services list from LS
    let price;
    for(let i=0;i<services.length;i++){//traveling the array
        let service = services[i];
        if(service.description==serviceDescription){ // find the description
            price=service.price; //assign the price
        }
    }
    return Number(price); //return the price
}
function showNotifications(id,stylying,message){
    $("#"+id).removeClass("alert-danger");
    $("#"+id).removeClass("alert-success");
    $("#"+id).text(message).addClass(styling).fadeIn(300).delay(2000).slideUp(300);
}
function deletePet(petID){
    console.log("Deleting pet" + petID);
    let deleteIndex; //we found the pet, store the index
}
function addServices(){
    let services = readArray();
    for(let i=0; i<services.length;i++){
        $("#txtServices").append(`<option value="${services[i].description}">${services[i].description}</option>`)
    }
}

function init(){
    // creating pets using constuctor
    let p1 = new Pet("JoJo",16,"Male","Jack-Russle",getServicePrice("Teeth Cleaning"));
    let p2 = new Pet("Mocha",13,"Female","Yorkie",getServicePrice("Grooming"));
    let p3 = new Pet("Bunnie",1,"Female","Multipooh",getServicePrice("Play Day"));
    let p4 = new Pet("Onyx",1,"Male","Pikapooh",getServicePrice("Training"));

    //pushing pets into the pets array
    petSalon.pets.push(p1,p2,p3,p4);
    addServices();
    displayPetCards();

    //hook events
    $("notifications").hide();
}

window.onload=init; //wait for HTML to render
