function hero() {
    const hero = document.createElement('div');
    hero.classList.add('hero');
    const heroTint = document.createElement('div');
    heroTint.classList.add('hero-tint');
    const heroTitle = document.createElement('h1');
    heroTitle.textContent = "Papa's Pizzeria";
    heroTint.appendChild(heroTitle);
    const subtitle = document.createElement('p');
    subtitle.textContent = "The best pizza in town!";
    heroTint.appendChild(subtitle);

    const attribution = document.createElement('p');
    attribution.innerHTML = 'Photo by Klara Kulikova on <a href="https://unsplash.com/photos/person-holding-sliced-pizza-with-red-sauce-jvWZYnxBDlQ" target="_blank">Unsplash</a>';
    attribution.classList.add('attribution');
    heroTint.appendChild(attribution);

    hero.appendChild(heroTint);
    

    return hero;
}

function about() {
    const about = document.createElement('div');
    about.classList.add('content');
    const aboutTitle = document.createElement('h2');
    aboutTitle.textContent = "About Us";
    about.appendChild(aboutTitle);
    const aboutText = document.createElement('p');
    aboutText.textContent = "Papa's Pizzeria is a family-owned pizzeria that has been serving the community for over 20 years. We pride ourselves on using the freshest ingredients and providing the best customer service.";
    about.appendChild(aboutText);

    return about;
}

export function home() {
    const home = document.createElement('div');
    home.appendChild(hero());
    home.appendChild(about());
    return home;
}