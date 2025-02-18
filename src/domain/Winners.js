import { createError } from "../error/createError.js";
import { ERROR_MESSAGE } from "../error/message.js";

export default class Winners {
  #cars;

  constructor(cars) {
    this.#cars = cars;

    validateCars();
  }

  validateCars() {
    if (Array.isArray(this.#cars)) {
      createError(ERROR_MESSAGE.NOT_ARRAY);
    }
    this.#cars.forEach((car) => {
      if (
        typeof car.getName !== "function" ||
        typeof car.getPosition !== "function"
      ) {
        createError(ERROR_MESSAGE.INVALID_CARS);
      }
    });
  }

  getWinners() {
    const max = Math.max(...this.#cars.map((car) => car.getPosition()));
    const winners = this.#cars.filter((car) => car.getPosition() === max);

    return winners.map((winner) => winner.getName());
  }
}
