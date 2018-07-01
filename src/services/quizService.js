import apiFactory from "../api";

// Developers can override this with an env.local file const baseUrl =
// process.env.REACT_APP_API_BASEURL; const baseUrlAPI =
// process.env.REACT_APP_API_GATEWAY_BASEURL; const api =
// apiFactory(baseUrlAPI);
const api = apiFactory("https://opentdb.com/api.php")

export const getQuestionDetails = () => api.get(`?amount=10&category=18&difficulty=medium&type=boolean`);