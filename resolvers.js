export const resolvers = {
  Query: {
    // category: () => {
    //   return Category
    // }
    category: (parent, {id}) => {
      return Category.filter(category => {
        return category.id === id;
      });
    }
  }
}

let Category = [
  //Variables:
  {
    id: "variables 1",
    question: "¿Qué es una variable?",
    answers: ["Un contenedor de datos que puede variar en el tiempo", "Un nombre que varía", "Una palabra reservada de JavaScript", "Ninguna de las anteriores"],
    correctAnswer: "a",
    numberOfQuestions: 9
  },{
    id: "variables 2",
    question: "¿Cuántos tipos de variables existen en JavaScript?",
    answers: ["3", "1", "2", "5"],
    correctAnswer: "c",
    numberOfQuestions: 9
  },{
    id: "variables 3",
    question: "¿Cuáles son los tipos de variables existen en JavaScript?",
    answers: ["const, let y var", "var y let", "const y let", "var y const"],
    correctAnswer: "b",
    numberOfQuestions: 9
  },{
    id: "variables 4",
    question: '¿Qué es un "const"?',
    answers: ["Un nombre constante", "Un tipo de función", "Un contenedor de datos que no puede variar en el tiempo", 'Un método de "strings"'],
    correctAnswer: "c",
    numberOfQuestions: 9
  },{
    id: "variables 5",
    question: '¿Que diferencia hay entre "var" y "let"?',
    answers: ['"var" define una constante y "let" una variable local', '"var" define una variable global y "let" una variable local', '"let" define una constante y "var" una variable global', '"var" define una variable local y "let" una variable global'],
    correctAnswer: "b",
    numberOfQuestions: 9
  },{
    id: "variables 6",
    question: '¿Cuántos tipos de datos primitivos existen?',
    answers: ['3', '5', '4', '7'],
    correctAnswer: "d",
    numberOfQuestions: 9
  },{
    id: "variables 7",
    question: '¿Cuáles son los tipos de datos primitivos existentes?',
    answers: ['Null, Boolean, Number, String, BigInt', 'Undefined, Boolean, Number, String, BigInt, Symbol, Object', 'Undefined, Null, Boolean, Number, String, BigInt, Symbol', 'Undefined, Null, Boolean, Number, Symbol, String'],
    correctAnswer: "c",
    numberOfQuestions: 9
  },{
    id: "variables 8",
    question: '¿Qué valores puede tener una variable del tipo Boolean?',
    answers: ['Yes y No', 'Números', 'True y False', 'Ninguna de las anteriores'],
    correctAnswer: "c",
    numberOfQuestions: 9
  },{
    id: "variables 9",
    question: '¿Qué es el tipo de dato Null?',
    answers: ['Representa un valor nulo', 'Representa una valor definido pero "vacía"', 'Representa el número "0"', 'Ninguna de las anteriores'],
    correctAnswer: "a",
    numberOfQuestions: 9
  },

  //Números
  {
    id: "numeros 1",
    question: '¿Qué devuelve "(123).toString()"?',
    answers: ['123', '"uno dos tres"', 'El número 123 como un String', 'Ninguna de las anteriores'],
    correctAnswer: "c",
    numberOfQuestions: 8
  },{
    id: "numeros 2",
    question: '¿Qué devuelve "(10).toExponential(2)"?',
    answers: ['100', 'El número 10 como un String y escrito en notación exponencial', '12', 'Ninguna de las anteriores'],
    correctAnswer: "b",
    numberOfQuestions: 8
  },{
    id: "numeros 3",
    question: '¿Qué devuelve "(9.65).toFixed(0)"?',
    answers: ['10', '9.650', 'El número 9.650 como String', '9'],
    correctAnswer: "a",
    numberOfQuestions: 8
  },{
    id: "numeros 4",
    question: '¿Qué devuelve "(5.65).toPrecision(2)"?',
    answers: ['5', 'El número 5.65 como String', 'El número 5.65 como Int', '5.7'],
    correctAnswer: "d",
    numberOfQuestions: 8
  },{
    id: "numeros 5",
    question: '¿Qué devuelve "(14.3).valueOf()"?',
    answers: ['14', '15', '14.3', 'Ninguna de las Anteriores'],
    correctAnswer: "c",
    numberOfQuestions: 8
  },{
    id: "numeros 6",
    question: '¿Qué es un "Int"?',
    answers: ['Un tipo de carácter', 'Un tipo de dato que representa los números enteros', 'Una cadena de números', 'Ninguna de las Anteriores'],
    correctAnswer: "b",
    numberOfQuestions: 8
  },{
    id: "numeros 7",
    question: '¿Qué es un "FLoat"?',
    answers: ['Un tipo de dato que representa los números enteros', 'Un tipo de número', 'Una cadena de caracteres', 'Un tipo de dato que representa los números reales'],
    correctAnswer: "d",
    numberOfQuestions: 8
  },{
    id: "numeros 8",
    question: '¿Para qué sirve el método "Number()"?',
    answers: ['Para convertir variables en números', 'Para convertir números en variables', 'Para convertir un String en caracteres', 'Para convertir decimales en caracteres'],
    correctAnswer: "a",
    numberOfQuestions: 8
  },

  //Strings
  {
    id: "strings 1",
    question: '¿Qué es un String?',
    answers: ['Un carácter', 'Un tipo de número', 'Una cadena de caracteres', 'Ninguna de las anteriores'],
    correctAnswer: "c",
    numberOfQuestions: 8
  },{
    id: "strings 2",
    question: '¿Qué hace el método "lenght()"?',
    answers: ['Devuelve la longitud de un String', 'Devuelve el ultimo carácter de un String', 'Devuelve el primer carácter de un String', 'Ninguna de las anteriores'],
    correctAnswer: "a",
    numberOfQuestions: 8
  },{
    id: "strings 3",
    question: '¿Qué hace el método "includes()"?',
    answers: ['Devuelve el ultimo carácter de un String', 'Determina cuantos puntos hay en un String', 'Determina si un String contiene otro String o carácter', 'Ninguna de las anteriores'],
    correctAnswer: "c",
    numberOfQuestions: 8
  },{
    id: "strings 4",
    question: '¿Qué hace el método "indexOf()"?',
    answers: ['Devuelve el primer carácter de un String', 'Devuelve la posición del primer carácter que se determine dentro del método', 'Determina si un String contiene comillas', 'Determina si un String contiene comas'],
    correctAnswer: "b",
    numberOfQuestions: 8
  },{
    id: "strings 5",
    question: '¿Qué hace el método "lastIndexOf()"?',
    answers: ['Devuelve la posición del ultimo carácter que se determine dentro del método', 'Devuelve la longitud de un String', 'Determina si un String contiene espacios', 'Ninguna de las anteriores'],
    correctAnswer: "a",
    numberOfQuestions: 8
  },{
    id: "strings 6",
    question: '¿Qué hace el método "repeat()"?',
    answers: ['Devuelve la posición de la ultima coma', 'Transforma un String en números', 'Determina si un String contiene acentos', 'Repite un String una determinada cantidad de veces'],
    correctAnswer: "d",
    numberOfQuestions: 8
  },{
    id: "strings 7",
    question: '¿Qué hace el método "slice()"?',
    answers: ['Devuelve la posición del ultimo punto', 'Devuelve una sección de un String', 'Determina si un String contiene comas', 'Ninguna de las anteriores'],
    correctAnswer: "b",
    numberOfQuestions: 8
  },{
    id: "strings 8",
    question: '¿Qué hacen los métodos "toLowerCase()" y "toUpperCase()"?',
    answers: ['Devuelve la posición del ultimo espacio', 'Devuelve un carácter de un String', 'Comparan 2 Strings', 'Devuelven un String convertido a minúsculas o mayúsculas'],
    correctAnswer: "d",
    numberOfQuestions: 8
  },

  //Arrays
  {
    id: "arrays 1",
    question: '¿Qué es un Array?',
    answers: ['Una función', 'Un conjunto de elementos', 'Un objeto', 'Ninguna de las anteriores'],
    correctAnswer: "b",
    numberOfQuestions: 7
  },{
    id: "arrays 2",
    question: '¿Qué hace el método "lenght()"?',
    answers: ['Devuelve la longitud de un Array', 'Devuelve el último carácter de un Array', 'Devuelve el primer carácter de un Array', 'Ninguna de las anteriores'],
    correctAnswer: "a",
    numberOfQuestions: 7
  },{
    id: "arrays 3",
    question: '¿Qué hace el método "push()"?',
    answers: ['Devuelve las comillas dentro de un Array', 'Agrega un elemento al final de un Array', 'Agrega un elemento al principio de un Array', 'Ninguna de las anteriores'],
    correctAnswer: "b",
    numberOfQuestions: 7
  },{
    id: "arrays 4",
    question: '¿Qué hace el método "pop()"?',
    answers: ['Agrega un elemento al final de un Array', 'Devuelve la cantidad de caracteres dentro del Array', 'Eliminar un elemento al final del Array', 'Ninguna de las anteriores'],
    correctAnswer: "c",
    numberOfQuestions: 7
  },{
    id: "arrays 5",
    question: '¿Qué hace el método "shift()"?',
    answers: ['Elimina un elemento al principio de un Array', 'Agrega un elemento al principio de un Array', 'Devuelve el ultimo elemento del Array', 'Ninguna de las anteriores'],
    correctAnswer: "a",
    numberOfQuestions: 7
  },{
    id: "arrays 6",
    question: '¿Qué hace el método "unshift()"?',
    answers: ['Devuelve la longitud de un Array', 'Agrega un elemento al principio de un Array', 'Agrega un elemento al principio de un Array', 'Ninguna de las anteriores'],
    correctAnswer: "b",
    numberOfQuestions: 7
  },{
    id: "arrays 7",
    question: '¿Qué hace el método "slice()"?',
    answers: ['Transformar el Array en una función', 'Convertir los elementos de un Array en Strings', 'Convertir los elementos de un Array en Números', 'Copia una parte del Array'],
    correctAnswer: "b",
    numberOfQuestions: 7
  },

  //Eventos
  {
    id: "eventos 1",
    question: '¿Qué es un evento?',
    answers: ['Una forma de capturar las interacciones de los usuarios', 'Una forma de transformar Arrays en Strings', 'Un tipo de Array', 'Un tipo de Número'],
    correctAnswer: "a",
    numberOfQuestions: 7
  },{
    id: "eventos 2",
    question: '¿Qué hace el evento "click"?',
    answers: ['Detecta cuando se hace doble click sobre un elemento', 'Detecta cuando se hace click sobre un elemento', 'Detecta si un elemento contiene un Array', 'Detecta si un elemento esta activado'],
    correctAnswer: "b",
    numberOfQuestions: 7
  },{
    id: "eventos 3",
    question: '¿Qué hace el evento "dblclick"?',
    answers: ['Detecta cuando se hace doble click sobre un elemento', 'Detecta cuando se hace click sobre un elemento', 'Detecta si un elemento contiene un Array', 'Detecta si un elemento esta activado'],
    correctAnswer: "a",
    numberOfQuestions: 7
  },{
    id: "eventos 4",
    question: '¿Qué hace el evento "change"?',
    answers: ['Detecta cuando el mouse pasa sobre un elemento', 'Detecta cuando se hace doble click sobre un elemento', 'Detecta si un elemento ha cambiado', 'Detecta si un elemento esta desactivado'],
    correctAnswer: "c",
    numberOfQuestions: 7
  },{
    id: "eventos 5",
    question: '¿Qué hace el evento "mouseover"?',
    answers: ['Detecta cuando el mouse pasa sobre un elemento', 'Detecta cuando se hace triple click sobre un elemento', 'Detecta si un elemento se ha creado', 'Detecta si un elemento esta cambiando'],
    correctAnswer: "a",
    numberOfQuestions: 7
  },{
    id: "eventos 6",
    question: '¿Qué hace el evento "scroll"?',
    answers: ['Detecta cuando el mouse pasa sobre una imágen', 'Detecta cuando el usuario se desplaza dentro de la pagina', 'Detecta si un elemento se ha eliminado', 'Detecta si un elemento esta activado'],
    correctAnswer: "b",
    numberOfQuestions: 7
  },{
    id: "eventos 7",
    question: '¿Qué hace el evento "submit"?',
    answers: ['Detecta cuando el mouse pasa sobre un titulo', 'Detecta cuando el usuario se desplaza sobre un formulario', 'Detecta si un elemento se ha oculto', 'Detecta si un formulario fue enviado'],
    correctAnswer: "d",
    numberOfQuestions: 7
  }
]

