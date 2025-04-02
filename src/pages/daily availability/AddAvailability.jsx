import { React } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { IoClose } from "react-icons/io5";

// Validation Schema
const schema = yup.object().shape({
  vehicleNumber: yup.string().required("Vehicle Number is required"),
  vehicleType: yup.string().required("Vehicle Type is required"),
  pincode: yup
    .string()
    .matches(/^\d{6}$/, "Pincode must be 6 digits")
    .required("Pincode is required"),
  preferredState: yup.string().required("Preferred State is required"),
  preferredDistrict1: yup.string().required("Preferred State is required"),
  preferredDistrict2: yup.string().required("Preferred State is required"),
  preferredDistrict3: yup.string().required("Preferred State is required"),
  preferredDistrict4: yup.string().required("Preferred State is required"),
  preferredDistrict5: yup.string().required("Preferred State is required"),
});

const InfoRow = ({
  label,
  placeholder,
  type = "text",
  register,
  errors,
  name,
  required = false 
}) => (
  <div className="grid lg:grid-cols-12 md:grid-cols-12 items-center lg:gap-5 md:gap-5 gap-3 pb-3.5 mx-5">
    <span className="col-span-5 text-sm font-semibold">{label}{required && <span className="text-red-500">*</span>}</span>
    <div className="col-span-7">
      <input
        type={type}
        required={required}
        {...register(name)}
        placeholder={type !== "file" ? placeholder : undefined}
        className="w-full dark:text-white text-black text-sm font-light border border-gray-500 rounded-md h-11 px-2 placeholder:text-gray-400 placeholder:text-xs"
      />
      {errors[name] && (
        <p className="text-red-500 text-xs mt-1">{errors[name]?.message}</p>
      )}
    </div>
  </div>
);

const AddAvailability = ({ onclose }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log("Form Submitted:", data);
    onclose();
  };

  return (
    <div className="font-roboto-flex fixed inset-0 grid justify-center items-center backdrop-blur-xs drop-shadow-md">
      <div className="mx-2 shadow-lg dark:bg-popup-gray bg-white dark:text-white lg:w-[500px] md:w-[500px] w-96 rounded-lg">
        <div className="grid">
          <button
            onClick={onclose}
            className="place-self-end dark:bg-popup-gray bg-white rounded-full lg:-mx-4 md:-mx-4 -mx-2 lg:-my-5 md:-my-5 -my-3 lg:shadow-md md:shadow-md shadow-none lg:py-3 md:py-3 py-0 lg:px-3 md:px-3 px-0"
          >
            <IoClose className="size-[24px]" />
          </button>
          <h1 className="text-center font-bold text-xl py-2">Add</h1>
          <form onSubmit={handleSubmit(onSubmit)} className="py-6">
            <InfoRow
              label="Vehicle Number"
              name="vehicleNumber"
              placeholder="Enter vehicle no"
              register={register}
              errors={errors}
            />
            <InfoRow
              label="Vehicle Type"
              name="vehicleType"
              placeholder="Enter vehicle type"
              register={register}
              errors={errors}
            />
            <InfoRow
              label="Current Location Pincode"
              name="pincode"
              placeholder="Enter pincode"
              register={register}
              errors={errors}
            />
            <InfoRow
              label="Preferred State"
              name="preferredState"
              placeholder="Enter preferred state"
              register={register}
              errors={errors}
            />

            {/* Optional Fields */}
            {[1, 2, 3, 4, 5].map((num) => (
              <InfoRow
                key={num}
                label={`Preferred District ${num}`}
                name={`preferredDistrict${num}`}
                placeholder={`Enter preferred District ${num}`}
                required
                register={register}
                errors={errors}
              />
            ))}

            <div className="mx-5 flex justify-end gap-2">
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

export default AddAvailability;
