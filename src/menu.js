let appetizers = [
    {
        name: "Mozzarella Sticks",
        description: "Fried mozzarella cheese sticks served with marinara sauce.",
        price: 6.99
    },
    {
        name: "Chicken Wings",
        description: "Buffalo or BBQ style chicken wings served with celery and ranch or blue cheese dressing.",
        price: 8.99
    },
    {
        name: "Garlic Knots",
        description: "Baked dough tied in a knot, covered in garlic and olive oil, and served with marinara sauce.",
        price: 3.99
    }
]

let entrees = [
    {
        name: "Cheese Pizza",
        description: "Classic cheese pizza with marinara sauce and mozzarella cheese.",
        price: 12.99
    },
    {
        name: "Pepperoni Pizza",
        description: "Classic cheese pizza with pepperoni slices.",
        price: 14.99
    },
    {
        name: "Spaghetti and Meatballs",
        description: "Spaghetti noodles with marinara sauce and meatballs.",
        price: 10.99
    }
]

let desserts = [
    {
        name: "Tiramisu",
        description: "Classic Italian dessert made with ladyfingers, espresso, and mascarpone cheese.",
        price: 5.99
    },
    {
        name: "Cannoli",
        description: "Italian pastry dessert filled with sweet ricotta cheese and chocolate chips.",
        price: 4.99
    },
    {
        name: "Gelato",
        description: "Italian ice cream made with milk, sugar, and flavoring.",
        price: 3.99
    }
]

let drinks = [
    {
        name: "Coke",
        description: "Classic Coca-Cola soda.",
        price: 1.99
    },
    {
        name: "Sprite",
        description: "Lemon-lime flavored soda.",
        price: 1.99
    },
    {
        name: "Iced Tea",
        description: "Sweetened or unsweetened iced tea.",
        price: 1.99
    }
]

function render_menu_items(menu_items) {
    const items_container = document.createElement('div');
    items_container.classList.add('menu-items');
    menu_items.forEach(item => {
        const item_container = document.createElement('div');
        item_container.classList.add('menu-item');
        const item_name = document.createElement('h3');
        item_name.textContent = item.name;
        item_container.appendChild(item_name);
        const item_description = document.createElement('p');
        item_description.textContent = item.description;
        item_container.appendChild(item_description);
        const item_price = document.createElement('p');
        item_price.textContent = `$${item.price.toFixed(2)}`;
        item_container.appendChild(item_price);
        items_container.appendChild(item_container);
    });
    return items_container;
}

export function menu() {
    const menu = document.createElement('div');
    menu.classList.add('content');
    const menuTitle = document.createElement('h2');
    menuTitle.textContent = "Menu";
    menu.appendChild(menuTitle);
    const appetizersTitle = document.createElement('h3');
    appetizersTitle.textContent = "Appetizers";
    menu.appendChild(appetizersTitle);
    menu.appendChild(render_menu_items(appetizers));
    const entreesTitle = document.createElement('h3');
    entreesTitle.textContent = "Entrees";
    menu.appendChild(entreesTitle);
    menu.appendChild(render_menu_items(entrees));
    const dessertsTitle = document.createElement('h3');
    dessertsTitle.textContent = "Desserts";
    menu.appendChild(dessertsTitle);
    menu.appendChild(render_menu_items(desserts));
    const drinksTitle = document.createElement('h3');
    drinksTitle.textContent = "Drinks";
    menu.appendChild(drinksTitle);
    menu.appendChild(render_menu_items(drinks));
    return menu;
}