/*********   CODE CHALLENGE 02 **********/

/*
Geben über eine Prompt-Anforderung einen Namen ein
Geben über eine Prompt-Anforderung ein Alter ein

Geben Sie in Abhängigkeit vom angegebenen Alter 
folgende Getränkeauswahl in die Konsole aus aus :

Alter 0-5 // Milch  --> age > 0 AND age < 6
Alter 6-12 // Saft
Alter 13-17 // Cola
18 + // Wein

*/

/* Getränke-Challenge */

let firstName, age;
firstName = prompt("Bitte gib deinen Namen ein");
age = prompt("Bitte gib dein alter ein");
switch (true) {
    case (age>=0 && age<=5):
        console.log("Ausgabe: Milch");
        console.log("Damit wird man groß und stark!");
        break;

    case (age>=6 && age<=12):
        console.log("Ausgabe: Fruchtsaft");
        console.log("Die gesunde Erfrischung!");
        break;    
    
    case (age>=13 && age<=17):
        console.log("Ausgabe: Cola");
        console.log("Taste the Feeling!");
        break;

     case (age>=18):
        console.log("Ausgabe: Wein");
        console.log("In vino veritas mein Freund!");
        break;
    
    default:
        console.log("Ungültige Eingabe");
        break;
}