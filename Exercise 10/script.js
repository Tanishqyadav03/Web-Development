let ad  = parseInt(Math.random() * 3);
let sh  = parseInt(Math.random() * 3);
let ot  = parseInt(Math.random() * 3);


let adj = {
    0 : "Crazy",
    1 : "Amazing",
    2 : "Fire"
}

let shop = {
    0 : "Engine",
    1 : "Foods",
    2 : "Garments"
}

let other = {
    0 : "Bros",
    1 : "Limited",
    2 : "Hub"
}

console.log(`${adj[ad]} ${shop[sh]} ${other[ot]}`)