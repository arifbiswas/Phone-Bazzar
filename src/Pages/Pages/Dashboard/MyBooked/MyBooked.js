import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../../ContextApi/AuthProvider";
import PageLoading from "../../../Shared/PageLoading/PageLoading";

const MyBooked = () => {
  const { user, loading ,setLoading} = useContext(AuthContext);
  const [booked, setBooked] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/booked?email=${user?.email}`)
      .then((res) => {
        // console.log(res.data);
        setLoading(false)
        setBooked(res.data);
      })
      .catch((e) => console.log(e));
  }, [user?.email]);
  
    // console.log(booked);

  if (loading) {
    return <PageLoading></PageLoading>;
  }

  // console.log(booked);

  return (
    <div className="mx-5 ">
      <h1 className="text-3xl my-5 font-bold text-primary ">My Booked</h1>
      <div>
        <div className="w-full shadow-md sm:rounded-lg overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-500 ">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50  ">
              <tr>
                <th scope="col" className="py-3 px-6">
                  Picture
                </th>
                <th scope="col" className="py-3 px-6">
                  Product Name
                </th>
                <th scope="col" className="py-3 px-6">
                  Category
                </th>
                <th scope="col" className="py-3 px-6">
                  Price
                </th>
                <th scope="col" className="py-3 px-6">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {booked &&
                booked.map((book) => (
                  <tr key={book._id} className="bg-white border-b  ">
                    <th
                      scope="row"
                      className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap "
                    >
                      <div className="mask mask-square w-12 h-12">
                        <img
                          src={book?.picture}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </th>
                    <th
                      scope="row"
                      className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap "
                    >
                      {book?.productName}
                    </th>
                    <td className="py-4 px-6">{book?.productCategory}</td>
                    <td className="py-4 px-6">{book?.productPrice} .Tk</td>
                    <td className="py-4 px-6">
                      {
                        book?.status ? "Paid" :<Link to={`/dashboard/myBooked/${book?.productId}`} className="btn btn-sm btn-primary">
                        Pay
                      </Link>
                      }
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyBooked;
