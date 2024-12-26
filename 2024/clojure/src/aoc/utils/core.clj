(ns aoc.utils.core)

(defn get-input-path [day]
  (str "src/aoc/days/" day "/input.txt"))

(defn run [day part-1, part-2]
  (let [input (slurp (get-input-path day))]
    (println (part-1 input) (part-2 input))))