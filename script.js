function nextPage(pageNumber){

    let pages = document.querySelectorAll(".page");

    pages.forEach(page=>{
        page.classList.remove("active");
    });

    document
    .getElementById("page"+pageNumber)
    .classList.add("active");
}

/* Forgiveness Meter */

let progress = 0;

function fillMeter(){

    if(progress < 100){

        progress += 5;

        let meter = document.getElementById("meterFill");

        meter.style.width = progress + "%";

        meter.innerHTML = progress + "%";

        /* Final Message */

        if(progress >= 100){

            document.getElementById("finalMessage")
            .innerHTML = "Thank You For Forgiving Me ❤️🥺";
        }
    }
}