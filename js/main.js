/*
Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.
MILESTONE 1:
Stampare su console le informazioni di nome, ruolo e la stringa della foto
MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe
BONUS 1:
Trasformare la stringa foto in una immagine effettiva
BONUS 2:
Organizzare i singoli membri in card/schede
Consigli del giorno:
Ragioniamo come sempre a step.
Prima la logica in italiano e poi traduciamo in codice.
E ricordiamoci che console.log() è nostro amico!
Buon lavoro!



Wayne Barnett	Founder & CEO	wayne-barnett-founder-ceo.jpg
Angela Caroll	Chief Editor	angela-caroll-chief-editor.jpg
Walter Gordon	Office Manager	walter-gordon-office-manager.jpg
Angela Lopez	Social Media Manager	angela-lopez-social-media-manager.jpg
Scott Estrada	Developer	scott-estrada-developer.jpg
Barbara Ramos	Graphic Designer	barbara-ramos-graphic-designer.jpg
*/



const team = [
    {
      nome: 'Wayne Barnett',
      ruolo: 'Founder & CEO',
      foto: 'wayne-barnett-founder-ceo.jpg'
    },
    {
      nome: 'Angela Caroll',
      ruolo: 'Chief Editor',
      foto: 'angela-caroll-chief-editor.jpg'
    },
    {
      nome: 'Walter Gordon',
      ruolo: 'Office Manager',
      foto: 'walter-gordon-office-manager.jpg'
    },
    {
      nome: 'Angela Lopez',
      ruolo: 'Social Media Manager',
      foto: 'angela-lopez-social-media-manager.jpg'
    },
    {
      nome: 'Scott Estrada',
      ruolo: 'Developer',
      foto: 'scott-estrada-developer.jpg'
    },
    {
      nome: 'Barbara Ramos',
      ruolo: 'Graphic Designer',
      foto: 'barbara-ramos-graphic-designer.jpg'
    }
]


const memberContainerDom = document.getElementById('member-container');
const cardsContainerDom = document.getElementById('member-cards');


for(let i = 0; i < team.length; i++){

  createNewList(i);
}





//FUNCTION

function createNewList(indice){

  const list = document.createElement('ul');
  list.classList.add('card');
  let listItem;
  let img;

  listItem = document.createElement('li');
  listItem.classList.add('item');
  img = document.createElement('img');
  img.setAttribute('src', `img/${team[indice].foto}`);
  listItem.appendChild(img);
  list.append(listItem);

  listItem = document.createElement('li');
  listItem.classList.add('item');
  listItem.classList.add('name');
  listItem.append(team[indice].nome);
  list.append(listItem);

  listItem = document.createElement('li');
  listItem.classList.add('item');
  listItem.append(team[indice].ruolo);
  list.append(listItem);

  cardsContainerDom.append(list);
}


