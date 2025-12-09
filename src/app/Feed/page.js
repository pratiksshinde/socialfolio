"use client";
import React, { useEffect, useState } from 'react';
import { Heart, MessageCircle, Repeat2, Share, MoreHorizontal, Sparkles, Image, Smile, Calendar, Send } from 'lucide-react';
import { getPosts } from '@/services/publicService';
import { createPost } from '@/services/userService';
import CommentList from '@/components/feed/CommentList';
import { postComment } from '@/services/tweetService';

function Feed() {
  const [strings, setStrings] = useState([]);
  const [newString, setNewString] = useState('');
  const [activeComments, setActiveComments] = useState({});
  const [commentInputs, setCommentInputs] = useState({});

  useEffect(() => {
    const fetchPosts = async ()=>{
      try{
        const data = await getPosts();
        setStrings(data.response);
      }catch(error){
         console.error("Error fetching posts:", error);
      }
    }
    fetchPosts();
  }, [])
  
  const handleLike = (id) => {
    setStrings(strings.map(string => 
      string.id === id 
        ? { ...string, liked: !string.liked, likes: string.liked ? string.likes - 1 : string.likes + 1 }
        : string
    ));
  };

  const toggleComments = (id) => {
    setActiveComments(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const handleCommentChange = (postId, value) => {
    setCommentInputs(prev => ({
      ...prev,
      [postId]: value
    }));
  };

  const handlePostComment = (postId) => {
    const commentText = commentInputs[postId]?.trim();
    if (commentText) {
      postComment(postId , commentText);
      console.log("Posting comment:", commentText, "to post:", postId);
      setCommentInputs(prev => ({
        ...prev,
        [postId]: ''
      }));
    }
  };

  const handlePostString = () => {
    if (newString.trim()) {
      const newPost = {
        content: newString,
        User: {
        username: "You",        
      },
      };
      setStrings([newPost, ...strings]);
      try{
        createPost(newString);
      }catch(error){
        console.log("error while posing string :",error);
      }
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
        <div className="flex-1 max-w-2xl mt-6">
          {strings.map((string) => (
            <div 
              key={string.id} 
              className="border-b border-orange-900/30 rounded-lg px-4 py-3 hover:bg-slate-800/50 transition-colors backdrop-blur-sm mb-2"
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
                      {/* <span className="font-bold hover:underline">{string.name}</span> */}
                      <span className="text-gray-400">@{string.User.username }</span>
                      <span className="text-gray-400">·</span>
                      <span className="text-gray-400">{string.createdAt}</span>
                    </div>
                    <button className="text-gray-400 hover:text-orange-400 hover:bg-orange-400/10 rounded-full p-1 transition-colors">
                      <MoreHorizontal className="w-5 h-5" />
                    </button>
                  </div>

                  {/* String Content */}
                  <p className="mb-3 text-[15px] leading-5">{string.content}</p>

                  {/* Actions */}
                  <div className="flex items-center justify-between max-w-md">
                    <button  
                      onClick={() => toggleComments(string.id)}
                      className="flex items-center gap-2 text-gray-400 hover:text-blue-400 group transition-colors"
                    >
                      <div className="group-hover:bg-blue-400/10 rounded-full p-2 transition-colors">
                        <MessageCircle className="w-[18px] h-[18px]" />
                      </div>
                      <span className="text-sm">{string.commentCount || 0}</span>
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
                      {/* <span className="text-sm">{string.likes}</span> */}
                    </button>

                    <button className="flex items-center gap-2 text-gray-400 hover:text-orange-400 group transition-colors">
                      <div className="group-hover:bg-orange-400/10 rounded-full p-2 transition-colors">
                        <Share className="w-[18px] h-[18px]" />
                      </div>
                    </button>
                  </div>

                  {/* Comment Section */}
                  {activeComments[string.id] && (
                    <div className="mt-4 space-y-3">
                      {/* Comment Input */}
                      <div className="flex gap-3 items-start">
                        <img 
                          src="https://i.pravatar.cc/150?img=68" 
                          alt="You"
                          className="w-8 h-8 rounded-full flex-shrink-0"
                        />
                        <div className="flex-1 flex gap-2">
                          <input
                            type="text"
                            placeholder="Write a comment..."
                            value={commentInputs[string.id] || ''}
                            onChange={(e) => handleCommentChange(string.id, e.target.value)}
                            onKeyPress={(e) => e.key === 'Enter' && handlePostComment(string.id)}
                            className="flex-1 bg-slate-800/50 border border-orange-900/30 rounded-full px-4 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-orange-500/50"
                          />
                          <button
                            onClick={() => handlePostComment(string.id)}
                            disabled={!commentInputs[string.id]?.trim()}
                            className="bg-orange-500 hover:bg-orange-600 disabled:bg-gray-600 disabled:cursor-not-allowed rounded-full p-2 transition-colors"
                          >
                            <Send className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                      
                      {/* Comments List */}
                      <CommentList postId={string.id} />
                    </div>
                  )}
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