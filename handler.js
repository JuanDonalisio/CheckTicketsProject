const getPageInformation =  require('./helpers/InfoPage'); 

exports.hello = async (event) => {
  const pageInformation = await getPageInformation();
  console.log(pageInformation);
  if (pageInformation.includes("No hay vuelos disponibles")) {
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
