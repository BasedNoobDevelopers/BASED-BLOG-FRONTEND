const scrollHeader = document.getElementById("scrollHeader");
const scrollTitle = document.getElementById("scrollTitle");
const menuToggle = document.getElementById("menu-toggle");
const sideDrawer = document.getElementById("sideDrawer");
const params = new URLSearchParams(window.location.search);




let lastScroll = 0;

window.addEventListener("scroll", () => {
  const current = window.scrollY;

  if (current > 200 && current > lastScroll) {
    scrollHeader.classList.add("visible");
  } else {
    scrollHeader.classList.remove("visible");
  }

  lastScroll = current;
});


class Article {
  id;
  title;
  category;
  subtitle;
  image;
  content;
 
  constructor(articleDetails){
    this.id = articleDetails.id;
    this.title = articleDetails.title;
    this.category =  articleDetails.category;
    this.subtitle = articleDetails.subtitle;
    this.image = articleDetails.image;
    this.content = articleDetails.content;
  }

  fillArticle(){
    const heroTitle = document.getElementById("heroTitle");
    const heroCategory = document.getElementById("heroCategory");
    const heroSubtitle = document.getElementById("heroSubtitle");
    const heroImage = document.getElementById("heroImage");
    const articleContent = document.getElementById("articleContent");
    const heroBg = document.getElementById("heroBg");
    const scrollTitle = document.getElementById("scrollTitle");

    heroTitle.textContent = this.title;
    heroCategory.textContent = this.category;
    heroSubtitle.textContent = this.subtitle;

    heroImage.src = this.image;

    articleContent.textContent = this.content;

    heroBg.style.backgroundImage = `url(${this.image})`;

    scrollTitle.textContent = this.title;
  
  }
}



const articles = [ 
  { id:1,
    title: "The 1st Article of the New Blog!",
    category: "Random",
    subtitle: "The beginning of something big is right around the corner",
    image: "images/SMB3_Artwork.webp",
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat posuere orci, ac lobortis erat porttitor sit amet. Donec vel facilisis nunc. Sed eu mauris venenatis, iaculis ante ut, tristique dolor. Proin auctor sagittis enim nec egestas. Aenean libero leo, mattis sed justo vitae, tincidunt sodales dolor. Nunc ullamcorper ullamcorper velit, ut sagittis odio rhoncus ac. Duis dapibus risus vitae felis malesuada, sit amet imperdiet neque scelerisque.
              Sed nibh massa, aliquet mollis nulla et, dictum malesuada tellus. Nulla vulputate nulla tortor, non lobortis nulla blandit vitae. Donec at mauris et nisi placerat tincidunt. Pellentesque facilisis, est sed blandit finibus, magna nulla porta nisi, quis lacinia ex turpis sit amet lacus. Mauris et convallis ipsum. Cras lacinia sit amet mi at sodales. Vestibulum gravida, odio sit amet consequat tristique, dolor mauris venenatis massa, non finibus lacus lorem eu mi. Nunc pharetra ac ante quis luctus. Donec nec neque maximus, consectetur risus et, auctor nisl. Aenean malesuada arcu orci, vitae lobortis urna condimentum nec.
              Nunc vel nibh nec mauris vehicula lacinia non et odio. Fusce porta arcu vitae urna faucibus, nec malesuada lectus aliquet. Suspendisse et venenatis lacus, ac accumsan lectus. Pellentesque dui elit, pellentesque at porta quis, vehicula eu arcu. Nunc pulvinar felis non nibh egestas ultricies. Nunc placerat, sem eu tincidunt fermentum, eros dui mollis nulla, sed vestibulum lorem quam eu nunc. Suspendisse imperdiet tristique vestibulum. Curabitur malesuada et felis et tempor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur consectetur augue non turpis tempor rutrum. Nulla a ipsum ut ipsum malesuada convallis sed vitae nisi. Aliquam ut consequat lorem. Proin quis tempor odio, ac porta quam. Suspendisse rhoncus odio lacus, aliquam suscipit risus consequat vitae.
              Nulla diam odio, venenatis viverra facilisis sit amet, vulputate sed mauris. Curabitur et neque ex. Sed vestibulum sit amet leo id malesuada. Fusce tempor, elit et tempus tempus, odio elit bibendum nisi, et imperdiet libero enim nec quam. Integer scelerisque tempor ex, ac bibendum mauris finibus nec. Vestibulum urna nulla, tristique nec lobortis in, pellentesque a ipsum. Nam lacinia dignissim est non convallis.
              Vivamus pharetra sed nisl eget laoreet. Ut ac tellus placerat, maximus enim nec, commodo ipsum. Etiam dolor arcu, congue vitae turpis eget, cursus tincidunt nibh. Duis sed tellus sed orci porta sagittis a at magna. Quisque sed massa eu ex dignissim mollis non consequat sem. Praesent congue lorem arcu, et dapibus purus faucibus eu. Sed convallis velit felis, ac posuere turpis dictum id. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla finibus commodo purus eget venenatis. Vestibulum quis feugiat metus, nec finibus leo. Aliquam vel ipsum hendrerit, rhoncus orci nec, ultrices odio.`
  },

  {
    id:2,
    title: "The 2nd article of the New Blog!",
    category: "Opinion",
    subtitle: "The beginning of something big is right around the corner",
    image: "images/SonicConcept5.png",
    content: `During the Sonic the Hedgehog 25th Anniversary event over in Japan, Sonic Team presented early concepts for Sonic the Hedgehog and Friends. Some of the weirdest early prototypes included rabbit Sonic the Hedgehog, headband wearing Silver the Hedgehog and scarred up Shadow the Hedgehog. If you are a hedgehog, you started out with some weird designs.
    Check out the concept art for Sonic the Hedgehog and Friends below. Tell us what you think of these early concept art prototypes and if they did right with the final designs. Of course, these are just more of the popular Sonic the Hedgehog and Friends designs as they didn’t show a lot of the more niche characters (Fang, please Sonic Team).
    [Via NeoGAF]`
  },

  {
    id:3,
    title: "The Metal Gear Story You've Never Heard",
    category: "Retro",
    subtitle: "The Metal Gear Solid audio drama",
    image: "images/MGS_Drama_CD_story_3.webp",
    content:`The Metal Gear Solid audio drama is a spinoff of the Metal Gear Solid video game released only in Japan. It was broadcast in weekly segments on a syndicate radio program called Club db, which aired on the radio station Nippon Cultural Broadcasting (JOQR) and its affiliates. The drama lasted twelve installments, which aired between October 24, 1998 and January 9, 1999. The drama was then collected in two albums, Drama CD Metal Gear Solid Vol. 1, released on December 4, 1998; and Drama CD Metal Gear Solid Vol. 2, released on January 8, 1999.
    While the audio drama did not receive an official overseas release, it saw an English translation by an online user named Juan. With his consent, an updated script was uploaded to MGS TUS by Marc Laidlaw. This script was used years later for a fandubbed version uploaded by Josh Griffiths.[1] Prior to this, Marc had been hoping do his own fandub with an updated translation.[2]
    The drama focuses Solid Snake, Roy Campbell, Meryl Silverburgh and Mei Ling as they participate in various missions following the events of the Shadow Moses Incident. The stories are not considered part of the Metal Gear canon, but are instead sidestories depicting hypothetical situations. The drama was directed by Shuyo Murata and written by the series' military adviser Motosada Mori. Yoji Shinkawa also provided the artwork for the liner notes. `
  },
  
  {
    id:4,
    title: "Ratchet and Clank",
    category: "Retro",
    subtitle: "The Metal Gear Solid audio drama",
    image: "images/ratchet_clank_!.jpg",
    content:`The Metal Gear Solid audio drama is a spinoff of the Metal Gear Solid video game released only in Japan. It was broadcast in weekly segments on a syndicate radio program called Club db, which aired on the radio station Nippon Cultural Broadcasting (JOQR) and its affiliates. The drama lasted twelve installments, which aired between October 24, 1998 and January 9, 1999. The drama was then collected in two albums, Drama CD Metal Gear Solid Vol. 1, released on December 4, 1998; and Drama CD Metal Gear Solid Vol. 2, released on January 8, 1999.
    While the audio drama did not receive an official overseas release, it saw an English translation by an online user named Juan. With his consent, an updated script was uploaded to MGS TUS by Marc Laidlaw. This script was used years later for a fandubbed version uploaded by Josh Griffiths.[1] Prior to this, Marc had been hoping do his own fandub with an updated translation.[2]
    The drama focuses Solid Snake, Roy Campbell, Meryl Silverburgh and Mei Ling as they participate in various missions following the events of the Shadow Moses Incident. The stories are not considered part of the Metal Gear canon, but are instead sidestories depicting hypothetical situations. The drama was directed by Shuyo Murata and written by the series' military adviser Motosada Mori. Yoji Shinkawa also provided the artwork for the liner notes. `
  },
  {
    id:5,
    title: "Halo Combat Evolved vs Halo Campaign Evolved",
    category: "Opinion",
    subtitle: "A new combat evolved experience",
    image: "images/halo-compare.webp",
    content:`The Metal Gear Solid audio drama is a spinoff of the Metal Gear Solid video game released only in Japan. It was broadcast in weekly segments on a syndicate radio program called Club db, which aired on the radio station Nippon Cultural Broadcasting (JOQR) and its affiliates. The drama lasted twelve installments, which aired between October 24, 1998 and January 9, 1999. The drama was then collected in two albums, Drama CD Metal Gear Solid Vol. 1, released on December 4, 1998; and Drama CD Metal Gear Solid Vol. 2, released on January 8, 1999.
    While the audio drama did not receive an official overseas release, it saw an English translation by an online user named Juan. With his consent, an updated script was uploaded to MGS TUS by Marc Laidlaw. This script was used years later for a fandubbed version uploaded by Josh Griffiths.[1] Prior to this, Marc had been hoping do his own fandub with an updated translation.[2]
    The drama focuses Solid Snake, Roy Campbell, Meryl Silverburgh and Mei Ling as they participate in various missions following the events of the Shadow Moses Incident. The stories are not considered part of the Metal Gear canon, but are instead sidestories depicting hypothetical situations. The drama was directed by Shuyo Murata and written by the series' military adviser Motosada Mori. Yoji Shinkawa also provided the artwork for the liner notes. `
  }, 
  
  {
    id:6,
    title: "Halo Combat Evolved vs Halo Campaign Evolved",
    category: "Retro",
    subtitle: "",
    image: "images/wukong.jpg",
    content:`The Metal Gear Solid audio drama is a spinoff of the Metal Gear Solid video game released only in Japan. It was broadcast in weekly segments on a syndicate radio program called Club db, which aired on the radio station Nippon Cultural Broadcasting (JOQR) and its affiliates. The drama lasted twelve installments, which aired between October 24, 1998 and January 9, 1999. The drama was then collected in two albums, Drama CD Metal Gear Solid Vol. 1, released on December 4, 1998; and Drama CD Metal Gear Solid Vol. 2, released on January 8, 1999.
    While the audio drama did not receive an official overseas release, it saw an English translation by an online user named Juan. With his consent, an updated script was uploaded to MGS TUS by Marc Laidlaw. This script was used years later for a fandubbed version uploaded by Josh Griffiths.[1] Prior to this, Marc had been hoping do his own fandub with an updated translation.[2]
    The drama focuses Solid Snake, Roy Campbell, Meryl Silverburgh and Mei Ling as they participate in various missions following the events of the Shadow Moses Incident. The stories are not considered part of the Metal Gear canon, but are instead sidestories depicting hypothetical situations. The drama was directed by Shuyo Murata and written by the series' military adviser Motosada Mori. Yoji Shinkawa also provided the artwork for the liner notes. `
  }

].map((articleDetails) => {
  return new Article(articleDetails)
});

const articleId = parseInt(params.get("id"), 10);
const article = articles.find(a => a.id === articleId)

if (article) {
  article.fillArticle();
}