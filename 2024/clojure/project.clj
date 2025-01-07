(defproject aoc "0.1.0"
  :description "Advent of Code 2024 Solutions"
  :url "https://github.com/Lambdaphile/aoc"
  :license {:name "MIT"
            :url "https://opensource.org/license/mit"}
  :dependencies [[org.clojure/clojure "1.11.1"]
                 [org.clojure/tools.cli "1.0.219"]
                 [eftest "0.6.0"]
                 [net.mikera/core.matrix "0.63.0"]]
  :main ^:skip-aot aoc.core
  :plugins [[lein-eftest "0.6.0"]]
  :test-paths ["src/aoc"])
