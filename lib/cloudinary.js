// import axios from 'axios'

export async function search(options = {}) {
    const params = {
      ...options
    }
    let paramString = null
    if (Object){
      paramString = Object.keys(params).map(key => `${key}=${encodeURIComponent(params[key])}`).join('&')
    }
    // console.log(`https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY_CLOUD_NAME}/resources/search?${paramString}`)
    const results = await fetch(`https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY_CLOUD_NAME}/resources/search?${paramString}`, {
    // const results = await axios.get(`https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY_CLOUD_NAME}/resources/search?${paramString}`, {
      headers: {
        Authorization: `Basic ${Buffer.from(process.env.CLOUDINARY_API_KEY + ':' + process.env.CLOUDINARY_API_SECRET).toString('base64')}`
      }
    }).then(r => r.json())
  
    return results
  }
  
  export function mapImageResources(resources) {
    if (resources) {
      return resources.map(resource => {
        // console.log('cloudinary: ', resource)
        const { width, height } = resource
        const landscape = width > height
        return {
          id: resource.asset_id,
          title: resource.filename,
          url: resource.secure_url,
          width,
          height,
          landscape: landscape,
        }
      })
    }
    else return null
  }