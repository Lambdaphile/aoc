(ns aoc.days.02.core
  (:require [clojure.string :as str]
            [aoc.utils.core :as u]))

(def max-diff 3)

(defn parse-input [input]
  (->> input
       (str/split-lines)
       (map #(re-seq #"\d+" %))
       (u/mat-map parse-long)))

(defn safe? [report]
  (and (u/in-range? max-diff report) (u/monotonic? report)))

(defn dampened-safe? [report]
  (or (safe? report)
      (some (fn [idx]
              (safe? (u/drop-range idx 1 report))) (range (count report)))))

(defn part-1 [input]
  (->> input
       parse-input
       (reduce (fn [count report]
                 (if (safe? report) (inc count) count)) 0)))

(defn part-2 [input]
  (->> input
       parse-input
       (reduce (fn [count report]
                 (if (dampened-safe? report) (inc count) count)) 0)))
