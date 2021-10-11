import React, { useState, useEffect } from 'react';
import {
  Container
} from '@chakra-ui/react';
import { Line } from 'react-chartjs-2';
import axiosIntance from "../helpers/axios";

/**
* @author Owolabi Oluwatosin Daniel (OOD)
* @function History
**/

export const History = (props) => {
  //setting our state to update our chart
  const [history, setUpdateHistory] = useState([]);

  const chart = async () => {
    
    let temp = [];
    let humidity = [];
    let pressure = [];
    //getting history from our server
    const response = await axiosIntance.get(`/get-all-history`);
    if (response.status === 200) {
      const res = response.data.data;
      //looping through the data
      for(const dataArr of res){
        temp.push(parseInt(dataArr.temp))
        humidity.push(parseInt(dataArr.humidity))
        pressure.push(parseInt(dataArr.pressure))
      }
      
      //setting label to days of the week using their initial letter
      const labels = "M, T, W, T, F, S, S";

      //updating our history cahrt
      setUpdateHistory({
        labels,
        datasets: [{
          label: 'Temperature',
          fill: false,
          data: temp,
          borderColor: [
            '#54D8FF'
          ],
          borderWidth: 2
        },
        {
          label: 'Humidity',
          fill: false,
          data: humidity,
          borderColor: [
            '#FF54E3'
          ],
          borderWidth: 2
        },
        {
          label: 'Pressure',
          fill: false,
          data: pressure,
          borderColor: [
            '#34AA11'
          ],
          borderWidth: 2
        }]
      })
    }
  }
  
  //calling useEffect to render our chart
  useEffect(() => {
    chart()
  }, []);

  return (
    <Container pt={8}>
      <Line
            data={history}
            options={{
              responsive: true,
              scales: {
                yAxes: [{
                  ticks: {
                    beginAtZero: true
                  }
                }]
              },
              legend: {
                display: true,
                position: "bottom"
              }
            }}
            height={140}
          />
      {/* {
        checking history exist or not
        !history || !history.length ?
          <VStack >
            <Badge colorScheme="green" p="4" m="4" borderRadius="lg">
              <Text>History not available at the moment...</Text>
            </Badge>
          </VStack>
          :
          <Line
            data={history}
            options={{
              responsive: true,
              scales: {
                yAxes: [{
                  ticks: {
                    beginAtZero: true
                  }
                }]
              },
              legend: {
                display: true,
                position: "bottom"
              }
            }}
            height={140}
          />
      } */}

    </Container>
  )

}