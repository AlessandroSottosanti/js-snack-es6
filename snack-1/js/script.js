const bikes = [
    { name: "Mountain King", weight: 15 },
    { name: "Road Runner", weight: 8 },
    { name: "Trail Blazer", weight: 12 },
    { name: "Urban Cruiser", weight: 10 },
    { name: "Speedster", weight: 7 }
];
let lightestBike = bikes[0];

for(i = 0; i < bikes.length; i++){
    curBike = bikes[i];
    peso = curBike.weight;
    if (peso < lightestBike.weight) {
        lightestBike = curBike; 
    }
    console.log("La bici più leggera è la", lightestBike.name);
}