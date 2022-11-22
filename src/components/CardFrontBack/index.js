import CardGame from "../CardGame";
import "./styles.css";

function CardFrontBack() {
  return /*html*/ `
    <article class="card-front-back">
      <div class="card -front">
        ${CardGame()}
      </div>
      <div class="card -back">
        ${CardGame("botafogo", "Logo do botafogo")}
      </div>
    </article>
  `;
}

export default CardFrontBack;