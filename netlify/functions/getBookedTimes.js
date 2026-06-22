exports.handler = async (event) => {

  const date =
    event.queryStringParameters.date;

  const response =
    await fetch(
      "https://script.google.com/macros/s/AKfycbyaOuK1fcjL4GVswhQlCy1hjcwfER79t3AubMrlFENs9IAXeRZc505AUgmUoVC8vLnk/exec" +
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
