import React from "react";
import NavBar from "../../components/NavBar";
import Logo from "../../assets/Cheval Logo.png";

const ViewInvoice = () => {
  return (
    <>
      <NavBar title="Invoice & Payments" pagetitle="View" />
      <div className="flex justify-end mx-2 gap-4 my-4">
        <button className="text-sidebar border border-sidebar px-8 py-2 rounded-sm">
          Print
        </button>
        <button className="bg-sidebar px-6 py-2 rounded-sm">Download</button>
      </div>
      <div className="flex justify-center items-center">
        <div className="w-[700px] grid grid-cols-12 justify-center items-center   gap-6 bg-white p-8 border rounded-lg shadow-md font-roboto-flex ">
          <div className="col-span-8  ">
            <div className="mb-4">
              <h1 className="text-3xl font-bold text-yellow-800 pb-6">
                INVOICE
              </h1>
              <div className="">
                <h2 className="text-lg font-bold mb-2">DETAILS</h2>
                <div className="space-y-1">
                  <p>
                    Date: <span className="font-semibold">08-09-2025</span>
                  </p>
                  <p>
                    Invoice Number:{" "}
                    <span className="font-semibold">#10235</span>
                  </p>
                  <p>
                    Issue Date:{" "}
                    <span className="font-semibold">09-09-2025</span>
                  </p>
                  <p>
                    Valid Till:{" "}
                    <span className="font-semibold">09-10-2025</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <table className="text-center">
                <thead>
                  <tr className="  text-yellow-800 ">
                    <th className="px-4 py-0.5 font-semibold text-nowrap border-2 border-gray-400">
                      Travel Place
                    </th>
                    <th className="px-4  font-semibold border-2 border-gray-400">
                      Persons
                    </th>
                    <th className="px-4  font-semibold  border-2 border-gray-400">
                      Dates
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-2 border-gray-400 font-semibold ">
                    <td className="px-4  border-r-2 border-gray-400">London</td>
                    <td className="px-4  border-r-2 border-gray-400">3</td>
                    <td className="px-4  border-r-2 border-gray-400">
                      12/02/2020 - 15/02/2020
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mb-6 ">
              <table className="w-full">
                <thead>
                  <tr className="bg-yellow-800 text-white">
                    <th className="px-4 py-1 font-semibold">DESCRIPTION</th>
                    <th className="px-4 py-1 font-semibold">BILL NO.</th>
                    <th className="px-4 py-1 font-semibold">TOTAL AMOUNT</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Air Fare", "1234", "$2,500.00"],
                    ["Taxi", "2515", "$180.00"],
                    ["Lodging", "2541", "$2,000.00"],
                    ["Breakfast", "584", "$500.00"],
                    ["Taxi", "654", "$200.00"],
                    ["Lunch", "9547", "$680.00"],
                    ["Dinner", "5142", "$520.00"],
                  ].map(([desc, bill, amount], index) => (
                    <tr
                      key={index}
                      className={`text-center font-bold ${
                        index % 2 === 1 ? "bg-gray-100" : ""
                      }`}
                    >
                      <td className="py-1 text-start px-4">{desc}</td>
                      <td className="">{bill}</td>
                      <td className="">{amount}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <div className="mt-6 grid  justify-end items-center">
                <div className="flex justify-between  bg-gray-100  px-6 py-1">
                  <p className="w-36 font-bold">SUBTOTAL</p>{" "}
                  <span className="font-semibold ">$6,580.00</span>
                </div>
                <div className="px-6 py-1 flex justify-between">
                  <p className="font-bold">TAX @ 5%</p>{" "}
                  <span className="font-semibold ">$329.00</span>
                </div>
                <div className="flex justify-between bg-yellow-800 text-white px-6 py-1 ">
                  <p className="font-bold">TOTAL</p>{" "}
                  <span className="font-semibold">$6,909.00</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-4 bg-gray-100 space-y-4 px-1 py-2 rounded w-full text-end">
            <h2 className="font-extrabold text-gray-700 my-2 ">
              TRAVEL REIMBURSEMENT
            </h2>
            <div className="mb-4 space-y-1.5">
              <p className="font-semibold">TO</p>
              <p>[Client Name]</p>
              <p>[Complete Address]</p>
              <p>[Contact Number]</p>
              <p>[Email ID]</p>
            </div>
            <div className="space-y-1.5">
              <p className="font-semibold">FROM</p>
              <p>[Client Name]</p>
              <p>[Complete Address]</p>
              <p>[Contact Number]</p>
              <p>[Email ID]</p>
            </div>

            <div className="mb-6 bg-gray-100  rounded">
              <h2 className="font-bold mb-2">TERMS</h2>
              <p className="text-sm text-start">
                Payment must be made within the 20 Days from the date of
                preparation. If not, an amount of $50 will be charged per month
                from due date.
              </p>
            </div>

            <div className="bg-gray-100 space-y-1.5 rounded">
              <h2 className="font-bold mb-2">PAYMENT DETAILS</h2>
              <p>[Name]</p>
              <p>[Account Number]</p>
              <p>[Bank Name]</p>
              <p>[Location]</p>
            </div>
          </div>
          <p className="col-span-12 text-center font-semibold">
            THANKS FOR YOUR APPROACH!
          </p>
          <div className="col-span-11 text-end">
            <p className="">
              Registered By
            </p>
            <div className="flex justify-end">
            <img src={Logo} alt="Logo Image"className="w-26 h-10 " />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewInvoice;
