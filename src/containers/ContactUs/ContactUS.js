import React from "react";
import { SITE_TEXT } from "../Home/constants";
import './index.scss';
import { Button, FormControl, FormGroup, Input, MenuItem, Select } from "@mui/material";
import Globe from '../../assets/Contact/globe.png'

const ContactUs = () => {
    // const {  
    //     SUPERCHARGE_HEAD_TXT, 
    //     SUPERCHARGE_SUB_HEAD,
    //     ABOUT_PAGE_CARD_1,
    //     ABOUT_PAGE_CARD_2,
    //     ABOUT_HEAD_1,
    //     ABOUT_SUB_INFO_1,
    //     ABOUT_HEAD_2,
    //     ABOUT_SUB_INFO_2,
    //     ABOUT_HEAD_3,
    //     ABOUT_PAGE_LIST,
    //     ABOUT_SUB_INFO_3,
    //     PHOTO_TAG,
    // } = SITE_TEXT
    return (
        <div className="contactUsWrapper">
            <h2>Connect with us for secure solutions</h2>
            <div className="formSection">
                <div className="leftSection">
                    <FormControl fullWidth variant="outlined">
                        <FormGroup row >
                            <Input placeholder="First name" />
                            <Input placeholder="Last name" />
                        </FormGroup>
                        <Input fullWidth placeholder="Work email"/>
                        <Input fullWidth/>
                        <Input fullWidth placeholder="Phone number"/>
                        <FormControl fullWidth>
                            <Select
                                value={""}
                                variant="standard"
                                displayEmpty
                                classes={{root: 'selectInput'}}
                            >
                                <MenuItem value=""><em>Country</em></MenuItem>
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
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