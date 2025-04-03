import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { IoClose } from "react-icons/io5";

const schema = yup.object().shape({
  driverName: yup.string().required("Driver Name is required"),
  phoneNumber: yup
    .string()
    .matches(/^[0-9]{10}$/, "Phone number must be 10 digits")
    .required("Phone Number is required"),
  license: yup.string().required("License is required"),
  experience: yup
    .number()
    .typeError("Experience must be a number")
    .min(0, "Experience must be at least 0 years")
    .required("Experience is required"),
  landmark: yup.string().required("Landmark is required"),
  city: yup.string().required("City is required"),
  state: yup.string().required("State is required"),
  country: yup.string().required("Country is required"),
  pincode: yup
    .string()
    .matches(/^[0-9]{6}$/, "Pincode must be 6 digits")
    .required("Pincode is required"),
});

const InputField = ({
  label,
  name,
  register,
  errors,
  placeholder,
  type = "text",
}) => (
  <div className="grid grid-cols-8 items-center gap-4">
    <label className="col-span-3 text-sm font-semibold">{label}</label>
    <input
      type={type}
      placeholder={placeholder}
      {...register(name)}
      className={`col-span-5 border border-gray-500 rounded-lg  h-11 px-2 placeholder:text-xs placeholder:font-light 
        ${errors[name] ? "border-red-500" : ""}`}
    />
    {errors[name] && (
      <p className="text-red-500 text-xs col-span-8 text-end">
        {errors[name].message}
      </p>
    )}
  </div>
);

const EditDriver = ({ onclose }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    onclose();
  };

  return (
    <div className="font-roboto-flex fixed inset-0 grid justify-center items-center backdrop-blur-xs">
      <div className="mx-2 shadow-lg dark:bg-popup-gray bg-white dark:text-white rounded-lg lg:w-[900px] md:w-[500px] w-96">
        <div className="grid">
          <button
            onClick={onclose}
            className=" place-self-end dark:bg-popup-gray bg-white  rounded-full lg:-mx-6 md:-mx-4 -mx-2 lg:-my-6 md:-my-5  -my-3 lg:shadow-md md:shadow-md shadow-none lg:py-3 md:py-3 py-0 lg:px-3 md:px-3 px-0 "
          >
            <IoClose className="size-[24px]" />
          </button>
          <h1 className="text-center font-semibold text-2xl py-2">
            Add Driver
          </h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-6 px-6 py-6">
              <div className="space-y-4">
                <p className="font-semibold text-xl">Driver Details</p>
                <InputField
                  label="Driver Name"
                  name="driverName"
                  register={register}
                  errors={errors}
                  placeholder="Enter driver name"
                />
                <InputField
                  label="Phone Number"
                  name="phoneNumber"
                  register={register}
                  errors={errors}
                  placeholder="Enter phone number"
                />
                <InputField
                  label="License"
                  name="license"
                  register={register}
                  errors={errors}
                  placeholder="Enter license"
                />
                <InputField
                  label="Experience"
                  name="experience"
                  type="number"
                  register={register}
                  errors={errors}
                  placeholder="Enter experience"
                />
              </div>
              <div className="space-y-4">
                <p className="font-semibold text-xl">Address</p>
                <InputField
                  label="Landmark"
                  name="landmark"
                  register={register}
                  errors={errors}
                  placeholder="Enter landmark"
                />
                <InputField
                  label="City"
                  name="city"
                  register={register}
                  errors={errors}
                  placeholder="Enter city"
                />
                <InputField
                  label="State"
                  name="state"
                  register={register}
                  errors={errors}
                  placeholder="Enter state"
                />
                <InputField
                  label="Country"
                  name="country"
                  register={register}
                  errors={errors}
                  placeholder="Enter country"
                />
                <InputField
                  label="Pincode"
                  name="pincode"
                  register={register}
                  errors={errors}
                  placeholder="Enter pincode"
                />
              </div>
            </div>
            <div className="mx-5 flex lg:justify-end md:justify-center justify-center gap-2 mb-4">
              <button
                type="button"
                onClick={onclose}
                className="cursor-pointer text-sidebar border-sidebar border px-8 py-2 rounded"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="cursor-pointer bg-sidebar dark:text-black px-6 py-2 rounded"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditDriver;
