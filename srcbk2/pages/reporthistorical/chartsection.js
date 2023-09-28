
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import React from 'react';
ChartJS.register(ArcElement, Tooltip, Legend);

// import Pagination from "react-pagination-library";
// import "react-pagination-library/build/css/index.css"; 
const Chartsection = (props) => {
  console.log(props.dataRaw);
    
  const data = {
    labels: props.dataRaw.arrayLable,
    datasets: [
      {
        label: '# of Votes',
        data: props.dataRaw.arrayPercent,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };
  
    
    

    
    return (
      <Pie  data={data}   />
    );
};

export default Chartsection;