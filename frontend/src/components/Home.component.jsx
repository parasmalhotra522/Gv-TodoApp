import React from 'react'
import './styles.scss';
import { Link } from 'react-router-dom';


export default function Home() {
  const features = [
    // {
    //   feature: 'Create a Note',
    //   path: 'createNote'
    // },
    {
      feature: 'Show All notes',
      path: 'notes'
    }
    ,
    
    
      
  ];
  
  
    const FeatureCard = ({ feature }) => {
      return (
        <div className="bg-white p-6 rounded-lg shadow-lg mb-4 feature-box-style transition-transform transform hover:scale-105">
          <h3 className="text-xl font-semibold mb-2 text-gray-800 "
          >
            {feature.title}</h3>
          {/* <p className="text-gray-600">{feature.description}</p> */}
          <Link to={feature.path} 
            className="text-blue-500 font-bold hover: block mt-4 transition-transform transform hover-scale 105"    
          >
            {feature.feature}
          </Link>
        </div>
      );
    };
  
    



   
  return (
    <div className="container mx-auto p-8  m-6 bg-white rounded-md shadow-md">
      <h2 className="text-3xl font-bold mb-4">Features</h2>
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <FeatureCard key={index} feature={feature} />
        ))}
      </div>


    </div>
  );



}
