const characters = [
    {
        name: 'Luke Skywalker',
        height: 172,
        mass: 77,
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: 202,
        mass: 136,
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: 150,
        mass: 49,
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: 188,
        mass: 84,
        eye_color: 'blue',
        gender: 'male',
    },
];

//***MAP***

//1. Get array of all names
const names = characters.map((characters) => characters.name);
// console.log(names);
//2. Get array of all heights
const heights = characters.map((characters) => characters.height);
// console.log(heights);
//3. Get array of objects with just name and height properties
const minifiedRecord = characters.map((characters) => ({
    Name: characters.name, 
    Height: characters.height
}));
// console.log(minifiedRecord);
//4. Get array of all first names
const firstName = characters.map((characters) => characters.name.split(' ')[0]);
// console.log(firstName);

//***REDUCE***

//1. Get total mass of all characters
const totalMass = characters.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.mass;
}, 0);
// console.log(totalMass)
//Another way solution
const totalMass = characters.reduce((acc, cur) => acc + cur.mass, 0); 
0 is same idea for setTimeout exercise. the total mass start 0 then keep adding
// console.log(totalMass);
//2. Get total height of all characters
const totalHeight = characters.reduce((acc, cur) => acc + cur.height, 0);
// console.log(totalHeight)
//3. Get total number of characters by eye color
const charByEyeColor = characters.reduce((acc, cur) => {
    const color = cur.eye_color;
    if(acc[color]) {
        acc[color]++; // or acc[color]+1
    } else {
        acc[color] = 1 //1 means that we seen the color one time
    }
    return acc;
}, {});
// console.log(charByEyeColor);
//4. Get total number of characters in all the character names
const totalNameChar = characters.reduce((acc, cur) => acc + cur.name.length, 0);
// console.log(totalNameChar); // this is the length of all names in the object array

//***FILTER***

//1. Get characters with mass greater than 100
const greaterThan100mass = characters.filter(characters => {
    return characters.mass > 100;
});
// console.log(greaterThan100mass);
//2. Get characters with height less than 200
const shorterThan200 = characters.filter(characters => {
    return characters.height < 200;
});
// console.log(shorterThan200);
//3. Get all male characters
const maleCharachter = characters.filter(characters => {
    return characters.gender ==='male';
})
// console.log(maleCharachter);
//4. Get all female characters
const femleCharacter = characters.filter(characters => {
    return characters.gender ==='female';
})
// console.log(femleCharacter);

//***SORT***

//1. Sort by mass
const byMass = characters.sort((a, b) => b.mass - a.mass);
// console.log(byMass);

//2. Sort by height
const byHeight = characters.sort((a, b) => a.height - b.height);
// console.log(byHeight)
//3. Sort by name //must use return 1 or -1 for accsinde alphapatic
const byName = characters.sort((a, b) => {
    if (a.name < b.name) return -1; //using acsinding
    return 1;
});
// console.log(byName);
//4. Sort by gender
const byGender = characters.sort((a, b) => {
    if (a.gender === 'female') {
        return 1;
    } else {
        return -1;
    }
})
// console.log(byGender);

//***EVERY***

//1. Does every character have blue eyes?
const isAllBlueEyes = characters.every((characters) => {
    return characters.eye_color === "blue";
})
// console.log(isAllBlueEyes)
//2. Does every character have mass more than 40?
const isAllMassMoreThan40 = characters.every((characters) => {
    return characters.mass > 40;
});
// console.log(isAllMassMoreThan40);
//3. Is every character shorter than 200?
const allShorterthan200 = characters.every((characters) => {
    return characters.height < 200;
})
// console.log(allShorterthan200)
//4. Is every character male?
const isAllMale = characters.every((characters) => {
    return characters.gender === 'male' || 'female';
})
// console.log(isAllMale)

//***SOME***

//1. Is there at least one male character?
const oneMleChar = characters.some((characters) => {
    return characters.gender === 'male';
})
// console.log(oneMleChar);
//2. Is there at least one character with blue eyes?
const oneBlueEye = characters.some((characters) => {
    return characters.eye_color === 'blue';
})
// console.log(oneBlueEye)
//3. Is there at least one character taller than 210?
const onetallerThan210 = characters.some((characters) => {
    return characters.height > 210;
})
// console.log(onetallerThan210)
//4. Is there at least one character that has mass less than 50?
const oneMassLessThan50 = characters.some((characters) => {
    return characters.mass < 50;
})
// console.log(oneMassLessThan50)
