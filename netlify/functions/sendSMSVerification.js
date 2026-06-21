exports.handler = async (event) => {

  const body = JSON.parse(event.body);

  const response = await fetch(
    "https://script.google.com/macros/s/AKfycbyaOuK1fcjL4GVswhQlCy1hjcwfER79t3AubMrlFENs9IAXeRZc505AUgmUoVC8vLnk/exec",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        action: "sendSMSVerification",
        phone: body.phone,
        code: body.code
      })
    }
  );

  const data = await response.text();

  return {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json"
    },
    body: data
  };
};
