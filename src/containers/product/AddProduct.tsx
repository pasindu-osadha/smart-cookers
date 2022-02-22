import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { storage } from '../../firebase';
import { addProduct } from '../../services/ProductService';
import { ProductCreateDto } from '../../types/Product.types';

var fileType = new File([''], '', {
  type: 'image'
});


export const AddProduct = () => {


  const navigate = useNavigate();
  //state management 
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState(0);
  const [qty, setQty] = useState(0);
  const [image, setImage] = useState<File>(fileType);
  const [progress, setProgress] = useState(0);
  const [url, setUrl] = useState('');

  const handleSubmit = (e: any, status: any) => {
    e.preventDefault();
    // var data = {
    //   'name': name,
    //   'description': description,
    //   'price': price,
    //   'qty': qty,
    //   'url': ""
    // };
    var data: ProductCreateDto = {
      product_Name: name,
      product_Description: description,
      product_UnitPrice: price,
      product_Quantity: qty,
      product_Picture_Url: url
    }




    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        setProgress(progress);
      },
      (error) => {
        console.log(error);
      },
      () => {
        storage
          .ref('images')
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            data.product_Picture_Url = url;
            addProduct(data);
            navigate('/product-page');
          });
      }
    );
  };


  const handleImageUpload = () => {


  };

  const handleImageFieldChange = async (e: any) => {

    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  return (
    <>

      <div className="w-screen  h-screen  pl-96 ">
        <div className="md:grid md:grid-cols-3 md:gap-6  m-auto pt-14 ">

          <div className="mt-5 md:mt-0 md:col-span-2">
            <form action="#" method="POST">
              <div className="shadow overflow-hidden sm:rounded-md">
                <div className="px-4 py-5 bg-white sm:p-6">
                  <div className="grid grid-cols-6 gap-6">

                    <label className='text-4xl col-span-6 text-center'>Add Product</label>


                    <div className="col-span-6 sm:col-span-6">
                      <label htmlFor="product-name" className="block text-sm font-medium text-gray-700">
                        Product Name
                      </label>
                      <input
                        type="text"
                        name="product-name"
                        id="product-name"
                        autoComplete="given-name"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        onChange={(e) => {
                          setName(e.target.value);
                        }}
                      />
                    </div>



                    <div className="col-span-6 sm:col-span-6">
                      <label htmlFor="product-description" className="block text-sm font-medium text-gray-700">
                        Description
                      </label>
                      <input
                        type="text"
                        name="product-description"
                        id="product-description"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        onChange={(e) => {
                          setDescription(e.target.value);
                        }}
                      />
                    </div>



                    <div className="col-span-6">
                      <label htmlFor="product-price" className="block text-sm font-medium text-gray-700">
                        Product Price
                      </label>
                      <input
                        type="number"
                        name="product-price"
                        id="product-price"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        onChange={(e) => {
                          setPrice(e.target.valueAsNumber);
                        }}
                      />
                    </div>

                    <div className="col-span-6">
                      <label htmlFor="product-qty" className="block text-sm font-medium text-gray-700">
                        Product Quantity
                      </label>
                      <input
                        type="number"
                        name="product-qty"
                        id="product-qty"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        onChange={(e) => {
                          setQty(e.target.valueAsNumber);
                        }}
                      />
                    </div>



                    <div className="col-span-6" >
                      <label className="block text-sm font-medium text-gray-700">Upload photos</label>
                      <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                        <div className="space-y-1 text-center">
                          <svg
                            className="mx-auto h-12 w-12 text-gray-400"
                            stroke="currentColor"
                            fill="none"
                            viewBox="0 0 48 48"
                            aria-hidden="true"
                          >
                            <path
                              d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          <div className="flex text-sm text-gray-600 ">
                            <label
                              htmlFor="file-upload"
                              className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                            >
                              <span  >Upload a file</span>
                              <input id="file-upload" onChange={handleImageFieldChange} name="file-upload" type="file" className="sr-only" />
                            </label>

                          </div>
                          <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>

                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <button
                    type="submit"
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    onClick={(e) => {
                      handleSubmit(e, 'post');
                    }}

                  >
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

    </>
  )
};
