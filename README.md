Disclaimer: This is an experiment for [Gemini Code Assist](https://codeassist.google/). All code is generated solely by Gemini Code Assist with model `gemini-2.5-pro`. This will be the only time that I made change and commit.


# Serverless Boilerplate for AWS Lambda with Multiple HTTP Endpoints

This is a boilerplate project for creating a serverless application with multiple HTTP endpoints using Node.js, Express.js, and the Serverless Framework.

## Getting Started

### Prerequisites

- Node.js (v18.x or later)
- npm
- AWS CLI configured with your credentials

### Installation

1. Clone this repository or download the code.
2. Install the dependencies:

   ```bash
   npm install
   ```

### Local Development

To run the application locally, use the `serverless-offline` plugin:

```bash
serverless offline
```

The application will be available at `http://localhost:3000`.

### Deployment

To deploy the application to AWS, use the `serverless deploy` command:

```bash
serverless deploy
```

This will create the necessary AWS resources (API Gateway, Lambda functions, etc.) and deploy the application.

## Endpoints

The following endpoints are available:

- `GET /`: Returns a "Hello World!" message.
- `GET /users`: Returns a list of users.
- `GET /users/:id`: Returns a single user by ID.
- `POST /users`: Creates a new user.
