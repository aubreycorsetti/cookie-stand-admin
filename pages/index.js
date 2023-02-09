import Header from '../components/Header';
import Footer from '../components/Footer';
import CreateForm from '../components/CreateForm';
import BigHead from '../components/Head';
import ReportTable from '../components/ReportTable';
import { useState } from 'react';

export default function Home() {

  const [newLocations, setNewLocations] = useState([]);

  function locationUpdateHandler(event) {
    event.preventDefault();

    const newLocation = {
      hourly_sales: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
      location: event.target.location.value,
      minCustomers: event.target.min.value,
      maxCustomers: event.target.max.value,
      avgCustomers: event.target.avg.value,

    };

    setNewLocations([...newLocations, newLocation]);
  }

  return (
    <>
      <div
        className="bg-scroll bg-no-repeat bg-cover"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1612198790700-0ff08cb726e5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDF8fGNvb2tpZSUyMHN0YWNrfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60')`,
          height: "1000px",
        }}
      >

        <BigHead />

        <Header />

        <main>

          <CreateForm locationUpdateHandler={locationUpdateHandler}/>

          <ReportTable setNewLocations={setNewLocations} newLocations={newLocations}/>


        </main>

        <Footer />
      </div>
    </>
  )
}
