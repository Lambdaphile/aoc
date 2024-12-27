(ns aoc.utils.core-test
  (:require [clojure.test :refer [deftest is]]
            [aoc.utils.core :as u]))

(deftest compose-input-path-test
  (is (= "src/aoc/days/01/input.txt" (u/compose-input-path 1))))

(deftest transpose-test
  (is (= [[1 3] [2 4]]  (u/transpose [[1 2] [3 4]]))))