import React from 'react'
import {
    Container,
    Center,
    Stack,
    Spacer,
    Text,
    Image,
    Box
} from "@chakra-ui/react";
import { WeatherIcons } from './Home';


/**
* @author Owolabi Oluwatosin Daniel (OOD)
* @function Weather
**/

//weather icons from open weather api site to make our weather image dynamic
export const WeatherInfoIcons = {
    sunset: "/icons/temp.svg",
    sunrise: "/icons/temp.svg",
    humidity: "/icons/humidity.svg",
    wind: "/icons/wind.svg",
    pressure: "/icons/pressure.svg",
};

//creating WeatherInfoComponent function for each of our weather info
const WeatherInfoComponent = (props) => {
    const { name, value } = props;
    return (
        <Container>
            <Stack direction="row" mr={8} mb={4}>
                <Image boxSize="50px"
                    object-position="fit"
                    src={WeatherInfoIcons[name]} alt={name}
                />
                <Box pt={4} pl={4}>
                    <Text>{value}</Text>
                </Box>
                <Box pt={4} pl={4}>
                    <Text>{name}</Text>
                </Box>
            </Stack>
        </Container>
    );
};

export const Weather = (props) => {
    const { weather } = props;
    /* creating a variable isDay & getTime to check if the current weather is day or night, 
    open weather api provide 'd' as day and 'n' as night which am using to check */
    const isDay = weather?.weather[0].icon?.includes('d');
    const getTime = (timeStamp) => {
        return `${new Date(timeStamp * 1000).getHours()} : ${new Date(timeStamp * 1000).getMinutes()}`
    }
    return (
        <Container>
            <Stack direction="row">
                {/*Here, i'm converting temperature to degree*/}
                <Text pt={8}>{`${Math.floor(weather?.main?.temp - 273)}°C`} {`  |  ${weather?.weather[0].description}`}</Text>
                <Spacer />
                <Image boxSize="80px"
                    objectFit="cover"
                    object-position="fit"
                    mt={24}
                    src={WeatherIcons[weather?.weather[0].icon]} alt="clouds"
                />
            </Stack>
            <Stack direction="column">
                <Center>
                    {/*Here, i'm chaining ternary operator to check if data exist*/}
                    <Text fontSize="lg" fontWeight="bold" py={4}>{`${weather?.name}, ${weather?.sys?.country}`}</Text>
                </Center>
            </Stack>
            <Text fontSize="16px" fontWeight="500" py={4}>Weather Info</Text>
            <Stack direction="row">
                <Stack direction="column">
                    {/*Here, i'm chaining ternary operator to check if data exist*/}
                    <WeatherInfoComponent name={isDay ? "sunset" : "sunrise"}
                        value={`${getTime(weather?.sys[isDay ? "sunset" : "sunrise"])}`} />
                </Stack>
                <Spacer />
                <Stack direction="column">
                    {/*Here, i'm chaining ternary operator to check if data exist*/}
                    <WeatherInfoComponent name={"humidity"} value={weather?.main?.humidity} />
                </Stack>
            </Stack>
            <Stack direction="row">
                <Stack direction="column">
                    {/*Here, i'm chaining ternary operator to check if data exist*/}
                    <WeatherInfoComponent name={"wind"} value={weather?.wind?.speed} />
                </Stack>
                <Spacer />
                <Stack direction="column">
                    {/*Here, i'm chaining ternary operator to check if data exist*/}
                    <WeatherInfoComponent name={"pressure"} value={weather?.main?.pressure} />
                </Stack>
            </Stack>
        </Container>
    );
};
