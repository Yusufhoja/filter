let filterbtn = document.querySelector('button')

let carlist = document.querySelector('h1')

filterbtn.addEventListener("click", () => {
    const totalcars = document.querySelector('input').value
    fetchcars(totalcars);
});

async function fetchcars(totalcars) {
    const response = await fetch("https://parallelum.com.br/fipe/api/v1/carros/marcas");
    const data = await response.json();
    const filteredcars = data.filter((car) => car.codigo === totalcars);
    displaycars(filteredcars.slice(0, totalcars));
}

function displaycars(cars) {
    carlist.innerHTML = "";
    cars.forEach((car) => {
        const cardiv = document.createElement('div')
        cardiv.textContent = `Name: ${car.nome} Code: ${car.codigo}`;
        carlist.appendChild(cardiv);
    })
}
