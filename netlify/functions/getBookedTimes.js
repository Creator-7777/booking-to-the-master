exports.handler = async (event) => {

  const date =
    event.queryStringParameters.date;

  const response =
    await fetch(
      "https://script.google.com/macros/s/AKfycbzLO-J9EFM29aN1aBNYs87CLb9O-vxUxFx7TtblDzZs4eulHXOfPtgFjgYzq34gLaL3/exec" +
      "?action=getBookedTimes" +
      "&date=" +
      encodeURIComponent(date)
    );

  const data =
    await response.text();

  return {
    statusCode: 200,
    headers: {
      "Content-Type":
        "application/json"
    },
    body: data
  };
};
