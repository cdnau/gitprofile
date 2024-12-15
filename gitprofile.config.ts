// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'cdnau', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/gitprofile/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['arifszn/gitprofile', 'arifszn/pandora'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'TobeIT68',
          description:
            '  " ผมได้รับโอกาศไปเข้าค่าย Tobeit68 ของสถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง โดยผมมีโปรเจคทำในค่ายเกี่ยวกับ AI ตรวจจับอุบัติเหตุและประเมินความรุนแรง พร้อมส่งข้อมูลไปยังโรงพยาบาลและหน่วยกู้ภัย และเลือกเส้นทางที่เร็วที่สุดในการไปยังจุดเกิดเหตุ เพื่อเพิ่มโอกาสในการช่วยชีวิต  โดยโปรเจคครั้งนี้ ทีมผมได้รับรางวัล VISIONARY INTELLIGENCE AWARD และ POPULAR AWARD "  ',
          imageUrl:
            'https://scontent.fbkk5-4.fna.fbcdn.net/v/t1.15752-9/462735414_928573609226425_217372936338466359_n.jpg?stp=dst-jpg_s2048x2048_tt6&_nc_cat=110&ccb=1-7&_nc_sid=9f807c&_nc_ohc=qJwFL65KXNEQ7kNvgE2WL0r&_nc_zt=23&_nc_ht=scontent.fbkk5-4.fna&oh=03_Q7cD1QETJuQ2EVgMYeVbnW_ljYZgqlZ3OEzZUXp-HedgtTslng&oe=67865DE3',
          link: 'https://scontent.fbkk5-4.fna.fbcdn.net/v/t1.15752-9/462735414_928573609226425_217372936338466359_n.jpg?stp=dst-jpg_s2048x2048_tt6&_nc_cat=110&ccb=1-7&_nc_sid=9f807c&_nc_ohc=qJwFL65KXNEQ7kNvgE2WL0r&_nc_zt=23&_nc_ht=scontent.fbkk5-4.fna&oh=03_Q7cD1QETJuQ2EVgMYeVbnW_ljYZgqlZ3OEzZUXp-HedgtTslng&oe=67865DE3',
        },
        {
          title: 'Project Name',
          description:
            '“ผมได้รับคัดเลือกเข้าค่าย SwiftCodingClub TH iOS Developer Bootcamp ของ จุฬาลงกรณ์มหาวิทยาลัย ซึ่งเป็นโอกาสที่ดีในการเรียนรู้การพัฒนาแอป iOS ด้วยภาษา Swift ในค่ายนี้ ผมได้ฝึกฝนการเขียนโค้ดและพัฒนาแอปพลิเคชันจากประสบการณ์จริง ทำให้ผมเข้าใจการทำงานของแอป iOS มากขึ้น และพัฒนาทักษะการคิดเชิงตรรกะและการทำงานเป็นทีม                                           ในโปรเจคนี้ ผมได้ทำเป็นแอป  TODO-list โดยตั้งเวลาให้ตัวแอปแจ้งเตือน เพื่อเราจะทำอะไรสักอย่างแล้วหากเราเกิดลืม เราก็กดตัวตั้งเวลาให้แจ้งเตือนให้เราก็ได้',
          imageUrl:
            'https://scontent.fbkk5-3.fna.fbcdn.net/v/t1.15752-9/462572763_860110189370789_6898264692202902138_n.png?_nc_cat=105&ccb=1-7&_nc_sid=9f807c&_nc_ohc=buUS2jQawt8Q7kNvgFhrtJz&_nc_zt=23&_nc_ht=scontent.fbkk5-3.fna&oh=03_Q7cD1QGF4pvt6s2rrf9RiITGNhIentG8NElfNHOu-wNPjS5VKw&oe=678667C7',
          link: 'https://example.com',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Chindanai Rueangsombat',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: '',
    twitter: 'cdn.au',
    mastodon: '',
    researchGate: '',
    facebook: 'Chindanai Rueangsombat',
    instagram: 'cdn.au',
    reddit: '',
    threads: '',
    youtube: 'Au-fq9ef', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: '',
    phone: '',
    email: 'cdn.au8@gmail.com',
  },
  resume: {
    fileUrl:
      'https://www.canva.com/design/DAGU7maeQUY/wAoovjebAWwy7TEoZcxGUg/edit?utm_content=DAGU7maeQUY&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Python',
    'Html',
    'JavaScript',
    'CSS',
    'Microsoft office',
    'Premiere Pro',
    'Git',
    'tailwind',
  ],
  experiences: [
    {
      company: 'Platinum Fruits co. ltd',
      position: 'IT SUPPORT as an internship',
      from: 'March,21 2024',
      to: 'April,19 2024',
      companyLink: 'https://www.platinumfruits888.com',
    },
  ],
  educations: [
    {
      institution: 'Dolvidhaya School',
      degree: 'Grade 1-6',
      from: '2013',
      to: '2018',
      
    },
    {
      institution: 'TriamudomSuksa Phattanakarn School',
      degree: 'Grade 7-12',
      from: '2019',
      to: 'Present',
      
    },
  ],
  publications: [
    {
      title: 'Publication Title',
      conferenceName: '',
      journalName: 'Journal Name',
      authors: 'John Doe, Jane Smith',
      link: 'https://example.com',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
      title: 'Publication Title',
      conferenceName: 'Conference Name',
      journalName: '',
      authors: 'John Doe, Jane Smith',
      link: 'https://example.com',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: '', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'lofi',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
