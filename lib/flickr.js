export async function getFlickrPhotos(options = {}) {
  const params = {
    ...options
  }

  const results = await fetch(`https://www.flickr.com/services/rest/?method=flickr.people.getPublicPhotos&api_key=${process.env.FLICKR_API_KEY}&user_id=44258935%40N04&extras=o_dims&per_page=15&format=json&nojsoncallback=1`, {

  }).then(r => r.json())

  // console.log(results)
  return results
}

export function mapFlickrImageResources(resources) {
  // console.log("resources: ", resources)
  if (resources) {
    console.log(resources.photos.photo)
    return resources.photos.photo.map(resource => {
      const url = 'https://farm' + resource.farm + '.staticflickr.com/' + resource.server + '/' + resource.id + '_' + resource.secret + '.jpg'
      return {
        id: resource.id,
        title: resource.title,
        farmId: resource.farm,
        serverId: resource.server,
        secret: resource.secret,
        url: url
      }
    })
  }
  else return null
}