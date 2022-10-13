

exports.handler = async (event, context) => {
  const params = { expression: 'folder="Cornelia Schulz Photography/galleries"'}
  
  let paramString = null
  if (Object){
    paramString = Object.keys(params).map(key => `${key}=${encodeURIComponent(params[key])}`).join('&')
  }
  console.log('parameters: ', paramString);

  try {
    // const response = await fetch(API_ENDPOINT);
    // const data = await response.json();
    // return { statusCode: 200, body: JSON.stringify({ data }) };

    const results = await fetch(`https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY_CLOUD_NAME}/resources/search?${paramString}`, {
      headers: {
        Authorization: `Basic ${Buffer.from(process.env.CLOUDINARY_API_KEY + ':' + process.env.CLOUDINARY_API_SECRET).toString('base64')}`
      }
    }).then(r => r.json())
  
    return { statusCode: 200, body: JSON.stringify({results})};

  } catch (error) {
    console.log(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed fetching data' }),
    };
  }
};