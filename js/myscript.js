// creare un array di oggetti per rappresentare i membri del team. Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
const team = [
    {
        "name": 'Wayne Barnett',
        "role": 'Founder and CEO',
        "img": 'wayne-barnett-founder-ceo.jpg'
    },
    {
        "name": 'Angela Caroll',
        "role": 'Chief Editor',
        "img": 'angela-caroll-chief-editor.jpg'
    },
    {
        "name": 'Walter Gordon',
        "role": 'Office Manager',
        "img": 'walter-gordon-office-manager.jpg'
    },
    {
        "name": 'Angela Lopez',
        "role": 'Social Media Manager',
        "img": 'angela-lopez-social-media-manager.jpg'
    },
    {
        "name": 'Scott Estrada',
        "role": 'Developer',
        "img": 'scott-estrada-developer.jpg'
    },
    {
        "name": 'Barbara Ramos',
        "role": 'Graphic Designer',
        "img": 'barbara-ramos-graphic-designer.jpg'
    }
]

// creo un ciclo per estrarre le informazioni
 for (let i = 0; i < team.length; i++) {
    let elementTeam = team[i];
    // estrapolo i dati degli oggetti
    let nameTeam = elementTeam.name;
    let roleTeam = elementTeam.role;
    let imgTeam = elementTeam.img;
    console.log(nameTeam, roleTeam, imgTeam);
 }
