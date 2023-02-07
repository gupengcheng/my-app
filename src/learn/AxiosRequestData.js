import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button } from 'antd';
import 'antd/dist/reset.css';

const ExampleComponent = () => {
  const [data, setData] = useState("China");

  console.log('This is a log message in example');
  
  axios.get('http://192.168.158.209:5000/')
  .then(function (response) {
    console.log(response.data);
    setData(response.data);
  })
  .catch(function (error) {
    console.log(error);
  });

    // axios.get('http://192.168.158.209:5000/')
    //   .then(res => {
    //     console.log("this is resonse = " + res);
    //     setData(res)
    // })
    //   .catch(err => console.error(err));


  return (
    <div>
    {/* <ul>
      {data.map(item => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul> */}
    <p>{data}</p>
    <Button type="primary">Button</Button>
    </div>
  );
};

export default ExampleComponent;
