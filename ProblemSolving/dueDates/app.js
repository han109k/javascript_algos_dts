/**
 * with pure JS
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
  let tr = document.querySelectorAll("tr");

  // function return
  let wrong = 0;

  tr.forEach((element) => {
    // get table data
    let startDate = element.children.item(1).textContent;
    let endDate = element.children.item(2).textContent;
    let backgroundColor = element.style.backgroundColor;

    startDate = dateParser(startDate);
    !endDate ? (endDate = dateParser(today)) : (endDate = dateParser(endDate));
    // get dates
    console.log(startDate, endDate, backgroundColor);

    let inDayDif = dateDiffInDays(startDate, endDate);
    console.log("Days between ", inDayDif);

    if (inDayDif > limit && backgroundColor !== "red") {
      wrong++;
    } else if (inDayDif < limit && backgroundColor === "red") {
      wrong++;
    }
    console.log(startDate, endDate, backgroundColor);
  });

  console.log(wrong);

  return wrong;
}

solution("2016-11-30", 14); // 5
