import Navbar from './components/Navbar/Navbar';
import Hero from './components/hero/hero';
import HeartbeatApp from './components/HeartBeatApp/HeartBeatApp'; // Make sure to save the Heartbeat code in this path
import LabNetwork from './components/LabNetwork/LabNetwork';
import PatientJourney from './components/PatientJourney/PatientJourney';
import AboutUs from './components/AboutUs/AboutUs';
import ContactUs from './components/ContactUs/ContactUs';
import Footer from './components/Footer/Footer';
import Specialties from './components/Specialties/Specialties';
import FloatingNav from './components/FloatingNav/FloatingNav';
// import AmbulanceService from './components/AmbulanceService/AmbulanceService';
import VirtualBody from './components/VirtualBody/VirtualBody';
// import EliteSpecialists from './components/EliteSpecialists/EliteSpecialists';

function App() {
  return (
    // Added dark mode classes and smooth transition to the main wrapper
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-500">
      <Navbar />
      <FloatingNav />
      <main>
        <Hero />
        <Specialties />
        <VirtualBody />
        {/* <EliteSpecialists /> */}
        <HeartbeatApp />
        <LabNetwork />
        {/* <AmbulanceService /> */}
        <PatientJourney />
        <AboutUs />
        <ContactUs />
      </main>
        <Footer />
    </div>
  );
}

export default App;                                                                                                                                                                                                                                                                                                                                                                                                                                                         