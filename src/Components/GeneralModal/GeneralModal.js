import React from 'react';

const GeneralModal = ({title,imageFiled,location,name,email,register,handleSubmit,handleAdd,numberField,radioField1,radioField2,radioField3,mobileNumber,selection,description}) => {
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
              name && <label > {name?.label}
          <input type="text"  {...register(name?.register)} placeholder={name?.placeholder} className="input input-bordered input-primary w-full my-2" />
          </label>
            }
             {
            imageFiled && 
          <label htmlFor="brand-logo">{imageFiled?.label}
          <input type="file" id="brand-logo" {...register(imageFiled?.register)} accept="image/*" className="file-input file-input-bordered file-input-primary w-full my-2" />
          </label>
          }
            
            {
              numberField && <label > {numberField?.label}
          <input type="number"  {...register(numberField?.register)} placeholder={numberField?.placeholder} className="input input-bordered input-primary w-full my-2" />
          </label>
            }
            {
              radioField1 &&  <> <div class="flex gap-2  my-4">
              <div>
              <label for="radio-1" class="ml-2 text-lg font-medium text-gray-900 ">
                  <input {...register(radioField1.register)} id="radio-1" defaultChecked type="radio" value={radioField1?.value} class="w-4 h-4bg-gray-100 border-gray-300  " />
                  {radioField1?.label}</label>
              </div>
                  
                {
                  radioField2 && <>
                   <div>
                 <label for="radio-2" class="ml-2 text-lg font-medium text-gray-900 ">
                  <input {...register(radioField2.register)} id="radio-2" type="radio" 
                  value={radioField2?.value} class="w-4 h-4bg-gray-100 border-gray-300 " />
                  {radioField2?.label}</label>
                 </div>
                  </>
                }
                 {
                  radioField3 && <>
                   <div>
                  <label for="radio-3" class="ml-2 text-lg font-medium text-gray-900 ">
                  <input {...register(radioField3.register)} id="radio-3" type="radio" 
                  value={radioField3?.value} class="w-4 h-4bg-gray-100 border-gray-300 " />
                  {radioField3?.label}</label>
                  </div>
                  </>
                 }
              </div>
             </>
            }
            {
              mobileNumber && <label > {mobileNumber?.label}
          <input type="tel"  {...register(mobileNumber?.register)} placeholder={mobileNumber?.placeholder} className="input input-bordered input-primary w-full my-2" />
          </label>
            }
           
            {
              email && <label htmlFor={email?.register} > {email?.label}
          <input type="text" id={email?.register} {...register(email?.register)} placeholder={name?.placeholder} className="input input-bordered input-primary w-full my-2" />
          </label>
            }
            {
              location && <label > {location?.label}
          <input type="text"   {...register(location?.register)} placeholder={location?.placeholder} className="input input-bordered input-primary w-full my-2" />
          </label>
            }
            {
              selection && <select {...register(selection?.register)} className="select select-primary select-bordered w-full my-2">
              
              {
                selection.categories.map(option => <option value={option?.categoryName} key={option._id}>{option?.categoryName}</option>)
              }
            
            </select> 
            }
             {
              description && <label > {description?.label}
          <textarea  type="text"  {...register(description?.register)} placeholder={description?.placeholder} className="input h-40 input-bordered input-primary w-full p-3 my-2" />
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