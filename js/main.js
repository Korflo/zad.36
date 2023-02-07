// Stwórz plik "main.js".

// Napisz funkcję, która przyjmuje jako parametry dwie liczby, które przekażesz podczas wywoływania funkcji.

// Funkcja ma zwracać true, jeśli jedna z liczb jest równa 20 lub jeśli suma tych dwóch liczb jest mniejsza lub równa 20.

// Wgraj plik do zdalnego repozytorium i podeślij link do sprawdzenia.

function suma(x, y){
    if(x == 20 || y == 20 || x + y <= 20) {
        return true;
    }
} 
console.log(suma(5,9));
