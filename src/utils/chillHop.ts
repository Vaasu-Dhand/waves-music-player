import { nanoid } from 'nanoid';

export default function chillHop() {
  return [
    {
      name: "Belly Breathing",
      cover: "https://chillhop.com/wp-content/uploads/2020/07/5c2d5b05dfc98afb5ed850ca918f732445b8ca1e-1024x1024.jpg",
      artist: "Birocratic",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=8741",
      color: ["#428bca", "#1db954"],
      id: nanoid(),
      active: true,
    },
    {
      name: "FunkaHolic",
      cover: "https://chillhop.com/wp-content/uploads/2020/07/5c2d5b05dfc98afb5ed850ca918f732445b8ca1e-1024x1024.jpg",
      artist: "Flitz&Suppe",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=8242",
      color: ["#428bca", "#1db954"],
      id: nanoid(),
      active: false,
    }
  ]
}
