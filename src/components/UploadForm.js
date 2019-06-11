import React from 'react';

const UploadForm = () => {
  return (
    <div className="upload-form">
      <form>
        <input type="file" placeholder="Upload image"></input>
        <button type="button">Upload</button>
      </form>
    </div>
  );
};

export default UploadForm;