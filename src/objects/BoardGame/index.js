import cards from "./data";

import CardFrontBack from "../../components/CardFrontBack";

import "./styles.css";

function BoardGame(amountCards) {
  window.boardgame = {};
  window.boardgame.handleClick = () => {
    const $boardGame = document.querySelector(".board-game");
    const $cardsActive = $boardGame.querySelectorAll(
      ".card-front-back.-active"
    );

    function flipAndHideCards() {
      $cardsActive.forEach((card) => card.classList.remove("-active"));
    }

    function changePlayer() {
      const $arrowDown = document.querySelector(".arrow-down");
      const currentplayer = $arrowDown.getAttribute("data-currentplayer");
      $arrowDown.setAttribute("data-currentplayer", currentplayer == 1 ? 2 : 1);
    }

    if ($cardsActive.length === 2) {
      setTimeout(() => {
        flipAndHideCards();
        changePlayer();
      }, 1000);
    }
  };
  const htmlCardsList = cards.map((card) =>
    CardFrontBack(card.icon, card.altIcon)
  );
  const $htmlCards = htmlCardsList.join("");

  return /*html*/ `
    <section class="board-game" onClick="boardgame.handleClick()">
        ${$htmlCards}
    </section>
  `;
}

export default BoardGame;
