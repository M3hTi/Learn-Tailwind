// console.log("hi");

const yearElement = document.querySelector('#year');
// console.log(yearElement);

function getYear() {
    let now = new Date()
    // console.log(now);
    let year = now.getFullYear()
    return year
}

yearElement.innerHTML = `${getYear()}`