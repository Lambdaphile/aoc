# 🎄 Advent of Code 2024 - Clojure 🎁

My [Advent of Code 2024](https://adventofcode.com/2024) puzzle solutions implemented in [Clojure](https://clojure.org/).

## 🎯 Usage

- 🚀 `lein run <day> <part>`: To get the solutions for a specific day; Example: `lein run 1 1`
- 🧪 `lein eftest`: to run tests
- 💻 Alternatively, use the `run` and `run-tests` functions from `src/utils/core.clj` in your editor's REPL, without having to navigate to the terminal

## 📂 Directory Structure

Each day's solution is in its own folder under `src/aoc/days/`. In these folders you will find:

- 📜 `README.md`: The puzzle description
- 📄 `input.txt`: The puzzle input
- 🛠️ `core.clj`: My solutions for the day
- 🧪 `core_test.clj`: Unit tests for the solution, using the example input from the puzzle description
