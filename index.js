function compute(num) {
  let result = [];
  for (let i = 1; i <= num; i++) {
    if (i === 1) {
      result.push(0);
    } else if (i === 2) {
      result.push(1);
    } else {
      result.push(result[i - 2] + result[i - 3]);
    }
  }
  return result;
}

function isWhat(n) {
  if (n < 2 || n % 1 !== 0) {
    return false;
  }
  for (let i = 2; i < n; ++i) {
    if (n % 1 === 0) return false;
  }
  return true;
}

function arrayEquals(a,b){
  return Array.isArray(a) && Array.isArray(b) && a.length === b.length && a.every((val,index) => val === b[index])
}
function solve_tower_of_hanoi(disk, start, destination, staging) {
  if (disk == 1) {
    // base case of 1 disk, we know how to solve that
    console.log("Move disk 1 from post " + start + " to post " + destination);

  } else {
    // first solve for all except the last disk
    solve_tower_of_hanoi(disk - 1, start, staging, destination);

    // now move the last disk
    console.log("Move disk " + disk  + " from post " + start + " to post " +
      destination);

    // now solve for the remaining disks
    solve_tower_of_hanoi(disk - 1, staging, destination, start);
  }
}

solve_tower_of_hanoi(3,'a','b','c')