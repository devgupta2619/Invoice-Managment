import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import API from '../api';
import '../styles/InvoiceDetails.css';

const InvoiceDetails = () => {
    const { id } = useParams();
    const [invoice, setInvoice] = useState(null);

    useEffect(() => {
        API.get(`invoices/${id}/`)
            .then((response) => {
                setInvoice(response.data);
            })
            .catch((error) => {
                console.error('Error fetching invoice details:', error);
            });
    }, [id]);

    if (!invoice) return <p>Loading...</p>;

    return (
        <div className="invoice-details-container">
            <h1>Invoice Details</h1>
            <div className="invoice-info">
                <p><strong>Invoice Number:</strong> {invoice.invoice_number}</p>
                <p><strong>Customer Name:</strong> {invoice.customer_name}</p>
                <p><strong>Date:</strong> {invoice.date}</p>
                <p><strong>Total Amount:</strong> {invoice.total_amount}</p>
            </div>
            <h3>Items:</h3>
            <ul className="invoice-items">
                {invoice.details.map((detail) => (
                    <li key={detail.id}>
                        {detail.description} - {detail.quantity} x {detail.unit_price} = {detail.line_total}
                    </li>
                ))}
            </ul>
            <Link to="/" className="back-link">Back to Invoices</Link>
        </div>
    );
};

export default InvoiceDetails;
