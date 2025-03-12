import React from "react";

const ViewInvoice = () => {
  return (
    <>
      <div className="w-[700px] grid grid-cols-12 justify-center items-center  gap-4 bg-white p-8 border rounded-lg shadow-md font-roboto-flex">
        <div className="col-span-8 ">
          <div className="  pb-6 mb-6">
            <h1 className="text-3xl font-bold text-yellow-800">INVOICE</h1>
            <div className="mt-6">
              <h2 className="text-lg font-bold mb-4">DETAILS</h2>
              <div className="space-y-1">
                <p>
                  Date: <span className="font-semibold">08-09-2025</span>
                </p>
                <p>
                  Invoice Number: <span className="font-semibold">#10235</span>
                </p>
                <p>
                  Issue Date: <span className="font-semibold">09-09-2025</span>
                </p>
                <p>
                  Valid Till: <span className="font-semibold">09-10-2025</span>
                </p>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <table className="text-center">
              <thead>
                <tr className="  text-yellow-800 ">
                  <th className="px-4 py-1 font-semibold text-nowrap border border-black">
                    Travel Place
                  </th>
                  <th className="px-4  font-semibold border border-black">
                    Persons
                  </th>
                  <th className="px-4  font-semibold  border border-black">
                    Dates
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border ">
                  <td className="px-4  border-r">London</td>
                  <td className="px-4  border-r">3</td>
                  <td className="px-4  border-r">12/02/2020 - 15/02/2020</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mb-6">
            <table className="">
              <thead>
                <tr className="bg-yellow-800 text-white">
                  <th className="px-4 py-2 font-semibold">DESCRIPTION</th>
                  <th className="px-4 py-2 font-semibold">BILL NO.</th>
                  <th className="px-4 py-2 font-semibold">TOTAL AMOUNT</th>
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
                    className={`text-center ${
                      index % 2 === 1 ? "bg-gray-100" : ""
                    }`}
                  >
                    <td className="py-2 text-start px-4">{desc}</td>
                    <td className="">{bill}</td>
                    <td className="">{amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="mt-6 text-end  space-y-2">
              <p className="flex gap-8 justify-end">
                SUBTOTAL <span className="font-semibold">$6,580.00</span>
              </p>
              <p className="flex gap-8 justify-end">
                TAX @ 5% <span className="font-semibold">$329.00</span>
              </p>
              <p className="inline-block  bg-yellow-800 text-white px-6 py-2  rounded">
                TOTAL <span className="font-semibold">$6,909.00</span>
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-4 bg-gray-100 p-4 rounded">
          <h2 className="font-bold text-gray-700 mb-2">TRAVEL REIMBURSEMENT</h2>
          <div className="mb-4">
            <p className="font-semibold">TO</p>
            <p>[Client Name]</p>
            <p>[Complete Address]</p>
            <p>[Contact Number]</p>
            <p>[Email ID]</p>
          </div>
          <div>
            <p className="font-semibold">FROM</p>
            <p>[Client Name]</p>
            <p>[Complete Address]</p>
            <p>[Contact Number]</p>
            <p>[Email ID]</p>
          </div>

          <div className="mb-6 bg-gray-100 p-4 rounded">
            <h2 className="font-bold mb-2">TERMS</h2>
            <p className="text-sm">
              Payment must be made within 20 days from the date of preparation.
              If not, an amount of $50 will be charged per month from due date.
            </p>
          </div>

          <div className="bg-gray-100 p-4 rounded">
            <h2 className="font-bold mb-2">PAYMENT DETAILS</h2>
            <p>Name: [Name]</p>
            <p>Account Number: [Account Number]</p>
            <p>Bank Name: [Bank Name]</p>
            <p>Location: [Location]</p>
          </div>
        </div>
        <p className="col-span-12 text-center">THANKS FOR YOUR APPROACH</p>
      </div>
    </>
  );
};

export default ViewInvoice;
