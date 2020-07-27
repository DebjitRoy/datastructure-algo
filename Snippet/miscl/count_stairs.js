// A child is running up a staircase with n steps, and can hop either 1, 2 or 3 steps a time.
// count how many possible ways he can run up the stairs

function countWays(n, memo = {}) {
  if (n < 0) return 0;
  if (n === 1) return 1;
  memo[n] =
    memo[n] ||
    countWays(n - 1, memo) + countWays(n - 2, memo) + countWays(n - 3, memo);
  return memo[n];
}

console.log(countWays(80));
