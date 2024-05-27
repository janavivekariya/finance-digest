# Finance Digest

Finance Digest is an investment portfolio management app that helps users track their investments, analyze the impact of recent financial news, and make informed financial decisions.

## Features

- **Investment Tracking**: Keep track of various investments including stocks, bonds, crypto, and more.
- **Portfolio Analysis**: Analyze the performance of your investment portfolio over time.
- **News Impact Analysis**: Get insights into how recent financial news affects your investments.
- **User-Friendly Interface**: Easy-to-use interface for managing and tracking your investments.

## Technologies Used

- **Frontend**: React, CSS
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Tokens)
- **Deployment**: Docker, AWS

## Getting Started

Follow these instructions to set up and run the project on your local machine for development and testing purposes.

### Prerequisites

- Node.js
- MongoDB
- Docker (optional, for deployment)
- AWS account (optional, for deployment)

### Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/yourusername/finance-digest.git
    cd finance-digest
    ```

2. **Install backend dependencies:**

    ```bash
    cd backend
    npm install
    ```

3. **Install frontend dependencies:**

    ```bash
    cd ../frontend
    npm install
    ```

### Running the Application

1. **Start MongoDB:**

    Make sure MongoDB is running on your local machine or use a cloud MongoDB service.

2. **Run the backend server:**

    ```bash
    cd backend
    npm start
    ```

    The backend server should now be running on `http://localhost:5000`.

3. **Run the frontend server:**

    Open a new terminal window and navigate to the `frontend` directory:

    ```bash
    cd frontend
    npm start
    ```

    The frontend server should now be running on `http://localhost:3000`.

### Deployment

To deploy the app using Docker and AWS, follow these steps:

1. **Build Docker images:**

    ```bash
    docker-compose build
    ```

2. **Run Docker containers:**

    ```bash
    docker-compose up
    ```

3. **Deploy to AWS:**

    Use the AWS CLI or AWS Console to deploy the Docker images to an AWS service like ECS or EKS.

## Contributing

We welcome contributions to the Finance Digest project! To contribute, follow these steps:

1. **Fork the repository.**
2. **Create a new branch:**

    ```bash
    git checkout -b feature/your-feature-name
    ```

3. **Make your changes and commit them:**

    ```bash
    git commit -m 'Add some feature'
    ```

4. **Push to the branch:**

    ```bash
    git push origin feature/your-feature-name
    ```

5. **Open a pull request.**

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

- Thanks to all the contributors who have helped in the development of this project.
- Special thanks to the creators of the technologies and tools used in this project.
