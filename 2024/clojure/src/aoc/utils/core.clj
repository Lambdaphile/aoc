(ns aoc.utils.core
  (:require [eftest.runner :as eftest]))

(defn comp-input-path [day]
  (str "src/aoc/days/" (if (< day 10) (str "0" day) day)  "/input.txt"))

(defn read-input [day]
  (slurp (comp-input-path day)))

(defn run [day part-1 part-2]
  (let [input (read-input day)]
    (vector (part-1 input) (part-2 input))))

(defn run-tests []
  (eftest/run-tests (eftest/find-tests "src/aoc")))

(defn transpose [m]
  (apply map vector m))

(defn mat-map [f m]
  (map #(map f %) m))

(defn in-range? [n coll]
  (every? (fn [[curr next]] (<= (abs (- curr next)) n))
          (partition 2 1 coll)))

(defn increasing?
  [coll]
  (apply < coll))

(defn decreasing? [coll]
  (apply > coll))

(defn monotonic? [coll]
  (or (increasing? coll) (decreasing? coll)))

(defn drop-range [start count coll]
  (concat (take start coll) (drop (+ count start) coll)))
