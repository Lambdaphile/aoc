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

(defn valid-update? [sub-update page-rules]
  (set/subset? (set sub-update) (or page-rules #{})))

(defn validate-update [update rules]
  (u/every-indexed? (fn [idx page-num]
                      (let [sub-update (drop (inc idx) update)
                            page-rules (get rules page-num)]
                        (valid-update? sub-update page-rules)))
                    update))

(defn validate-updates [updates rules]
  [(map #(vector (validate-update % rules) %) updates) rules])

(defn sum-mids [updates]
  (reduce #(+ %1 (u/mid %2)) 0 updates))

(defn reorder-updates [updates rules]
  (map #(u/bubble (fn [page-num _ reord-update]
                    (let [idx (u/index-of page-num reord-update)
                          sub-update (drop (inc idx) reord-update)
                          page-rules (get rules page-num)]
                      (not (valid-update? sub-update page-rules))))
                  %)
       updates))

(defn part-1 [input]
  (->> input
       parse-input
       (apply validate-updates)
       first
       (filter #(true? (first %)))
       (map last)
       sum-mids))

(defn part-2 [input]
  (->> input
       parse-input
       (apply validate-updates)
       ((juxt
         (comp #(map last %) #(remove (comp true? first) %) first) last))
       (apply reorder-updates)
       sum-mids))
