function onEntry(entries) {
    entries.forEach(change => {
        if (change.isIntersecting) {
            change.target.classList.add('visible');
        }
    });
}

let options = {
    threshold: [0.5]
};
let observer = new IntersectionObserver(onEntry, options);
let descriptionCards = document.querySelectorAll('.description-card');

for (let card of descriptionCards) {
    observer.observe(card);
}

let descriptionCarLogos = document.querySelector('.description-car-logos');
observer.observe(descriptionCarLogos);

let choseUsCards = document.querySelectorAll('.chose-us-card');

for (let card of choseUsCards) {
    observer.observe(card);
}

let choseUsContainers = document.querySelectorAll('.chose-us .container');

for (let card of choseUsContainers) {
    observer.observe(card);
}

let downloadAppPhone = document.querySelector('.download-app-container');
observer.observe(downloadAppPhone);