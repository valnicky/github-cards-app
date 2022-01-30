import React from 'react';
import Card from '../components/Card';
import '../styles/CardList.css';

const  CardList = (props)  => (
 <div className="card_list">
      {props.profiles.map(profile =><Card key={profile.id} {...profile}/> )}
  </div>
);

export default CardList;
