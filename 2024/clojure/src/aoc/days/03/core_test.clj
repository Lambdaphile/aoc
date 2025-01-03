(ns aoc.days.03.core-test
  (:require [clojure.test :refer [deftest is]]
            [aoc.days.03.core :refer :all]))

(def input-1
  "xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))")
(def input-2
  "xmul(2,4)&mul[3,7]!^don't()_mul(5,5)+mul(32,64](mul(11,8)undo()?mul(8,5))")

(deftest evaluate-test
  (is (= 4 (evaluate "mul(2,2)"))))

(deftest part-1-test
  (is (= 161 (part-1 input-1))))

(deftest part-2-test
  (is (= 48 (part-2 input-2))))