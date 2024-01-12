import axios from "axios";
import Endpoints from "../../Endpoints";

export const postContactDetails = payload => {
    const { userContact } = Endpoints;
    axios.post(userContact, payload).catch(err, console.log(err));
}

