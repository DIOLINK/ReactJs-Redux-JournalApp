export const fileUpload = async (file) => {
  const URL_CLOUDINARY = `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_USER_CLOUD}/upload`;

  const formDate = new FormData();
  formDate.append('file', file);
  formDate.append('upload_preset', process.env.REACT_APP_UPLOAD_PRESET);
  try {
    const res = await fetch(URL_CLOUDINARY, { method: 'POST', body: formDate });
    if (res.ok) {
      const cloudRes = await res.json();
      return cloudRes.secure_url;
    } else {
      return null;
    }
  } catch (error) {
    console.log('error :>> ', error);
    throw error;
  }
};
