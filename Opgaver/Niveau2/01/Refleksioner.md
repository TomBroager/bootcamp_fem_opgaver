## Niveau 2 - Opgave 2

Jeg valgt at lave en addEventListener på <div> for at bruge bubbling event på <button>, så jeg uden problemer
kan tilføje ekstra <button>, og stadig kunne lytte på dem.

Min EventListener invokes en function med mine betingelser for at udfører den påkrævet opgave.

Function skal indholde følgende:

    01. Betingelse for at functionen må kun invokes hvis event target er <button>
    02. Deklarerer en variabel som indeholder <button> med className
    03. Betingelse som sætter <button> color til none og fjerner className
    04. Tilføje className og style til <button>

Hver gang functiunen invokes:
    event target = <button> ===> deklarerer en variabel med <button> og className ===>
    reset <button> ===> tilføj <button> color og className

Jeg synes opgave var lidt svær, og jeg måtte da også have lidt hjælp for at "knække" koden.