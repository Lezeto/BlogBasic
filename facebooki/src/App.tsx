import React from 'react';
import axios from 'axios';
import './App.css';

type WeatherData = {
 name: string;
 weather: Array<{ description: string }>;
 main: { temp: number };
};

function App() {
 const [weatherData, setWeatherData] = React.useState<WeatherData | null>(null);

 React.useEffect(() => {
   const fetchData = async () => {
     try {
       const response = await axios.get('https://api.openweathermap.org/data/2.5/weather?q=London&appid={003b6ed39af75dc802cf93b3e5220885}');
       setWeatherData(response.data);
     } catch (error) {
       console.error("Error fetching weather data", error);
     }
   };

   fetchData();
 }, []);

 return (
   <div className="app">
     <header className="header">
       <input type="text" placeholder="Search..." className="searchbar"/>
       <nav className="navbar">
         <ul>
           <li><a href="#">Home</a></li>
           <li><a href="#">Gallery</a></li>
           <li><a href="#">Market</a></li>
         </ul>
       </nav>
       <h1 className="title">LEZET</h1>
     </header>
     <main className="content">
       <section className="leftSidebar">
         <ul>
           <li><a href="#">Friends</a></li>
           <li><a href="#">Groups</a></li>
           <li><a href="#">Memories</a></li>
           <li><a href="#">Saved</a></li>
           <li><a href="#">See more</a></li>
           <li><a href="#">Shortcuts</a></li>
           <li><a href="#">Marketplace</a></li>
           <li><a href="#">Messenger</a></li>
         </ul>
       </section>
       <article className="post">
         <h2>Amazing Study</h2>
         <p>Un estudio llevado a cabo por el Canisius College de Buffalo, en Estados Unidos, ha generado revuelo al descubrir que aproximadamente el 55% de las mujeres adultas encuestadas eligen compartir su cama con sus perros, mientras que el 31% prefiere la compañía felina de sus gatos. Lo más sorprendente es que el 57% de las participantes afirmó que dormir con sus perros es incluso más placentero que hacerlo con sus parejas. ¿La razón principal? Los perritos son menos "disruptivos" durante la noche, permanecen tranquilos y no causan molestias en la cama.</p>
       </article>
       <section className="rightSidebar">
         <h2>Contacts</h2>
         <ul>
           <li><a href="#">Alejandra</a></li>
           <li><a href="#">Victoria</a></li>
           <li><a href="#">Camila</a></li>
           <li><a href="#">Natalia</a></li>
           <li><a href="#">Mia</a></li>
           <li><a href="#">Jynx</a></li>
           <li><a href="#">Lana</a></li>
           <li><a href="#">Melissa</a></li>
         </ul>
       </section>
     </main>
   </div>
 );
}

export default App;

