import React from 'react';

const ConfirmationModal = ({about, tittle,setChange}) => {
  const handleAdd =(confirm)=>{
    // console.log(confirm);
    setChange(confirm)
  }
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
        onClick={()=>handleAdd(false)}
        htmlFor="confirmation-modal"
   className="btn btn-success text-white">
    Cancel
   </label>
      <label 
    onClick={()=>handleAdd(true)}
    htmlFor="confirmation-modal"
       className="btn btn-error">
        Yes
       </label>
    </div>
  </div>
</div>
        </div>
    );
};

export default ConfirmationModal;