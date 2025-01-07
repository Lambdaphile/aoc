(ns aoc.days.05.core
  (:require [clojure.string :as str]
            [clojure.set :as set]
            [clojure.core.matrix :refer [emap]]
            [aoc.utils.core :as u]))

(defn parse-rules [rules]
  (->> rules
       str/split-lines
       (map #(str/split % #"\|"))
       (emap parse-long)
       (reduce (fn [rules [x y]]
                 (update rules x (fnil conj #{}) y))
               {})))

(defn parse-updates [updates]
  (->> updates
       str/split-lines
       (map #(str/split % #","))
       (emap parse-long)))

(defn parse-input [input]
  (->> input
       u/split-paragraphs
       (apply (fn [rules updates]
                [(parse-updates updates) (parse-rules rules)]))))

(defn validate-update [update rules]
  (u/every-indexed? (fn [idx page-num]
                      (let [sub (drop (inc idx) update)
                            page-rules (get rules page-num)]
                        (cond
                          (empty? sub) true
                          (empty? page-rules) false
                          :else (set/superset? page-rules (set sub)))))
                    update))

(defn validate-updates [updates rules]
  (map #(vector (validate-update % rules) %) updates))

(defn part-1 [input]
  (->> input
       parse-input
       (apply validate-updates)
       (filter #(true? (first %)))
       (reduce (fn [sum update]
                 (+ sum (u/mid (second update))))
               0)))
