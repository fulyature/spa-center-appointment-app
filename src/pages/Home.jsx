import AppoinmentList from "../components/AppointmentList";
import Service from "../components/Service";

const Home = () => {
  return (
    <main className="text-center mt-2">
      <h1 className="display-5 text-danger">SPA CENTER</h1>
      <Service />
      <AppoinmentList />
    </main>
  );
};
export default Home;
