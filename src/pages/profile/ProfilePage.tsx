import { useContext, useEffect, useState } from "react";
import {AuthContext} from "../../contexts/AuthContext";
import { getUserDetails } from "../../services/UserServices";
import { UserReadDto } from "../../types/User.types";

export const ProfilePage = () => {
  
  var a : UserReadDto= {
    id: '',
    first_Name:'',
    last_Name:'',
    contactNo:'',
    nic:'',
    profile_Pic_Url:'',
    address:['','']
  }
  
  const { user } = useContext(AuthContext);
  const [userProfileData, setuserProfileData] = useState<UserReadDto>(a)

  
  useEffect(() => {
    getUserDetails(user.ID).then((res)=>setuserProfileData(res.data));
  },[])
  
  
  
  
  return (

    <div className='min-h-screen mx-20'>
      <h1 className='text-5xl text-center pt-10 '>Edit Profile Infomation</h1>
      <div className="hidden sm:block" aria-hidden="true">
        <div className="py-5">
          <div className="border-t border-gray-200" />
        </div>
      </div>

      <div className="mt-10 sm:mt-0">
        <div className="md:grid md:grid-cols-3 md:gap-6">

          <div className="mt-5 md:mt-0 md:col-span-3">
            <form action="#" method="POST">
              <div className="shadow overflow-hidden sm:rounded-md">
                <div className="px-4 py-5 bg-white sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                        First name
                      </label>
                      <input
                        defaultValue= {userProfileData.first_Name}
                        type="text"
                        name="first-name"
                        id="first-name"
                        autoComplete="given-name"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                        Last name
                      </label>
                      <input
                      defaultValue= {userProfileData.last_Name}
                        type="text"
                        name="last-name"
                        id="last-name"
                        autoComplete="family-name"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    {/* <div className="col-span-6 sm:col-span-4">
                      <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                        Email address
                      </label>
                      <input
                        type="text"
                        name="email-address"
                        id="email-address"
                        autoComplete="email"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div> */}

                    <div className="col-span-6 sm:col-span-2">
                      <label htmlFor="Contact No" className="block text-sm font-medium text-gray-700">
                        Contact No
                      </label>
                      <input
                      defaultValue= {userProfileData.contactNo}
                        type="text"
                        name="Contact No"
                        id="Contact No"
                        autoComplete=""
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-2">
                      <label htmlFor="Contact No" className="block text-sm font-medium text-gray-700">
                        NIC
                      </label>
                      <input
                      defaultValue= {userProfileData.nic}
                        title="NICNo"
                        type="text"
                        name="NIC"
                        id="NICNO"
                        autoComplete=""
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>





                    <div className="col-span-6">
                      <label htmlFor="street-address" className="block text-sm font-medium text-gray-700">
                        Street address 01
                      </label>
                      <input
                      defaultValue= {userProfileData.address[0]}
                        type="text"
                        name="street-address"
                        id="street-address"
                        autoComplete="street-address"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>



                    <div className="col-span-6">
                      <label htmlFor="street-address" className="block text-sm font-medium text-gray-700">
                        Street address 02
                      </label>
                      <input
                      defaultValue= {userProfileData.address[1]}
                        type="text"
                        name="street-address"
                        id="street-address"
                        autoComplete="street-address"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>



                  </div>
                </div>
                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <button
                    type="submit"
                    className="inline-flex justify-center py-2 px-6 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Save
                  </button>

                  <button
                    type="reset"
                    className="inline-flex justify-center py-2 px-6 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Cancel
                  </button>
                </div>


              </div>
            </form>
          </div>
        </div>
      </div>

    </div>);
};
