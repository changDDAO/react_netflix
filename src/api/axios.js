import axios from "axios";

const instance = axios.create({
    baseURL : "https://api.themoviedb.org/3",
    params : {
        api_key : "bf31d3d1c8630a6fc75fbc13358ad5bd",
        language : "ko-KR",
    },
});

export default instance;
