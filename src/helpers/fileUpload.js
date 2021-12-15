export const fileUpload = async (file) => {
  const USER_CLOUD = 'diolink-cloud';
  const UPLOAD_PRESET = 'React-Journal-App';
  const URL_CLOUDINARY = `https://api.cloudinary.com/v1_1/${USER_CLOUD}/upload`;
  const formDate = new FormData();
  formDate.append('file', file);
  formDate.append('upload_preset', UPLOAD_PRESET);
  try {
    const res = await fetch(URL_CLOUDINARY, { method: 'POST', body: formDate });
    if (res.ok) {
      const cloudRes = await res.json();
      return cloudRes.secure_url;
    } else {
      throw await res.json();
    }
  } catch (error) {
    console.log('error :>> ', error);
    throw error;
  }
};
