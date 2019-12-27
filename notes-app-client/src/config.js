const dev = {
MAX_ATTACHMENT_SIZE: 5000000,
STRIPE_KEY: "pk_test_lwWQCcxMhMukMtRNMUr7fNnG00yjJ2zb6A",
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-2-api-dev-attachmentsbucket-rw2c4rb7g42"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://navl7y08q0.execute-api.us-east-1.amazonaws.com/dev"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_qRTKxEw3r",
    APP_CLIENT_ID: "33c5lkbntbcf7uc2a30lqhi82",
    IDENTITY_POOL_ID: "us-east-1:6b77deaf-5a64-443d-8cdc-f81e81ccdbe7"
  }
};

const prod = {
MAX_ATTACHMENT_SIZE: 5000000,
STRIPE_KEY: "pk_test_lwWQCcxMhMukMtRNMUr7fNnG00yjJ2zb6A",
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-2-api-prod-attachmentsbucket-1rcqrzorc72be"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://wmrvb5s3hk.execute-api.us-east-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_gGvh3jepV",
    APP_CLIENT_ID: "3o3h5v2dbm40jdf9qvu5rko3mu",
    IDENTITY_POOL_ID: "us-east-1:def749da-18b6-44c0-accd-898a71868767"
  }
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
  ? prod
  : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};