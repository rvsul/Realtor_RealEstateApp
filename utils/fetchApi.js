import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      "X-RapidAPI-Key": "507486d8e3msh41d8a23ae44b802p12ab96jsnc789fe432d25",
      "X-RapidAPI-Host": "bayut.p.rapidapi.com",
    },
  }); 

  return data;
};
