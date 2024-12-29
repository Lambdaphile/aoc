(ns aoc.days.01.core-test
  (:require [clojure.test :refer [deftest is]]
            [aoc.days.01.core :refer :all]))

(def input "3   4
4   3
2   5
1   3
3   9
3   3")
(def parsed-input
  [[3 4 2 1 3 3]
   [4 3 5 3 9 3]])

(deftest parse-input-test
  (is (= parsed-input (parse-input input))))

(deftest abs-diff-test
  (is (= 1 (abs-diff 1 2))))

(deftest similarities-test
  (is (= [9 4 0 0 9 9] (similarities parsed-input))))

(deftest part-1-test
  (is (= 11 (part-1 input))))

(deftest part-2-test
  (is (= 31 (part-2 input))))
