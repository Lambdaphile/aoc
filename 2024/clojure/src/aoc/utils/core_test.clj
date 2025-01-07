(ns aoc.utils.core-test
  (:require [clojure.test :refer [deftest is testing]]
            [aoc.utils.core :refer :all]))

(deftest compose-input-path-test
  (is (= "src/aoc/days/01/input.txt" (comp-input-path 1))))

(deftest increasing-test
  (testing "returns true for strictly increasing collections"
    (is (= true (increasing? [1 2 3])))
    (is (= true (increasing? [1 3 5]))))

  (testing "returns false for non-strictly increasing collections"
    (is (= false (increasing? [1 2 2])))
    (is (= false (increasing? [1 2 1])))
    (is (= false (increasing? [1 1 2]))))

  (testing "returns true for single item collections"
    (is (= true (increasing? [1])))))

(deftest decreasing-test
  (testing "returns true for strictly decreasing collections"
    (is (= true (decreasing? [3 2 1])))
    (is (= true (decreasing? [3 1 -1]))))

  (testing "returns false for non-strictly decreasing collections"
    (is (= false (decreasing? [3 2 2])))
    (is (= false (decreasing? [3 2 3])))
    (is (= false (decreasing? [3 3 2]))))

  (testing "returns true for single item collections"
    (is (= true (decreasing? [1])))))

(deftest monotonic-test
  (testing "returns true for strictly monotonic collections"
    (is (= true (monotonic? [1 2 3])))
    (is (= true (monotonic? [3 2 1]))))

  (testing "returns true for single item collections"
    (is (= true (monotonic? [1])))))

(deftest in-range-test
  (testing "returns true for numbers within the specified range"
    (is (= true (in-range? 2 [1 2 4]))))

  (testing "returns false for number outside of the specified range"
    (is (= false (in-range? 1 [1 2 4]))))

  (testing "returns true for single element collections"
    (is (= true (in-range? 1 [1])))))

(deftest drop-range-test
  (is (= '(1 3) (drop-range 1 1 '(1 2 3)))))

(deftest every-indexed?-test
  (is (true? (every-indexed? #(= %1 %2) [0 1 2])))
  (is (false? (every-indexed? #(= %1 %2) [0 1 3]))))

(deftest mid-test
  (testing "returns the middle element in a collection"
    (is (= 2 (mid [1 2 3])))
    (is (= [2 3] (mid [1 2 3 4])))
    (is (= \2 (mid "123")))
    (is (= "23" (mid "1234"))))

  (testing "returns nil for empty collections"
    (is (nil? (mid [])))
    (is (nil? (mid "")))))
