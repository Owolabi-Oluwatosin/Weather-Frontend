import React, { useEffect, useState } from "react";
import {
    Container,
    Heading,
    useToast
} from "@chakra-ui/react";
import axios from "axios";
import { City } from "./City";
import { Weather } from "./Weather";
import axiosIntance from "../helpers/axios";

/**
* @author Owolabi Oluwatosin Daniel (OOD)
* @function Home
**/

//weather icons from open weather api site to make our weather image dynamic
export const WeatherIcons = {
    "01d": "/icons/sunny.svg",
    "01n": "/icons/night.svg",
    "02d": "/icons/day.svg",
    "02n": "/icons/cloudy-night.svg",
    "03d": "/icons/cloudy.svg",
    "03n": "/icons/cloudy.svg",
    "04d": "/icons/perfect-day.svg",
    "04n": "/icons/cloudy-night.svg",
    "09d": "/icons/rain.svg",
    "09n": "/icons/rain-night.svg",
    "10d": "/icons/rain.svg",
    "10n": "/icons/rain-night.svg",
    "11d": "/icons/storm.svg",
    "11n": "/icons/storm.svg",
};

export const Home = (props) => {
    //setting our state to update components
    const [city, updateCity] = useState();
    const [weather, updateWeather] = useState();

    //initialize toast
    const toast = useToast();

    //weather api from open weather api site
    let WEATHER_API_KEY = `5944549712c42c0627f396c12c89b121`;
    //requesting current weather data from open weather api site
    const fetchWeather = async (e) => {
        e.preventDefault();
        const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${WEATHER_API_KEY}`
        );
        updateWeather(response.data);
    };

    
    
    const createHistory = async (props) =>{
        const temp =weather?.main?.temp;
        const humidity = weather?.main?.humidity;
        const pressure = weather?.main?.pressure;
        const res = await axiosIntance.post(`/create-history`, {
            temp,
            humidity,
            pressure
        });

        if (res.status === 200) {
            toast({
                title: `Weather save to our database`,
                status: "success",
                duration: "5000",
                isClosable: true
            });
        } else {
            if (res.status === 422) {
                toast({
                    title: `Something went wrong we couldn't weather details to database`,
                    status: "error",
                    duration: "5000",
                    isClosable: true
                });
            }
        }
    }

    useEffect(()=>{
        createHistory();
    },[weather]);

    return (
        <>
            <Container>
                <Heading textAlign="center" mt={8} mb={4}>Current Weather</Heading>
                {
                    //checking if city && waether exist, only then do we want to show weather component else we want to show city component
                    city && weather ?
                        <Weather weather={weather} city={city} />
                        :
                        <City updateCity={updateCity} fetchWeather={fetchWeather} />

                }
            </Container>
        </>
    )

}