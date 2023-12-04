export const fetchPrecipitation = async (url) => {
  try {
    const response = await fetch(url);
    const datos = await response.json();
    return datos.precipitacion;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};
