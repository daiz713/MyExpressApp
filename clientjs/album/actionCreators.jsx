import request from 'superagent';

export const FETCH_GYAZO_IMAGES = 'FETCH_GYAZO_IMAGES';
export let fetchGyazoImages = (value) => {
  console.info(value);
  return {
    type: FETCH_GYAZO_IMAGES,
    status: '取得中...'
  }
};

export const SUCCESS_FETCH_GYAZO_IMAGES = 'SUCCESS_FETCH_GYAZO_IMAGES';
export let successFetchGyazoImages = (images) => {
  return {
    type: SUCCESS_FETCH_GYAZO_IMAGES,
    status: '成功',
    images: images
  }
};

export const FAIL_FETCH_GYAZO_IMAGES = 'FAIL_FETCH_GYAZO_IMAGES';
export let failFetchGyazoImages = (value) => {
  return {
    type: FAIL_FETCH_GYAZO_IMAGES,
    status: '失敗'
  }
};


export let fetchGyazoImagesAsync = (value) => {
  return (dispatch) => {
    dispatch(fetchGyazoImages(666 + value));

    // /api/text
    // 'http://svgscreenshot.appspot.com/api/collections'
    request.post('/api/v0/album/gyazo_list')
      .send({sample: 'sample text'})
      .end((err, res) => {
        if (err) {
          dispatch(failFetchGyazoImages());
        }else {
          var images = [];
          if (res.body.status === 'OK') {
            images = res.body.images;
          }
          dispatch(successFetchGyazoImages(images));
        }
      });
  };
};


export const SHOW_IMAGE_PREVIEW = 'SHOW_IMAGE_PREVIEW';
export let showImagePreview = (image) => {
  return {
    type: SHOW_IMAGE_PREVIEW,
    i: image.i,
    p: image.p,
    id: image.id
  }
};
