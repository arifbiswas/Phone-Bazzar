import React from 'react';

const ConfirmationModal = ({about, tittle,handleAdd}) => {
    return (
        <div>
            {/* The button to open modal */}
{/* <label htmlFor="confirmation-modal" className="btn">open modal</label> */}

{/* Put this part before </body> tag */}
<input type="checkbox" id="confirmation-modal" className="modal-toggle" />
<div className="modal">
  <div className="modal-box">
    <h3 className="font-bold text-lg text-primary ">{tittle}</h3>
    <p className="py-4">{about}</p>
    <div className="modal-action justify-between">
      <label 
      
        htmlFor="confirmation-modal"
   className="btn btn-success text-white">
    Cancel
   </label>
      <button 
    onClick={()=>handleAdd(true)}
       className="btn btn-error">
        Yes
       </button>
    </div>
  </div>
</div>
        </div>
    );
};

export default ConfirmationModal;