// One entry per project. Each becomes a tile on /projects and a page at /projects/<slug>.
//
// Files for a project go in public/projects/<slug>/ and are written here as
// '/projects/<slug>/file-name.png'. A missing image shows a labelled placeholder.
//
// A project page is a list of "blocks", shown top to bottom:
//   { type: 'text', text: '...' }                         paragraph (dropCap: true for a big first letter)
//   { type: 'image', src: '...', alt: '...' }             full width image
//   { type: 'imageText', src, alt, text, imageSide }      image beside a paragraph ('left' or 'right')
//   { type: 'wave' }                                      wavy divider (submarine: picture that sails across on scroll)
//   { type: 'fontTester' }                                box to try out the Subno-type font
//   { type: 'pdf', src: '...', title: '...' }             PDF viewer
//   { type: 'video', src: '...' }                         video player (src: null shows a placeholder)
//   { type: 'embed', src: '...', title: '...' }           another web page, like an HTML animation
//   { type: 'button', src: '...', text: '...' }           pink pill button linking anywhere (other sites open in a new tab)
//
// decorations: big shapes behind the text. top is a % of the page height, left/right a % of its width.
// customPage: true means the page has its own file in src/pages/projects/ instead of blocks.

export const projects = [
  {
    slug: 'subno-type',
    title: 'subno-type',
    thumb: '/projects/subno-type/thumb.svg',
    titleImage: '/projects/subno-type/title.svg',
    decorations: [
      { src: '/projects/subno-type/letter-a.svg', top: '6%', right: '-6%', width: '45%' },
      { src: '/projects/subno-type/letter-s.svg', top: '30%', left: '-8%', width: '25%' },
      { src: '/projects/subno-type/letter-g.svg', top: '52%', right: '-4%', width: '25%' },
    ],
    blocks: [
      {
        type: 'text',
        dropCap: true,
        text: 'This project started when I was invited to sit in on a marketing and design meeting at a previous company. The idea was to redesign the company’s whole logo suite, giving it a more cohesive feeling. Naturally, I decided making a whole font was the best way to start prototyping before meeting back a week later and comparing with the team.',
      },
      {
        type: 'imageText',
        imageSide: 'right',
        src: '/projects/subno-type/toolbox.svg',
        alt: 'Toolbox window showing an early letter prototype',
        text: 'The company wanted to redesign its whole logo suite to feel more cohesive. As a B2B SaaS company, a monospaced font suited the brand, but I wanted to keep it organic-looking so it would be more appealing to the eye. I designed a process to streamline the production, and it became the foundation for the logos.',
      },
      {
        type: 'image',
        src: '/projects/subno-type/letter-guidelines.svg',
        alt: 'Letter guidelines for capital, tall lowercase and short lowercase letters',
      },
      {
        type: 'text',
        text: 'Eventually, I had all capital and lowercase letters, plus a few special symbols. Of course, not forgetting the original course of action, there still was the question of making logos.',
      },
      { type: 'fontTester' },
      { type: 'wave', submarine: '/projects/subno-type/submarine.svg' },
      {
        type: 'imageText',
        imageSide: 'left',
        src: '/projects/subno-type/logo-maker.svg',
        alt: 'Logo maker window showing the Ab logo',
        text: 'Since the logos needed to stay simple and cohesive, even across software with different purposes, I took inspiration from the Autodesk® logo suite. Each logo is a box containing a capital and a lowercase letter from the software’s name, paired with a low-resolution graphic related to the app’s purpose. I limited each logo to two colors for simplicity.',
      },
      {
        type: 'text',
        text: 'The main balancing act was making a monospaced font feel organic rather than rigid. Drawing a full alphabet in a week was the other big one, which the letter guides helped solve. On the logo side, the apps in the suite were closely related, so the graphics sometimes echo the software’s name more than its function. It would have been hard to come up with more than three ways to represent a word like “link.”',
      },
      {
        type: 'image',
        src: '/projects/subno-type/logo-formula.svg',
        alt: 'A white box, plus two letters, plus a graphic',
      },
      {
        type: 'text',
        text: 'I learned how to balance letter proportions and styles, and how to turn a set of drawings into a working typeface. I plan to keep expanding it with more punctuation and special characters, including full French language support.',
      },
      {
        type: 'image',
        src: '/projects/subno-type/logos.svg',
        alt: 'PartSurfer, NestLink and TimeSheet logos',
      },
      { type: 'wave' },
      {
        type: 'text',
        text: 'The biggest takeaway was seeing my prototypes presented, critiqued, and used to shape real decisions for the company. Getting that feedback firsthand showed me how essential critique is to growing as a designer.',
      },
    ],
  },
  {
    slug: 'logo-design',
    title: 'logo design',
    thumb: '/projects/logo-design/thumb.svg',
    customPage: true, // see src/pages/projects/LogoDesign.jsx
  },
  {
    slug: 'website-redesign',
    title: 'website redesign',
    thumb: '/projects/website-redesign/thumb.svg',
    blocks: [
      {
        type: 'text',
        dropCap: true,
        text: 'BizOps360 is a CRM website with more than 150 pages, used every day by every employee. It was moving from ASP.NET to Blazor, and I redesigned the whole thing to make that transition smoother, rebuilding it around reusable components instead of page after page of one-off code.',
      },
      {
        type: 'text',
        text: 'I started to work on this project during my first term at QBuild, where it served as a side project when the IT work was slow. I then got the chance to come back for another term where I could devote my full time to the redesign, as I was now a UI/UX designer and web developer for the BizOps360 project. '
      },
      {
        type: 'text',
        text: 'The original site was bloated. It was mostly written by one person about 15 years ago, and no one else really knew how it worked. It also lacked abstraction, so when it came time to add a new page, it was hard to even know where to start.',
      },
      { type: 'wave' },
      {
        type: 'imageText',
        imageSide: 'left',
        src: '/projects/website-redesign/sign-in.png',
        alt: 'A reusable page template showing a list of database records',
        text: 'Since it is a CRM, a lot of the pages do the same job: show a list of data from the database. So I focused on abstraction and page templates. Instead of rebuilding the same list over and over, a new page can start from a template and reuse the same components, which keeps the site consistent and makes it much easier to know where to begin.',
      },
      { type: 'image', src: '/projects/website-redesign/template-v1.png', alt: 'A BizOps360 page after the redesign' },
      {
        type: 'text',
        text: 'This is an example of a template that was realized to streamline the page conversion process. Since this is for a CRM, a lot of pages are used for data visualization with data being pulled from multiple databases. This made the challenge of design apply not only to the front-end but now also the back-end as I had to design proper views and data entries to organize all the information without making any requests overly complicated or heavy. ',
      },
      {
        type: 'imageText',
        imageSide: 'left',
        text: 'I also took on a study of the whole CRM constituted of 150+ pages in an effort to reduce this number greatly for both accessibility and efficiency. My search led to reducing the pages by about half as some were not in use, some were broken or duplicated, and some, like all the adding functions, could be made into popups within another page.',
        src: '/projects/website-redesign/navigation.png',
        alt: 'A snippet of the new BizOps360 navigation bar',
      },
      {
        type: 'wave',
      },
      {
        type: 'text',
        text: 'The redesign also brought in the new logo I made for the site, and it does more than sit in the corner: the animated version, with its four rings spinning in opposite directions, is the website’s loader.',
      },
      { type: 'embed', src: '/projects/animations/css-animation.html', title: 'The BizOps360 loader' },
      {
        type: 'button',
        src: '/projects/logo-design',
        text: 'Read more about the logo design process',
      },
      { type: 'wave' },
      {
        type: 'text',
        text: 'This was my first really big project, and I took a lot away from it. Working on the back end, the design and the front end at the same time made the whole development phase easier, because each side shaped the others. Ongoing feedback from users kept me grounded, and I learned how to translate what they needed into real technical solutions. Most of all, I learned that publishing to production is not the end: a good solution keeps improving after it ships.',
      },
    ],
  },
  {
    slug: 'timesheets',
    title: 'timesheets',
    thumb: '/projects/timesheets/thumb.svg',
    blocks: [
      {
        type: 'text',
        dropCap: true,
        text: 'BizOps360 TimeSheets is where employees log the hours they work each week. I worked on two sides of it: planning how a week of time sheet data is structured, and making sure the people using the app could find their way around it. The first one meant thinking like the code, the second one meant thinking like someone opening the app for the very first time.',
      },
      {
        type: 'text',
        text: 'For the user guide, I built a guided walkthrough of the TimeSheets screen. Instead of a wall of instructions, pop-up cards point at one part of the screen at a time, like a single entry and each of its sections, so you learn the app while looking right at it. Try it below: click the red arrow on each card to go to the next step.',
      },
      {
        type: 'popup',
        src: '/projects/timesheets/walkthrough/index.html',
        title: 'Clickable TimeSheets guided walkthrough',
        preview: '/projects/timesheets/walkthrough/00-cover.svg',
        buttonText: 'try the walkthrough',
      },
      { type: 'wave' },
      {
        type: 'text',
        text: 'Behind the screen is the GetTimeSheetWeek DTO, the shape of the data the app receives for one week. A week has start and end dates, its total hours and its R&D hours. It holds up to seven days, each with its own total. Each day then holds any number of entries, and every entry carries its work order, project, description, time, R&D flag, tag and colours.',
      },
      { type: 'pdf', src: '/projects/timesheets/get-timesheet-week-dto.pdf', title: 'GetTimeSheetWeek DTO' },
      {
        type: 'text',
        text: 'A UML diagram is great for developers, but not everyone reads them. So I made an animation that tells the same story: an empty week is created, then entries get added to each day one by one, until the whole structure has built itself in front of you. No code reading required.',
      },
      { type: 'video', src: '/projects/timesheets/timesheet-dto-animation.mp4' },
      {
        type: 'text',
        text: 'This project taught me that planning data is a design problem too. Getting the structure right first made everything built on top of it simpler, and explaining it twice, once as a diagram and once as an animation, showed me how much the format changes who can understand an idea.',
      },
    ],
  },
  {
    slug: 'personal-blog',
    title: 'personal blog',
    thumb: '/projects/personal-blog/thumb.svg',
    blocks: [
      {
        type: 'text',
        dropCap: true,
        text: '“The teenage girl” is my personal blog, and although I am no longer a teenage girl, I will never stop feeling that way inside which I think justifies this being the title of my corner of the Internet. I wanted it to look exactly like the person writing it, which is the same rule I followed for this portfolio.',
      },
      { type: 'youtube', src: 'https://youtu.be/EGHkZzWSXiI', title: 'Demo of the teenage girl blog' },
      {
        type: 'button',
        src: 'https://matematlk.github.io/the-teenage-girl/',
        text: 'Visit the blog'
      },
      {
        type: 'text',
        text: 'The layout stays simple so the personality can do the talking. A top menu leads to the home, movies and contact pages. Posts are sorted by mood into quickie, introspection, boys and other. A scrolling “latest post” banner and a “read more” list keep things moving, and an about card sits in the sidebar so you always know who is talking.',
      },
      { type: 'wave' },
      {
        type: 'imageText',
        imageSide: 'right',
        src: '/projects/personal-blog/movie-tickets.png',
        alt: 'Movie reviews designed as cinema tickets',
        text: 'My favourite detail is that every movie review is a cinema ticket. Each one has the genre, the title, a star rating and even a barcode. It turns a plain list of reviews into something you want to collect. \n The whole layout is strongly inspired by older websites from the beginning of the Internet, back when Wix or Base44 were not yet a thing and you had to learn HTML if you wanted a blog. \n For this reason, the components, are kept very simple and the layout follows a vintage-looking grid pattern.',
      },
      { type: 'wave' },
      {
        type: 'image', src: '/projects/personal-blog/movies-page.png', alt: 'Movies page from the blog', width: '100%'
      },
      {
        type: 'text',
        text: 'The movie page is designed as a film strip so that every movie entry is like a scene from my memories. I kept the component simple, adding the date watched and the rating only. I also plan on expanding the movies later, perhaps with a popup that could show the movie description and genre in one place.'
      },
      {
        type: 'wave'
      },
      {
        type: 'text',
        text: 'Building the blog taught me how to organise content so it is easy to browse, and how small visual details can give a whole website its identity. It is also the project that convinced me design is at its best when it feels personal. This is an ongoing project that I have been working on for 3 years now and am constantly improving, so stay alert for updates!',
      },
      {
        type: 'text',
        text: 'The blog is built with React, and hosted on Netlify. The content is written in Markdown, and the blog is deployed with a GitHub Action that builds the site and deploys it to Netlify. The blog is also open source, so you can see how it is built and how you can contribute to it.',
      },
    ],
  },
  {
    slug: 'animations',
    title: 'animations',
    thumb: '/projects/animations/thumb.svg',
    blocks: [
      {
        type: 'text',
        dropCap: true,
        text: 'The new BizOps360 logo is all about a constantly moving cycle, so it only made sense to make it actually move. I animated its four rings so each one turns the opposite way to its neighbour, on a five second loop. It makes a perfect loading or welcome animation for the app. I made it twice, once with CSS and once with SVG’s own animation, to compare the two.',
      },
      { type: 'image', src: '/projects/animations/frames.svg', alt: 'The logo at the start, after 1.5 seconds and after 3 seconds' },
      {
        type: 'text',
        text: 'In the CSS version, each ring is its own group with its own @keyframes rotation, turning left or right. It is great for web pages: the speed and timing can be tweaked straight from a stylesheet without touching the logo itself.',
      },
      { type: 'embed', src: '/projects/animations/css-animation.html', title: 'Logo animated with CSS' },
      { type: 'wave' },
      {
        type: 'text',
        text: 'In the SVG version, the rotation lives inside the file itself with <animateTransform>. No stylesheet needed: the file animates itself, so it works anywhere an image can go.',
      },
      { type: 'image', src: '/projects/animations/svg-animation.svg', alt: 'Logo animated with SVG', width: '35%' },
      {
        type: 'text',
        text: 'Same animation with two tools, which means that I can pick the right one depending on where the logo will live, and I get double the skills',
      },
    ],
  },
]

// Finds a project by its slug, or returns undefined.
export const findProject = (slug) => projects.find((p) => p.slug === slug)
