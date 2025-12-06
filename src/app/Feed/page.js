"use client";
import React, { useState } from 'react';
import { Heart, MessageCircle, Repeat2, Share, MoreHorizontal, Sparkles, Image, Smile, Calendar } from 'lucide-react';

function Feed() {
  const [strings, setStrings] = useState([
  {
    id: 1,
    username: "pratik_codes",
    name: "Pratik Shinde",
    avatar: "https://i.pravatar.cc/150?img=32",
    content: "Just deployed my AI-powered portfolio! 🚀",
    time: "2h",
    likes: 14,
    comments: 3,
    retweets: 1,
    liked: false
  },
  {
    id: 2,
    username: "dev_sam",
    name: "Sam Patel",
    avatar: "https://i.pravatar.cc/150?img=11",
    content: "Learning Next.js 15 server actions. The DX is insane 🔥",
    time: "4h",
    likes: 27,
    comments: 5,
    retweets: 2,
    liked: false
  },
  {
    id: 3,
    username: "tech_girl",
    name: "Riya",
    avatar: "https://i.pravatar.cc/150?img=5",
    content: "2 AM coding sessions hit differently 😭💻",
    time: "6h",
    likes: 43,
    comments: 8,
    retweets: 4,
    liked: false
  },
  {
    id: 4,
    username: "frontend_legend",
    name: "Amit",
    avatar: "https://i.pravatar.cc/150?img=22",
    content: "Tailwind + Framer Motion = deadly combo 💯",
    time: "1d",
    likes: 91,
    comments: 12,
    retweets: 6,
    liked: false
  },

  // ---------- MORE TWEETS BELOW ----------

  {
    id: 5,
    username: "cloud_guru",
    name: "Arnav",
    avatar: "https://i.pravatar.cc/150?img=51",
    content: "AWS bills feel like gambling 🎰",
    time: "1h",
    likes: 18,
    comments: 2,
    retweets: 1,
    liked: false
  },
  {
    id: 6,
    username: "design_disha",
    name: "Disha",
    avatar: "https://i.pravatar.cc/150?img=47",
    content: "UI is not UX. And UX is not UI. Stop mixing. 😑",
    time: "3h",
    likes: 36,
    comments: 6,
    retweets: 3,
    liked: false
  },
  {
    id: 7,
    username: "backend_bhai",
    name: "Rohit",
    avatar: "https://i.pravatar.cc/150?img=17",
    content: "SQL > NoSQL for 90% of projects. Fight me.",
    time: "30m",
    likes: 55,
    comments: 9,
    retweets: 4,
    liked: false
  },
  {
    id: 8,
    username: "react_queen",
    name: "Sneha",
    avatar: "https://i.pravatar.cc/150?img=12",
    content: "Finally understood useCallback after 2 years 😭",
    time: "50m",
    likes: 29,
    comments: 4,
    retweets: 1,
    liked: false
  },
  {
    id: 9,
    username: "bug_hunter",
    name: "Karan",
    avatar: "https://i.pravatar.cc/150?img=28",
    content: "Fixed a bug I created 6 months ago. Pathetic.",
    time: "7h",
    likes: 71,
    comments: 10,
    retweets: 2,
    liked: false
  },
  {
    id: 10,
    username: "ml_maniac",
    name: "Nidhi",
    avatar: "https://i.pravatar.cc/150?img=39",
    content: "Training models on Google Colab like it’s free GPU 🤝",
    time: "2d",
    likes: 64,
    comments: 7,
    retweets: 5,
    liked: false
  },
  {
    id: 11,
    username: "chaiCoder",
    name: "Harsh",
    avatar: "https://i.pravatar.cc/150?img=7",
    content: "Chai + VSCode = peak productivity.",
    time: "25m",
    likes: 12,
    comments: 1,
    retweets: 0,
    liked: false
  },
  {
    id: 12,
    username: "system_architect",
    name: "Vikas",
    avatar: "https://i.pravatar.cc/150?img=23",
    content: "Microservices increase complexity. Use only if needed.",
    time: "8h",
    likes: 82,
    comments: 14,
    retweets: 6,
    liked: false
  },
  {
    id: 13,
    username: "lazy_dev",
    name: "Kabir",
    avatar: "https://i.pravatar.cc/150?img=44",
    content: "I copy-paste code but at least I paste with confidence.",
    time: "12m",
    likes: 20,
    comments: 3,
    retweets: 1,
    liked: false
  },
  {
    id: 14,
    username: "anime_engineer",
    name: "Miku",
    avatar: "https://i.pravatar.cc/150?img=48",
    content: "Coding with anime OST hits harder.",
    time: "22m",
    likes: 33,
    comments: 2,
    retweets: 1,
    liked: false
  },
  {
    id: 15,
    username: "linux_lover",
    name: "Farhan",
    avatar: "https://i.pravatar.cc/150?img=64",
    content: "Switched to Arch btw.",
    time: "3d",
    likes: 88,
    comments: 11,
    retweets: 7,
    liked: false
  },
  {
    id: 16,
    username: "crypto_coder",
    name: "Jay",
    avatar: "https://i.pravatar.cc/150?img=34",
    content: "Crypto market crashing but my code still compiles 🧊",
    time: "1d",
    likes: 52,
    comments: 5,
    retweets: 3,
    liked: false
  },
  {
    id: 17,
    username: "typescript_simp",
    name: "Aarav",
    avatar: "https://i.pravatar.cc/150?img=15",
    content: "TS saved me from 100 runtime errors today.",
    time: "5h",
    likes: 77,
    comments: 8,
    retweets: 4,
    liked: false
  },
  {
    id: 18,
    username: "noob_programmer",
    name: "Jayesh",
    avatar: "https://i.pravatar.cc/150?img=52",
    content: "Why is regex so damn weird?",
    time: "18h",
    likes: 34,
    comments: 4,
    retweets: 1,
    liked: false
  },
  {
    id: 19,
    username: "api_addict",
    name: "Meera",
    avatar: "https://i.pravatar.cc/150?img=18",
    content: "Postman is my safe space.",
    time: "40m",
    likes: 41,
    comments: 6,
    retweets: 2,
    liked: false
  },
  {
    id: 20,
    username: "fitness_coder",
    name: "Aditya",
    avatar: "https://i.pravatar.cc/150?img=14",
    content: "Gym + Code = solid life.",
    time: "55m",
    likes: 22,
    comments: 1,
    retweets: 1,
    liked: false
  },
  {
    id: 21,
    username: "startup_dude",
    name: "Kunal",
    avatar: "https://i.pravatar.cc/150?img=36",
    content: "Building my SaaS MVP this weekend 💪",
    time: "1h",
    likes: 63,
    comments: 9,
    retweets: 3,
    liked: false
  },
  {
    id: 22,
    username: "deepthinker",
    name: "Shivam",
    avatar: "https://i.pravatar.cc/150?img=10",
    content: "Rest is a part of productivity. Don't ignore it.",
    time: "14h",
    likes: 58,
    comments: 4,
    retweets: 2,
    liked: false
  },
  {
    id: 23,
    username: "coding_monk",
    name: "Sagar",
    avatar: "https://i.pravatar.cc/150?img=21",
    content: "When the code works on the 1st try… it scares me.",
    time: "9m",
    likes: 17,
    comments: 1,
    retweets: 0,
    liked: false
  },
  {
    id: 24,
    username: "js_master",
    name: "Rahul",
    avatar: "https://i.pravatar.cc/150?img=31",
    content: "JavaScript will forever be chaos but I love it ❤️",
    time: "3h",
    likes: 44,
    comments: 6,
    retweets: 2,
    liked: false
  }
]);


  const [newString, setNewString] = useState('');

  const handleLike = (id) => {
    setStrings(strings.map(string => 
      string.id === id 
        ? { ...string, liked: !string.liked, likes: string.liked ? string.likes - 1 : string.likes + 1 }
        : string
    ));
  };

  const handlePostString = () => {
    if (newString.trim()) {
      const newPost = {
        id: strings.length + 1,
        username: "you",
        name: "You",
        avatar: "https://i.pravatar.cc/150?img=68",
        content: newString,
        time: "now",
        likes: 0,
        comments: 0,
        retweets: 0,
        liked: false
      };
      setStrings([newPost, ...strings]);
      setNewString('');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-orange-900 to-slate-900 text-white">
      {/* Header */}
      <div className="sticky top-0 z-10 backdrop-blur-md bg-slate-900/80 border-b border-orange-900/30">
        <div className="max-w-7xl mx-auto pl-45 py-3 flex items-center justify-between">
          <h1 className="text-xl font-bold">Home</h1>
          <Sparkles className="w-5 h-5 text-orange-400" />
        </div>
      </div>

      {/* Content Container */}
      <div className="max-w-7xl mx-auto flex gap-14 ml-60 px-4">
        {/* Feed Container */}
        <div className="flex-1 max-w-2xl mt-6 ">
          {strings.map((string) => (
            <div 
              key={string.id} 
              className="border-b border-orange-900/30 rounded-lg px-4 py-3 hover:bg-slate-800/50 transition-colors cursor-pointer backdrop-blur-sm mb-2"
            >
              <div className="flex gap-3">
                {/* Avatar */}
                <img 
                  src={string.avatar} 
                  alt={string.name}
                  className="w-12 h-12 rounded-full flex-shrink-0"
                />

                {/* Content */}
                <div className="flex-1 min-w-0">
                  {/* Header */}
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="font-bold hover:underline">{string.name}</span>
                      <span className="text-gray-400">@{string.username}</span>
                      <span className="text-gray-400">·</span>
                      <span className="text-gray-400">{string.time}</span>
                    </div>
                    <button className="text-gray-400 hover:text-orange-400 hover:bg-orange-400/10 rounded-full p-1 transition-colors">
                      <MoreHorizontal className="w-5 h-5" />
                    </button>
                  </div>

                  {/* String Content */}
                  <p className="mb-3 text-[15px] leading-5">{string.content}</p>

                  {/* Actions */}
                  <div className="flex items-center justify-between max-w-md">
                    <button className="flex items-center gap-2 text-gray-400 hover:text-blue-400 group transition-colors">
                      <div className="group-hover:bg-blue-400/10 rounded-full p-2 transition-colors">
                        <MessageCircle className="w-[18px] h-[18px]" />
                      </div>
                      <span className="text-sm">{string.comments}</span>
                    </button>

                    <button className="flex items-center gap-2 text-gray-400 hover:text-green-400 group transition-colors">
                      <div className="group-hover:bg-green-400/10 rounded-full p-2 transition-colors">
                        <Repeat2 className="w-[18px] h-[18px]" />
                      </div>
                      <span className="text-sm">{string.retweets}</span>
                    </button>

                    <button 
                      onClick={() => handleLike(string.id)}
                      className={`flex items-center gap-2 group transition-colors ${
                        string.liked ? 'text-pink-600' : 'text-gray-400 hover:text-pink-600'
                      }`}
                    >
                      <div className={`rounded-full p-2 transition-colors ${
                        string.liked ? 'bg-pink-600/10' : 'group-hover:bg-pink-600/10'
                      }`}>
                        <Heart 
                          className={`w-[18px] h-[18px] ${string.liked ? 'fill-current' : ''}`}
                        />
                      </div>
                      <span className="text-sm">{string.likes}</span>
                    </button>

                    <button className="flex items-center gap-2 text-gray-400 hover:text-orange-400 group transition-colors">
                      <div className="group-hover:bg-orange-400/10 rounded-full p-2 transition-colors">
                        <Share className="w-[18px] h-[18px]" />
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Add String Section */}
        <div className="w-80 mt-6 mb-6 sticky top-20 h-fit">
          <div className="border border-orange-900/30 rounded-xl p-4 backdrop-blur-sm bg-slate-800/30">
            <h2 className="text-lg font-bold mb-4 text-orange-400">Create String</h2>
            
            {/* Avatar and Input */}
            <div className="flex gap-3 mb-4">
              <img 
                src="https://i.pravatar.cc/150?img=68" 
                alt="You"
                className="w-10 h-10 rounded-full flex-shrink-0"
              />
              <textarea
                value={newString}
                onChange={(e) => setNewString(e.target.value)}
                placeholder="What's happening?"
                className="flex-1 bg-transparent border-none outline-none text-white placeholder-gray-500 resize-none min-h-24"
                maxLength={280}
              />
            </div>

            {/* Character Count */}
            <div className="flex items-center justify-between mb-3">
              <div className="flex gap-2">
                <button className="text-orange-400 hover:bg-orange-400/10 rounded-full p-2 transition-colors">
                  <Image className="w-5 h-5" />
                </button>
                <button className="text-orange-400 hover:bg-orange-400/10 rounded-full p-2 transition-colors">
                  <Smile className="w-5 h-5" />
                </button>
                <button className="text-orange-400 hover:bg-orange-400/10 rounded-full p-2 transition-colors">
                  <Calendar className="w-5 h-5" />
                </button>
              </div>
              <span className="text-sm text-gray-400">{newString.length}/280</span>
            </div>

            {/* Post Button */}
            <button
              onClick={handlePostString}
              disabled={!newString.trim()}
              className="w-full bg-orange-500 hover:bg-orange-600 disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-bold py-2 px-4 rounded-full transition-colors"
            >
              Post String
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feed;