import MyComponent from './components/NewComponent/NewComponent';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BookingForm from './components/Booking/BookingForm';
import HomePage from './components/HomePage/HomePage';

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/running" element={<MyComponent status="Running" />} />
        <Route path="/ended" element={<MyComponent status="Ended" />} />
        <Route path="/booking/:id" element={<BookingForm />} />
      </Routes>

    </BrowserRouter>
    </>
  );
}

export default App;
