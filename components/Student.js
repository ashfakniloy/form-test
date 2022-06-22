import { useRouter } from "next/router";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { TextField, SelectField } from "./TextField";

const API_URL = "https://api.com";

function Student() {
  const initialvalues = {
    first_name: "",
    last_name: "",
    gender: "",
    date_of_birth: "",
    roll: "",
    blood_group: "",
    religion: "",
    email: "",
    class: "",
    section: "",
    admission_id: "",
    phone: "",
    bio: "",
  };

  const validate = Yup.object({
    first_name: Yup.string().required("First name is required"),
    last_name: Yup.string().required("Last Name is required"),
    gender: Yup.string().required("Gender is required"),
    date_of_birth: Yup.string().required("Birthdate is required"),
    roll: Yup.string().required("Roll is required"),
    blood_group: Yup.string().required("Blood Group is required"),
    religion: Yup.string().required("Religion is required"),
    email: Yup.string().required("Email is required"),
    class: Yup.string().required("Class is required"),
    section: Yup.string().required("Section is required"),
    admission_id: Yup.string().required("Admission ID is required"),
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
  //     router.push("/user");
  //     formik.resetForm();
  //   } else {
  //     console.log("status", res.status);
  //     toast.error("Something went wrong!");
  //   }
  // };

  return (
    <div>
      <div className="mt-6">
        <Formik
          initialValues={initialvalues}
          // validationSchema={validate}
          onSubmit={handleSubmit}
        >
          {(formik) => (
            <Form>
              <ToastContainer />
              <div className="grid grid-cols-2 text-sm gap-x-7 gap-y-5 md:gap-y-7">
                <div className="col-span-2 sm:col-span-1">
                  <TextField
                    label="First Name *"
                    name="first_name"
                    type="text"
                  />
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <TextField label="Last Name *" name="last_name" type="text" />
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <SelectField
                    label="Gender *"
                    name="gender"
                    type="text"
                    placeholder="Select Gender"
                    options={["Male", "Female"]}
                  />
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <TextField
                    label="Date of Birth *"
                    name="date_of_birth"
                    type="date"
                  />
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <TextField label="Roll *" name="roll" type="number" />
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <SelectField
                    label="Blood Group *"
                    name="blood_group"
                    type="text"
                    placeholder="Select Blood Group"
                    options={["A+", "A-", "B+", "B-", "O+", "O-"]}
                  />
                </div>
                <div className="col-span-2 sm:col-span-1">
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
                <div className="col-span-2 sm:col-span-1">
                  <TextField label="Email *" name="email" type="email" />
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <TextField label="Class *" name="class" type="text" />
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <TextField label="Section *" name="section" type="text" />
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <TextField
                    label="Admission ID *"
                    name="admission_id"
                    type="number"
                  />
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <TextField label="Phone *" name="phone" type="number" />
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <TextField label="Short Bio *" name="bio" type="text" />
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

      {/* <ERPModal showModal={showModal} setShowModal={setShowModal} /> */}
    </div>
  );
}

export default Student;
