console.log("script is running");

function createCard(thumbnail, duration, title, channelName, views, upload) {
    let con = document.querySelector(".container");

    let ca = document.createElement("div");
    ca.className = "card";
    con.append(ca);

    let th = document.createElement("div");
    th.className = "thumbnail";
    ca.append(th);


    let im = document.createElement("img");
    im.className = "image";
    im.src = `${thumbnail}`;
    im.alt = "thumbnail-image";
    th.append(im);


    let cap = document.createElement("div");
    cap.className = "capsule";
    cap.innerText = `${duration}`;
    th.append(cap);

    let cont = document.createElement("div");
    cont.className = "content";
    ca.append(cont);

    let t = document.createElement("h3");
    t.className = "title";
    t.innerText = `${title}`;
    cont.append(t);

    let info = document.createElement("div");
    info.className = "info";
    cont.append(info);

    let cName = document.createElement("span");
    cName.className = "CName";
    cName.innerText = `${channelName}`;
    info.append(cName);

    let view = document.createElement("span");
    view.className = "views";
    view.innerText = `${views_num(views)}`;
    info.append(view);

    let mOld = document.createElement("span");
    mOld.className = "months-old";
    mOld.innerText = `${upload}`;
    info.append(mOld);
}




function thousand(number){
    let num = number.toString();
    let digit = num.slice(0,1);
    let newVal = digit + "k";
    return newVal;
}

function ten_thousand(number){
    let num = number.toString();
    let digit = num.slice(0,2);
    let newVal = digit + "k";
    return newVal;
}

function hundred_thousand(number){
    let num = number.toString();
    let digit = num.slice(0,3);
    let newVal = digit + "k";
    return newVal;
}

function million(number){
    let num = number.toString();
    let digit = num.slice(0,1);
    let newVal = digit + "M";
    return newVal;
}

function ten_million(number){
    let num = number.toString();
    let digit = num.slice(0,2);
    let newVal = digit + "M";
    return newVal;
}

function hundred_million(number){
    let num = number.toString();
    let digit = num.slice(0,3);
    let newVal = digit + "M";
    return newVal;
}


function views_num(num){
    if(num >= 1000 && num <= 9999){
        return thousand(num);
    }
    else if(num >= 10000 && num <= 99999){
        return ten_thousand(num);
    }
    else if(num >= 100000 && num <= 999999){
        return hundred_thousand(num);
    }
    else if(num >= 1000000 && num <= 9999999){
        return million(num);
    }
    else if(num >= 10000000 && num <= 99999999){
        return ten_million(num);
    }
    else{
        return hundred_million(num);
    }
}


createCard("thumbnail-Image.webp", "20:34", "Installing VS Code & How Website Work | Sigma Web Development Course - Tutorial #1", "CodeWithTanishq", 5000, "4months");

createCard("thumbnail-Image.webp", "15:34", "Installing VS Code & How Website Work | Sigma Web Development Course - Tutorial #2", "CodeWithTanishq", 56000, "8months");

createCard("thumbnail-Image.webp", "15:34", "Installing VS Code & How Website Work | Sigma Web Development Course - Tutorial #3", "CodeWithTanishq", 780000, "8months");

createCard("thumbnail-Image.webp", "20:34", "Installing VS Code & How Website Work | Sigma Web Development Course - Tutorial #1", "CodeWithTanishq", 5300000, "4months");

createCard("thumbnail-Image.webp", "15:34", "Installing VS Code & How Website Work | Sigma Web Development Course - Tutorial #2", "CodeWithTanishq", 54000000, "8months");

createCard("thumbnail-Image.webp", "15:34", "Installing VS Code & How Website Work | Sigma Web Development Course - Tutorial #3", "CodeWithTanishq", 760000000, "8months");
