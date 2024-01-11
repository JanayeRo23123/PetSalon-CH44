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
            age:5,
            gender:"Male",
            service:"Grooming",
            breed:"Yorkie"
        },
        {
            name:"Scooby",
            age:3,
            gender:"Male",
            service:"Nail Cut",
            breed:"Pitbull"
        },
        {
            name:"Tweety",
            age:1,
            gender:"Male",
            service:"Vaccines",
            breed:"Maltipooh"
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

