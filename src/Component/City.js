import React from 'react';
import {
  FormControl,
  Input,
  Button,
  Container,
  Stack,
  Image,
  Center,
  Text
} from "@chakra-ui/react";
import clouds from "../clouds.png";

/**
* @author Owolabi Oluwatosin Daniel (OOD)
* @function City
**/

export const City = (props) => {
  //setting our state to update components
  const { updateCity, fetchWeather } = props;
  return (
    <>
      <Container mt={4}>
        <Stack direction="column" mb={8}>
          <Center>
            <Image boxSize="150px"
              objectFit="cover"
              object-position="fit"
              src={clouds} alt="clouds"
            />
          </Center>
        </Stack>
        <Center>
          <Text py={4}>Get Current Weather of Your City</Text>
        </Center>
        <FormControl>
          <Input
            onChange={(e) => updateCity(e.target.value)}
            placeholder="Enter city name..."
          />
          <Button w="100%" colorScheme="teal" variant="solid" mt={4} type={"submit"} onClick={fetchWeather}>Search</Button>
        </FormControl>
      </Container>
    </>
  )

};