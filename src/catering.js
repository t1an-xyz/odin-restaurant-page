export function catering() {
    const catering = document.createElement('div');
    catering.classList.add('content');
    const cateringTitle = document.createElement('h2');
    cateringTitle.textContent = "Catering";
    catering.appendChild(cateringTitle);
    const cateringText = document.createElement('p');
    cateringText.textContent = "Papa's Pizzeria offers catering services for events of all sizes. Whether you're hosting a birthday party, a corporate event, or a wedding, we can provide delicious food that will leave your guests satisfied.";
    catering.appendChild(cateringText);

    return catering;
}