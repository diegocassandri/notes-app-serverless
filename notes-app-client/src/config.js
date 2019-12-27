export default {
MAX_ATTACHMENT_SIZE: 5000000,
  s3: {
    REGION: "us-east-1",
    BUCKET: "note-app-teste"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://wmrvb5s3hk.execute-api.us-east-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_b5gUR8eQF",
    APP_CLIENT_ID: "54dtfojbvi2p6esa82v687fhi6",
    IDENTITY_POOL_ID: "us-east-1:f7f37d0c-9c3e-4914-89ed-aef649618d83"
  }
};