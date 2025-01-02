(ns aoc.days.04.core
  (:require [clojure.string :as str]
            [aoc.utils.core :as u]))

(def xmas "XMAS")
(def mas "MAS")
(def dirs
  {:n (fn [[y x] scale] [(- y scale) x])
   :ne (fn [[y x] scale] [(- y scale) (+ x scale)])
   :e (fn [[y x] scale] [y (+ x scale)])
   :se (fn [[y x] scale] [(+ y scale) (+ x scale)])
   :s (fn [[y x] scale] [(+ y scale) x])
   :sw (fn [[y x] scale] [(+ y scale) (- x scale)])
   :w (fn [[y x] scale] [y (- x scale)])
   :nw (fn [[y x] scale] [(- y scale) (- x scale)])})

(defn parse-input [input]
  (->> input
       str/split-lines
       (mapv #(str/split % #""))))

(defn match-word [word dir start-point grid]
  (every?
   (fn [idx]
     (=
      (str (nth word idx))
      (get-in grid (dir start-point idx))))
   (range (count word))))

(defn match-all-dirs [word start-point grid]
  (->> dirs
       vals
       (map #(match-word word % start-point grid))))

(defn count-matched-words [matched-dirs]
  (reduce #(+ %1 (if %2 1 0)) 0 matched-dirs))

(defn match-cross-dirs [word [y x] grid]
  (and
   (or
    (match-word word (:se dirs) [(dec y) (dec x)] grid)
    (match-word word (:nw dirs) [(inc y) (inc x)] grid))
   (or
    (match-word word (:sw dirs) [(dec y) (inc x)] grid)
    (match-word word (:ne dirs) [(inc y) (dec x)] grid))))

(defn part-1 [input]
  (->> input
       parse-input
       (u/mat-reduce
        (fn [count char coord original]
          (if (= char (str (first xmas)))
            (+ count
               (count-matched-words (match-all-dirs xmas coord original)))
            count))
        0)))

(defn part-2
  [input]
  (->> input
       parse-input
       (u/mat-reduce
        (fn [count char coord original]
          (if (= char (str (nth mas 1)))
            (+ count
               (if (match-cross-dirs mas coord original) 1 0))
            count))
        0)))

