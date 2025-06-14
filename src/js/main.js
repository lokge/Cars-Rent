const selects = document.querySelectorAll(".custom-select")

selects.forEach((select) => {
    select.addEventListener("click", function(event) {
        select.classList.toggle('active');
        if (event.target.tagName == 'li') {
            console.log(event.target.value)
        }
    })
})