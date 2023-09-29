function validarEntrada(entrada) {
  let estado = 0;
  const recorrido = [];

  const estados = {
      0: { 'S': 1, 'I': 7 },
      1: { 'A': 2 },
      2: { 'E': 3 },
      3: { '1': 4, '3': 5, '4': 6,  '8': 16, '9': 18, '2': 20 ,'5':14},
      4: { '0': 12, '4': 13 },
      5: { '0': 15 },
      6: { '0': 15 },
      7: { 'S': 8 },
      8: { 'O': 9 },                                                                //entradas 
      9: { 'V': 10 },                                                                     //SAE30 SAE40 SAE50 SAE140 SAE 250 
      10: { 'G': 11 },                                                                      //ISOVG69
      11: { '6':19 },
      12: { 'W': 15 },
      13: { '0': 15 },
      14: { '0': 15 },
      15: {}, // Estado final SAE30, SAE40, SAE50, SAE140, SAE250
      16: { '0': 17 },
      17: { 'W': 21 },
      18: { '0': 15 },
      19: { '8':25},
      20: { '5': 14 },
      21: { '-': 23 },
       
      23: { '9': 24 },
      24: { '0': 25 },
      25: {},
      
  };

  for (let i = 0; i < entrada.length; i++) {
      const caracter = entrada[i];

      recorrido.push(estado);

      if (estados[estado] && estados[estado][caracter] !== undefined) {
          estado = estados[estado][caracter];
      } else {
          return { estado, esValido: false, recorrido: recorridoToString(recorrido) };
      }
  }

  const estadosFinales = [15, 22, 25];
  if (estadosFinales.includes(estado)) {
      recorrido.push(estado);
      return { estado, esValido: true, recorrido: recorridoToString(recorrido) };
  } else {
      recorrido.push(estado);
      return { estado, recorrido: recorridoToString(recorrido) } // La entrada es inválida
  }
}

export default validarEntrada;

const recorridoToString = (recorrido) => {
  let str = '';
  for (let i = 0; i < recorrido.length; i++) {
      str += `q${recorrido[i]}`;
      if (i < recorrido.length - 1) {
          str += ' -> ';
      }
  }
  return str;
}
