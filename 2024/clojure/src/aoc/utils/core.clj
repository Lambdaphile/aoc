(ns aoc.utils.core
  (:require [eftest.runner :as eftest]))

(defn compose-input-path [day]
  (str "src/aoc/days/" (if (< day 10) (str "0" day) day)  "/input.txt"))

(defn read-input [day]
  (slurp (compose-input-path day)))

(defn run [day part-1 part-2]
  (let [input (read-input day)]
    (vector (part-1 input) (part-2 input))))

(defn run-tests []
  (eftest/run-tests (eftest/find-tests "src/aoc")))

(defn transpose [matrix]
  (apply map vector matrix))
