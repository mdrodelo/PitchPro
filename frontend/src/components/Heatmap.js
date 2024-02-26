import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import testheatmao from '../images/temp.png'

const client = axios.create({
  baseURL: "http://127.0.0.1:8000"
});

const Heatmap = () => {
    const [imageSrc, setImageSrc] = useState('');
    const [testData, setTestData] = useState('');

    useEffect(() => {
        client.get('/api/heatmap')
            .then(res => {
                console.log(res)
                setTestData(res.data['heatmap']);
            });
    }, []);

  return (
      <div>
          <div>Heatmap Screen Content</div>
          <div>{testData}</div>
          <img src={testData} alt="byteio test" />
          <img src={testheatmao} alt="test heatmap"/>

      </div>
  );
};

export default Heatmap;