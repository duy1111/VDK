export const path = {
  HOME: "/*",
  LOGIN: "login",
  REMOTE: "đieu-khien",
  VIEW: "xem-trang-thai"

};

export const formatVietnameseToString = (keyword) => {
  return keyword
  .toLowerCase()
  .normalize("NFD")
  .replace(/[\u0300-\u036f]/g,"")
  .split(" ")
  .join("-")
}