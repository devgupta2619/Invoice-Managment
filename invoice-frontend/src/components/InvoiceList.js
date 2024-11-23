import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import API from '../api';
import '../styles/InvoiceList.css';  // Import the CSS file for styling

const InvoiceList = () => {
    const [invoices, setInvoices] = useState([]);

    useEffect(() => {
        API.get('invoices/')
            .then((response) => {
                setInvoices(response.data);
            })
            .catch((error) => {
                console.error('Error fetching invoices:', error);
            });
    }, []);

    const handleDelete = (id) => {
        if (window.confirm('Are you sure you want to delete this invoice?')) {
            API.delete(`invoices/${id}/`)
                .then(() => {
                    setInvoices(invoices.filter((invoice) => invoice.id !== id));
                })
                .catch((error) => {
                    console.error('Error deleting invoice:', error);
                });
        }
    };

    return (
        <div className="invoice-list-container">
            <h1>Invoices</h1>
            <Link to="/create" className="btn">
                Create New Invoice
            </Link>
            <div className="table-container">
                <table>
                    <thead>
                        <tr>
                            <th>Invoice Number</th>
                            <th>Customer Name</th>
                            <th>Date</th>
                            <th>Total Amount</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {invoices.map((invoice) => (
                            <tr key={invoice.id}>
                                <td>{invoice.invoice_number}</td>
                                <td>{invoice.customer_name}</td>
                                <td>{invoice.date}</td>
                                <td>{invoice.total_amount}</td>
                                <td>
                                    <Link to={`/view/${invoice.id}`} className="btn-action">View</Link> |{' '}
                                    <Link to={`/edit/${invoice.id}`} className="btn-action">Edit</Link> |{' '}
                                    <button onClick={() => handleDelete(invoice.id)} className="btn-delete">
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default InvoiceList;
