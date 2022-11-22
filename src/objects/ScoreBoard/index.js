import "./styles.css";
import PlayerName from "../../../src/components/PlayerName";

function ScoreBoard() {
  return /*html*/ `
    <header class="score-board">
        ${PlayerName("1")}
        ${PlayerName("2")}
    </header>
`;
}

export default ScoreBoard;
