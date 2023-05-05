const student = [
  {
    id: 1,
    name: "Harry",
    house: "Ravenclaw"
  },
  {
    id: 2,
    name: "Sparkles",
    house: "Slytherin"
  },
  {
    id: 3,
    name: "Donald",
    house: "Hufflepuff"
  },
  {
    id: 4,
    name: "Yawn",
    house: "Gryffindor"
  },
];

const renderToDOM = (divID, htmlToRender) => {
  const selectedDiv = document.querySelector(divID);
  selectedDiv.innerHTML = htmlToRender;
};

const cardsOnDOM = (array) => {
  let domString = "";
  for (const member of array) {
    domString += `<div class="card" style="width:18rem;">
      <div class="card-body">
      <p class="card-text">${member.name}</p>
      <p class="card-text">${member.house}</p> 
      <button class="btn btn-danger" id="expel--${member.id}">Expel</button>
      </div>
    </div>`;
  }
  renderToDOM("#firstYearContainer", domString);
};

cardsOnDOM(student);

const filter = (array, houseString) => {
  const houseArray = [];

  for (const member of array) {
    if (member.house === houseString) {
      houseArray.push(member);
    }
  }
  return houseArray;
};

const formButton = document.querySelector("#addStudentButton");



const renderForm = () => {
  const form = `
  <form>
    <div class="mb-3">
      <label for="exampleInputName1" class="form-label"> Enter First Year Student's Name</label>
      <input type="name" class="form-control" id="exampleInputName1" aria-describedby="nameHelp" placeholder="Luna Lovegood">
      <div id="nameHelp" class="form-text"></div>
    </div>
    <button type="submit" class="btn btn-info">Sort!</button>
  </form>
  `
  renderToDOM('#addStudentForm', form);
}

formButton.addEventListener('click', renderForm);

const formSubmission = document.querySelector("#addStudentForm");

const createStudent = (e) => {
  e.preventDefault();
const houseArr = ["Slytherin", "Gryffindor", "Hufflepuff", "Ravenclaw"]
const form = document.querySelector('form');
const randNum = Math.floor(Math.random() * (3 + 1))

const newStudentObj = {
  id: student.length + 1,
  name: document.querySelector("#exampleInputName1").value,
  house: houseArr[randNum],
};

student.push(newStudentObj);
cardsOnDOM(student);
form.reset();
}

formSubmission.addEventListener('submit', createStudent);


const showAllButton = document.querySelector("#show-btn");
const showGryffindorButton = document.querySelector("#Gryffindor");
const showHufflepuffButton = document.querySelector("#Hufflepuff");
const showRavenclawButton= document.querySelector("#Ravenclaw");
const showSlytherinButton= document.querySelector("#Slytherin");

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

showSlytherinButton.addEventListener('click', () => {
  const slytherinHouseType = filter(student, 'Slytherin');
  cardsOnDOM(slytherinHouseType);
});

showAllButton.addEventListener('click', () => {
  const allStudents = filter(student, 'All');
  cardsOnDOM(allStudents);
});

const expelArr = []

const expelledOnDOM = (array) => {
  let domString = "";
  for (const member of array) {
    domString += `<div class="card" style="width:18rem;">
      <div class="card-body">
      <p class="card-text">${member.name}</p>
      <p class="card-text">${member.house}</p> 
      </div>
    </div>`;
  }
  renderToDOM("#badStudents", domString);
};

const expelButton = document.querySelector("#firstYearContainer")

expelButton.addEventListener('click', (e) => {
  if (e.target.id.includes("expel")) {
    const [, id] = e.target.id.split("--");
    const index = student.findIndex(e => e.id === Number(id));
    console.log(index);
    expelArr.push(...student.splice(index, 1));
    cardsOnDOM(student);
    expelledOnDOM(expelArr);
  }
});
