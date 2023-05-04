function sumar(equipoUno, equipoDos) {
  return equipoUno + equipoDos;
}

function liga(godoyCruz, boca) {
  return godoyCruz + boca;
}
function main() {
  const resultadoUno = sumar(45, 10);
  const resultadoDos = sumar(34, 10);
  console.log(
    " Cantidad de puntos sumados entres los 2 equipos",
    resultadoUno + resultadoDos
  );
  const apodos = {
    equipo1: {
      nombre: "Bodeguero",
      Clasico: "Boca",
    },
    equipo2: {
      nombre: "Xeneize",
      Clasico: "Godoy Cruz",
    },
  };
  console.log(
    "Le dicen",
    apodos.equipo1.nombre,
    "Su clasico es ",
    apodos.equipo1.Clasico
  );
  console.log(
    "Le dicen",
    apodos.equipo2.nombre,
    "Su clasico es ",
    apodos.equipo2.Clasico
  );
  const provincia = {
    godoyCruz: "Mendoza",
    boca: "Capital",
  };
  console.log(provincia);
  return true;
}
main();
