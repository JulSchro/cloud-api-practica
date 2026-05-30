const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static("public"));

// Coordenadas simples de algunas ciudades
const ciudades = {
  "tampico": {
    nombre: "Tampico, Tamaulipas",
    lat: 22.2331,
    lon: -97.8611
  },
  "madero": {
    nombre: "Ciudad Madero, Tamaulipas",
    lat: 22.2475,
    lon: -97.8369
  },
  "monterrey": {
    nombre: "Monterrey, Nuevo León",
    lat: 25.6866,
    lon: -100.3161
  },
  "cdmx": {
    nombre: "Ciudad de México",
    lat: 19.4326,
    lon: -99.1332
  },
  "guadalajara": {
    nombre: "Guadalajara, Jalisco",
    lat: 20.6597,
    lon: -103.3496
  }
};

app.post("/api/clima", async (req, res) => {
  try {
    const { ciudad } = req.body;

    if (!ciudad || ciudad.trim() === "") {
      return res.status(400).json({
        error: "Debes escribir una ciudad."
      });
    }

    const ciudadBuscada = ciudad.toLowerCase().trim();
    const datosCiudad = ciudades[ciudadBuscada];

    if (!datosCiudad) {
      return res.status(404).json({
        error: "Ciudad no disponible. Prueba con Tampico, Madero, Monterrey, CDMX o Guadalajara."
      });
    }

    const url = `https://api.open-meteo.com/v1/forecast?latitude=${datosCiudad.lat}&longitude=${datosCiudad.lon}&current_weather=true`;

    const respuestaApi = await fetch(url);
    const datos = await respuestaApi.json();

    if (!datos.current_weather) {
      return res.status(500).json({
        error: "No se pudo obtener el clima actual."
      });
    }

    res.json({
      mensaje: "Datos obtenidos correctamente desde una API real en la nube.",
      ciudad: datosCiudad.nombre,
      temperatura: datos.current_weather.temperature,
      viento: datos.current_weather.windspeed,
      direccionViento: datos.current_weather.winddirection,
      codigoClima: datos.current_weather.weathercode,
      hora: datos.current_weather.time
    });

  } catch (error) {
    console.error("Error al consultar la API de clima:", error);

    res.status(500).json({
      error: "Error al conectar con la API externa."
    });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});