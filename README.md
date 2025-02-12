
## Project Overview

SubDub is a comprehensive subscription management system designed to streamline the process of managing subscription-based services. Built using Node.js, Express.js, and MongoDB, this application allows users to efficiently create, manage, and cancel subscriptions with ease. The system also offers insightful features such as viewing upcoming renewals and handling subscription cancellations.

### Features

- **User Authentication and Authorization**: Securely manage user access with robust authentication and authorization mechanisms.
- **Subscription Management**: Effortlessly create, update, and delete subscriptions. Customize subscriptions based on various parameters such as frequency and category.
- **Payment Method Support**: Integrate multiple payment methods to provide flexibility to users.
- **Upcoming Renewals View**: Stay informed with a dedicated view for upcoming subscription renewals.
- **Subscription Cancellation**: Easily cancel subscriptions when needed.
- **Email Notifications**: The application now supports sending email notifications using Nodemailer. This feature allows users to receive updates and alerts directly in their inbox.

### Security and Protection

- **ArcJet Integration**: The application leverages ArcJet for advanced security measures, including bot protection and rate limiting. This integration helps safeguard the application from malicious traffic and ensures secure access.

### Technology Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB Atlas, utilizing Mongoose for ORM
- **Security**: ArcJet, JWT for authentication

### Installation and Running the Application

1. **Installation**: Clone the repository and run `npm install` to install all necessary dependencies.
2. **Running**: Use the command `npm start` to run the application. It will start on the configured port, which defaults to 3000.

### Configuration

The application uses environment variables for critical configuration settings. These include:

- `PORT`: Defines the port on which the application will run.
- `NODE_ENV`: Specifies the environment mode (e.g., development, production).
- `DB_URI`: The MongoDB connection string.
- `JWT_SECRET`: Secret key for signing JSON Web Tokens.
- `ARCJET_KEY`: Key for integrating ArcJet services.
- `SMTP_SERVER`: SMTP server address for sending emails.
- `SMTP_PORT`: Port number for the SMTP server.
- `EMAIL_USER`: Email address used as the sender.
- `EMAIL_PASS`: Password for the sender email account.
