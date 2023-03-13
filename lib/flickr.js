export async function getFlickrPhotos(options = {}) {
  const params = {
    ...options
  }

  const results = await fetch(`https://www.flickr.com/services/rest/?method=flickr.people.getPublicPhotos&api_key=${process.env.FLICKR_API_KEY}&user_id=44258935%40N04&extras=o_dims&per_page=15&format=json&nojsoncallback=1`, {

  }).then(r => r.json())

  return results
}

export function mapFlickrImageResources(resources) {
  if (resources) {
    return resources.photos.photo.map(resource => {
      const url = 'https://farm' + resource.farm + '.staticflickr.com/' + resource.server + '/' + resource.id + '_' + resource.secret + '_b.jpg'
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