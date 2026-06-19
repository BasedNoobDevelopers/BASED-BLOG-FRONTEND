export interface Article {
  publicUserResponseDTO: PublicUserResponseDTO;
  blogID: string;
  blogTitle: string;
  blogSubTitle: string;
  blogContent: string;
  blogTopic: string;
  createdDate: string;
  editedDate: string | null;
  blogCoverImage: BlogCoverImage;
  edited: boolean;
}

export interface PublicUserResponseDTO {
  userName: string;
}

export interface BlogCoverImage {
        imageKey: string;
        imageUrl: string
        thumbnailUrl: string
}
const date = new Date();
const now = date.toLocaleDateString('en-US', {
  month: 'short',
  day: '2-digit',
  year: 'numeric',
});

export async function fetchData(): Promise<any> {
  const url = 'login'
  const body = {url}
   const response = await fetch('/api/blogs/', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(body)
        })
      //   console.log("Response HER")
       const result = await response.json();
      //  console.log(result)
      //   console.log("After respone")
        return result.content
}

export async function fetchBlogData(blogID:string): Promise<any> {
  const url = 'register'
  console.log("FETCH")
  const body = {url, blogID}
  console.log(body)
   const response = await fetch('/api/blogs/', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(body)
        })
        console.log("Response HER")
       const result = await response.json();
       console.log(result)
        console.log("After respone")
        return result
}

export async function fetchLatest(): Promise<any> {
  const url = 'latest'
  console.log("FETCH")
  const body = {url}
  console.log(body)
   const response = await fetch('/api/blogs/', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(body)
        })
        console.log("Response HER")
       const result = await response.json();
       console.log(result)
        console.log("After respone")
        return result
}


export const articles: Article[] = [
  {
    id: 1,
    authorAvatar: "images/user-avatar-lime.jpg",
    author: "Joe Momma",
    title: "Super Mario Galaxy the Movie is a Hit!",
    uploadDate: now,
    category: "Random",
    subtitle: "The beginning of something big is right around the corner",

    firstParagraph: `Happy Mario Galaxy weekend to those who celebrate. Granted, many were celebrating Easter and Passover this week, but theaters certainly had something to celebrate as well. This was the fourth-best Easter weekend ever for the top 10 at the box office.`,
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat posuere orci, ac lobortis erat porttitor sit amet. Donec vel facilisis nunc. Sed eu mauris venenatis, iaculis ante ut, tristique dolor. Proin auctor sagittis enim nec egestas. Aenean libero leo, mattis sed justo vitae, tincidunt sodales dolor. Nunc ullamcorper ullamcorper velit, ut sagittis odio rhoncus ac. Duis dapibus risus vitae felis malesuada, sit amet imperdiet neque scelerisque.
              Sed nibh massa, aliquet mollis nulla et, dictum malesuada tellus. Nulla vulputate nulla tortor, non lobortis nulla blandit vitae. Donec at mauris et nisi placerat tincidunt. Pellentesque facilisis, est sed blandit finibus, magna nulla porta nisi, quis lacinia ex turpis sit amet lacus. Mauris et convallis ipsum. Cras lacinia sit amet mi at sodales. Vestibulum gravida, odio sit amet consequat tristique, dolor mauris venenatis massa, non finibus lacus lorem eu mi. Nunc pharetra ac ante quis luctus. Donec nec neque maximus, consectetur risus et, auctor nisl. Aenean malesuada arcu orci, vitae lobortis urna condimentum nec.
              Nunc vel nibh nec mauris vehicula lacinia non et odio. Fusce porta arcu vitae urna faucibus, nec malesuada lectus aliquet. Suspendisse et venenatis lacus, ac accumsan lectus. Pellentesque dui elit, pellentesque at porta quis, vehicula eu arcu. Nunc pulvinar felis non nibh egestas ultricies. Nunc placerat, sem eu tincidunt fermentum, eros dui mollis nulla, sed vestibulum lorem quam eu nunc. Suspendisse imperdiet tristique vestibulum. Curabitur malesuada et felis et tempor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur consectetur augue non turpis tempor rutrum. Nulla a ipsum ut ipsum malesuada convallis sed vitae nisi. Aliquam ut consequat lorem. Proin quis tempor odio, ac porta quam. Suspendisse rhoncus odio lacus, aliquam suscipit risus consequat vitae.
              Nulla diam odio, venenatis viverra facilisis sit amet, vulputate sed mauris. Curabitur et neque ex. Sed vestibulum sit amet leo id malesuada. Fusce tempor, elit et tempus tempus, odio elit bibendum nisi, et imperdiet libero enim nec quam. Integer scelerisque tempor ex, ac bibendum mauris finibus nec. Vestibulum urna nulla, tristique nec lobortis in, pellentesque a ipsum. Nam lacinia dignissim est non convallis.
              Vivamus pharetra sed nisl eget laoreet. Ut ac tellus placerat, maximus enim nec, commodo ipsum. Etiam dolor arcu, congue vitae turpis eget, cursus tincidunt nibh. Duis sed tellus sed orci porta sagittis a at magna. Quisque sed massa eu ex dignissim mollis non consequat sem. Praesent congue lorem arcu, et dapibus purus faucibus eu. Sed convallis velit felis, ac posuere turpis dictum id. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla finibus commodo purus eget venenatis. Vestibulum quis feugiat metus, nec finibus leo. Aliquam vel ipsum hendrerit, rhoncus orci nec, ultrices odio.`
  },

  {
    id: 2,
    authorAvatar: "images/user-avatar-magenta.jpg",
    author: "Rick Flair",
    title: "Sonic the Hedgehog 25th Anniversary",
    uploadDate: now,
    category: "Opinion",
    subtitle: "I pity the fool who doesn't love sonic",
    image: "/assets/mock/SonicConcept5.png",
    firstParagraph: `During the Sonic the Hedgehog 25th Anniversary event over in Japan, Sonic Team presented early concepts for Sonic the Hedgehog and Friends.`,
    content: ` Some of the weirdest early prototypes included rabbit Sonic the Hedgehog, headband wearing Silver the Hedgehog and scarred up Shadow the Hedgehog. If you are a hedgehog, you started out with some weird designs.
    Check out the concept art for Sonic the Hedgehog and Friends below. Tell us what you think of these early concept art prototypes and if they did right with the final designs. Of course, these are just more of the popular Sonic the Hedgehog and Friends designs as they didn’t show a lot of the more niche characters (Fang, please Sonic Team).
    [Via NeoGAF]`
  },

  {
    id: 3,
    authorAvatar: "images/gear1.png",
    author: "Tony Stark",
    uploadDate: now,
    title: "The Metal Gear Story You've Never Heard",
    category: "Retro",
    subtitle: "The Metal Gear Solid audio drama",
    image: "/assets/mock/MGS_Drama_CD_story_3.webp",
    firstParagraph: `The Metal Gear Solid audio drama is a spinoff of the Metal Gear Solid video game released only in Japan. It was broadcast in weekly segments on a syndicate radio program called Club db, which aired on the radio station Nippon Cultural Broadcasting (JOQR) and its affiliates.`,
    content: ` The drama lasted twelve installments, which aired between October 24, 1998 and January 9, 1999. The drama was then collected in two albums, Drama CD Metal Gear Solid Vol. 1, released on December 4, 1998; and Drama CD Metal Gear Solid Vol. 2, released on January 8, 1999.
    While the audio drama did not receive an official overseas release, it saw an English translation by an online user named Juan. With his consent, an updated script was uploaded to MGS TUS by Marc Laidlaw. This script was used years later for a fandubbed version uploaded by Josh Griffiths.[1] Prior to this, Marc had been hoping do his own fandub with an updated translation.[2]
    The drama focuses Solid Snake, Roy Campbell, Meryl Silverburgh and Mei Ling as they participate in various missions following the events of the Shadow Moses Incident. The stories are not considered part of the Metal Gear canon, but are instead sidestories depicting hypothetical situations. The drama was directed by Shuyo Murata and written by the series' military adviser Motosada Mori. Yoji Shinkawa also provided the artwork for the liner notes. `
  },

  {
    id: 4,
    author: "Man Rock",
    uploadDate: now,
    title: "Ratchet and Clank a Classic that never ages",
    category: "Retro",
    subtitle: "Get Clanked with the Tank",
    image: "/assets/mock/ratchet_clank_!.jpg",
    firstParagraph: `I'm currently writing a retrospective on the first three Ratchet & Clank games for Retro PlayStation Magazine (RPM) and upon doing some deeper research into this franchise, I came upon an interesting factoid.`,
    content: ` While I believe Gran Turismo to be PlayStation's longest-running, active franchise, Ratchet & Clank seems to actually hold the honor of being PlayStation's most prolific series - with a staggering sixteen titles under its belt, and Ratchet is PlayStation's longest-running mascot character. Not every game is known for meeting a high-quality bar, as can be expected with that many entries, but each game in the franchise seems to be at least decent, and most of them are actually highly regarded and lauded games in PlayStation's library. I recently played and beat the original Ratchet & Clank and have some thoughts, most of them quite good.
            Ratchet & Clank, at its absolute core, is a 3D platformer game. It is part of the PlayStation 2's beloved "Big 3" of mascot platformer series, along with Jak and Daxter and Sly Cooper. Each of these series innovated on the genre in major ways, but Ratchet & Clank perhaps went the furthest. Where many 3D platformers feature very basic combat, Ratchet went all in. In fact, the weapons and gadgetry of the series are probably the most iconic feature of the franchise.`
  },
  {
    id: 5,
    title: "Halo Combat Evolved vs Halo",
    category: "Opinion",
    subtitle: "A new combat evolved experience",
    image: "/assets/mock/halo-compare.webp",
    content: `The Metal Gear Solid audio drama is a spinoff of the Metal Gear Solid video game released only in Japan. It was broadcast in weekly segments on a syndicate radio program called Club db, which aired on the radio station Nippon Cultural Broadcasting (JOQR) and its affiliates. The drama lasted twelve installments, which aired between October 24, 1998 and January 9, 1999. The drama was then collected in two albums, Drama CD Metal Gear Solid Vol. 1, released on December 4, 1998; and Drama CD Metal Gear Solid Vol. 2, released on January 8, 1999.
    While the audio drama did not receive an official overseas release, it saw an English translation by an online user named Juan. With his consent, an updated script was uploaded to MGS TUS by Marc Laidlaw. This script was used years later for a fandubbed version uploaded by Josh Griffiths.[1] Prior to this, Marc had been hoping do his own fandub with an updated translation.[2]
    The drama focuses Solid Snake, Roy Campbell, Meryl Silverburgh and Mei Ling as they participate in various missions following the events of the Shadow Moses Incident. The stories are not considered part of the Metal Gear canon, but are instead sidestories depicting hypothetical situations. The drama was directed by Shuyo Murata and written by the series' military adviser Motosada Mori. Yoji Shinkawa also provided the artwork for the liner notes. `
  },

  {
    id: 6,
    title: "Wukong the Game is killer",
    category: "Retro",
    subtitle: "If you think this is the best, you haven't seen nothing yet!",
    image: "/assets/mock/wukong.jpg",
    content: `The Metal Gear Solid audio drama is a spinoff of the Metal Gear Solid video game released only in Japan. It was broadcast in weekly segments on a syndicate radio program called Club db, which aired on the radio station Nippon Cultural Broadcasting (JOQR) and its affiliates. The drama lasted twelve installments, which aired between October 24, 1998 and January 9, 1999. The drama was then collected in two albums, Drama CD Metal Gear Solid Vol. 1, released on December 4, 1998; and Drama CD Metal Gear Solid Vol. 2, released on January 8, 1999.
    While the audio drama did not receive an official overseas release, it saw an English translation by an online user named Juan. With his consent, an updated script was uploaded to MGS TUS by Marc Laidlaw. This script was used years later for a fandubbed version uploaded by Josh Griffiths.[1] Prior to this, Marc had been hoping do his own fandub with an updated translation.[2]
    The drama focuses Solid Snake, Roy Campbell, Meryl Silverburgh and Mei Ling as they participate in various missions following the events of the Shadow Moses Incident. The stories are not considered part of the Metal Gear canon, but are instead sidestories depicting hypothetical situations. The drama was directed by Shuyo Murata and written by the series' military adviser Motosada Mori. Yoji Shinkawa also provided the artwork for the liner notes. `
  },

  {
    id: 7,
    author: "Joe Momma",
    title: "Super Mario Galaxy the Movie is a Hit!",
    uploadDate:now,
    category: "Random",
    subtitle: "The beginning of something big is right around the corner",
    image: "/assets/mock/super-mario-3d.jpg",
    firstParagraph: `Happy Mario Galaxy weekend to those who celebrate. Granted, many were celebrating Easter and Passover this week, but theaters certainly had something to celebrate as well. This was the fourth-best Easter weekend ever for the top 10 at the box office.`,
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent feugiat posuere orci, ac lobortis erat porttitor sit amet. Donec vel facilisis nunc. Sed eu mauris venenatis, iaculis ante ut, tristique dolor. Proin auctor sagittis enim nec egestas. Aenean libero leo, mattis sed justo vitae, tincidunt sodales dolor. Nunc ullamcorper ullamcorper velit, ut sagittis odio rhoncus ac. Duis dapibus risus vitae felis malesuada, sit amet imperdiet neque scelerisque.
              Sed nibh massa, aliquet mollis nulla et, dictum malesuada tellus. Nulla vulputate nulla tortor, non lobortis nulla blandit vitae. Donec at mauris et nisi placerat tincidunt. Pellentesque facilisis, est sed blandit finibus, magna nulla porta nisi, quis lacinia ex turpis sit amet lacus. Mauris et convallis ipsum. Cras lacinia sit amet mi at sodales. Vestibulum gravida, odio sit amet consequat tristique, dolor mauris venenatis massa, non finibus lacus lorem eu mi. Nunc pharetra ac ante quis luctus. Donec nec neque maximus, consectetur risus et, auctor nisl. Aenean malesuada arcu orci, vitae lobortis urna condimentum nec.
              Nunc vel nibh nec mauris vehicula lacinia non et odio. Fusce porta arcu vitae urna faucibus, nec malesuada lectus aliquet. Suspendisse et venenatis lacus, ac accumsan lectus. Pellentesque dui elit, pellentesque at porta quis, vehicula eu arcu. Nunc pulvinar felis non nibh egestas ultricies. Nunc placerat, sem eu tincidunt fermentum, eros dui mollis nulla, sed vestibulum lorem quam eu nunc. Suspendisse imperdiet tristique vestibulum. Curabitur malesuada et felis et tempor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur consectetur augue non turpis tempor rutrum. Nulla a ipsum ut ipsum malesuada convallis sed vitae nisi. Aliquam ut consequat lorem. Proin quis tempor odio, ac porta quam. Suspendisse rhoncus odio lacus, aliquam suscipit risus consequat vitae.
              Nulla diam odio, venenatis viverra facilisis sit amet, vulputate sed mauris. Curabitur et neque ex. Sed vestibulum sit amet leo id malesuada. Fusce tempor, elit et tempus tempus, odio elit bibendum nisi, et imperdiet libero enim nec quam. Integer scelerisque tempor ex, ac bibendum mauris finibus nec. Vestibulum urna nulla, tristique nec lobortis in, pellentesque a ipsum. Nam lacinia dignissim est non convallis.
              Vivamus pharetra sed nisl eget laoreet. Ut ac tellus placerat, maximus enim nec, commodo ipsum. Etiam dolor arcu, congue vitae turpis eget, cursus tincidunt nibh. Duis sed tellus sed orci porta sagittis a at magna. Quisque sed massa eu ex dignissim mollis non consequat sem. Praesent congue lorem arcu, et dapibus purus faucibus eu. Sed convallis velit felis, ac posuere turpis dictum id. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla finibus commodo purus eget venenatis. Vestibulum quis feugiat metus, nec finibus leo. Aliquam vel ipsum hendrerit, rhoncus orci nec, ultrices odio.`
  },

  {
    id: 8,
    author: "Rick Flair",
    title: "The 2nd article of the New Blog!",
    uploadDate: now,
    category: "Opinion",
    subtitle: "The beginning of something big is right around the corner",
    image: "/assets/mock/PS4-controller-1.svg",
    firstParagraph: `During the Sonic the Hedgehog 25th Anniversary event over in Japan, Sonic Team presented early concepts for Sonic the Hedgehog and Friends.`,
    content: ` Some of the weirdest early prototypes included rabbit Sonic the Hedgehog, headband wearing Silver the Hedgehog and scarred up Shadow the Hedgehog. If you are a hedgehog, you started out with some weird designs.
    Check out the concept art for Sonic the Hedgehog and Friends below. Tell us what you think of these early concept art prototypes and if they did right with the final designs. Of course, these are just more of the popular Sonic the Hedgehog and Friends designs as they didn’t show a lot of the more niche characters (Fang, please Sonic Team).
    [Via NeoGAF]`
  },

  {
    id: 9,
    author: "Tony Stark",
    title: "Checking out what gifs look like",
    category: "Retro",
    subtitle: "Should we pause them for the article's background or not?",
    image: "/assets/mock/BlueFlowerBall.gif",
    firstParagraph: `The Metal Gear Solid audio drama is a spinoff of the Metal Gear Solid video game released only in Japan. It was broadcast in weekly segments on a syndicate radio program called Club db, which aired on the radio station Nippon Cultural Broadcasting (JOQR) and its affiliates.`,
    content: ` The drama lasted twelve installments, which aired between October 24, 1998 and January 9, 1999. The drama was then collected in two albums, Drama CD Metal Gear Solid Vol. 1, released on December 4, 1998; and Drama CD Metal Gear Solid Vol. 2, released on January 8, 1999.
    While the audio drama did not receive an official overseas release, it saw an English translation by an online user named Juan. With his consent, an updated script was uploaded to MGS TUS by Marc Laidlaw. This script was used years later for a fandubbed version uploaded by Josh Griffiths.[1] Prior to this, Marc had been hoping do his own fandub with an updated translation.[2]
    The drama focuses Solid Snake, Roy Campbell, Meryl Silverburgh and Mei Ling as they participate in various missions following the events of the Shadow Moses Incident. The stories are not considered part of the Metal Gear canon, but are instead sidestories depicting hypothetical situations. The drama was directed by Shuyo Murata and written by the series' military adviser Motosada Mori. Yoji Shinkawa also provided the artwork for the liner notes. `
  }
];


export function getArticleById(id: number): Article | undefined {
  return articles.find((a) => a.id === id)
}