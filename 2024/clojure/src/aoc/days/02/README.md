# Day 2: Red-Nosed Reports

<article>
  <p>
    Fortunately, the first location The Historians want to search isn't a long
    walk from the Chief Historian's office.
  </p>
  <p>
    While the
    <a href="https://adventofcode.com/2015/day/19"
      >Red-Nosed Reindeer nuclear fusion/fission plant</a
    >
    appears to contain no sign of the Chief Historian, the engineers there run
    up to you as soon as they see you. Apparently, they
    <strong>still</strong> talk about the time Rudolph was saved through
    molecular synthesis from a single electron.
  </p>
  <p>
    They're quick to add that - since you're already here - they'd really
    appreciate your help analyzing some unusual data from the Red-Nosed reactor.
    You turn to check if The Historians are waiting for you, but they seem to
    have already divided into groups that are currently searching every corner
    of the facility. You offer to help with the unusual data.
  </p>
  <p>
    The unusual data (your puzzle input) consists of many
    <strong>reports</strong>, one report per line. Each report is a list of
    numbers called <strong>levels</strong> that are separated by spaces. For
    example:
  </p>
  <pre><code>7 6 4 2 1
1 2 7 8 9
9 7 6 2 1
1 3 2 4 5
8 6 4 4 1
1 3 6 7 9
</code></pre>
  <p>This example data contains six reports each containing five levels.</p>
  <p>
    The engineers are trying to figure out which reports are
    <strong>safe</strong>. The Red-Nosed reactor safety systems can only
    tolerate levels that are either gradually increasing or gradually
    decreasing. So, a report only counts as safe if both of the following are
    true:
  </p>
  <ul>
    <li>
      The levels are either <strong>all increasing</strong> or
      <strong>all decreasing</strong>.
    </li>
    <li>
      Any two adjacent levels differ by <strong>at least one</strong> and
      <strong>at most three</strong>.
    </li>
  </ul>
  <p>
    In the example above, the reports can be found safe or unsafe by checking
    those rules:
  </p>
  <ul>
    <li>
      <code>7 6 4 2 1</code>: <strong>Safe</strong> because the levels are all
      decreasing by 1 or 2.
    </li>
    <li>
      <code>1 2 7 8 9</code>: <strong>Unsafe</strong> because
      <code>2 7</code> is an increase of 5.
    </li>
    <li>
      <code>9 7 6 2 1</code>: <strong>Unsafe</strong> because
      <code>6 2</code> is a decrease of 4.
    </li>
    <li>
      <code>1 3 2 4 5</code>: <strong>Unsafe</strong> because
      <code>1 3</code> is increasing but <code>3 2</code> is decreasing.
    </li>
    <li>
      <code>8 6 4 4 1</code>: <strong>Unsafe</strong> because
      <code>4 4</code> is neither an increase or a decrease.
    </li>
    <li>
      <code>1 3 6 7 9</code>: <strong>Safe</strong> because the levels are all
      increasing by 1, 2, or 3.
    </li>
  </ul>
  <p>
    So, in this example, <code><strong>2</strong></code> reports are
    <strong>safe</strong>.
  </p>
  <p>
    Analyze the unusual data from the engineers.
    <strong>How many reports are safe?</strong>
  </p>
</article>

## Part 2

<article>
  <p>
    The engineers are surprised by the low number of safe reports until they
    realize they forgot to tell you about the
    <span title="I need to get one of these!">Problem Dampener</span>.
  </p>
  <p>
    The Problem Dampener is a reactor-mounted module that lets the reactor
    safety systems <strong>tolerate a single bad level</strong> in what would
    otherwise be a safe report. It's like the bad level never happened!
  </p>
  <p>
    Now, the same rules apply as before, except if removing a single level from
    an unsafe report would make it safe, the report instead counts as safe.
  </p>
  <p>More of the above example's reports are now safe:</p>
  <ul>
    <li>
      <code>7 6 4 2 1</code>: <strong>Safe</strong> without removing any level.
    </li>
    <li>
      <code>1 2 7 8 9</code>: <strong>Unsafe</strong> regardless of which level
      is removed.
    </li>
    <li>
      <code>9 7 6 2 1</code>: <strong>Unsafe</strong> regardless of which level
      is removed.
    </li>
    <li>
      <code>1 <strong>3</strong> 2 4 5</code>: <strong>Safe</strong> by removing
      the second level, <code>3</code>.
    </li>
    <li>
      <code>8 6 <strong>4</strong> 4 1</code>: <strong>Safe</strong> by removing
      the third level, <code>4</code>.
    </li>
    <li>
      <code>1 3 6 7 9</code>: <strong>Safe</strong> without removing any level.
    </li>
  </ul>
  <p>
    Thanks to the Problem Dampener, <code><strong>4</strong></code> reports are
    actually <strong>safe</strong>!
  </p>
  <p>
    Update your analysis by handling situations where the Problem Dampener can
    remove a single level from unsafe reports.
    <strong>How many reports are now safe?</strong>
  </p>
</article>
