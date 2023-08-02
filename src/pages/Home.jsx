import { useState } from "react";
import AppoinmentList from "../components/AppointmentList";
import Service from "../components/Service";
import { appointmentData } from "../helper/data";
const Home = () => {
  const [appointments, setAppointments] = useState(appointmentData);
  // console.log(appointments);
  return (
    <main className="text-center mt-2">
      <h1 className="display-5" style={{ color: "#DFD7BF" }}>
        SPA CENTER
      </h1>
      <Service />
      <AppoinmentList apps={appointments} />
    </main>
  );
};
export default Home;
