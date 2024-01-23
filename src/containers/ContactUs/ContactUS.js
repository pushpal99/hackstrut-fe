import React, { useEffect, useState } from "react";
import {country_list} from "../Home/constants";
import './index.scss';
import { Button, FormControl, FormGroup, Input, MenuItem, Select } from "@mui/material";
import Globe from '../../assets/Contact/globe.png'
import { postContactDetails } from "./api";

const ContactUs = () => {

    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        phone: '',
        country: '',
        org: ''
    });
    const [isDisabled, setDisabled] = useState(true);
    const [showError, setError] = useState(false);

    const {
        first_name,
        last_name,
        email,
        phone,
        country,
        org,
    } = formData || {};

    const handleChange = (e,type) => {
        setError(false)
        const obj = {
            ...formData,
            [type]: e.target.value,
        }
        setFormData(obj);
    }

    const handleSubmit = () => {
        if(first_name || last_name || email || phone || org || country) {
            console.log(formData)
            setDisabled(false);
            setError(false);
            postContactDetails(formData);
        } else {
            setError(true)
        }
    }

    useEffect(() => {
        if(first_name || last_name || email || phone || org || country) {
            setDisabled(false);
        }
    }, [formData])
    
    return (
        <div className="contactUsWrapper">
            <h2>Connect with us for secure solutions. </h2>
            <div className="formSection">
                <div className="leftSection">
                    <FormControl fullWidth variant="outlined">
                        <FormGroup row >
                            <Input placeholder="First name" value={first_name} onChange={(e) => handleChange(e, 'first_name')}/>
                            <Input placeholder="Last name" value={last_name}  onChange={(e) => handleChange(e, 'last_name')}/>
                        </FormGroup>
                        <Input fullWidth placeholder="Work email" value={email}  onChange={(e) => handleChange(e, 'email')}/>
                        <Input fullWidth placeholder="Organisation Name" value={org}  onChange={(e) => handleChange(e, 'org')}/>
                        <Input fullWidth placeholder="Phone number" value={phone}  onChange={(e) => handleChange(e, 'phone')}/>
                        <FormControl fullWidth>
                            <Select
                                value={country}
                                variant="standard"
                                displayEmpty
                                classes={{root: 'selectInput'}}
                                onChange={(e) => handleChange(e, 'country')}
                            >
                                <MenuItem value=""><em>Country</em></MenuItem>
                                {country_list.map(country => (<MenuItem value={country}>{country}</MenuItem>) )}
                            </Select>
                        </FormControl>
                        <Button onClick={handleSubmit} disabled={isDisabled} style={{ opacity: isDisabled ? 1 : 1}}>Submit</Button>
                        {showError && <div style={{}}>All fields are mandatory</div>}
                    </FormControl>
                </div>
                <div className="rightSection">
                    <div className="imgContainer">
                        <img src={Globe} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactUs;