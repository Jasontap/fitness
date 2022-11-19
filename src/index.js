import React, { useState } from "react";
import ReactDOM from "react-dom/client";



const App = () => {
  const [activities, setActivities] = useState([]);
  
  
  const getActivities = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/activities", {
        headers: {
          "Content-Type": "application/json",
        },
      });
      const results = await response.json();
      setActivities(results);
    } catch (ex) {
      console.log("error getting activites");
    }
  };
  
  
  
  return (
    <div>
      <button onClick={() => getActivities()}>getActivities</button>
      {activities.length ? activities.map((activity) => <h1>{activity.id}</h1>) : null}
    </div>
  );
};



const container = document.querySelector("#container");
const root = ReactDOM.createRoot(container);
root.render(<App />);
