/**
 * with jQuery
 */
const _MS_PER_DAY = 1000 * 60 * 60 * 24;

function dateParser(date) {
  date = date.split("-");
  return new Date(date[0], date[1] - 1, date[2]);
}

function dateDiffInDays(a, b) {
  // Discard the time and time-zone information.
  const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
  const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());

  return Math.floor((utc2 - utc1) / _MS_PER_DAY);
}

function solution(today, limit) {
  let count = 0;
  let tr = $("tr");

  for (let rows of tr) {
    let startDate,
      endDate,
      isRed = false;
    // background color of a row
    let color = $(rows).css("background-color");
    // checking background color is red or not
    if (color == "rgb(255, 0, 0)") {
      isRed = true;
    }
    let i = 0;
    // get dates from each row's cells
    for (let data of $(rows).children()) {
      let datum = $(data).text();
      if (i == 1) {
        startDate = datum;
      } else if (i == 2) {
        endDate = datum;
      }
      i++;
    }
    console.log(startDate, endDate);

    startDate = dateParser(startDate);
    !endDate ? (endDate = dateParser(today)) : (endDate = dateParser(endDate));

    let inDayDif = dateDiffInDays(startDate, endDate);
    console.log("Days between ", inDayDif);

    if (inDayDif > limit && !isRed) {
      count++;
    } else if (inDayDif < limit && isRed) {
      count++;
    }
  }

  return count;
}

console.log(solution("2016-11-30", 14)); // 5
