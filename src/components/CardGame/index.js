import "./styles.css";

function CardGame(icon = "icon", alt = "Logo do app") {
  return /*html*/ `
    <article class="card-game">
        <img src="./images/${icon}.png" alt="${alt}"/>
    </article>
    `;
}

export default CardGame;
