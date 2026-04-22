export interface Sermon {
  id: string;
  title: string;
  description: string;
  preacher: string;
  preacherImage: string;
  thumbnail: string;
  videoUrl: string;
  duration: string;
  date: string;
  topics: string[];
  views: number;
  isFeatured: boolean;
}

export interface Program {
  id: string;
  title: string;
  description: string;
  host: string;
  thumbnail: string;
  scheduledTime: string;
  dayOfWeek: string;
  isLive: boolean;
  isCurrentlyLive: boolean;
  streamUrl: string;
}

export interface Testimony {
  id: string;
  name: string;
  location: string;
  testimony: string;
  image: string;
  date: string;
  isFeatured: boolean;
}

export const sermons: Sermon[] = [
  {
    id: '1',
    title: 'The Power of Faith in Uncertain Times',
    description: 'Discover how to stand firm in your faith when challenges arise. This powerful message reveals the keys to overcoming doubt and stepping into divine purpose.',
    preacher: 'Pastor Michael Rivers',
    preacherImage: 'https://picsum.photos/seed/pastor1/200/200',
    thumbnail: 'https://picsum.photos/seed/sermon1/800/450',
    videoUrl: '/sermons/power-of-faith',
    duration: '45:32',
    date: '2026-04-19',
    topics: ['Faith', 'Overcoming', 'Divine Purpose'],
    views: 24500,
    isFeatured: true,
  },
  {
    id: '2',
    title: 'Breaking Generational Curses',
    description: 'Uncover the truth about generational patterns and learn how to break free from cycles that hold you back from God\'s promises.',
    preacher: 'Apostle Sarah Thompson',
    preacherImage: 'https://picsum.photos/seed/pastor2/200/200',
    thumbnail: 'https://picsum.photos/seed/sermon2/800/450',
    videoUrl: '/sermons/generational-curses',
    duration: '52:18',
    date: '2026-04-12',
    topics: ['Deliverance', 'Healing', 'Freedom'],
    views: 32100,
    isFeatured: true,
  },
  {
    id: '3',
    title: 'Walking in Divine Healing',
    description: 'Experience supernatural restoration as you learn to align with God\'s healing power and receive your divine recovery.',
    preacher: 'Bishop James Williams',
    preacherImage: 'https://picsum.photos/seed/pastor3/200/200',
    thumbnail: 'https://picsum.photos/seed/sermon3/800/450',
    videoUrl: '/sermons/divine-healing',
    duration: '48:45',
    date: '2026-04-05',
    topics: ['Healing', 'Restoration', 'Miracles'],
    views: 18700,
    isFeatured: true,
  },
  {
    id: '4',
    title: 'The Language of Heaven',
    description: 'Unlock the mysteries of prayer and worship as you learn to communicate with God in ways that release heaven\'s power on earth.',
    preacher: 'Pastor Michael Rivers',
    preacherImage: 'https://picsum.photos/seed/pastor1/200/200',
    thumbnail: 'https://picsum.photos/seed/sermon4/800/450',
    videoUrl: '/sermons/language-of-heaven',
    duration: '41:22',
    date: '2026-03-29',
    topics: ['Prayer', 'Worship', 'Power'],
    views: 21300,
    isFeatured: false,
  },
  {
    id: '5',
    title: 'Financial Breakthrough Principles',
    description: 'Discover God\'s principles for prosperity and learn how to steward resources according to divine wisdom.',
    preacher: 'Apostle Sarah Thompson',
    preacherImage: 'https://picsum.photos/seed/pastor2/200/200',
    thumbnail: 'https://picsum.photos/seed/sermon5/800/450',
    videoUrl: '/sermons/financial-breakthrough',
    duration: '55:10',
    date: '2026-03-22',
    topics: ['Prosperity', 'Stewardship', 'Faith'],
    views: 15600,
    isFeatured: false,
  },
  {
    id: '6',
    title: 'Holy Spirit: Your Divine Helper',
    description: 'Deepen your relationship with the Holy Spirit and learn to operate in supernatural gifts.',
    preacher: 'Bishop James Williams',
    preacherImage: 'https://picsum.photos/seed/pastor3/200/200',
    thumbnail: 'https://picsum.photos/seed/sermon6/800/450',
    videoUrl: '/sermons/holy-spirit-helper',
    duration: '47:33',
    date: '2026-03-15',
    topics: ['Holy Spirit', 'Gifts', 'Power'],
    views: 19800,
    isFeatured: false,
  },
];

export const programs: Program[] = [
  {
    id: '1',
    title: 'Sunday Morning Worship',
    description: 'Join us for an inspiring time of worship, praise, and powerful preaching of the Word.',
    host: 'Pastor Michael Rivers',
    thumbnail: 'https://picsum.photos/seed/program1/400/225',
    scheduledTime: '09:00 AM',
    dayOfWeek: 'Sunday',
    isLive: true,
    isCurrentlyLive: true,
    streamUrl: '/live/sunday-worship',
  },
  {
    id: '2',
    title: 'Midweek Bible Study',
    description: 'Deep dive into the Scriptures with interactive teaching and group discussion.',
    host: 'Apostle Sarah Thompson',
    thumbnail: 'https://picsum.photos/seed/program2/400/225',
    scheduledTime: '7:00 PM',
    dayOfWeek: 'Wednesday',
    isLive: false,
    isCurrentlyLive: false,
    streamUrl: '/live/bible-study',
  },
  {
    id: '3',
    title: 'Friday Prayer Night',
    description: 'An evening of intimate prayer, intercession, and supernatural encounters.',
    host: 'Bishop James Williams',
    thumbnail: 'https://picsum.photos/seed/program3/400/225',
    scheduledTime: '8:00 PM',
    dayOfWeek: 'Friday',
    isLive: false,
    isCurrentlyLive: false,
    streamUrl: '/live/prayer-night',
  },
  {
    id: '4',
    title: 'Saturday Youth Service',
    description: 'Dynamic worship and relevant teaching for the next generation of believers.',
    host: 'Minister David Cole',
    thumbnail: 'https://picsum.photos/seed/program4/400/225',
    scheduledTime: '5:00 PM',
    dayOfWeek: 'Saturday',
    isLive: false,
    isCurrentlyLive: false,
    streamUrl: '/live/youth-service',
  },
];

export const testimonies: Testimony[] = [
  {
    id: '1',
    name: 'Margaret Okonkwo',
    location: 'Lagos, Nigeria',
    testimony: 'After 12 years of infertility, God answered our prayers through the healing ministry. Today, I hold my miracle baby in my arms. To God be the glory!',
    image: 'https://picsum.photos/seed/testimony1/400/400',
    date: '2026-04-15',
    isFeatured: true,
  },
  {
    id: '2',
    name: 'James Crawford',
    location: 'Atlanta, USA',
    testimony: 'Healed from stage 4 cancer after praying in faith. Medical reports show no trace of disease. God is faithful!',
    image: 'https://picsum.photos/seed/testimony2/400/400',
    date: '2026-04-10',
    isFeatured: true,
  },
  {
    id: '3',
    name: 'Fatima Al-Rashid',
    location: 'Dubai, UAE',
    testimony: 'God delivered me from a 20-year addiction and restored my family. My husband received Christ last month!',
    image: 'https://picsum.photos/seed/testimony3/400/400',
    date: '2026-04-05',
    isFeatured: false,
  },
  {
    id: '4',
    name: 'Robert Kimani',
    location: 'Nairobi, Kenya',
    testimony: 'Business restored after financial ruin. God provided a supernatural contract that saved my company and employed 50 people.',
    image: 'https://picsum.photos/seed/testimony4/400/400',
    date: '2026-03-28',
    isFeatured: false,
  },
  {
    id: '5',
    name: 'Elena Vasquez',
    location: 'Madrid, Spain',
    testimony: 'Rebuilding marriage after 15 years of struggle. God brought healing and restoration beyond what we could imagine.',
    image: 'https://picsum.photos/seed/testimony5/400/400',
    date: '2026-03-20',
    isFeatured: false,
  },
  {
    id: '6',
    name: 'David Osei',
    location: 'Accra, Ghana',
    testimony: 'Delivered from demonic oppression after years of traditional medicine failed. Now I serve in the prayer ministry leading others to freedom.',
    image: 'https://picsum.photos/seed/testimony6/400/400',
    date: '2026-03-15',
    isFeatured: false,
  },
];

export const scriptures = [
  { verse: 'No weapon that is fashioned against you shall prosper, and every tongue that shall rise against you in judgment you shall condemn.', reference: 'Isaiah 54:17' },
  { verse: 'For I know the plans I have for you, declares the Lord, plans to prosper you and not to harm you, plans to give you hope and a future.', reference: 'Jeremiah 29:11' },
  { verse: 'He who dwells in the shelter of the Most High will rest in the shadow of the Almighty.', reference: 'Psalm 91:1' },
  { verse: 'Be strong and courageous. Do not be afraid; for the Lord your God will be with you wherever you go.', reference: 'Joshua 1:9' },
  { verse: 'And we know that all things work together for good to those who love God, to those who are called according to His purpose.', reference: 'Romans 8:28' },
];

export const preachers = ['Pastor Michael Rivers', 'Apostle Sarah Thompson', 'Bishop James Williams', 'Minister David Cole'];
export const topics = ['Faith', 'Healing', 'Deliverance', 'Prayer', 'Worship', 'Prosperity', 'Holy Spirit', 'Family', 'Miracles', 'Freedom'];