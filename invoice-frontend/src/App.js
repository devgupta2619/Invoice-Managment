import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import InvoiceList from './components/InvoiceList';
import InvoiceForm from './components/InvoiceForm';
import InvoiceDetails from './components/InvoiceDetails';
import '../src/styles/App.css';




function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<InvoiceList />} />
                <Route path="/create" element={<InvoiceForm />} />
                <Route path="/edit/:id" element={<InvoiceForm />} />
                <Route path="/view/:id" element={<InvoiceDetails />} />
            </Routes>
        </Router>
    );
}

export default App;
