import * as Yup from "yup";
import { Formik, Form } from "formik";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { TextField, TextArea, SelectField } from "./InputField";

const API_URL = "https://api.com";

function Student() {
  const initialvalues = {
    first_name: "",
    last_name: "",
    gender: "",
    occupation: "",
    id_no: "",
    blood_group: "",
    religion: "",
    email: "",
    address: "",
    phone: "",
    bio: "",
  };

  const validate = Yup.object({
    first_name: Yup.string().required("First name is required"),
    last_name: Yup.string().required("Last name is required"),
    gender: Yup.string().required("Gender is required"),
    occupation: Yup.string().required("Occupation is required"),
    id_no: Yup.string().required("ID number is required"),
    blood_group: Yup.string().required("Blood Group is required"),
    religion: Yup.string().required("Religion is required"),
    email: Yup.string().required("Email is required"),
    address: Yup.string().required("Address is required"),
    phone: Yup.string().required("Phone is required"),
    bio: Yup.string().required("Bio is required"),
  });

  const handleSubmit = (values, formik) => {
    console.log("Data", values);
  };

  // const handleSubmit = async (values, formik) => {
  //   const res = await fetch(`${API_URL}`, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(values),
  //   });

  //   if (res.ok) {
  //     toast.success("Form Submitted Successfully!");
  //     console.log(res);
  //     formik.resetForm();
  //   } else {
  //     console.log("status", res.status);
  //     toast.error("Something went wrong!");
  //   }
  // };

  return (
    <div className="mt-14">
      <Formik
        initialValues={initialvalues}
        validationSchema={validate}
        onSubmit={handleSubmit}
      >
        {(formik) => (
          <Form>
            <ToastContainer />
            <h1 className="text-2xl font-semibold">Parent Form</h1>
            <div className="pt-10 grid grid-cols-1 md:grid-cols-4 text-sm gap-x-8 gap-y-5 md:gap-y-7">
              <div className="col-span-4 md:col-span-1 ">
                <TextField label="First Name *" name="first_name" type="text" />
              </div>
              <div className="col-span-4 md:col-span-1 ">
                <TextField label="Last Name *" name="last_name" type="text" />
              </div>
              <div className="col-span-4 md:col-span-1 ">
                <SelectField
                  label="Gender *"
                  name="gender"
                  type="text"
                  placeholder="Select Gender"
                  options={["Male", "Female"]}
                />
              </div>

              <div className="col-span-4 md:col-span-1 ">
                <TextField label="Occupation *" name="occupation" type="text" />
              </div>
              <div className="col-span-4 md:col-span-1 ">
                <TextField label="ID No *" name="id_no" type="number" />
              </div>
              <div className="col-span-4 md:col-span-1 ">
                <SelectField
                  label="Blood Group *"
                  name="blood_group"
                  type="text"
                  placeholder="Select Blood Group"
                  options={["A+", "A-", "B+", "B-", "O+", "O-"]}
                />
              </div>
              <div className="col-span-4 md:col-span-1 ">
                <SelectField
                  label="Religion *"
                  name="religion"
                  type="text"
                  placeholder="Select Religion"
                  options={[
                    "Islam",
                    "Hindu",
                    "Christian",
                    "Buddhist",
                    "Others",
                  ]}
                />
              </div>
              <div className="col-span-4 md:col-span-1 ">
                <TextField label="Email *" name="email" type="email" />
              </div>
              <div className="col-span-4 md:col-span-1 ">
                <TextField label="Address *" name="address" type="text" />
              </div>
              <div className="col-span-4 md:col-span-1 ">
                <TextField label="Phone *" name="phone" type="number" />
              </div>
              <div className="col-start-1 col-end-5 md:col-end-3">
                <TextArea label="Short Bio *" name="bio" type="text" />
              </div>
            </div>

            <div className="mt-8 flex justify-start">
              <button
                type="submit"
                className="px-9 py-3 border-2 border-black text-black text-[11px] tracking-widest font-bold bg-transparent hover:bg-black  hover:text-white transition duration-300 uppercase"
              >
                Submit
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default Student;
