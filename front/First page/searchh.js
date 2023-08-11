const searchInput = document.getElementById("searchInput");
const rootTwo = document.getElementById('rootTwo');
const titleDiv  = document.getElementById('rootTitle');

const getData = async () => {
  const response = await fetch(URL);
  const data = await response.json();
  return data;
}

const search = () => {
  searchInput.addEventListener("input",async (input) => {
    key = input.target.value;
    keyWord = key.toLowerCase();
    var info = await getData();
    var outcome = await info.filter((book)=>book.title.toLowerCase().includes(keyWord))
    showSearch(outcome);
  })
};

const showSearch = (outcome) =>{
  rootTwo.innerHTML='';
  titleDiv.innerHTML='';

  const sectionTitle = document.createElement('h3');
  sectionTitle.textContent = 'Resultados';
  titleDiv.appendChild(sectionTitle);


  outcome.forEach(element => {
    const container = document.createElement('div');
    rootTwo.appendChild(container);
    container.classList='resultsContainer'

    const pTitle = document.createElement('p');
    pTitle.textContent = `${element.title}`;
    container.appendChild(pTitle);

    const pAuthor = document.createElement('p');
    pAuthor.textContent = `${element.author}`;
    container.appendChild(pAuthor);

    const pYear = document.createElement('p');
    pYear.textContent = `${element.year}`;
    container.appendChild(pYear);

    const aVerMás = document.createElement('a');
    aVerMás.href='';
    aVerMás.textContent = 'Ver más';
    aVerMás.classList='aVerMás';
    container.appendChild(aVerMás);
  });
}

search();