const generator = require(`generate-passwords`);
const fs = require("fs");

const students = ["Harold", "James", "Dania", "Suzzie"];
students.map((students) => {
  var password = generator.generate({
    length: 10,
    numbers: true,
  });
  storePassword("./password.txt", students, password);
  retrievePassword("password.txt", "James");
});

fs.appendFileSync("./password.txt", storePassword, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("password stored");
  }
});

// fs.writeFileSync("./password.txt", "hello world", (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("file written");
//   }
// });
