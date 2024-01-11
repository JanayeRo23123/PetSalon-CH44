//object literal

let petSalon = {
    name: "The Fashion Pet",
    address: {
        street:"Av. Universidad",
        number:"7250",
        zip:"22900" 
    },
    hours:{
        open:"9:00 am",
        close:"8:00 pm"
    },
    pets:[
        {
            name:"Lucas",
            age:80,
            gender:"Male",
            service:"Grooming",
        },
        {
            name:"Scooby",
            age:70,
            gender:"Male",
            service:"Nail Cut",
        },
        {
            name:"Tweety",
            age:79,
            gender:"Male",
            service:"Vaccines",
        }
    ]
}

console.log(petSalon.name);

console.table(petSalon.pets);
//displaying names
console.log(petSalon.pets[0].name);
console.log(petSalon.pets[1].name);
console.log(petSalon.pets[2].name);

// total of elements the array
console.log(petSalon.pets.length);

//document.getElementByID("title").innerHTML=petSalon.name; this is another method