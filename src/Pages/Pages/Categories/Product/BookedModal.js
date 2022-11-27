import React from "react";

const BookedModal = ({user,product,register , handleSubmit,handleBuyProducts}) => {
  return (
    <div>
     

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="booked-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booked-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">
            Booked New One
          </h3>
          <form 
          onSubmit={handleSubmit(handleBuyProducts)}
          >
            <fieldset disabled>
          <input  type="text" {...register("buyerName")}  defaultValue={user?.displayName}  className="input input-bordered w-full my-2 " /> </fieldset>
          <fieldset disabled>
          <input  type="email" {...register("buyerEmail")}  defaultValue={user?.email}  className="input input-bordered w-full my-2" /> </fieldset>
          <fieldset disabled> 
          <input type="text" {...register("productName")}   defaultValue={product?.productName}  className="input input-bordered w-full my-2" /> </fieldset>
          <fieldset disabled>
          <input type="text" {...register("productPrice")}  defaultValue={product?.productPrice}  className="input input-bordered w-full my-2" /> </fieldset>
          <input type="tel" {...register("buyerNumber")}  placeholder="mobile number" className="input input-bordered w-full my-2" />
          <input type="text" {...register("location")}  placeholder="meeting location" className="input input-bordered w-full my-2" />
         
          <button type="submit" className="btn btn-primary  w-full my-2">Booked</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookedModal;
