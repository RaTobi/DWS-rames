// ukol cislo 1
let first = document.getElementById('first');

first.addEventListener('click', function(){
    alert("tohle je alert.")
});
// ukol cislo 2
let secnod = document.getElementById('secnod');
secnod.addEventListener('click', function(){
    secnod.textContent="tohle je ukoly čislo 2"
});
// ukol cislo 3
const triA = document.getElementById('triA')

const triB = document.getElementById('triB')

triA.addEventListener('click', function(){
    triB.textContent = "novy text"
})

// ukoly cislo 4
const ctyriA = document.getElementById('ctyriA')
const ctyriB = document.getElementById('ctyriB')
ctyriA.addEventListener('click', function(){
    ctyriB.textContent = 'toto je vypsany text'
})
// ukol cislo 5
function hellouser(){
    let name = document.getElementById('name').value;
    alert('vitej na webove strance ' + name);
}

// ukol cislo 7
const pointer = document.getElementById('pointer');
pointer.addEventListener('pointerover', function(){
pointer.textContent = "zmnenil jsem se"
})
// ukol cislo 8
let timeA = document.getElementById('timeA');
const timeB =  document.getElementById('timeB');
timeA.addEventListener('click', function(){
    const now_time = new Date();
    const real_time = now_time.toLocaleTimeString();
    timeB.textContent = 'nyni je cas: ' + real_time;
})
// ukol cislo 9
let dateA = document.getElementById('dateA');
const dateB = document.getElementById('dateB');
dateA.addEventListener('click', function(){
    const now_date = new Date();
    const real_date = now_date.toLocaleDateString();
    dateB.textContent = 'dnesim datem je: ' + real_date;
})
 // dynamicka stranka 2.0
 function add(){
    let funkceA = document.getElementById('funkceA').value;
    funkceA = Number(funkceA);
    let go = funkceA + 3;
    document.getElementById('finalFunkce').textContent = 'Výsledek: ' + 
//tento soubor byl editovat v githubu