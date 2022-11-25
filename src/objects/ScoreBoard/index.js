import PlayerName from "../../../src/components/PlayerName";
import VsPlayer from "../../components/VsPlayer";
import PlayerScore from "../../components/PlayerScore";
import "./styles.css";

function ScoreBoard() {
  return /*html*/ `
    <header class="score-board">
        ${PlayerName("1")}
        ${PlayerScore(2)}
        ${VsPlayer()}
        ${PlayerScore(1)}
        ${PlayerName("2")}
    </header>
`;
}

export default ScoreBoard;
