# HomeRisk Calculator

Welcome to the HomeRisk Calculator project! This web application allows users to assess the risk associated with purchasing a home based on provided property details. Users can input the property address, price, and loan amount to generate a personalized risk assessment. The project also features a 'House List' to store and compare risk assessments for future informed decisions.

## Features

- Input property details (address, price, and loan amount) to generate a risk assessment.
- Securely store personalized risk assessments in the 'House List' for future comparisons.
- Empower users with insights for their home-buying decisions.

## Setup and Usage

Follow these instructions to set up and run the HomeRisk Calculator application locally:

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/Shaul1Kr/HouseTable-Task.git
   cd homerisk-calculator
   ```

2. **Server Setup:**

   ```bash
   cd server
   npm install
   ```

3. **Client Setup:**

   ```bash
   cd client
   npm install
   ```

4. **Database Setup:**

   - In the `server` directory, copy the `.env.example` file to `.env` and set your database credentials:

     ```
     DB_USERNAME=your_db_username
     DB_PASSWORD=your_db_password
     DB_NAME=your_db_name
     DB_HOST=your_db_host
     ```

5. **Environment Variables:**

   Create a `.env` file in the `server` directory with the following variables:

   ```
   PORT=3000
   ```

6. **Start the Application:**

   In one terminal, start the server:

   ```bash
   cd server
   npm start
   ```

   In another terminal, start the client:

   ```bash
   cd client
   npm run dev
   ```

7. **Access the Application:**

   Open your web browser and visit: `http://localhost:5173`

8. **Usage:**

   - Input property details on the home page.
   - View risk assessment and save it to the 'House List'.
   - Access 'House List' for future comparisons.

## Technologies Used

- Vite (Client)
- React
- Node.js, Express.js (Server)
- Sequelize ORM
- PostgreSQL
- HTML, CSS, JavaScript

## Screen Shots![1](https://github.com/Shaul1Kr/HouseTable-Task/assets/57437693/36e75af0-cee0-4dcf-ba36-bd9161e46cf8)
![2](https://github.com/Shaul1Kr/HouseTable-Task/assets/57437693/fd03790b-3d02-4cd8-bfd6-685383646a96)
![3](https://github.com/Shaul1Kr/HouseTable-Task/assets/57437693/fe32c093-dc92-41ab-b7a0-886a37328758)
![4](https://github.com/Shaul1Kr/HouseTable-Task/assets/57437693/2aaeebad-a290-4b1e-b75c-c18160c206e9)
![5](https://github.com/Shaul1Kr/HouseTable-Task/assets/57437693/42159d84-456f-45e5-bb81-6b6173ff564f)
![6](https://github.com/Shaul1Kr/HouseTable-Task/assets/57437693/3fa086ca-456e-413d-b65e-225f9086e93c)


