import "./styles.css";
import CardGame from "../../../src/components/CardGame";

function BoardGame(amountCards) {
  const $htmlCardGame = CardGame();
  const $htmlContent = $htmlCardGame.repeat(amountCards);

  return /*html*/ `
    <section class="board-game">
        ${$htmlContent}
    </section>
  `;
}

export default BoardGame;
