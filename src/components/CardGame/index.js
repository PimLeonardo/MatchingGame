import "./styles.css";

function CardGame(icon = "icon", alt = "Logo do app") {
  return /*html*/ `
    <article class="card-game">
        <img src="./images/${icon}.svg" alt="${alt}"/>
    </article>
    `;
}

export default CardGame;
