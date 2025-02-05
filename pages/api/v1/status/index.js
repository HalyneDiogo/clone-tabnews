function status(request, response) {
  response.status(200).json({ status: "são acima da média" });
  //response.json({ status: "ok" });
}

export default status;
