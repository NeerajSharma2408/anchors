import React from 'react'
import classes from './LandingPage.module.scss'
import { useNavigate } from 'react-router-dom'

const LandingPage = ({ setData }) => {
    
    const Navigate = useNavigate();

    const submitHandler = async (e) => {

        e.preventDefault();

        const url = e.target.url.value;

        const formData = JSON.stringify({
            url: url
        });

        try {
            const response = await fetch("http://localhost:3001", {
                method: 'POST',
                mode: 'cors',
                headers: {
                    "Content-Type": "application/json",
                },
                body: [formData]
            })

            if (response.ok) {
                const data = await response.json()
                console.log(data);
                setData(data);
                Navigate('/user')
            } else {
                console.log('SOMETHING WENT WRONG WHILE SENDING URL');
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div id={classes.landingContainer}>
            <h1>Get the service by using Profile link</h1>
            <form onSubmit={submitHandler}>
                <input type="url" name="url" id="url" placeholder='Enter topmate profile link' />
                <button type='submit'><b>Generate Page</b></button>
            </form>
        </div>
    )
}

export default LandingPage