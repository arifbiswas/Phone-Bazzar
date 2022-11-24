import React from 'react';

const GeneralModal = ({title,imageFiled,address,name,email,register,handleSubmit,handleAdd}) => {
    return (
        <div>
      {/* Put this part before </body> tag */}
      <input type="checkbox" id="add-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="add-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold text-center text-primary mb-5">
            {title}
          </h3>
          <form onSubmit={handleSubmit(handleAdd)}>
            {
              name && <label htmlFor='name'> {name?.label}
          <input type="text" id='name' {...register(name?.register)} placeholder={name?.placeholder} className="input input-bordered input-primary w-full my-2" />
          </label>
            }
            {
              email && <label htmlFor='name'> {email?.label}
          <input type="text" id='name' {...register(email?.register)} placeholder={name?.placeholder} className="input input-bordered input-primary w-full my-2" />
          </label>
            }
            {
              address && <label htmlFor='name'> {address?.label}
          <input type="text" id='name'  {...register(address?.register)} placeholder={address?.placeholder} className="input input-bordered input-primary w-full my-2" />
          </label>
            }
          {
            imageFiled && 
          <label htmlFor="brand-logo">{imageFiled?.label}
          <input type="file" id="brand-logo" {...register(imageFiled?.register)} accept="image/*" className="file-input file-input-bordered file-input-primary w-full my-2" />
          </label>
          }
          <button
          type="submit" className="btn btn-primary w-full text-white my-2">Add New One</button>
          </form>
        </div>
      </div>
    </div>
    );
};

export default GeneralModal;