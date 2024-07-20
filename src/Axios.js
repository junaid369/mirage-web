import axios from "axios";
export const doSubmit = (formdata) => {
  return new Promise(async (resolve, reject) => {
    axios
      .post(
        "https://customer.baqalat.express/v2/api/dashboard/get_dashboard",
        formdata
      )
      .then((data) => {
        resolve(data.data.data);
      })

      .catch((err) => {
        console.log("reponse error");
        reject(err);
      });
  });
};
export const fetchProductDetails = (paylod) => {
  return new Promise(async (resolve, reject) => {
    axios
      .post(
        "https://customer.baqalat.express/v2/api/product/get_product_details",
        paylod
      )
      .then((data) => {
        resolve(data.data.data);
      })

      .catch((err) => {
        console.log("reponse error");
        reject(err);
      });
  });
};
export const fetchCategoryUnderDept = (paylod) => {
  return new Promise(async (resolve, reject) => {
    axios
      .post(
        "https://customer.baqalat.express/v2/api/category/get_categories_under_dept",
        paylod
      )
      .then((data) => {
        resolve(data.data.data);
      })

      .catch((err) => {
        console.log("reponse error");
        reject(err);
      });
  });
};
export const fetchProductUnderCategory = (paylod) => {
  return new Promise(async (resolve, reject) => {
    axios
      .post(
        "https://customer.baqalat.express/v2/api/category/get_sub_categories",
        paylod
      )
      .then((data) => {
        resolve(data.data.data);
      })

      .catch((err) => {
        console.log("reponse error");
        reject(err);
      });
  });
};
export const fetchProductUnderSubCategory = (paylod) => {
  return new Promise(async (resolve, reject) => {
    axios
      .post(
        "https://customer.baqalat.express/v2/api/product/get_product_under_sub_category",
        paylod
      )
      .then((data) => {
        resolve(data.data.data);
      })

      .catch((err) => {
        console.log("reponse error");
        reject(err);
      });
  });
};
