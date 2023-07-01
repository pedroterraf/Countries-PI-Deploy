let Validate = (activity) => {
  const error = {};
  if (!activity.name) {
    //NO PUEDE NO TENER NOMBRE
    error.name = "Please add an activity name";
  } else if (activity.name.length > 20) {
    //NO PUEDE SER MAYOR A 20 CARACTERES
    error.name = "Activities name can not be too long";
  } else if (/\d/.test(activity.name)) {
    //NO PUEDE CONTENER NUMEROS
    error.name = "Activities name can not contain numbers";
  } else error.name = "";

  //------------------

  if (!activity.duration) {
    //NO PUEDE NO CONTENER DURACION
    error.duration = "Please add an activity duration";
  } else if (activity.duration > 24) {
    error.duration = "Duration must have values between 1 and 24, inclusive";
  } else error.duration = "";

  //------------------

  if (!activity.difficulty) {
    //NO PUEDE NO CONTENER DIFICULTAD
    error.difficulty = "Please add an activity difficulty (Number)";
  } else if (typeof activity.difficulty !== "number") {
    //NO PUEDE SER DIFERENTE A UN NUMERO QUE ESTE ENTRE EL 1 Y EL 5, INCLUSIVE
    error.difficulty =
      "The duration of the activity can only be numbers between 1 and 5, inclusive";
  } else if (activity.difficulty < 1 && activity.difficulty > 5) {
    error.difficulty =
      "Difficulty must have values between 1 and 5, inclusive.";
  } else error.difficulty = "";

  //------------------

  if (!activity.country) {
    //NO PUEDE NO CONTENER A UN PAIS
    error.country = "Please asign countries to your activity";
  } else if (/\d/.test(activity.country)) {
    //NO PUEDE CONTENER NUMEROS
    error.country = "Countries can not contain numbers";
  } else if (activity.country.length < 1 && activity.country.length > 20) {
    //EL NOMBRE DEL PAIS TIENE QUE TENER ENTRE 1 Y 20 LETRAS
    error.country = "The country name must contain between 1 and 20 letters";
  } else error.country = "";

  //------------------

  if (!activity.season) {
    //NO PUEDE NO CONTENER UNA TEMPORADA
    error.season = "Please select season";
  } else if (/\d/.test(activity.season)) {
    //LA TEMPORADA NO PUEDE CONTENER NUMEROS
    error.season = "Seasons can not contain numbers";
  } else if (activity.season.length > 20) {
    //LA TEMPORADA NO PUEDE TENER MAS DE 20 CARACTERES
    error.season = "Activities season can not be too long";
    //LA TEMPORADA SI O SI TIENE QUE TENER ALGUNO DE LOS SIGUIENTES NOMBRES SINO NO EXISTE
  } else error.season = "";

  return error;
};

export default Validate;
