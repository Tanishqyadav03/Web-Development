let boxs = document.getElementsByClassName("box");
for (const item of boxs) {
    let color1 = Math.random() * 256;
    let color2 = Math.random() * 256;
    let color3 = Math.random() * 256;
    item.style.backgroundColor = `rgb(${color1}, ${color2}, ${color3})`
}

for (const item of boxs) {
    let color1 = Math.random() * 256;
    let color2 = Math.random() * 256;
    let color3 = Math.random() * 256;
    item.style.color = `rgb(${color1}, ${color2}, ${color3})`
}

// let color1 = Math.random() * 255;
// let color2 = Math.random() * 255;
// let color3 = Math.random() * 255;
// boxs.style.backgroundColor = `rgb(${color1}, ${color2}, ${color3})`
