import axios from "axios";

export default async function handler(req, res) {
  const { q } = req.query;

  try {
    const response = await axios.get(
      `https://gnews.io/api/v4/search?q=${q}&token=f91f5c21674349bc8a1c2479cbd9b3ae`
    );

    res.setHeader("Access-Control-Allow-Origin", "*");
    res.status(200).json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Unable to fetch news" });
  }
}
