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

    let isLeapYear = function(yr) {return !((yr % 4) || (!(yr % 100) && (yr % 400)));};
    if(isLeapYear(thisYear)){
        months[1].length = 29;
    }

    let sections =""
    for (let i = 0; i < 12; i++){
        let month = months[i];
        let monthInside = `<h3>${month.name}</h3>`;
        
        for (let day = 0; day < month.length; day++) {
            monthInside += `
            <div class="card">
                <time datetime="${thisYear}">${thisYear}</time>
                <time datetime="${i+1}">${i + 1}</time>
                <time datetime="${day}">${day}</time>
            </div>`;
        }

        rootElement.insertAdjacentHTML("beforeend", `<section id="${month.name}">${monthInside}</section>`);
    }



    // let headerInside = ``;
    // headerInside += `<a href="#main" class="logo-container"><img class="logo" src="logo_small.png" alt="logo"/></a>`;
    // for (const sectionElement of listOfSectionElements) {
    //     if(sectionElement.getAttribute("data-visible") === "1"){
    //         headerInside += `<a href="#${ sectionElement.id }"> ${ sectionElement.getAttribute("data-title") } </a>`;
    //     }
    // }
    // headerInside += `<button class="book-button">book</button>`;
    // console.log(headerInside);
    // rootElement.insertAdjacentHTML("afterbegin", `<header>${headerInside}</header>`);
}

window.addEventListener("load", loadEvent);