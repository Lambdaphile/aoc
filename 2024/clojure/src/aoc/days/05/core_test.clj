(ns aoc.days.05.core-test
  (:require [clojure.test :refer [deftest is testing]]
            [aoc.days.05.core :refer :all]
            [aoc.utils.core :as u]))

(def input "47|53
97|13
97|61
97|47
75|29
61|13
75|53
29|13
97|29
53|29
61|53
97|53
61|29
47|13
75|47
97|75
47|61
75|61
47|29
75|13
53|13

75,47,61,53,29
97,61,53,29,13
75,29,13
75,97,47,61,53
61,13,29
97,13,75,29,47")
(def parsed-rules
  {47 #{53 13 61 29}
   97 #{13 61 47 29 53 75}
   75 #{29 53 47 61 13}
   61 #{13 53 29}
   29 #{13}
   53 #{29 13}})
(def parsed-updates
  [[75 47 61 53 29]
   [97 61 53 29 13]
   [75 29 13]
   [75 97 47 61 53]
   [61 13 29]
   [97 13 75 29 47]])

(deftest parse-rules-test
  (is (=
       parsed-rules
       (parse-rules (first (u/split-paragraphs input))))))

(deftest parse-updates-test
  (is (=
       parsed-updates
       (parse-updates (second (u/split-paragraphs input))))))

(deftest parse-input-test
  (is (= [parsed-updates parsed-rules] (parse-input input))))

(deftest validate-update-test
  (testing "returns true for valid updates"
    (is (= true (validate-update (nth parsed-updates 0) parsed-rules)))
    (is (= true (validate-update (nth parsed-updates 1) parsed-rules)))
    (is (= true (validate-update (nth parsed-updates 2) parsed-rules))))

  (testing "returns false for invalid updates"
    (is (= false (validate-update (nth parsed-updates 3) parsed-rules)))
    (is (= false (validate-update (nth parsed-updates 4) parsed-rules)))
    (is (= false (validate-update (nth parsed-updates 5) parsed-rules)))))

(deftest validate-updates-test
  (is (=
       [(list [true (nth parsed-updates 0)]
              [true (nth parsed-updates 1)]
              [true (nth parsed-updates 2)]
              [false (nth parsed-updates 3)]
              [false (nth parsed-updates 4)]
              [false (nth parsed-updates 5)]) parsed-rules]
       (validate-updates parsed-updates parsed-rules))))

(deftest reorder-updates-test
  (is (=
       [[97, 75, 47, 61, 53],
        [61, 29, 13],
        [97, 75, 47, 29, 13]]
       (reorder-updates (drop 3 parsed-updates) parsed-rules))))

(deftest part-1-test
  (is (= 143 (part-1 input))))

(deftest part-2-test
  (is (= 123 (part-2 input))))

