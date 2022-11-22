import PlayerName from "../../../src/components/PlayerName";
import "./styles.css";

function ScoreBoard() {
  return /*html*/ `
    <header class="score-board">
        ${PlayerName("1")}
        ${PlayerName("2")}
    </header>
`;
}

export default ScoreBoard;
