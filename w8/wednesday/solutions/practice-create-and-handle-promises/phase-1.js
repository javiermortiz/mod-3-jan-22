function stretch() {
  //!!START
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("hello");
      console.log('here');
    }, 1000);
  });
  //!!END
}

function runOnTreadmill() {
  //!!START
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("done running on treadmill");
      resolve();
    }, 500);
  });
  //!!END
}

function liftWeights() {
  //!!START
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("done lifting weights");
      resolve();
    }, 2000);
  });
  //!!END
}

const myFunc = val => {
  console.log(val);
  return runOnTreadmill()
}

function sum(n1, n2) {
  return n1+n2;
}
function workout() {
  //!!START
  stretch()
    .then((val) => {
      console.log(val)
      return runOnTreadmill();
    })
    .then(liftWeights)
    .then(() => console.log("done working out"))
    .catch((err) => console.log(err));
  
  //!!END
}


/* ============================ TEST YOUR CODE ============================

Run the file (`node phase-1.js`) and check your output against the expected
output.
*/


workout();
  // should print out the following:
    // done stretching
    // done running on treadmill
    // done lifting weights
    // done working out