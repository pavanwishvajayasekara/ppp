// මුදල් සංයෝජනය කිරීම
export const formatCurrency = (amount) => {
    return `Rs. ${amount.toLocaleString('en-LK', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })}`;
  };
  
  // දිනය සරලව ආකෘතිකරණය
  export const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };
  