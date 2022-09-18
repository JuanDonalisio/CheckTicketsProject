const getPageInformation =  require('./helpers/InfoPage'); 

exports.checkTickets = async (event) => {
  const pageInformation = await getPageInformation();
  if (pageInformation.includes("No hay vuelos disponibles")) {
    console.log("Aun no hay vuelos");
    return {
      statusCode: 200,
      body: JSON.stringify(
        {
          message: "Aun no hay vuelos",
        },
      ),
    };
  }
  else{
    console.log("Puede que haya algun vuelo");
    return {
      statusCode: 200,
      body: JSON.stringify(
        {
          message: "Puede que haya algun vuelo",
        },
      ),
    };
  }
};
