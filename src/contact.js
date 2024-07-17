export function contact() {
    const contact = document.createElement('div');
    contact.classList.add('content');
    const contactTitle = document.createElement('h2');
    contactTitle.textContent = "Contact Us";
    contact.appendChild(contactTitle);
    const contactText = document.createElement('p');
    contactText.textContent = "Papa's Pizzeria is located at 308 Negra Arroyo Lane, Albuquerque, NM. You can reach us by phone at (555) 123-4567 or by email at info@papaspizzeria.com."
    contact.appendChild(contactText);
    return contact;
}