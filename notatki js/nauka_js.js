//********* FIZZ BUZZ *********

// let x=0;

// if (x % 15 === 0) {
//     console.log('fizz buzz')
// } else if (x % 5 == 0) {
//     console.log('buzz') 
// } else if (x % 3 == 0) {
//     console.log('fizz') 
// } else {
//     console.log(x)
// }

// *********************************





//********* FOR LOOPS *********


// for (let i=1; i <= 100; i++) {
// if (i % 15 === 0) {
//     console.log('fizz buzz')
// } else if (i % 5 == 0) {
//     console.log('buzz') 
// } else if (i % 3 == 0) {
//     console.log('fizz') 
// } else {
//     console.log(i)
// }
// }


// *********************************





//********* ARRAYS *********


// let books = ['Ogniem i mieczem', 'Szkice piórkiem', 'Lolita', 'Książe', 'Ogniem i mieczem', 'Szkice piórkiem', 'Lolita', 'Książe','Ogniem i mieczem', 'Szkice piórkiem', 'Lolita', 'Książe']

// let count = 0;
// for (let i = 0; i < books.length; i++) {
//     console.log(books[i])
//     if (books[i] === 'Lolita') {
//         count = count + 1
//         console.log(count)
//     } else {

//     }
// }


// *********************************





//********* OBJECTS *********

// const user = {
//     name: "Kuba",
//     lastName: "Kucharczyk",
//     pets: "Dog I wish"
// }

// console.log(user)
// console.log(user.name)
// console.log(user.lastName)
// console.log(user.pets)


// *********************************







//********* ARRAY OF OBJECTS *********

// const users = [
//     {
//        username: 'Adam',
//        followers: 34,
//        is_followed: false
//     },
//     {
//         username: 'Basia',
//         followers: 145312,
//         is_followed: true
//      },
//      {
//         username: 'Czesiek',
//         followers: 231,
//         is_followed: true
//      }
// ]

// console.log(users)
// console.log(users[0])
// console.log(users[1])
// console.log(users[2])


// *********************************






//********* FUNCTIONS ********


// function sendReminder(name , time) {
//     console.log(`Hello ${name}, I remind you about meeting at ${time}. Please confirm :) Kuba`)
// };


// sendReminder("Adam", 10);
// sendReminder('Betty', 11);
// sendReminder('Chris', 13);
// sendReminder('Dorothy', 14);
// sendReminder('Ethan', 15);


//Inny przykład z funkcjami. Tym razem taki, w którym zmienna jest zadeklarowana globalnie. Nie muszę wtedy przy deklaracji funkcji wypisywać wszystkich argumentów. 

// let name = "Kuba";
// let counter = 1;

// function alarmInfo () {
//     console.log(`${name}! wake up! This is alarm numer ${counter}!`)
//     counter += 1
// }

// alarmInfo()
// alarmInfo()
// alarmInfo()
// alarmInfo()
// alarmInfo()




// *********************************



//********* BUILT-IN OBJECTS ********


// Rodzaje obiektów wbudowanych w JS:
// DATE
// MATH
// STRING
// ARRAY
// OBJECT



//** LENGHT **

// const word = 'Słowo'
// console.log(word.length);


// // to już inny przykład


// const fruit = ['banana', 'apple', 'pear'];
// console.log(fruit.length);




//** .CONCAT() **

//// Concat łączy elementy


// const string = 'Uśmiechnij się, '
// const string2 = 'Kuba!'

// console.log(string.concat(string2))


//// to już jest inny przykład


// const array1 = [1,2,3];
// const array2 = [4,5,6];

// const newArray = array1.concat(array2);

// console.log(array1)
// console.log(array2)
// console.log(newArray)

//// A tak jak poniżej nie robimy! To tworzy stringa, a nie nowy array

// const array1 = [1,2,3];
// const array2 = [4,5,6];

// const newArray = array1 + "," + array2


// console.log(array1)
// console.log(array2)
// console.log(newArray)

// // ^^^^ TAK NIE ROBIMY!!! ^^^^





// //** .JOIN() **


// const textDisplay = document.querySelector('.text');

// const emotions = ['Happy', 'Sad', 'Confident']
// console.log(emotions)
// console.log(emotions.join("__"))


// textDisplay.innerHTML = emotions


// //czyli to, co metoda join przyjmuje jako argument zastąpi przecinki w arrayu. 






// //** .POP() **

// Pop usuwa ostatni element z arraya (lub obiektu) albo ten element, którego indeks wskażemy jako argument np. movies.pop(1). Wtedy ten element jest zwracany

// const movies = ['Titanic', 'LOTR', 'Star Wars']
// console.log(movies)

// movies.pop();





// //** .SHIFT() **

// to jest odwrotność popu - usuwa pierwszy element listy/obiektu

// const movies = ['Goodfellas', 'Wolf', 'Jumanji']

// movies.shift()

// console.log(movies)






// // *** .UNSHIFT() ***

// const plays = ['Hamilton']

// plays.unshift('Wicked', 'Cats')

// console.log(plays)

// // To dodaje dane przekazane w argumentach na początek array/obiektu




// // *** .PUSH() ***

// const actors = ['Brad Pitt']
// actors.push('Bradley Cooper', 'Adam Sandler')
// console.log(actors)


// // czyli to dodaje na elementy na końcu





// *** .SPLICE() ***
// Co ważne, splice() nie zmienia naszej zmiennej, it doesn't mutate array or obcject 

// const artists = ['Shakira', 'Byonce', 'Pink Floyd', 'Snoop Dogg']
// const maleArtists = artists.slice(0,2)

// console.log(maleArtists)
// console.log(artists)






// *** forEach() ***

// const circles = document.querySelectorAll(".circle");
// console.log(circles)
// circles.forEach(circle => circle.style.backgroundColor= 'black');

//// Kod jest wykonywany dla każdego elementu w liście. W nawiasie określamy co ma ulec zmianie. Tutaj

//// Inny przykład


// const names = ['Adam', 'Jarek', 'Tomek'];
// names.forEach(name => console.log(name))

// // Czyli forEach rozbija nam elementy arreya na pojedyncze jednostki, następnie w nawiasie nazywamy je sobie jak tam tylko chcemy (tutaj zamiat name mogłoby być dupa, to jest od nas tylko zależne, i po strzałce wykonujemy naszą funkcję - określamy to, co ma się tutaj zadziać)






// *** map() ***

//// Ta metoda tworzy nowego arraya, nie tak jak forEach, który tylko printing out


// const ages2018 = [21, 45, 56, 32, 45, 2]
// const ages2021 = ages2018.map (age => age + 3)
// console.log(ages2021)



// inny przykład, tym razem na obiektach


// const housemates2018 = [
//     {
//         name: 'Ahmed',
//         age: 24
//     },
//     {
//         name: 'Amy',
//         age: 35
//     },
//     {
//         name: 'Jenny',
//         age: 31
//     }
// ]

// const housemates2021 = housemates2018.map(tinku => tinku.age + 3)
// console.log(housemates2021)
// console.log(housemates2018)

// // Funkcja przekazywana do metody "forEach()" wykonuje określone działania dla każdego elementu listy, ale nie zwraca nowej listy. Metoda "forEach()" zmienia wartości w oryginalnej liście, jeśli funkcja wykonuje taką operację.

// // Funkcja przekazywana do metody "map()" również wykonuje określone działania dla każdego elementu listy, ale zwraca nową listę. Metoda "map()" nie zmienia wartości w oryginalnej liście, a jedynie tworzy nową listę na podstawie oryginalnej listy, wykonując określone operacje na każdym elemencie.





// *** .filter() *****

// const shows = ['Lupin', 'Cobra Kai', '24', 'Mr. Robot']

// const displayShows = shows.filter((word) => word.length <= 5)
// console.log(displayShows)

// //Filtruje po warunkach określonych w nawiasie





// *** .reduce() *****

// to jest tylko SYNTAX: 
//scores.reduce((accumulator, currentValue) => accumulator + currentValue)
// to wyżej to SYNTAX








//***** 29.03.203 - ĆWICZENIA [PRZEKELIĆ Z MACA] *****


//Using every() write a function that checks whether every number in an array is a square number
// eg. checkSquares ([9,16,81]) => true


// const numbers = [9, 16, 81]
// function checkSquares() {
    
//     return numbers.every(number => Math.sqrt(number) % 1 === 0);
// }


// console.log(checkSquares())




// Using an array method, write a function that returns the string elements of an array that have a given length or larger.
// eg: getWords(['Florida', 'dog', 'phone'], 5]) => ['Florida', 'phone']

// const words = ['Florida', 'dog', 'phone', 'pig', 'home', 'ferrari', 'bomb']
// function getWords(array, number) {
//     return words.filter((word) => word.length >= number)
// }

// console.log(getWords(words, 4))





// Using an array method, write a function that converts an array of cm values as strings, info an array of numbers.
// eg: getValues['23cm', '5.6cm', '1000cm'] => [23, 5.6, 1000]


// const values = ['23cm', '5.6cm', '1000cm']

// function getValues() {
//     return values.map(value => parseFloat(value))
// }

// console.log(getValues())







// // Using split() and filter() write a function that counts the number of vowels in a sentence.
// // Eg: getVowelCount('In West Philadeplia, born and raised') => 12


// const saying = 'In West Philadeplia, born and raised'
// const saying2 = 'Siemanko tutaj Jakub i nie jest to żadne powiedzenie'
// const vowels = ['a', 'A' , 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U', 'y', 'Y']

// function getVowelCount(sentence) {
//     console.log(sentence.split('').filter(letter => vowels.includes(letter)).length)

// }
   
// console.log(getVowelCount(saying))
// console.log(getVowelCount(saying2))


//czyli tutaj najpierw deklarujemy stałą, która będzie naszym zdaniem do sprawdzenia. Ja akurat zadeklarowałem dwie różne do dwóch różnych przykładów. Następnie deklarujemy stałą vowels, którą jest tablicą zawierającą wszystkie samogłoski w wersji małej i wielkiej. Następnie deklarujemy funkcje getVowelCount(), do której będziemy przekazywali argument, ja nazwałem go sentence. Funkcja ma zwrócić w console.logu liczbę samogłosek w przekazanym argumencie. Sentence to nasza stała, którą sprawdzamy. Split('') rozdziela tę stałą na array z pojedynczych znaków. Filter() sprawdza czy jakaś litera wchodzi w skład stałem vowels. Na końcu dodajemy metodę length, która sprwoadza cały zapis do sprawdzenia długości arraya. 







//****** addEventListener() ******/

// // Syntax jest taki: 
// // target.addEventListener(event, function)
// // gdzie target to element z HTML, do którego dodamy event listenera. Event w nawiasie to wydarzenie które wywołuje określone działanie np. kliknięcie (to jest wydarzenie, event), a function to właśnie to wywoływane działanie 



// const firstCircle = document.getElementById('firstCircle')

// function alertMe() {
//     alert('Clicked!')
// }

// firstCircle.addEventListener('click', alertMe)









//// ****** Usuwanie eventListenera ******


// const firstCircle = document.querySelector('#firstCircle')

// function toggleColor() {
//     firstCircle.classList.toggle('blue-circle')
// }

// firstCircle.addEventListener('click', toggleColor)


//// Kluczowe jest tutaj dodanie metody toggle() w ciele funkcji. Toggle to po prostu przełącznik, który dodaje i usuwa jakąś klasę, jakieś id. W funkcji toggleColor oznaczyłem element firstCircle dodałem do niego właściwość classList, która pozwala manipulować listą klas przypisanych do danego elementu w DOM, a następnie dodałem metodę toggle i określiłem jej argument jako klasę zdefiniowaną w styles.css. Następnie już poza funkcją w addEventListenerze wskazałem click i toggleColor, czyli funkcję dodającą i odejmującą klasę .blue-circle w html. 


// co jeżeli chcielibyśmy, żeby to klikanie działało tylko do np. 10 kliknięcia. Wtedy zapisujemy coś takiego:



// const firstCircle = document.querySelector('#firstCircle')
// let count = 0 // dodajemy to

// function toggleColor() {
//     firstCircle.classList.toggle('blue-circle')
//     count++ // dodajemy inkrementację zmiennej let tutaj
//     console.log(count) // dla czytelności dodajemy sobie console loga
//     if (count > 10) {
//         firstCircle.removeEventListener('click', toggleColor)
//     } // dodajemy ifa, który powyżej 10 kliknięcia, czyli 10 wywołania funkcji usunie eventListenera z naszego kółka
// }

// firstCircle.addEventListener('click', toggleColor)


// Jak to działa? Ponieważ dodaliśmy firstCircle.addEventListener('click', toggleColor) to funkcja się wywołuje zawsze gdy klikniemy na kółko. Kliknięcie wywołuje całą funkcję, która wczytuje się linijka po linijce. Najpierw zmieni kolor na niebieski. Następnie doda +1 do counta, następnie wyświetli się console log, nastepnie wykona się if. Itd itd. Za 11 razem funkcja usunie event listenera. 





//// A teraz takie zadanko z Event listenerami. Mamy kółko i chcemy żeby po kliknięciu na to kółko, kółko przemieściło się trochę w dół. Nie może jednak wyjść poza ekran



// const firstCircle = document.querySelector('.circle')
// let height = 0

// function goDown() {
//     height += 50
//     console.log('Should work')
//     firstCircle.style.top = height + 'px';
//     if (height >= 250) {
//         firstCircle.removeEventListener('click', goDown)
//     }
// }

// firstCircle.addEventListener('click', goDown)


// Nie wiem dlaczego ale ten kod u mnie nie działał. Wrócę do tego później









////****** querySelector() ******/


// // querySelector to metoda JS do wybierania pierwszego elementu, który wpisuje się w wymagania określone w argumencie tej motody

// // querySelector('div') - wybierze pierwszego diva
// // querySelector('.circle') - wybierze pierwszy element o klasie 'circle'
// // querySelectorAll('.circle') - wybierze wszystkie elementy o klasie 'circle'
// // querySelector('#main') - wybierze pierwszy element o id 'main'






 
////***** Math.random() *****/

// console.log(Math.random())

// to nam da losowy numer, ale zawsze mniejszy mniejszy od 1, dlatego trzeba pamiętać o mnnożeniu.
// Jeśli np. od 1 do 100: 

// console.log(Math.random() * 100)

// A jeżeli to jeszcze miałoby zaokrąglone do liczby całkowitej to: 

// console.log(Math.floor(Math.random() * 100))

// Tylko, że to nam nigdy nie da 100. Jeżeli chcielibyśmy 100 to musielibyśmy jeszcze zrobić +1

// Math.floor() - zaokrągla do dolnej
// Math.ceil() - zaokrągla do górnej
// Math.round() - zaokrągla do najbliższej



////  ZADANIE: 

// const drinksMenu = ['Vodka Tonic', 'White Wine', 'Beer', 'Mocktail']

// // zrób tak, żeby wybrało się losowa pozycja z menu

// const drink = drinksMenu[Math.floor(Math.random() * 4)]

// // a tutaj przedstawiona wersja w loopie:

// for (let i = 0; i < 15; i++) {
//     const drink = drinksMenu[Math.floor(Math.random() * 4)]
//     console.log(drink)
// }

// // albo można to zsrobić jak Ania Kubow tzn. 

// console.log(drinksMenu[Math.floot(Math.random() * drinksMenu.length)])




//// ************* DATE ****************

// const today = new Date()

// console.log(today)

// Date() jest konstruktorem w javascripcie.
// Wynik console.loga to: Thu Apr 27 2023 23:31:35 GMT+0200 (czas środkowoeuropejski letni)


// const today = new Date()

// const date = today.getDate()
// console.log(date)
// // to daje dzień miesiąca


// const day = today.getDay()
// console.log(day)
// // to daje dzień tygodnia wyrazony liczbowo (bo mamy rózne slowniki - dlatego nie slownie)

// const fullYear = today.getFullYear()
// console.log(fullYear)
// // to da nam rok

// const hours = today.getHours()
// console.log(hours)
// // to da nam pełną odzinę

// const isoString = today.toISOString()
// console.log(isoString)
// // to jest zapis daty przyjęty przez programistów




// Przykład praktyczny

//  const dateDisplay = document.querySelector('.date')

// const today = new Date()
// const Christmas = new Date('2023-12-24T14:42:17.833Z')

// console.log(Christmas - today)
// // to wyrazi nam informacje ile jest czasu do świąt w 2023 w milisekundach

// const millsecondsToXmas = Christmas - today
// const minutes = millsecondsToXmas / 60000

// // a tak np. byłyby dni: 
// // // // const minutes = millsecondsToXmas / 60000 / 60 / 24

// console.log(minutes);
// dateDisplay.innerHTML = Math.round(minutes)






// // // //*********** TIMERS **********// // // // 






// SET TIMEOUT

// To wywołuje jakąś funkcję po upływie określonego czasu

// setTimeout(function, milliseconds)

// w nawiasie przekazujemy argumenty - pierwszy to funkcja, która zostanie wywołana. Drugi to czas, który musi upłynąć wyrazony w milusekundach

// const time = 5000

// function showText ()
// {
// console.log('all good!')
// }

// setTimeout(showText, time)

// czyli ta funkcja działa tak, ze po 5 sekundach pojawi się w konsoli tekst "All good!"



// A teraz funkcja, która zmieni coś na stronie

// const circle = document.querySelector('.circle')

// const time = 3000;

// function showText() {
//     circle.innerHTML = 'Hey Dude'
// }

// setTimeout(showText, time);





// // SET INTERVAL

// Wywołuje funkcję w interwale: 
// setInterval(function, milliseconds)


// const circle = document.querySelector('.circle')
// const text = 'Alert!'
// const time = 2000;


// function showAlert () {
//     const textDisplay = document.createElement('div')
//     textDisplay.innerHTML = text
//     circle.appendChild(textDisplay)

// }


// setInterval(showAlert, 2000)





// // CLEAR INTERVAL 

// // Ta metoda stopuje wykonywnie interwału
// // Ponizej przykład. 

// const circle = document.querySelector('.circle') // wybieramy kółko z HTMLa
// let height = 100; // wprowadzamy zmienną wysokość do wykorzystania w ponizszej funkcji

// function moveCircle() {
//     height += 50 // inkrementacja zmiennej height o 50
//     circle.style.top = height + 'px' // wybieramy w stałej circle styl top odwujący element od górnej krawędzi. Dodajemy piksele tak jak to jest w stylach
//     console.log(height) // log dla nas, zebyśmy widzieli w konsoli jaką ma wartość
//     if (height === 300) {
//     clearInterval(interval)
//     } // wyrazenie warunkowe. Jezeli height osiągnie wartość 300, to wówczas interval wskazany w argumencie (ponizej stworzona stała interval się zatrzyma)
// }

// const interval = setInterval(moveCircle, 2000)










// // *********** CLASSES **********


// // Klasy to swego rodzaju szablony do tworzenia nowych obiektów
// // Przyspiesza to bardzo pracę tworząc rozbudowane obiekty

//Ponizej składnia:
// class nazwaObiektu {
//     constructor(atrybut1, atrybut2, atrybut3, atrybut4) {
//         this.atrybut1 = atrybut1; 
//         this.atrybut2 = atrybut2;
//         this.atrybut3 = atrybut3;
//         this.atrybut4 = atrybut4;
//     }
// }


// // Realny przykład:

// class person {
//     constructor(imię, nazwisko, wiek, wzrost) {
//         this.imię = imię; 
//         this.nazwisko = nazwisko;
//         this.wiek = wiek;
//         this.wzrost = wzrost;
//     }
// }


// // a mając juz zdefiniowaną klasę te nowe obiekty tworzymy z uzyciem keyworda new 


// const Jarek = new person ('Jarek', 'Nowak', 46, 178)
// console.log(Jarek)










// // ********** KEYS OF KEYBOARD EVENTS **********




// const circle = document.querySelector('.circle');

//     function control(event) {
//         if (event.key === 'ArrowLeft') { // ArrowLeft jest zaszyte w js, tego się uzywa. Wcześniej w js zamiast .key uzywano .keyCode co wymagało znalezienia w necie keycode'u przypisanego do danego klawisza np. byłoby event.keyCode === "39" i to jest jakiś tam klawisz
//             console.log ('pressed left')
//         }
//         if (event.key === 'ArrowRight') { // ArrowRight jest zaszyte w js, tego się uzywa
//             console.log ('pressed right')
//         }
//         if (event.key === 'ArrowDown') { // ArrowDown jest zaszyte w js, tego się uzywa
//             console.log ('pressed down')
//         }
//         if (event.key === 'ArrowUp') { // ArrowUp jest zaszyte w js, tego się uzywa
//             console.log ('pressed up')
//         }
//     }
    
// document.addEventListener('keydown', control) // keydown jest zaszyte w js, tego się uzywa. Gdybyśmy zrobili keyup to funkcja wywołałaby się dopiero po zwolnieniu klawisza. Moglibyśmy go "naciągnąć".









// // ********** SWITCH CASE **********


// // Trochę nie wiem czym rózni się ten switch case od ifa i raczej będę uzywał ifa, ale tłumaczą to tak, ze switch case sprawdza spełnienei warunku dla jednej wartości argumentu, a if dla róznych warónków

// const circle = document.querySelector('.circle');

// function control (e) {
//     switch (e.key) {
//         case 'ArrowLeft':
//             console.log('pressedLeft');
//             break;
//         case 'ArrowRight':
//             console.log('pressedRight');
//             break;
//         case 'ArrowUp':
//             console.log('pressedUp');
//             break;
//         case 'ArrowDown':
//             console.log('pressedDown');
//             break;
//         default:
//             console.log('key not recognised');
            
//     }
// }

// document.addEventListener('keydown', control)






// // a tutaj realny przykład ze sterowaniem kółkiem:


const circle = document.querySelector('.circle');
let yAxis = 100
let xAxis = 0



function control (e) {
    switch (e.key) {
        case 'ArrowLeft':
            xAxis -= 25
            circle.style.left = xAxis + 'px';
            console.log('pressedLeft');
            break;
        case 'ArrowRight':
            xAxis += 25
            circle.style.left = xAxis + 'px';
            console.log('pressedRight');
            break;
        case 'ArrowUp':
            console.log('pressedUp');
            yAxis -= 25
            circle.style.top = yAxis + 'px';
            break;
        case 'ArrowDown':
            console.log('pressedDown');
            yAxis += 25
            circle.style.top = yAxis + 'px';
            break;
        default:
            console.log('key not recognised');
            
    }
}

document.addEventListener('keydown', control)










// // ********** SORT **********


// // sort() sortuje array alfabetycznie:

// const planets = ['Mars', 'Jupiter', 'Uranus', 'Earth']

// console.log(planets.sort())


// // ale moze takze sofrować numery:

// const numbers = [6,78, 44, 21, 4, 15, 8, 99, 11, 12, 13, 55, 53, 23, 1, 3, 6]

// console.log(numbers.sort()) // [1, 11, 12, 13, 15, 21, 23, 3, 4, 44, 53, 55, 6, 6, 78, 8, 99]
// // to nie jest po kolei, jest alfabetycznie. Zeby było po kolei musimy się trochę bardziej wysilić: 

// console.log(numbers.sort(function(a, b) {return a - b})); // tutaj jako argument wstawiamy zaszytą w js funkcje, która bierze po kolei elementy z tablicy i sprawdza który jest większy. Jeśli wynik jest mniejszy od zera, to a zostanie ustawione przed b w tablicy. Jeśli wynik jest większy od zera, to b zostanie ustawione przed a w tablicy. Jeśli wynik jest równy zero, to a i b pozostają w niezmienionej kolejności.






// // ********** INCLUDES **********

// // Sprawdza czy tablica zawiera dany element i zwraca true lub false

// const books = ['Romeo i Julia', 'Quo Vadis', 'Proces']

// const ifIncludes = books.includes('Quo Vadis')

// console.log(ifIncludes);





// // ********** CONTAINS **********

// // Sprawdza czy coś jest elementem strony 

// const body = document.querySelector('body');
// const circle = document.querySelector('.circle');

// console.log(body.contains(circle)) // True




// // ********** CREATE ELEMENT + APPEND CHILD + SET ATTRIBUTE + GET ATTRIBUTE **********

// // nie będę tworzył nowych divów, ale chodzi o to, ze z jsa mozemy utworzyć nowy element. 
// // na filmie ani jest w 9:30:00

