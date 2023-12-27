const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;

  try {
    const r = await axios.put(
      "https://api.chatengine.io/users/",
      { username: username, secret: username, first_name: username },
      { headers: { "private-key": "4e3ecd4a-c366-4906-ad15-8897a5c3fb67" } }
    );
    return res.status(r.status).json(r.data);
  } catch (e) {
    return res.status(e.response.status).json(e.response.data);
  }

  //ChatEngine.io API Keys
  // Project ID:
  // 73a4e02d-0530-42ae-86f4-96aad57d679e

  return res.json({ username: username, secret: "sha256..." });
});

app.listen(3001);
