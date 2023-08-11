const URL = 'http://localhost:3000/';
const root = document.getElementById('root')

const getShowData = async () => {
  const response = await fetch(URL);
  const data = await response.json();
  showData(data);
}

const showData = (dat) => {
dat.forEach(element => {
    const container = document.createElement('div');
    root.appendChild(container);
    container.classList='productsContainer'

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
  const aToAllBooks = document.createElement('a');
  aToAllBooks.href = '../Second page/index.html';
  aToAllBooks.textContent = 'Ver todos';
  aToAllBooks.classList = 'mC__sectionGeneral__aSeeAll';
  root.appendChild(aToAllBooks);
}

getShowData();

