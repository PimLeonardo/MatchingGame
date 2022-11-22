import CardGame from "../CardGame";

function CardFrontBack() {
  return /*html*/ `
    <article class="card-front-back">
        ${CardGame()}
        ${CardGame("botafogo", "Logo do botafogo")}
    </article>
  `;
}

export default CardFrontBack;
