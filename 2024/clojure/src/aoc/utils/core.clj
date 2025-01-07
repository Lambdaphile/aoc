(ns aoc.utils.core
  (:require [eftest.runner :as eftest]
            [clojure.string :as str]
            [clojure.math :as math]))

(defn comp-input-path [day]
  (str "src/aoc/days/" (if (< day 10) (str "0" day) day)  "/input.txt"))

(defn read-input [day]
  (slurp (comp-input-path day)))

(defn run [day & fs]
  (let [input (read-input day)]
    (map #(% input) fs)))

(defn run-tests []
  (eftest/run-tests
   (eftest/find-tests "src/aoc") {:report eftest.report.pretty/report}))

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

(defn mat-reduce [f initial-val m]
  (reduce
   (fn [acc [i row]]
     (reduce
      (fn [acc2 [j val]]
        (f acc2 val [i j] m))
      acc
      (map-indexed vector row)))
   initial-val
   (map-indexed vector m)))

(defn split-paragraphs [s]
  (str/split s #"\n\n"))

(defn every-indexed? [pred coll]
  (every? true? (map-indexed pred coll)))

(defn mid [coll]
  (let [mid-idx (math/floor (double (/ (count coll) 2)))
        start (dec mid-idx)
        end (inc mid-idx)]
    (cond
      (empty? coll) nil
      (even? (count coll)) (if (string? coll)
                             (subs coll start end)
                             (subvec coll start end))
      :else (nth coll mid-idx))))
