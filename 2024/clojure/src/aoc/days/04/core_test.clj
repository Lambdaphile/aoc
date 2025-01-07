(ns aoc.days.04.core-test
  (:require [clojure.test :refer [deftest is]]
            [aoc.days.04.core :refer :all]))

(def input "MMMSXXMASM
MSAMXMSMSA
AMXSXMAAMM
MSAMASMSMX
XMASAMXAMM
XXAMMXXAMA
SMSMSASXSS
SAXAMASAAA
MAMMMXMMMM
MXMXAXMASX")
(def parsed-input
  [["M" "M" "M" "S" "X" "X" "M" "A" "S" "M"]
   ["M" "S" "A" "M" "X" "M" "S" "M" "S" "A"]
   ["A" "M" "X" "S" "X" "M" "A" "A" "M" "M"]
   ["M" "S" "A" "M" "A" "S" "M" "S" "M" "X"]
   ["X" "M" "A" "S" "A" "M" "X" "A" "M" "M"]
   ["X" "X" "A" "M" "M" "X" "X" "A" "M" "A"]
   ["S" "M" "S" "M" "S" "A" "S" "X" "S" "S"]
   ["S" "A" "X" "A" "M" "A" "S" "A" "A" "A"]
   ["M" "A" "M" "M" "M" "X" "M" "M" "M" "M"]
   ["M" "X" "M" "X" "A" "X" "M" "A" "S" "X"]])

(deftest parse-input-test
  (is (= parsed-input (parse-input input))))

(deftest match-word-test
  (is (= true (match-word xmas (:n dirs) [4 6] parsed-input)))
  (is (= true (match-word xmas (:ne dirs) [9 5] parsed-input)))
  (is (= true (match-word xmas (:e dirs) [0 5] parsed-input)))
  (is (= true (match-word xmas (:se dirs) [0 4] parsed-input)))
  (is (= true (match-word xmas (:s dirs) [3 9] parsed-input)))
  (is (= true (match-word xmas (:sw dirs) [3 9] parsed-input)))
  (is (= true (match-word xmas (:w dirs) [1 4] parsed-input)))
  (is (= true (match-word xmas (:nw dirs) [9 9] parsed-input))))

(deftest match-all-dirs-test
  (is (=
       [true true true true true true true true]
       (match-all-dirs xmas [3 3] [["S" "." "." "S" "." "." "S"]
                                   ["." "A" "." "A" "." "A" "."]
                                   ["." "." "M" "M" "M" "." "."]
                                   ["S" "A" "M" "X" "M" "A" "S"]
                                   ["." "." "M" "M" "M" "." "."]
                                   ["." "A" "." "A" "." "A" "."]
                                   ["S" "." "." "S" "." "." "S"]]))))

(deftest match-cross-dirs-test
  (is (= true
         (match-cross-dirs mas [1 1] [["M" "." "M"]
                                      ["." "A" "."]
                                      ["S" "." "S"]])))
  (is (= true
         (match-cross-dirs mas [1 1] [["S" "." "M"]
                                      ["." "A" "."]
                                      ["S" "." "M"]])))
  (is (= true
         (match-cross-dirs mas [1 1] [["S" "." "S"]
                                      ["." "A" "."]
                                      ["M" "." "M"]])))
  (is (= true
         (match-cross-dirs mas [1 1] [["M" "." "S"]
                                      ["." "A" "."]
                                      ["M" "." "S"]]))))

(deftest part-1-test
  (is (= 18 (part-1 input))))

(deftest part-2-test
  (is (= 9 (part-2 input))))
