import Menu from "./components/Menu/Menu";
import Products from "./components/Products/Products";
import { useFormik } from "formik";
import { useState, useEffect } from "react";

function App() {
  const URL = "http://localhost:3001/api/";
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch(URL + "categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  const validate = (values) => {
    const errors = {};
    if (!values.name) {
      errors.name = "Required";
    } else if (values.name.length < 3) {
      errors.name = "Must be 3 characters or more";
    }
    if (!values.category) {
      errors.category = "Required";
    }

    return errors;
  };
  const formik = useFormik({
    initialValues: {
      name: "",
      note: "",
      image: "",
      category: ""
    },
    validate,
    onSubmit: async (values) => {
      await fetch(`${URL}product`, {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          "Content-Type": "application/json"
        }
      }).then((res) => {
        console.log(res);
      });
      formik.resetForm();
    }
  });

  return (
    <div className='App'>
      <Menu />
      <Products addItem={formik} categories={categories} />
    </div>
  );
}

export default App;
