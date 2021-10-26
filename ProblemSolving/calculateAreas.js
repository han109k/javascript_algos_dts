// Promise Area
// Complete the calculateArea function below.
// It returns a Promise which on success, returns area of the shape, and on failure returns [-1].
let calculateArea = (shape, values) => {
  return new Promise((resolve, reject) => {
    let area;
    switch (shape) {
      case "square":
        area = values ** 2;
        break;
      case "rectangle":
        area = values[0] * values[1];
        break;
      case "circle":
        area = 3.14 * values[0] ** 2;
        break;
      case "triangle":
        area = 0.5 * values[0] * values[1];
        break;
      default:
        reject(-1);
        return;
    }
    resolve(area);
  });
};

// Complete the generateArea function below.
// It returns a Promise which on success, returns an array of areas of all the shapes and on failure, returns [-1].
let getAreas = (shapes, values_arr) => {
  return new Promise(async (resolve, reject) => {
    let results = [];
    for (let i = 0; i < shapes.length; i++) {
      await calculateArea(shapes[i], values_arr[i])
        .then((result) => {
          results.push(result);
        })
        .catch((error) => {
          reject(error);
        });
    }
    resolve(results)
  });
};

async function calculateAll() {
  let shapes = ["square", "rec", "triangle"];
  let values = [[2], [3, 4], [3, 5]];
  const res = await getAreas(shapes, values);
  return res;
}

calculateAll()
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
