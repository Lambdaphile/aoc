(ns aoc.days.02.core-test
  (:require [clojure.test :refer [deftest is]]
            [aoc.days.02.core :refer :all]))

(def input "7 6 4 2 1
1 2 7 8 9
9 7 6 2 1
1 3 2 4 5
8 6 4 4 1
1 3 6 7 9")
(def parsed-input
  '((7 6 4 2 1)
    (1 2 7 8 9)
    (9 7 6 2 1)
    (1 3 2 4 5)
    (8 6 4 4 1)
    (1 3 6 7 9)))

(deftest parse-input-test
  (is (= parsed-input (parse-input input))))

(deftest part-1-test
  (is (= 2 (part-1 input))))

(deftest part-2-test
  (is (= 4 (part-2 input))))
