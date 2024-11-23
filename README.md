
# Invoice Management System
![Python](https://img.shields.io/badge/Python-3.9-blue.svg)
![Django](https://img.shields.io/badge/Django-3.2-blue.svg)
![React](https://img.shields.io/badge/React-17.0-green.svg)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-13-blue.svg)
![Django REST Framework](https://img.shields.io/badge/DRF-3.12-orange.svg)

This is a full-stack Invoice Management System built with **Django** (backend) and **React** (frontend). The project allows users to manage invoices, add items to invoices, and perform CRUD operations on them. The backend is powered by Django REST Framework (DRF) and PostgreSQL, while the frontend is built using React and Axios to handle API requests.

## Features
- 📝 **Create, Read, Update, and Delete (CRUD) Invoices**
- 🔍 **View Invoice Details**: Shows detailed information about each invoice and the items associated with it.
- 📱 **Responsive**: The application is fully responsive, optimized for both desktop and mobile devices.
- 🔗 **Cross-Origin Resource Sharing (CORS)**: The backend and frontend are connected with CORS headers for seamless communication.

## Tech Stack
- 💻 **Backend**:
  - Django
  - Django REST Framework
  - PostgreSQL
  - django-cors-headers (for CORS support)
  
- 🌐 **Frontend**:
  - React
  - Axios (for API requests)
  - React Router (for routing)
  - CSS (Custom styles for design)

## File Structure
``` bash
Invoice_Management/
├── .gitignore
├── env/
├── backend/
│   ├── api/
│   │   ├── migrations/
│   │   ├── __init__.py
│   │   ├── admin.py
│   │   ├── apps.py
│   │   ├── models.py
│   │   ├── serializers.py
│   │   ├── views.py
│   │   ├── urls.py
│   │   ├── tests.py
│   ├── manage.py
│   ├── backend/
│   │   ├── __init__.py
│   │   ├── settings.py
│   │   ├── urls.py
│   │   ├── wsgi.py
├── invoice-frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── InvoiceForm.js
│   │   │   ├── InvoiceList.js
│   │   │   ├── InvoiceDetails.js
│   │   ├── api.js
│   │   ├── App.js
│   │   ├── index.js
│   │   ├── styles/
│   │   │   ├── App.css
│   │   │   ├── InvoiceList.css
│   │   │   ├── InvoiceForm.css
│   │   │   ├── InvoiceDetails.css
│   ├── package.json
│   ├── README.md
└── .git/
```

## Getting Started
To run the project locally, follow these steps:

### Prerequisites
- 🔹 [Python 3.x](https://www.python.org/downloads/)
- 🔹 [Node.js](https://nodejs.org/en/)
- 🔹 [PostgreSQL](https://www.postgresql.org/)

### Backend Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/invoice-management.git
   cd invoice-management/backend
   ```

2. Create and activate a virtual environment:

   - On Windows:
     ```bash
     python -m venv venv
     .\venv\Scripts\activate
     ```
   - On macOS/Linux:
     ```bash
     python3 -m venv venv
     source venv/bin/activate
     ```

3. Install the required Python packages:
   ```bash
   pip install -r requirements.txt
   ```

4. Configure the database:

   - In `settings.py`, update the PostgreSQL configuration with your database credentials:
     ```python
     DATABASES = {
         'default': {
             'ENGINE': 'django.db.backends.postgresql',
             'NAME': 'your_database_name',
             'USER': 'your_database_user',
             'PASSWORD': 'your_database_password',
             'HOST': 'localhost',
             'PORT': '5432',
         }
     }
     ```

5. Run migrations to set up the database:
   ```bash
   python manage.py migrate
   ```

6. Create a superuser to access the Django admin:
   ```bash
   python manage.py createsuperuser
   ```

7. Start the Django development server:
   ```bash
   python manage.py runserver
   ```

   Your backend will be running at `http://127.0.0.1:8000/`.

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd ../invoice-frontend
   ```

2. Install the required Node.js packages:
   ```bash
   npm install
   ```

3. Start the React development server:
   ```bash
   npm start
   ```

   Your frontend will be running at `http://localhost:3000/`.

### Connecting Frontend and Backend

- Make sure the frontend is making requests to the correct backend API URL.
- In `src/api.js`, update the base URL for the API:
  ```javascript
  const API = axios.create({
      baseURL: 'http://127.0.0.1:8000/api/',  // Ensure this matches your backend URL
  });
  ```

### Testing the API with Postman

1. **Create Invoice**:
   - Method: `POST`
   - URL: `http://127.0.0.1:8000/api/invoices/`
   - Body (JSON):
     ```json
     {
         "invoice_number": "INV001",
         "customer_name": "John Doe",
         "date": "2024-11-23",
         "details": [
             {
                 "description": "Product A",
                 "quantity": 2,
                 "unit_price": 50.00
             },
             {
                 "description": "Product B",
                 "quantity": 1,
                 "unit_price": 75.00
             }
         ]
     }
     ```

2. **Get All Invoices**:
   - Method: `GET`
   - URL: `http://127.0.0.1:8000/api/invoices/`

3. **Get Single Invoice**:
   - Method: `GET`
   - URL: `http://127.0.0.1:8000/api/invoices/{id}/`

4. **Update Invoice**:
   - Method: `PUT`
   - URL: `http://127.0.0.1:8000/api/invoices/{id}/`
   - Body (JSON):
     ```json
     {
         "invoice_number": "INV002",
         "customer_name": "Jane Smith",
         "date": "2024-11-25",
         "details": [
             {
                 "description": "Product A",
                 "quantity": 3,
                 "unit_price": 60.00
             },
             {
                 "description": "Product B",
                 "quantity": 2,
                 "unit_price": 80.00
             }
         ]
     }
     ```

5. **Delete Invoice**:
   - Method: `DELETE`
   - URL: `http://127.0.0.1:8000/api/invoices/{id}/`

---

## Acknowledgements

- 💻 **Django** for the backend framework.
- ⚙️ **Django REST Framework** for creating the API.
- 🌐 **React** for the frontend framework.
- 🗄️ **PostgreSQL** for the database.



