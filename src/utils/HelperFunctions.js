export const emailIsInvalid = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (email !== null && email.trim().match(emailRegex) === null) {
      return true;
    } else {
      return false;
    }
  };

  export const uppercaseFirstLetter = (input) => {
    const formatedInput = input?.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());
    return formatedInput;
  }

  export const formatDate = (inputDate) => {
    if (!inputDate) return "";
    const date = new Date(inputDate);
    const yyyy = date.getFullYear();
    let mm = date.getMonth() + 1;
    let dd = date.getDate();
  
    if (dd < 10) dd = "0" + dd;
    if (mm < 10) mm = "0" + mm;
  
    const formattedDate = dd + "/" + mm + "/" + yyyy;
    return formattedDate;
  };