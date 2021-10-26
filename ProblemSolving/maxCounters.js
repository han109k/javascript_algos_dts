/**
 * You are given N counters, initially set to 0, and you have two possible operations on them:
 * > increase(X) − counter X is increased by 1,
 *  > max counter − all counters are set to the maximum value of any counter.
 * A non-empty array A of M integers is given. This array represents consecutive operations:
 * > if A[K] = X, such that 1 ≤ X ≤ N, then operation K is increase(X),
 * > if A[K] = N + 1 then operation K is max counter.
 */

function maxCounter(N, A) {
  let counters = new Array(N).fill(0);
  let max = 0, maxToSet = 0;
  for (let i = 0; i < A.length; i++) {
    let X = A[i] - 1;
    if (X === N) {
      // all counters are set to the maximum value of any counter.
      maxToSet = max;
    } else if (-1 < X && X < N) {
      counters[X] = Math.max(counters[X] + 1, maxToSet + 1);
      // let curr = ++counters[A[i] - 1];
      max = Math.max(counters[X], max);
    }
  }

  // update counters that we haven't set to max
  counters = counters.map(val => Math.max(val, maxToSet));

  return counters;
}

console.log(maxCounter(1, [3, 4, 4, 6, 1, 4, 4]));
