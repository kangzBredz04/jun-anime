import express from "express";
import "dotenv/config";
import cors from "cors";

const datas = [
  {
    id: "1",
    name: "Attack on Titan",
    photo_url: "https://wallpapercave.com/wp/wp8326482.jpg",
    rating: 9.0,
    synopsis:
      "Di dunia di mana umat manusia tinggal di dalam kota bertembok besar untuk melindungi diri dari Titans, makhluk humanoid raksasa, Eren Yeager bergabung dengan militer untuk membalas kematian ibunya dan mengungkap kebenaran tentang Titans.",
    trailer_url: "https://youtu.be/LV-nazLVmgo?si=9DnDcWpLCgr4ojEv",
    category: "Action",
    episode_count: 75,
  },
  {
    id: "2",
    name: "Demon Slayer",
    photo_url:
      "https://tse3.mm.bing.net/th?id=OIP.d7rKgwM2kavLCsodQul0zAHaKk&pid=Api&P=0&h=180",
    rating: 8.8,
    synopsis:
      "Tanjiro Kamado, seorang bocah muda yang menjadi Demon Slayer setelah keluarganya dibantai oleh iblis dan adiknya berubah menjadi salah satu dari mereka, memulai perjalanan untuk menemukan obat untuk adiknya dan mengalahkan iblis.",
    trailer_url: "https://youtu.be/DgmK3C-pPRA?si=PJFeb8LLymkxH7TH",
    category: "Action",
    episode_count: 26,
  },
  {
    id: "3",
    name: "My Hero Academia",
    photo_url:
      "https://ostatniatawerna.pl/wp-content/uploads/2022/07/mha-poster.jpg",
    rating: 8.7,
    synopsis:
      "Di dunia di mana hampir setiap orang memiliki kekuatan super, yang dikenal sebagai 'Quirks,' seorang bocah tanpa kekuatan mendaftar di akademi pahlawan terkemuka dengan harapan menjadi seorang pahlawan.",
    trailer_url: "https://youtu.be/lWrDTOI1p9o?si=EzJNCj6dnZQy3e5v",
    category: "Action",
    episode_count: 88,
  },
  {
    id: "4",
    name: "Jujutsu Kaisen",
    photo_url:
      "https://image.tmdb.org/t/p/original/fFgRMzm2LPPac36qmVi5EBmW9i6.jpg",
    rating: 8.9,
    synopsis:
      "Yuji Itadori, seorang siswa SMA, menelan objek terkutuk untuk menyelamatkan temannya dan memperoleh kemampuan supernatural, membawanya bergabung dengan organisasi rahasia yang melawan kutukan.",
    trailer_url: "https://youtu.be/Pm-wNmS9RGI?si=VeYh76a-6eJeoFpv",
    category: "Action",
    episode_count: 24,
  },
  {
    id: "5",
    name: "One Piece",
    photo_url:
      "https://tse2.explicit.bing.net/th?id=OIP.de93te5wkHMrpY37jdetjAHaLG&pid=Api&P=0&h=180",
    rating: 9.1,
    synopsis:
      "Monkey D. Luffy dan kru bajak lautnya berlayar di Grand Line mencari harta karun tertinggi, One Piece, untuk menjadi Raja Bajak Laut.",
    trailer_url: "https://youtu.be/MCb13lbVGE0?si=AITsLlO7wE8V-i7j",
    category: "Adventure",
    episode_count: 1070,
  },
  {
    id: "6",
    name: "Naruto",
    photo_url:
      "https://tse1.mm.bing.net/th?id=OIP.EjIl-g-wSybkVtNApisWMwHaLH&pid=Api&P=0&h=180",
    rating: 8.6,
    synopsis:
      "Naruto Uzumaki, seorang ninja muda dengan impian menjadi ninja terkuat dan pemimpin desanya, berusaha mendapatkan pengakuan dan menjadi Hokage sambil mengungkap rahasia masa lalunya.",
    trailer_url: "https://youtu.be/-G9BqkgZXRA?si=xsg9g-ry-YzxkEwk",
    category: "Adventure",
    episode_count: 220,
  },
  {
    id: "7",
    name: "Fullmetal Alchemist: Brotherhood",
    photo_url:
      "https://m.media-amazon.com/images/M/MV5BMjYwNDlhMWYtMWE1ZS00ZjVhLWI1NzItMjQ5ZGI4NTIwZjQ5L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@.V1_FMjpg_UX659.jpg",
    rating: 9.2,
    synopsis:
      "Dua bersaudara, Edward dan Alphonse Elric, menggunakan alkimia untuk mencoba mengembalikan tubuh mereka setelah eksperimen yang gagal, tetapi terlibat dalam konspirasi kompleks yang melibatkan Batu Bertuah.",
    trailer_url: "https://youtu.be/-GoNo0DGroU?si=D_l-VIi5CJKPVn0p",
    category: "Action",
    episode_count: 64,
  },
  {
    id: "8",
    name: "Cowboy Bebop",
    photo_url:
      "https://i.pinimg.com/736x/d6/7c/af/d67cafc9096ce9afea6c9fd00b5bb093.jpg",
    rating: 8.9,
    synopsis:
      "Di masa depan di mana pemburu hadiah, dikenal sebagai 'cowboys,' bepergian melintasi galaksi, cerita mengikuti Spike Spiegel dan krunya saat mereka memburu penjahat sambil menghadapi masa lalu mereka sendiri.",
    trailer_url: "https://youtu.be/OhNwckCLzis?si=RsQwNWhVL2pgWztU",
    category: "Sci-Fi",
    episode_count: 26,
  },
  {
    id: "9",
    name: "Steins;Gate",
    photo_url:
      "https://tse1.mm.bing.net/th?id=OIP.kMMC5f4aQut7CWuoFmf9eAHaLH&pid=Api&P=0&h=180",
    rating: 9.0,
    synopsis:
      "Sekelompok teman secara tidak sengaja menemukan perjalanan waktu dan harus menghadapi konsekuensi dari tindakan mereka saat terlibat dalam jalinan konspirasi yang rumit.",
    trailer_url: "https://youtu.be/uMYhjVwp0Fk?si=pb11lzUXTTkpG2A4",
    category: "Sci-Fi",
    episode_count: 24,
  },
  {
    id: "10",
    name: "Death Note",
    photo_url:
      "https://d1x7zurbps6occ.cloudfront.net/product/xlarge/515146-149301.jpg",
    rating: 8.7,
    synopsis:
      "Seorang siswa SMA mendapatkan buku catatan dengan kekuatan untuk membunuh siapa saja yang namanya ditulis di dalamnya dan memutuskan untuk menggunakannya untuk menghapus kejahatan, memicu permainan kucing dan tikus yang penuh taruhan dengan penegak hukum.",
    trailer_url: "https://youtu.be/NlJZ-YgAt-c?si=A-OkjhldX_NvlWMU",
    category: "Mystery",
    episode_count: 37,
  },
  {
    id: "11",
    name: "Lookism",
    photo_url:
      "https://images.gutefrage.net/media/fragen/bilder/wie-findet-ihr-den-anime-lookism/0_full.jpg?v=1671051808000",
    rating: 8.5,
    synopsis:
      "Seorang siswa sekolah menengah yang tidak populer tiba-tiba menemukan dirinya memiliki tubuh yang sempurna dan wajah tampan. Cerita ini mengikuti perjalanan emosionalnya saat ia menghadapi diskriminasi berdasarkan penampilan.",
    trailer_url: "https://youtu.be/-pnLUUMMtY4?si=vw7HJnQVcLttseit",
    category: "Drama",
    episode_count: 12,
  },
  {
    id: "12",
    name: "Onimusha",
    photo_url:
      "https://tse1.mm.bing.net/th?id=OIP.pfU3psby7qdUojS-XV8-SgHaLH&pid=Api&P=0&h=180",
    rating: 8.2,
    synopsis:
      "Di era samurai, seorang pendekar harus melawan kekuatan jahat menggunakan pedang sakti. 'Onimusha' mengikuti perjalanannya melawan iblis yang mengancam dunia.",
    trailer_url: "https://youtu.be/-1wsUxg68Ek?si=k2-TfHfkgOfZxu7O",
    category: "Action",
    episode_count: 24,
  },
  {
    id: "13",
    name: "Fireworks",
    photo_url:
      "https://images-na.ssl-images-amazon.com/images/I/81Ig+7mvNOL.RI.jpg",
    rating: 7.2,
    synopsis:
      "Seorang gadis muda dan teman-temannya mencoba mengubah nasib mereka dengan menggunakan kembang api ajaib, yang memungkinkan mereka kembali ke masa lalu.",
    trailer_url: "https://youtu.be/KG770hOuT2k?si=28UAwCJ0H4m1hWKR",
    category: "Romance",
    episode_count: 1,
  },
  {
    id: "14",
    name: "One Punch Man",
    photo_url:
      "https://tse2.mm.bing.net/th?id=OIP.Ky3n72zwfGukT4veH1tZsAHaLH&pid=Api&P=0&h=180",
    rating: 8.9,
    synopsis:
      "Saitama, seorang pahlawan yang bisa mengalahkan musuh dengan satu pukulan, merasa bosan karena tidak ada lawan yang bisa menandinginya.",
    trailer_url: "https://youtu.be/1jbgUWsl1z4?si=v7FzBxpc8bAPosO5",
    category: "Action",
    episode_count: 24,
  },
  {
    id: "15",
    name: "Oshi no Ko Season 1",
    photo_url:
      "https://pics.filmaffinity.com/Oshi_no_Ko_TV_Series-878287505-large.jpg",
    rating: 8.4,
    synopsis:
      "Cerita mengikuti kehidupan seorang idola pop yang mencoba menjaga keseimbangan antara kariernya dan kehidupan pribadinya yang penuh tantangan.",
    trailer_url: "https://youtu.be/zntY4A4GPU0?si=GXgrTJX5FqB6PR8g",
    category: "Drama",
    episode_count: 12,
  },
  {
    id: "16",
    name: "Oshi no Ko Season 2",
    photo_url:
      "https://animotaku.fr/wp-content/uploads/2023/06/anime-oshi-no-ko-saison-2-visuel-1.jpeg",
    rating: 8.6,
    synopsis:
      "Lanjutan dari perjuangan idola pop dalam menghadapi dunia hiburan dan kehidupan pribadinya yang semakin rumit.",
    trailer_url: "https://youtu.be/lw3uL6cNtRY?si=rfik3g6vcoMoiKwe",
    category: "Drama",
    episode_count: 12,
  },
  {
    id: "17",
    name: "Solo Leveling Season 1",
    photo_url:
      "https://animotaku.fr/wp-content/uploads/2023/03/anime-solo-leveling-visuel-2-1.jpeg",
    rating: 8.8,
    synopsis:
      "Seorang pemburu tingkat terendah tiba-tiba mendapatkan kemampuan untuk meningkatkan kekuatannya tanpa batas, membawanya ke dalam dunia yang penuh dengan bahaya dan petualangan.",
    trailer_url: "https://youtu.be/YvGSK8mIlt8?si=pUX4zzrHXmf4sBXP",
    category: "Action",
    episode_count: 12,
  },
  {
    id: "18",
    name: "Solo Leveling Season 2",
    photo_url:
      "https://images.saymedia-content.com/.image/t_share/MTkyMjg5Mjg0NDg3OTE0NzMy/the-20-best-manhwa-with-leveling-system-to-binge-read.jpg",
    rating: 9.0,
    synopsis:
      "Lanjutan dari kisah Jinwoo, sang 'Solo Leveler', yang menghadapi tantangan baru dan musuh yang lebih kuat.",
    trailer_url: "https://youtu.be/OdQrlp3uYQM?si=wxPD0mXrYPuEhV2o",
    category: "Action",
    episode_count: 12,
  },
  {
    id: "19",
    name: "Beastars",
    photo_url:
      "https://image.tmdb.org/t/p/original/sh9iNWkleOjEHRHj8WPHhmMi8HL.jpg",
    rating: 8.0,
    synopsis:
      "Di dunia di mana hewan antropomorfik hidup berdampingan, seekor serigala berjuang dengan naluri predatornya saat ia jatuh cinta pada kelinci herbivora.",
    trailer_url: "https://youtu.be/FDnXR8oyV0g?si=lOSzdOvYCaMF2JyW",
    category: "Drama",
    episode_count: 24,
  },
  {
    id: "20",
    name: "Tokyo Ghoul",
    photo_url:
      "https://image.tmdb.org/t/p/original/mt6ForyKh4JS0v5ho8xhauISidF.jpg",
    rating: 8.5,
    synopsis:
      "Seorang mahasiswa biasa berubah menjadi setengah-ghoul setelah serangan oleh makhluk misterius, dan harus beradaptasi dengan kehidupan barunya.",
    trailer_url: "https://youtu.be/UUeqpuZobBw?si=J3iM4jr7LruMfF7M",
    category: "Horror",
    episode_count: 48,
  },
  {
    id: "21",
    name: "The Promised Neverland",
    photo_url: "https://m.media-amazon.com/images/I/71mS2wpDbAL.jpg",
    rating: 8.6,
    synopsis:
      "Anak-anak di sebuah panti asuhan yang tampaknya sempurna menemukan rahasia mengerikan tentang nasib mereka dan merencanakan pelarian.",
    trailer_url: "https://youtu.be/5llQ56toiPs?si=lC5C1B7zQZfcD8fx",
    category: "Thriller",
    episode_count: 23,
  },
  {
    id: "22",
    name: "Black Clover",
    photo_url:
      "https://m.media-amazon.com/images/M/MV5BN2FlYjYxMTMtZGQzYy00OWU2LTkyYWMtNWJhODhmZmM0N2FhXkEyXkFqcGdeQXVyNjAwNDUxODI@.V1_FMjpg_UX1000.jpg",
    rating: 8.0,
    synopsis:
      "Di dunia di mana sihir adalah segalanya, seorang bocah tanpa kekuatan sihir bermimpi menjadi Raja Penyihir dengan mengandalkan tekad dan kekuatan anti-sihir yang misterius.",
    trailer_url: "https://youtu.be/MH4pWlX4LqI?si=8VipCsTKfcgvIrYL",
    category: "Action",
    episode_count: 170,
  },
  {
    id: "23",
    name: "That Time I Got Reincarnated as a Slime",
    photo_url:
      "https://tse4.mm.bing.net/th?id=OIP.O0f2R_bgTs5mLuWeCtd9CAHaKf&pid=Api&P=0&h=180",
    rating: 8.1,
    synopsis:
      "Seorang pria yang terbunuh secara tidak sengaja bereinkarnasi di dunia fantasi sebagai slime dengan kekuatan unik dan memulai petualangan yang mengubah dunia.",
    trailer_url: "https://youtu.be/qE27ziji4Wc?si=bRNAxQfdosZDWYBU",
    category: "Fantasy",
    episode_count: 48,
  },
  {
    id: "24",
    name: "KonoSuba: God's Blessing on This Wonderful World!",
    photo_url:
      "https://i.pinimg.com/originals/f3/3c/6e/f33c6efb524bf80a0c963bec947200ac.jpg",
    rating: 8.2,
    synopsis:
      "Seorang remaja yang meninggal dengan cara memalukan diberikan kesempatan kedua di dunia fantasi yang penuh petualangan, di mana ia bergabung dengan tim petualang yang aneh.",
    trailer_url: "https://youtu.be/mqFMOYsOUcg?si=JSSFyIG3lTsx3oeG",
    category: "Comedy",
    episode_count: 20,
  },
  {
    id: "25",
    name: "Frieren: Beyond Journey's End",
    photo_url: "https://m.media-amazon.com/images/I/816AbVQc+0L.AC_SL1500.jpg",
    rating: 8.3,
    synopsis:
      "Elf penyihir bernama Frieren memulai perjalanan untuk memahami dan mengenang teman-teman manusianya yang telah meninggal, menyadari bahwa waktu adalah hal yang berharga.",
    trailer_url: "https://youtu.be/Y3l9RTUiYy0?si=vT6SZtmY_RIrH3hf",
    category: "Fantasy",
    episode_count: 12,
  },
];

const app = express();

app.use(cors());
app.use(express.json());

const router = express.Router();
app.use("/api", router);

router.get("/animes", (_req, res) => {
  res.json(datas);
});

app.listen(3000, () => console.log("Server berhasil dijalankan."));
