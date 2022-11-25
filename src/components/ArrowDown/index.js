import "./styles.css";

function ArrowDown(currentPlayer = 1) {
  return /*html*/ `
      <img class="arrow-down" data-currentPlayer="${currentPlayer}" src="images/arrow.svg" alt="Icone de uma seta indicando a vez do jogador" />
    `;
}

export default ArrowDown;