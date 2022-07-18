alert('Desafio de los 3 acertijos, escribí la respuesta con la letra inicial en mayuscula')
let desafio1 = prompt(
  "Hay algo que, aunque te pertenezca, la gente siempre lo utiliza más que tú. ¿Qué es?");

while (desafio1 !== 'Nombre') {
  alert("Incorrecto");
  let desafio1 = prompt(
    "Hay algo que, aunque te pertenezca, la gente siempre lo utiliza más que tú. ¿Qué es?"
  );
  if (desafio1 === 'Nombre') {
    break

  }

}
let desafio2 = prompt(
  "Crezco a pesar de no estar vivo. No tengo pulmones, pero para vivir necesito el aire. El agua, aunque no tenga boca, me mata. ¿Qué soy?"
);
while (desafio2 !== 'Fuego') {
  alert("Incorrecto");
  let desafio2 = prompt(
    "Crezco a pesar de no estar vivo. No tengo pulmones, pero para vivir necesito el aire. El agua, aunque no tenga boca, me mata. ¿Qué soy?"
  );
  if (desafio2 === 'Fuego') {
    break

  }

}
let desafio3 = prompt(
  "Estando roto es más útil que sin romperse. ¿Qué es?"
);

while (desafio3 !== 'Huevo') {
  alert("Incorrecto");
  let desafio3 = prompt(
    "Estando roto es más útil que sin romperse. ¿Qué es?"
  );
  if (desafio3 === 'Huevo') {
    break

  }

}
alert("Felicitaciones!");