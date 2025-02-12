# SubDub

SubDub is a comprehensive subscription management system designed to streamline the process of managing subscription-based services. Built using Node.js, Express.js, and MongoDB, this application allows users to efficiently create, manage, and cancel subscriptions with ease. The system also offers insightful features such as viewing upcoming renewals and handling subscription cancellations.

## Features

- **User Authentication and Authorization**: Securely manage user access with robust authentication and authorization mechanisms.
- **Subscription Management**: Effortlessly create, update, and delete subscriptions. Customize subscriptions based on various parameters such as frequency and category.
- **Upcoming Renewals View**: Stay informed with a dedicated view for upcoming subscription renewals.
- **Subscription Cancellation**: Easily cancel subscriptions when needed.
- **Email Notifications**: Supports sending email notifications using Nodemailer to keep users updated on their subscriptions.

## Security and Protection

- **ArcJet Integration**: Leverages ArcJet for advanced security measures, including bot protection and rate limiting. This integration helps safeguard the application from malicious traffic and ensures secure access.

## Technology Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB Atlas, utilizing Mongoose for ORM
- **Security**: ArcJet, JWT for authentication
- **Caching**: Upstash Workflow
- **Email**: NodeMailer

## Installation and Running the Application

### Prerequisites

- Node.js and npm installed on your system.
- A MongoDB Atlas account for database hosting.
- An Upstash Redis account for caching and workflow automation.

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/KITTU223/subscription-tracker.git
   cd subscription-tracker
   ```
2. Install dependencies:
   ```sh
   npm install
   ```

### Running the Application

To start the server, run:

```sh
npm start
```

By default, the application will run on port `3000` unless otherwise specified.

## Configuration

The application uses environment variables for critical configuration settings. Create a `.env` file in the root directory and add the following:

```env
PORT=3000
NODE_ENV=development
DB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
ARCJET_KEY=your_arcjet_key
```

---

