function loadEvent(){
    const rootElement = document.getElementById("root");
    var thisYear = new Date().getFullYear();
    console.log(thisYear);
    console.log(typeof thisYear);

    let  months = [
        {"name": "January",
        "length" : "31"},
        {"name": "February",
        "length" : "28"},
        {"name": "March",
        "length" : "31"},
        {"name": "April",
        "length" : "30"},
        {"name": "May",
        "length" : "31"},
        {"name": "June",
        "length" : "30"},
        {"name": "July",
        "length" : "31"},
        {"name": "August",
        "length" : "31"},
        {"name": "September",
        "length" : "30"},
        {"name": "October",
        "length" : "31"},
        {"name": "November",
        "length" : "30"},
        {"name": "December",
        "length" : "31"}
    ];

    let sections ="";
    for (let i = 0; i < 12; i++){
        let month = months[i];
        let monthInside = `<header class="monthHeader">`;
        monthInside += `<h1 id="title">${month.name}</h1>`;
        monthInside += `<div>${thisYear}</div>`;
        monthInside += `</header>`
        let monthText = formatNumber(i);

        monthInside += `<div class="dayCards">`
        for (let day = 0; day < month.length; day++) {
            let dayText = formatNumber(day);
            monthInside += `
            <div class="dayCard">
                <time datetime="${thisYear}">${thisYear}</time>
                <time datetime="${monthText}">${monthText}</time>
                <time datetime="${dayText}">${dayText}</time>
            </div>`;
        }
        monthInside += `</div>`

        rootElement.insertAdjacentHTML("beforeend", `<section id="${month.name}" class="monthSection">${monthInside}</section>`);
    }

    const dayCards = document.querySelectorAll(`.dayCard`);

    for (const dayCard of dayCards) {
        dayCard.addEventListener('click', event => {
            dayCard.classList.toggle("clicked");
        });
    }

}

window.addEventListener("load", loadEvent);



function formatNumber(number) {
    let numberText = `${number + 1}`;
    if (number < 9) {
        numberText = "0" + numberText;
    }
    return numberText;
}
