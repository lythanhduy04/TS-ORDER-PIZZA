import { Pizza, PizzaProps } from "./modules/Pizza";

const rootElement = document.querySelector(".root")!;

function createPizzaTemplate(pizza: PizzaProps): string {
  return `
          <div class="pizza">
          <h2> ${pizza.title}</h2>
          <p class="toppings">${pizza.toppings.join(",")}</p>
          <p>${pizza.description}</p>
          <span>${pizza.price}</span>
          </div>
  `;
}

function renderPizzaToDOM(templates: string[], parent: Element) {
  const templateElment = document.createElement("template");
  for (const t of templates) {
    templateElment.innerHTML += t;
  }
  parent.append(templateElment.content);
}

addEventListener("DOMContentLoaded", async () => {
  const pizzas = await Pizza.loadAll();

  //create a template string for each pizza
  const template = pizzas.map(createPizzaTemplate);

  //reder pizza template to DOM
  renderPizzaToDOM(template, rootElement);
});
