
export default class Song {
  constructor ({id, mid, singer, name, album, duration, image, url}) {
    this.id = id
    this.mid = mid
    this.singer = singer
    this.name = name
    this.album = album
    this.duration = duration
    this.image = image
    this.url = url
  }
}

export function createSong (musicData) {
  return new Song({
    id: musicData.songid,
    mid: musicData.songmid,
    singer: filterSinger(musicData.singer),
    name: musicData.songname,
    album: musicData.albumname,
    duration: musicData.interval,
    image: `https://y.gtimg.cn/music/photo_new/T002R300x300M000${musicData.albummid}.jpg?max_age=2592000`,
    url: `http://182.140.219.19/amobile.music.tc.qq.com/C400${musicData.songmid}.m4a?guid=792787692&vkey=CD2A5896B5C4B0E1E7AF8F1CE3444B80E3F8E48F4C4B46115B714B8C3C1CD2C6FF1ED6CDA1AC3AC08005EEFB0977685A9F5494B04541459E&uin=0&fromtag=38`
  })
}

export function filterSinger (singer) {
  let ret = []
  if (!singer) {
    return ''
  }
  singer.forEach((s) => {
    ret.push(s.name)
  })
  return ret.join('/')
}
