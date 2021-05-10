import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID dyvixC_7_fmXa69iHbuqI7Ts7D33OejumuAZiLYuKBQ",
  },
});
