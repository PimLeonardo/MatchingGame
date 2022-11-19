import CardGame from "./src/components/CardGame";

const $root = document.querySelector("#root");
const $htmlCardGame = CardGame() + CardGame();

$root.insertAdjacentHTML("beforeend", $htmlCardGame);
