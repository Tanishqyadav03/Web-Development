// const m1 = Math.ceil(Math.random() * 7) * 1000;
// const m2 = Math.ceil(Math.random() * 7) * 1000;
// const m3 = Math.ceil(Math.random() * 7) * 1000;
// const m4 = Math.ceil(Math.random() * 7) * 1000;
// const m5 = Math.ceil(Math.random() * 7) * 1000;

// function message1() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("Initializing Hacking");
//         }, m1);
//     });
// }

// function message2() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("Reading your Files");
//         }, m2);
//     });
// }

// function message3() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("Password files Detected");
//         }, m3);
//     });
// }

// function message4() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("Sending all passwords and personal files to server");
//         }, m4);
//     });
// }

// function message5() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("Cleaning up");
//         }, m5);
//     });
// }

// function message(message) {
//     let showMessage = `<h3>${message}</h3>`;
//     document.body.innerHTML = document.body.innerHTML + showMessage;
// }

// async function hacking() {
//     let message_1 = await message1();
//     message(message_1);
//     let message_2 = await message2();
//     message(message_2);
//     let message_3 = await message3();
//     message(message_3);
//     let message_4 = await message4();
//     message(message_4);
//     let message_5 = await message5();
//     message(message_5);
// }

// hacking();

const addItem = async (item) => {
    await randomDelay();
    let div = document.createElement("div");
    div.innerHTML = item;
    document.body.append(div)
}

const randomDelay = () => {
    return new Promise((resolve, reject) => {
        let timeout = 1 + 6 * Math.random();
        setTimeout(() => {
            resolve()
        }, timeout * 1000);
    })
}

async function main() {

    let t = setInterval(() => {
        let last = document.body.getElementsByTagName("div");
        last = last[last.length - 1]
        if(last.innerHTML.endsWith("...")){
            last.innerHTML = last.innerHTML.slice(0, last.innerHTML.length-3)
        }
        else{

            last.innerHTML = last.innerHTML + "."
        }

    }, 300);

    let text = ["Now reading your data",
        "Reading your Files",
        "Password files Detected",
        "Sending all passwords and personal files to server",
        "Cleaning up"]

    for (const item of text) {
        await addItem(item)
    }

    await randomDelay()
    clearInterval(t)

}
main()
