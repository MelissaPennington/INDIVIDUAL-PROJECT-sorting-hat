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
  renderToDOM("#app", domString);
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
    <button type="submit" class="btn btn-primary">Sort!</button>
  </form>
  `
  renderToDOM('#addStudentForm', form);
}

formButton.addEventListener('click', renderForm);

const formSubmission = document.querySelector("#addStudentForm");

const createStudent = (e) => {
  e.preventDefault();

const form = document.querySelector('form');

const newStudentObj = {
  id: student.length + 1,
  name: document.querySelector("#exampleInputName1").value,
  house: "Slytherin",
};

student.push(newStudentObj);
cardsOnDOM(student);
form.reset();
}

formSubmission.addEventListener('submit', createStudent);


const showAllButton = document.querySelector("#All");
const showGryffindorButton = document.querySelector("#Gryffindor");
const showHufflepuffButton = document.querySelector("#Hufflepuff");
const showSlytherinButton= document.querySelector("#Slytherin");

showAllButton.addEventListener('click', () => {
  const allMembers = filter(member, 'All');
  cardsOnDOM(member);
});

showGryffindorButton.addEventListener('click', () => {
  const gryffindorHouseType = filter(member, 'Gryffindor');
  cardsOnDOM(gryffindorHouseType);
});

showHufflepuffButton.addEventListener('click', () => {
  const hufflepuffHouseType = filter(member, 'Hufflepuff');
  cardsOnDOM(hufflepuffHouseType);
});

showRavenclawButton.addEventListener('click', () => {
  const ravenclawHouseType = filter(member, 'Ravenclaw');
  cardsOnDOM(ravenclawHouseType);
});

showSlytherinButton.addEventListener('click', () => {
  const slytherinHouseType = filter(member, 'Slytherin');
  cardsOnDOM(slytherinHouseType);
});

// const arr = ['ravenclaw','gryffindor','slytherin','hufflepuff'];
// const output = document.querySelector('.filterContainer');
// sortArr();
// output.addEventListener('click', sortArr);
 

// const form = document.querySelector('form');
