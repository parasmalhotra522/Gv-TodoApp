
import React, {useState} from 'react';

const Alert = (props) => {
  console.log("checking props", props);
  const colorCode= props.colorCode;
  const [showAlert, setShowAlert] = useState( Boolean(props.showAlert));
 
  const handleClose = () => {
    setShowAlert(false);
  };
  setTimeout(() => {
    setShowAlert(false);
  }, 2000);

  return (
    showAlert &&
    <div className={`bg-${colorCode}-100 border-t-4 border-${colorCode}-500 rounded text-${colorCode}-900 px-2 py-1 shadow-md flex items-center justify-between`}>
      <div className="flex items-center">
        <div className="text-sm font-bold">
          {props.heading}
        </div>
        <div className="mx-1">
         {props.message}
        </div>
      </div>
        <button className={`text-${colorCode}-500 hover:text-${colorCode}-700`}
          onClick={handleClose}>
          <svg fill="none" stroke="currentColor"
            strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" className="w-4 h-4">
          <path d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>
    </div>
    );
};

export default Alert;
