# Day 5: Print Queue

<article>
  <p>
    Satisfied with their search on Ceres, the squadron of scholars suggests
    subsequently scanning the
    <span title="Specifically, the surely-stationary stationery stacks."
      >stationery</span
    >
    stacks of sub-basement 17.
  </p>
  <p>
    The North Pole printing department is busier than ever this close to
    Christmas, and while The Historians continue their search of this
    historically significant facility, an Elf operating a
    <a href="https://adventofcode.com/2017/day/1">very familiar printer</a>
    beckons you over.
  </p>
  <p>
    The Elf must recognize you, because they waste no time explaining that the
    new <strong>sleigh launch safety manual</strong> updates won't print
    correctly. Failure to update the safety manuals would be dire indeed, so you
    offer your services.
  </p>
  <p>
    Safety protocols clearly indicate that new pages for the safety manuals must
    be printed in a <strong>very specific order</strong>. The notation
    <code>X|Y</code> means that if both page number <code>X</code> and page
    number <code>Y</code> are to be produced as part of an update, page number
    <code>X</code> <strong>must</strong> be printed at some point before page
    number <code>Y</code>.
  </p>
  <p>
    The Elf has for you both the <strong>page ordering rules</strong> and the
    <strong>pages to produce in each update</strong> (your puzzle input), but
    can't figure out whether each update has the pages in the right order.
  </p>
  <p>For example:</p>
  <pre><code>47|53
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
97,13,75,29,47
</code></pre>

  <p>
    The first section specifies the <strong>page ordering rules</strong>, one
    per line. The first rule, <code>47|53</code>, means that if an update
    includes both page number 47 and page number 53, then page number 47
    <strong>must</strong> be printed at some point before page number 53. (47
    doesn't necessarily need to be <strong>immediately</strong> before 53; other
    pages are allowed to be between them.)
  </p>
  <p>
    The second section specifies the page numbers of each
    <strong>update</strong>. Because most safety manuals are different, the
    pages needed in the updates are different too. The first update,
    <code>75,47,61,53,29</code>, means that the update consists of page numbers
    75, 47, 61, 53, and 29.
  </p>
  <p>
    To get the printers going as soon as possible, start by identifying
    <strong>which updates are already in the right order</strong>.
  </p>
  <p>
    In the above example, the first update (<code>75,47,61,53,29</code>) is in
    the right order:
  </p>
  <ul>
    <li>
      <code>75</code> is correctly first because there are rules that put each
      other page after it: <code>75|47</code>, <code>75|61</code>,
      <code>75|53</code>, and <code>75|29</code>.
    </li>
    <li>
      <code>47</code> is correctly second because 75 must be before it
      (<code>75|47</code>) and every other page must be after it according to
      <code>47|61</code>, <code>47|53</code>, and <code>47|29</code>.
    </li>
    <li>
      <code>61</code> is correctly in the middle because 75 and 47 are before it
      (<code>75|61</code> and <code>47|61</code>) and 53 and 29 are after it
      (<code>61|53</code> and <code>61|29</code>).
    </li>
    <li>
      <code>53</code> is correctly fourth because it is before page number 29
      (<code>53|29</code>).
    </li>
    <li><code>29</code> is the only page left and so is correctly last.</li>
  </ul>
  <p>
    Because the first update does not include some page numbers, the ordering
    rules involving those missing page numbers are ignored.
  </p>
  <p>
    The second and third updates are also in the correct order according to the
    rules. Like the first update, they also do not include every page number,
    and so only some of the ordering rules apply - within each update, the
    ordering rules that involve missing page numbers are not used.
  </p>
  <p>
    The fourth update, <code>75,97,47,61,53</code>, is <strong>not</strong> in
    the correct order: it would print 75 before 97, which violates the rule
    <code>97|75</code>.
  </p>
  <p>
    The fifth update, <code>61,13,29</code>, is also <strong>not</strong> in the
    correct order, since it breaks the rule <code>29|13</code>.
  </p>
  <p>
    The last update, <code>97,13,75,29,47</code>, is <strong>not</strong> in the
    correct order due to breaking several rules.
  </p>
  <p>
    For some reason, the Elves also need to know the
    <strong>middle page number</strong> of each update being printed. Because
    you are currently only printing the correctly-ordered updates, you will need
    to find the middle page number of each correctly-ordered update. In the
    above example, the correctly-ordered updates are:
  </p>
  <pre><code>75,47,<strong>61</strong>,53,29
97,61,<strong>53</strong>,29,13
75,<strong>29</strong>,13
</code></pre>
  <p>
    These have middle page numbers of <code>61</code>, <code>53</code>, and
    <code>29</code> respectively. Adding these page numbers together gives
    <code><strong>143</strong></code
    >.
  </p>
  <p>
    Of course, you'll need to be careful: the actual list of
    <strong>page ordering rules</strong> is bigger and more complicated than the
    above example.
  </p>
  <p>
    Determine which updates are already in the correct order.
    <strong
      >What do you get if you add up the middle page number from those
      correctly-ordered updates?</strong
    >
  </p>
</article>

## Part 2

<article>
  <p>
    While the Elves get to work printing the correctly-ordered updates, you have
    a little time to fix the rest of them.
  </p>
  <p>
    For each of the <strong>incorrectly-ordered updates</strong>, use the page
    ordering rules to put the page numbers in the right order. For the above
    example, here are the three incorrectly-ordered updates and their correct
    orderings:
  </p>
  <ul>
    <li>
      <code>75,97,47,61,53</code> becomes
      <code>97,75,<strong>47</strong>,61,53</code>.
    </li>
    <li>
      <code>61,13,29</code> becomes <code>61,<strong>29</strong>,13</code>.
    </li>
    <li>
      <code>97,13,75,29,47</code> becomes
      <code>97,75,<strong>47</strong>,29,13</code>.
    </li>
  </ul>
  <p>
    After taking <strong>only the incorrectly-ordered updates</strong> and
    ordering them correctly, their middle page numbers are <code>47</code>,
    <code>29</code>, and <code>47</code>. Adding these together produces
    <code><strong>123</strong></code
    >.
  </p>
  <p>
    Find the updates which are not in the correct order.
    <strong
      >What do you get if you add up the middle page numbers after correctly
      ordering just those updates?</strong
    >
  </p>
</article>
