function displayPetCards(){
    const DIV =document.getElementById("pets");
    let card ="";
    //travel the array
    for(let i=0; i<petSalon.pets.length;i++){
        let pet = petSalon.pets[i];
        console.log(pet);

        //create HTML templates
        card+= `
        <tr> 
            <td> Name: ${pet.name}</td>
            <td> Age: ${pet.age}</td>
            <td> Gender: ${pet.gender}</td>
            <td> Breed: ${pet.breed}</td>
            <td> Service: ${pet.service}</td>
        </tr>
            `
    }
    DIV.innerHTML=card;
}