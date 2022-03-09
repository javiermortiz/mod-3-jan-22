document.addEventListener("DOMContentLoaded", ev => {
    console.log('hello world');
    const form = document.querySelector("form");
    form.addEventListener("submit", ev => {
        ev.preventDefault();
        const input = document.querySelector("input");
        const number = input.value;


        const res = await fetch(`https://swapi.dev/api/people/${number}`);
        console.log(res);
        const data = await res.json();
        console.log(data);


        
        const people = document.querySelector("#people");
        people.innerHTML = `What Star Wars character has ${data.eye_color} eyes?`;
        setTimeout(() => {
            people.innerHTML += `<h2>${data.name}</h2>`;
            input.value = "";
        }, 5000);
    })
});

