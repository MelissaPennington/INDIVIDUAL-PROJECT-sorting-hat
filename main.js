const student = [
  {
    id: 1,
    name: "Harry",
    house: "Ravenclaw"
  },
  {
    id: 2,
    name: "Sparkles"
    house: "Slythine"
  },
  {
    id: 3,
    name: "Donald"
    house: "Hufflepuff"
  },
];

const renderToDOM = (divID, htmlToRender) => {
  const selectedDiv = document.querySelector(divID);
  selectedDiv.innerHTML = htmlToRender;
};

const cardsOnDOM = (array) => {
  let domString = "";
  for (const student of array){
    domString += `<div class="card" style="width:18rem;">
    <div class="card-body"
    <p class="card-text">${student.name}</p>
    <p class="card-text">${student.house}</p> 
    <button class="btn btn-danger" id="expel--${student.id}">Expel</button>
    </div>
    </div>`;
  }

  renderToDOM("#app", domString);
}
cardsOnDOM(students);

const filter = (array, typeString) => {
  const typeArray = [];

  for (const student of array) {
    if (student.house === typeString) {
      typeArray.push(student);
    }
  }
  return typeArray;
}
   const showAllButton= document.querySelector("#All");
   const showGryffindorButton= document.querySelector("#Gryffindor");
   const showHufflepuffButton= document.querySelector("#Hufflepuff");
   const showRavenclawButton= document.querySelector("#Ravenclaw");
   const showSlytherineButton= document.querySelector("#Slytherine");

   showAllButton.addEventListener('click', () => {
    cardsOnDOM(student);
   });

   showGryffindorButton.addEventListener('click', () => {
    const gryffindorHouseType = filter(student, 'Gryffindor');
    cardsOnDOM(gryffindorHouseType);
   });

   showHufflepuffButton.addEventListener('click', () => {
    const hufflepuffHouseType = filter(student, 'Hufflepuff');
    cardsOnDOM(hufflepuffHouseType);
   });

   showRavenclawButton.addEventListener('click', () => {
    const ravenclawHouseType = filter(student, 'Ravenclaw');
    cardsOnDOM(ravenclawHouseType);
   });

   showSlytherineButton.addEventListener('click', () => {
    const slytherineHouseType = filter(student, 'Slytherine');
    cardsOnDOM(gryffindorHouseType);
   });

   const form = document.querySelector('form');

   const createStudent = (e) => {
    e.preventDefault();

    const newStudentObj = {
      id: student.length + 1,
      name: document.querySelector("#name").value,
      house: document.querySelector("#house").house,
    };
   
  student.push(newStudentObj);
  cardsOnDOM(student);
  form.reset();
   }

   form.addEventListener('submit', createStudent);

   const app = document.querySelector("#app");

   app.addEventListener('click', (e) => {
    if (e.target.id.includes("expel"))
   })

// app.addEventListener('click', (e) => {
// if (e.target.id.includes("delete")) {
//   const [, id] = e.target.id.split("--");
//   const index = pets.findIndex(e => e.id === Number(id));
//   console.log(index);
//   pets.splice(index, 1);
//   cardsOnDOM(pets);
// }
// });

// const startApp =() => {
// cardsOnDOM(pets);
// }

// startApp();
