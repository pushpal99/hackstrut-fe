import React from "react";
import {country_list} from "../Home/constants";
import './index.scss';
import { Button, FormControl, FormGroup, Input, MenuItem, Select } from "@mui/material";
import Globe from '../../assets/Contact/globe.png'

const ContactUs = () => {
    
    return (
        <div className="contactUsWrapper">
            <h2>Connect with us for secure solutions. </h2>
            <div className="formSection">
                <div className="leftSection">
                    <FormControl fullWidth variant="outlined">
                        <FormGroup row >
                            <Input placeholder="First name" />
                            <Input placeholder="Last name" />
                        </FormGroup>
                        <Input fullWidth placeholder="Work email"/>
                        <Input fullWidth placeholder="Organisation Name"/>
                        <Input fullWidth placeholder="Phone number"/>
                        <FormControl fullWidth>
                            <Select
                                value={""}
                                variant="standard"
                                displayEmpty
                                classes={{root: 'selectInput'}}
                            >
                                <MenuItem value=""><em>Country</em></MenuItem>
                                {country_list.map(country => (<MenuItem value={country}>{country}</MenuItem>) )}
                            </Select>
                        </FormControl>
                        <Button>Submit</Button>
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