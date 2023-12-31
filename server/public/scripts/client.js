function onReady() {
    console.log('JavaScript ready !');    
    getParty();
}

onReady();

function getParty() {
    console.log('Gathering Party ');
    axios({
        method: 'GET',
        url: '/party'
    }) .then(function (response) {
            renderParty(response.data);
        })
        .catch(function (error) {
            console.log('Error getting character list', error);
            alert('Sorry, could not retrieve your heroes');
        });
}

function renderParty(party) {
    console.log('Rendering heros to the DOM', party);
    let outParty = document.getElementById('out-party');
    outParty.innerHTML = '';
    for (let hero of party) {
        outParty.innerHTML += `
        <li>
        <p>${hero.name}</p>
        </li>`;
    }
}

function generateHero(event) {
    event.preventDefault();
    let heroName = document.getElementById('hero-name');
    let heroClass = document.getElementById('hero-class');
    let heroStr = document.getElementById('hero-strength');
    let heroDex = document.getElementById('hero-dexterity');
    let heroCon = document.getElementById('hero-constitution');
    let heroInt = document.getElementById('hero-intelligence');
    let heroWis = document.getElementById('hero-wisdom');
    let heroCha = document.getElementById('hero-charisma');

    let newHero = {
        name: heroName.value,
        class: heroClass,
        strength: heroStr.value,
        dexterity: heroDex.value,
        constitution: heroCon.value,
        intelligence: heroInt.value,
        wisdom: heroWis.value,
        charisma: heroCha.value,
    };
    console.log('Adding hero to party...', newHero);
    axios({
        method: 'POST',
        url: '/party',
        data: newHero,
    }) .then(function (response) {
        console.log('Hero added');

        heroName.value = '';
        getParty();
    });
}