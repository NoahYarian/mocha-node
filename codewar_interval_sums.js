function sumIntervals(intervals){
  //TODO
  console.log("intervals: ", intervals);
  intervals.sort(function compare(a, b) {
    if (a[0] < b[0]) {
      return -1;
    }
    if (a[0] > b[0]) {
      return 1;
    }
    // a must be equal to b
    return 0;
  });

  function checkOverlap(intervals) {
    var overlap = false;
    for (var i = 0; i < intervals.length - 1; i++) {
      if (intervals[i][1] >= intervals[i+1][0]) {
        overlap = true;
        console.log(intervals[i] + " overlaps with " + intervals[i+1])
      }
    };
    return overlap;
  }

  if (checkOverlap(intervals)) {
    console.log("overlapped intervals")
  } else {
    return getAddedLength(intervals);
  }

  function getAddedLength(intervals) {
    return intervals.reduce(function(prev, curr, i) {
      return prev + curr[1] - curr[0]
    }, 0);
  }

}


//   function getLengthOfInterval (interval) {
//     return interval[1] - interval[0];
//   }

//   function testIfNotOverlapping (range1, range2) {
//    var range = range2[1] - range1[0];
//     var sum = getSum(intervals);
//     if (sum > intervals) {
//       //definitely has to be overlapped
//     }
//   }

//   function combineOverlappedIntervals (range1, range2) {
//     var min = range1[0] < range2[0] ? range1[0] : range2[0];
//     var max = range1[1] > range2[1] ? range1[1] : range2[1];
//     return [min, max];
//   }
//   console.log




//   for (i = 0; i < intervals.length; i++) {
//     for (j = 0; j < intervals.length; j++) {
//       if (j === i) { continue; }
//       if (intervals[i][0] < intervals[i+1][1]) {
//         console.log("i: ",i, "intervals[i][0]: ", intervals[i][0], "intervals[i+1][1]: ",intervals[i+1][1],"-- could be crossed");
//         if (intervals[i][1] < intervals[i+1][0]) {
//           console.log("not crossed");
//         } else {
//           console.log("crossed");
//         }
//       } else {
//         console.log("pointed away from each other");
//       }
//     }
//   }

//   intervals.forEach(function(interval, i) {
//     if (intervals[i][0] < intervals[i+1][1]) {
//       console.log("could be crossed");
//       if (intervals[i][1] < intervals[i+1][0]) {
//         console.log("not crossed");
//       } else {
//         console.log("crossed");
//       }
//     } else {
//       console.log("pointed away from each other");
//     }
//   })

//   // accepts array of intervals
//   // [[1,4],[2,3],[50,100]]
//   // only integers
//   // test for overlap - each with each other interval, top and bottom
//   function getMin(intervals) {
//     intervals.reduce(function(prev, curr, i) {
//       return prev < curr
//     })
//   }

// //   if (x1 < x2 && y1 < x1

// //     for (i = intMin; i < intMax; i++) {
// //      if (a < i && i < b)
// //   }
// }
