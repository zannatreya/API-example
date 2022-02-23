

const loadBuddies = () => {
    fetch('https://randomuser.me/api/?results=5')
        .then(res => res.json())
        .then(data => displayBuddies(data))
}
loadBuddies();

const displayBuddies = (data) => {
    console.log(data.results);
    const buddies = data.results;
    const divContainer = document.getElementById('buddies');
    for (const buddy of buddies) {
        console.log(buddy)
        const p = document.createElement('p');
        p.innerText = `name: ${buddy.name.title} ${buddy.name.first}${buddy.name.last} Email: ${buddy.email} Gender: ${buddy.gender}`;
        divContainer.appendChild(p);
    }
}

