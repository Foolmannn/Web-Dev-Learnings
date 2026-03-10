
 
 function generateDummyData() {
   let dummyData =[];

function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

        let randomNames = [
          "Suman",
          "Amit",
          "Ravi",
          "Priya",
          "Anita",
          "John",
          "David",
        ];
        let randomCities = [
          "New York",
          "Kathmandu",
          "London",
          "Tokyo",
          "Delhi",
          "Sydney",
        ];
        let randomLanguages = [
          "JavaScript",
          "Python",
          "Java",
          "C++",
          "Go",
          "Rust",
        ];
        let randomSalaries = [30000, 45000, 50000, 60000, 75000, 90000];

        dummyData.push({
              name: getRandom(randomNames),
      salary: getRandom(randomSalaries),
      language: getRandom(randomLanguages),
      city: getRandom(randomCities),
      isManager: Math.random() > 0.5
        })

        console.log(dummyData);
    }

           let btn = document.querySelector(".btn");

      btn.addEventListener("click", generateDummyData());
 