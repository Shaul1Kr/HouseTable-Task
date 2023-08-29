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

   - Install PostgreSQL and create a database.
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
   npm install # Only run this command once
   npm run dev
   ```

7. **Access the Application:**

   Open your web browser and visit: `http://localhost:3000`

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

## Contributing

Contributions are welcome! If you'd like to enhance the HomeRisk Calculator, follow these steps:

1. Fork the repository.
2. Create a new branch for your feature: `git checkout -b feature-name`.
3. Commit your changes: `git commit -m "Add feature"`.
4. Push the branch: `git push origin feature-name`.
5. Create a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
