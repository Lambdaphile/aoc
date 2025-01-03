(ns aoc.days.03.core)

(defn evaluate [expr]
  (->> expr
       (re-seq #"\d+")
       (map parse-long)
       (apply *)))

(defn part-1 [input]
  (->> input
       (re-seq #"mul\(\d+,\d+\)")
       (reduce (fn [sum expr]
                 (+ sum (evaluate expr)))
               0)))

(defn part-2 [input]
  (->> input
       (re-seq #"mul\(\d+,\d+\)|do\(\)|don't\(\)")
       (reduce (fn [[enabled? sum] expr]
                 (cond
                   (= expr "do()") [true sum]
                   (= expr "don't()") [false sum]
                   enabled? [true (+ sum (evaluate expr))]
                   :else [false sum]))
               [true 0])
       second))
