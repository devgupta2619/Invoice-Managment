import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import API from '../api';
import '../styles/InvoiceForm.css';

const InvoiceForm = () => {
    const { id } = useParams(); // Get invoice ID from URL (for edit mode)
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        invoice_number: '',
        customer_name: '',
        date: '',
        details: [{ description: '', quantity: '', unit_price: '' }],
    });

    useEffect(() => {
        if (id) {
            API.get(`invoices/${id}/`)
                .then((response) => {
                    setFormData(response.data);
                })
                .catch((error) => {
                    console.error('Error fetching invoice:', error);
                });
        }
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleDetailsChange = (index, e) => {
        const { name, value } = e.target;
        const updatedDetails = [...formData.details];
        updatedDetails[index][name] = value;
        setFormData((prev) => ({ ...prev, details: updatedDetails }));
    };

    const addDetail = () => {
        setFormData((prev) => ({
            ...prev,
            details: [...prev.details, { description: '', quantity: '', unit_price: '' }],
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const apiCall = id
            ? API.put(`invoices/${id}/`, formData)
            : API.post('invoices/', formData);

        apiCall
            .then(() => {
                navigate('/');
            })
            .catch((error) => {
                console.error('Error saving invoice:', error);
            });
    };

    return (
        <form onSubmit={handleSubmit}>
            <h1>{id ? 'Edit Invoice' : 'Create Invoice'}</h1>
            <input
                type="text"
                name="invoice_number"
                placeholder="Invoice Number"
                value={formData.invoice_number}
                onChange={handleChange}
                required
            />
            <input
                type="text"
                name="customer_name"
                placeholder="Customer Name"
                value={formData.customer_name}
                onChange={handleChange}
                required
            />
            <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
            />

            <h3>Invoice Details</h3>
            {formData.details.map((detail, index) => (
                <div key={index}>
                    <input
                        type="text"
                        name="description"
                        placeholder="Description"
                        value={detail.description}
                        onChange={(e) => handleDetailsChange(index, e)}
                        required
                    />
                    <input
                        type="number"
                        name="quantity"
                        placeholder="Quantity"
                        value={detail.quantity}
                        onChange={(e) => handleDetailsChange(index, e)}
                        required
                    />
                    <input
                        type="number"
                        name="unit_price"
                        placeholder="Unit Price"
                        value={detail.unit_price}
                        onChange={(e) => handleDetailsChange(index, e)}
                        required
                    />
                </div>
            ))}
            <button type="button" onClick={addDetail}>
                Add Item
            </button>
            <button type="submit">{id ? 'Update' : 'Create'}</button>
        </form>
    );
};

export default InvoiceForm;
