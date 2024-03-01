interface RequestMethodsEnumProps {
  get: string;
  post: string;
  patch: string;
  put: string;
  delete: string;
}

const RequestMethodsEnum: RequestMethodsEnumProps = {
  get: "GET",
  post: "POST",
  patch: "PATCH",
  put: "PUT",
  delete: "DELETE",
};

export default RequestMethodsEnum;
