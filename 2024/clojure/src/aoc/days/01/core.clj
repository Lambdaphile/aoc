(ns aoc.days.01.core
  (:require [clojure.core.matrix :refer [transpose]]))

(defn parse-input [input]
  (->> input
       (re-seq #"\d+")
       (map parse-long)
       (partition 2)
       transpose))

(defn abs-diff [x y]
  (abs (- x y)))

(defn similarities [[l r]]
  (let [freq-map (frequencies r)]
    (map #(* % (freq-map % 0)) l)))

(defn part-1 [input]
  (->> input
       parse-input
       (map sort)
       transpose
       (reduce (fn [sum [x y]]
                 (+ sum (abs-diff x y)))
               0)))

(defn part-2 [input]
  (->> input
       parse-input
       similarities
       (apply +)))
