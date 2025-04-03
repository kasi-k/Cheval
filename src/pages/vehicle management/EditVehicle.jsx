import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { IoClose } from "react-icons/io5";

const schema = yup.object().shape({
  vehicleNumber: yup.string().required("Vehicle Number is required"),
  vehicleModel: yup.string().required("Vehicle Model is required"),
  vehicleType: yup.string().required("Vehicle Type is required"),
  rcNumber: yup.string().required("RC Number is required"),
  rcExpires: yup.date().required("RC Expiry Date is required"),
  permitNumber: yup.string().required("Permit Number is required"),
  permitExpires: yup.date().required("Permit Expiry Date is required"),
  pucStatus: yup.string().required("PUC Status is required"),
  insuranceNumber: yup.string().required("Insurance Number is required"),
  insuranceExpires: yup.date().required("Insurance Expiry Date is required"),
  ownerName: yup.string().required("Owner Name is required"),
  ownerPhone: yup
    .string()
    .matches(/^\d{10}$/, "Phone number must be 10 digits")
    .required("Owner Phone Number is required"),
  driverName: yup.string().when("sameAsOwner", {
    is: false,
    then: yup.string().required("Driver Name is required"),
  }),
  driverPhone: yup.string().when("sameAsOwner", {
    is: false,
    then: yup
      .string()
      .matches(/^\d{10}$/, "Phone number must be 10 digits")
      .required("Driver Phone Number is required"),
  }),
});

const InputField = ({
  label,
  name,
  placeholder,
  register,
  type = "text",
  errors,
  readOnly = false,
}) => (
  <div className="grid grid-cols-5 items-center gap-2 pb-2.5">
    <label className="col-span-2 text-sm font-semibold">{label}</label>
    <div className="col-span-3">
      <input
        type={type}
        placeholder={placeholder}
        {...register(name)}
        readOnly={readOnly}
        className={`border border-gray-500 rounded-lg h-11 px-2 w-full placeholder:text-xs placeholder:font-light dark:text-white ${
          errors[name] ? "border-red-500" : ""
        }`}
      />
      {errors[name] && (
        <p className="text-red-500 text-xs mt-1">{errors[name].message}</p>
      )}
    </div>
  </div>
);

const EditVehicle = ({ onclose }) => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const sameAsOwner = watch("sameAsOwner", false);
  const ownerName = watch("ownerName", "");
  const ownerPhone = watch("ownerPhone", "");

  React.useEffect(() => {
    if (sameAsOwner) {
      setValue("driverName", ownerName);
      setValue("driverPhone", ownerPhone);
    } else {
      setValue("driverName", "");
      setValue("driverPhone", "");
    }
  }, [sameAsOwner, ownerName, , ownerPhone, setValue]);

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    onclose();
  };

  return (
    <div className="font-roboto-flex fixed inset-0 flex justify-center items-center backdrop-blur-xs">
      <div className="mx-2 shadow-lg dark:bg-popup-gray bg-white dark:text-white rounded-lg p-4 w-full max-w-3xl">
        <div className="grid">
          <button onClick={onclose} className=" place-self-end dark:bg-popup-gray bg-white  rounded-full lg:-mx-6 md:-mx-4 -mx-2 lg:-my-6 md:-my-5  -my-3 lg:shadow-md md:shadow-md shadow-none lg:py-3 md:py-3 py-0 lg:px-3 md:px-3 px-0 ">
            <IoClose className="size-[24px]" />
          </button>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1 className="font-bold text-xl text-center py-2">Edit Vehicle</h1>
          <div className="grid lg:grid-cols-2 gap-5">
            <div>
              <p className="text-lg font-semibold mb-3">Vehicle Details</p>
              <InputField
                label="Vehicle Number"
                name="vehicleNumber"
                placeholder="Enter vehicle No"
                register={register}
                errors={errors}
              />
              <InputField
                label="Vehicle Model"
                name="vehicleModel"
                placeholder="Enter vehicle model"
                register={register}
                errors={errors}
              />
              <InputField
                label="Vehicle Type"
                name="vehicleType"
                placeholder="Enter vehicle type"
                register={register}
                errors={errors}
              />
              <InputField
                label="RC Number"
                name="rcNumber"
                placeholder="Enter rc no"
                register={register}
                errors={errors}
              />
              <InputField
                label="RC Expires"
                type="date"
                name="rcExpires"
                register={register}
                errors={errors}
              />
              <InputField
                label="Permit Number"
                name="permitNumber"
                placeholder="Enter permit no"
                register={register}
                errors={errors}
              />
              <InputField
                label="Permit Expires"
                name="permitExpires"
                type="date"
                register={register}
                errors={errors}
              />
              <InputField
                label="PUC Status"
                name="pucStatus"
                placeholder="Enter puc status"
                register={register}
                errors={errors}
              />
              <InputField
                label="Insurance Number"
                name="insuranceNumber"
                placeholder="Enter insurance no"
                register={register}
                errors={errors}
              />
              <InputField
                label="Insurance Expires"
                name="insuranceExpires"
                type="date"
                register={register}
                errors={errors}
              />
            </div>
            <div>
              <p className="text-lg font-semibold mb-3">Owner Details</p>
              <InputField
                label="Owner Name"
                name="ownerName"
                placeholder="Enter owner name"
                register={register}
                errors={errors}
              />
              <InputField
                label="Phone Number"
                name="ownerPhone"
                placeholder="Enter owner phone no"
                register={register}
                errors={errors}
              />
              <div className="flex items-center gap-2 my-2">
                <input
                  type="checkbox"
                  {...register("sameAsOwner")}
                  id="sameAsOwner"
                />
                <label htmlFor="sameAsOwner">
                  Driver and owner are the same
                </label>
              </div>

              <>
                <p className="text-lg font-semibold mb-3">Driver Details</p>
                <InputField
                  label="Driver Name"
                  name="driverName"
                  placeholder="Enter driver name"
                  register={register}
                  errors={errors}
                  readOnly={sameAsOwner}
                />
                <InputField
                  label="Phone Number"
                  name="driverPhone"
                  placeholder="Enter driver phone no"
                  register={register}
                  errors={errors}
                  readOnly={sameAsOwner}
                />
              </>
            </div>
          </div>
          <div className="flex justify-end gap-2 mt-5">
            <button
              type="button"
              className="text-sidebar border border-sidebar px-8 py-2 rounded"
              onClick={onclose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-sidebar dark:text-black px-6 py-2 rounded"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditVehicle;
