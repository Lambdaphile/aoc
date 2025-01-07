(ns aoc.core
  (:require [clojure.tools.cli :refer [parse-opts]]
            [clojure.string :as str]
            [aoc.utils.core :as u]))

(defn error-msg [errors]
  (str "The following errors occurred while parsing the command:\n\n"
       (str/join \newline errors)))

(defn validate [args]
  (let [{:keys [_ arguments errors]} (parse-opts args nil)]
    (cond
      errors
      (do
        (.println *err* (error-msg errors))
        (System/exit 1))
      (not= 2 (count arguments))
      (do
        (.println *err* "Wrong number of arguments")
        (System/exit 1))
      :else arguments)))

(defn -main [& args]
  (let [arguments (validate args)
        day   (parse-long (first arguments))
        part  (parse-long (last arguments))
        sub   (try (requiring-resolve
                    (symbol
                     (format
                      "aoc.days.%02d.core%s/part-%d" day "" part)))
                   (catch Exception _
                     (format "No%s fn found for day %d part %d."
                             "" day part)))]
    (cond
      (or (< day 1)
          (> day 25)) (.println *err* "Day out of range.")
      (or (< part 1)
          (> part 2)) (.println *err* "Part out of range.")
      (string? sub)   (.println *err* sub)
      :else           (let [result (sub (u/read-input day))]
                        (println result)))))
