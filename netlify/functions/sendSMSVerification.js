exports.handler = async (event) => {

  const body = JSON.parse(event.body);

  const response = await fetch(
    "https://script.google.com/macros/s/AKfycbzLO-J9EFM29aN1aBNYs87CLb9O-vxUxFx7TtblDzZs4eulHXOfPtgFjgYzq34gLaL3/exec",
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
