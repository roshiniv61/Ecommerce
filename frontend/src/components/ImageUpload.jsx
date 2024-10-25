

// import React, { useState, useEffect } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCircleCheck, faEye, faArrowUpFromBracket } from '@fortawesome/free-solid-svg-icons';

// const ImageUpload = ({ productId, handleFileChange, logoId, handleReplaceClick, logosData }) => {
//   const [showUploadButton, setShowUploadButton] = useState(!logoId);

//   useEffect(() => {
//     // Determine if the upload button should be shown based on logosData
//     if (logosData?.file) {
//       setShowUploadButton(false);
//     }
//   }, [logosData]);

//   const handleReplace = () => {
//     handleReplaceClick(productId); // Call parent function to handle replacement
//     setShowUploadButton(true); // Show upload button after replacing
//   };

//   const handleFileChangeEvent = (event) => {
//     const selectedFile = event.target.files[0];
//     if (selectedFile) {
//       handleFileChange(productId, selectedFile);
//     }
//   };

//   return (
//     <div className="upload-container">
//       {showUploadButton ? (
//         <form className="upload-form" encType="multipart/form-data">
//           <input
//             type="file"
//             id={`logo-${productId}`}
//             name="logo"
//             accept="image/*"
//             onChange={handleFileChangeEvent}
//             style={{ display: 'none' }}
//           />
//           <label htmlFor={`logo-${productId}`} className="green-button flex gap-5">
//             <FontAwesomeIcon icon={faArrowUpFromBracket} color="var(--secondary-color)" />
//             <span> Upload Logo</span>
//           </label>
//         </form>
//       ) : (
//         logosData?.file && (
//           <div className='logo-success-wrapper flex gap-5'>
//             <div className='flex gap-3 items-center'>
//               <p>
//                 <FontAwesomeIcon icon={faCircleCheck} color="var(--primary-color)" />
//                 <span> Logo Uploaded</span>
//               </p>
//             </div>
//             <div>
//               <a href={logosData.file} target="_blank" rel="noopener noreferrer">
//                 <div className='green-button'>
//                   <span className='mr-3'>
//                     <FontAwesomeIcon icon={faEye} color="var(--secondary-color)" />
//                   </span>
//                   <span>View</span>
//                 </div>
//               </a>
//             </div>

//             <div className='green-button' onClick={handleReplace}>
//               <span className='mr-3'>
//                 <FontAwesomeIcon icon={faArrowUpFromBracket} color="var(--secondary-color)" />
//               </span>
//               <span>Replace</span>
//             </div>
//           </div>
//         )
//       )}
//     </div>
//   );
// };

// export default ImageUpload;


import React, { useRef, useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faEye, faArrowUpFromBracket } from '@fortawesome/free-solid-svg-icons';

const ImageUpload = ({ productId, handleFileChange,
  logosData, handleReplaceClick, isEditing, handleLogoUpdate,buttonName }) => {

  const [showUploadButton, setShowUploadButton] = useState(!logosData.file);
  const fileInputRef = useRef(null);

  useEffect(() => {
    if (logosData.status === false) {
      setShowUploadButton(false);
    } else {
      setShowUploadButton(true);
    }
  }, [logosData]);

  useEffect(() => {
    // Reset upload button visibility when editing a product
    if (isEditing) {
      setShowUploadButton(true);
    }
  }, [isEditing]);


  const handleFileInputChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile && (selectedFile.type.startsWith('image/') && selectedFile.size < 5000000)) { // 5MB limit
      // handleFileChange(productId, selectedFile);
      handleLogoUpdate(productId, selectedFile);
    } else {
      alert('Please select a valid image file (max 5MB).');
    }
  };

  const triggerFileInput = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <div className="upload-container w-[100%]">
      <form className="upload-form" encType="multipart/form-data">
        <input
          type="file"
          ref={fileInputRef}
          accept="image/*"
          style={{ display: 'none' }}
          onChange={handleFileInputChange}
        />
        <label htmlFor={`logo-${productId}`}
          className="green-button flex gap-5 text-center w-[100%]" onClick={triggerFileInput}>
          <FontAwesomeIcon icon={faArrowUpFromBracket} color="var(--secondary-color)" />
          <span> {buttonName}</span>
        </label>
      </form>
    </div>
  );
};

export default ImageUpload;

