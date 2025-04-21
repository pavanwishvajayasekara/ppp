// විද්‍යුත් ලිපිනය වලංගුදැයි පරීක්ෂා කිරීම
export const isValidEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };
  
  // දුරකථන අංකය වලංගුදැයි පරීක්ෂා කිරීම
  export const isValidPhone = (phone) => {
    return /^\+94\s\d{2}\s\d{3}\s\d{4}$/.test(phone);
  };
  