// the first way
// const { USER_NAME, PASSWORD } = process.env;

// the second way
const USER_NAME = process.env.USER_NAME;
const PASSWORD = process.env.PASSWORD;

export const connectionStr = `mongodb+srv://${USER_NAME}:${PASSWORD}@cluster0.dwabpti.mongodb.net/productDB?retryWrites=true&w=majority`;
