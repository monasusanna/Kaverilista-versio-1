const kaverit = [];

function lisaakaveri(){
    let kaveri = prompt('Kirjoita kaverin nimi:');
    document.getElementById('nimilista').innerHTML = kaveri;
    kaverit.push(kaveri);
    console.log(kaverit)

    const ul = document.getElementById('nimilista');
    ul.innerHTML = '';
    for(let i = 0; i < kaverit.length; i++){
      let li = document.createElement('li');
      li.appendChild(document.createTextNode(kaverit[i]));
      ul.appendChild(li);
}
}
