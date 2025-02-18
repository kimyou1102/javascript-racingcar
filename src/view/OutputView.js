import { OUTPUT_MESSAGE } from "./constants/message.js";

export default class OutputView {
  printExecutionResult(results) {
    console.log(OUTPUT_MESSAGE.RESULT);
    results.forEach((result) => {
      const resultStrings = result.map(
        ({ name, position }) =>
          `${name} : ${OUTPUT_MESSAGE.PROGRESS_SYMBOL.repeat(position)}\n`
      );
      console.log(resultStrings.join("\n"));
    });
  }

  printWinners(winnerNames) {
    console.log(`최종 우승자: ${winnerNames.join(", ")}`);
  }
}
