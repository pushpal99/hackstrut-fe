import axios from "axios";
import Endpoints from "../../Endpoints";

export const postContactDetails = payload => {
    const { userContact, apiBasePath } = Endpoints;
    console.log(`${apiBasePath}${userContact}`);
    axios
    .post(`${apiBasePath}${userContact}`, payload)
    // .catch((err) => console.log(err));
}

