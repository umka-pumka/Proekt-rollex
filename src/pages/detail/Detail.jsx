import React from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import cardImage from '../../shared/assets/card.png';
import "./detail.css"
const Detail = () => {
  const { id } = useParams();
  const [card, setCard] = useState(null);

  const fetchCardDetail = async () => {
    try {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
      setCard(response.data);
    } catch (error) {
      console.error("Error fetching card details:", error);
    }
  };

  useEffect(() => {
    fetchCardDetail();
  }, [id]);


  return (
    <div className="detail-container">
      <img src={cardImage} alt={card.title}  />
      <div>   
        <h2>{card.title}</h2>

        <p>{card.body}</p>
      </div>
    </div>
  );
};

export default Detail;
