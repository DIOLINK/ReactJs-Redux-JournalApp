import cloudinary from 'cloudinary';

import { fileUpload } from '../../helpers/fileUpload';

cloudinary.config({
  cloud_name: 'diolink-cloud',
  api_key: '556338252544851',
  api_secret: '3puh2Dd-TsIqI65SDLhI-NFAfJ0',
  secure: true,
});

describe('Test in fileUpload.js', () => {
  it('correctly load the image', async () => {
    const resp = await fetch(
      'https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png'
    );
    const blob = await resp.blob();
    const file = new File([blob], 'foto.png');
    const url = await fileUpload(file);
    console.log('url :>> ', url);
    expect(typeof url).toBe('string');
    //delete img
    const segments = url.split('/');
    const imageId = segments[segments.length - 1].replace('.png', '');
    console.log('imageId :>> ', imageId);
    const { deleted } = await cloudinary.v2.api.delete_resources(imageId);
    expect(deleted).toEqual({ [imageId]: 'deleted' });
  }, 20000);
  it('error to send empty', async () => {
    const file = new File([], 'foto.png');
    const url = await fileUpload(file);
    expect(url).toBe(null);
  });
});
