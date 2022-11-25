import PlayerName from "../../../src/components/PlayerName";
import VsPlayer from "../../components/VsPlayer";
import PlayerScore from "../../components/PlayerScore";
import ArrowDown from "../../components/ArrowDown";

import "./styles.css";

function ScoreBoard() {
  return /*html*/ `
    <header class="score-board">
      ${ArrowDown()}
      ${PlayerName("1")}
      ${PlayerScore(2)}
      ${VsPlayer()}
      ${PlayerScore(1)}
      ${PlayerName("2")}
    </header>
`;
}

export default ScoreBoard;
