// Longest Common Subsequence
// LCS for input Sequences “AGGTAB” and “GXTXAYB” is “GTAB” of length 4.
/**
 *      G   X   T   X   A   Y   B
 *  A
 *
 *  G   *
 *
 *  G
 *
 *  T           *
 *
 *  A                   *
 *
 *  B                           *
 */

// Dynamic Programming
function lcs(str1, str2) {
  const hr = str1.split("");
  const vr = str2.split("");
  const lcsTbl = [];
  for (let h = 0; h < hr.length + 1; h++) {
    lcsTbl[h] = [];
    for (let v = 0; v < vr.length + 1; v++) {
      if (h == 0 || v == 0) {
        lcsTbl[h][v] = 0;
      } else {
        if (hr[h] !== vr[v]) {
          lcsTbl[h][v] =
            lcsTbl[h - 1][v] > lcsTbl[h][v - 1]
              ? lcsTbl[h - 1][v]
              : lcsTbl[h][v - 1];
        } else {
          lcsTbl[h][v] = lcsTbl[h - 1][v - 1] + 1;
        }
      }
    }
  }
  console.log("count of match: " + lcsTbl[hr.length][vr.length]);
  console.log(lcsTbl);

  //   for (let r = lcsTbl.length - 1; r > 0; r--) {
  //     for (let c = lcsTbl[r].length - 1; c > 0; c--) {
  //       console.log(r, c, lcsTbl[r][c]);
  //       if (lcsTbl[r][c] > lcsTbl[r - 1][c] && lcsTbl[r][c] > lcsTbl[r][c - 1]) {
  //         subsArr.push(hr[r]);
  //       }
  //     }

  let currentRow = lcsTbl.length - 1;
  let currentCol = lcsTbl[0].length - 1;
  const subsArr = [];
  console.log(currentRow, currentCol);

  while (currentRow > 0 && currentCol > 0) {
    if (
      lcsTbl[currentRow][currentCol] > lcsTbl[currentRow - 1][currentCol] &&
      lcsTbl[currentRow][currentCol] > lcsTbl[currentRow][currentCol - 1]
    ) {
      currentRow = currentRow - 1;
      currentCol = currentCol - 1;
      subsArr.push(hr[currentRow]);
    } else if (
      lcsTbl[currentRow][currentCol] == lcsTbl[currentRow - 1][currentCol]
    ) {
      currentRow--;
    } else if (
      lcsTbl[currentRow][currentCol] == lcsTbl[currentRow][currentCol - 1]
    ) {
      currentCol--;
    }
  }

  console.log("SUBssarr: " + subsArr.reverse());
}

// let currentCol = lcsTbl.length - 1;

lcs("AGGTAB", "GXTXAYB");
lcs("ACBCF", "ABCDAF");
