import { getComments } from "@/services/tweetService";
import { useEffect, useState } from "react";

export default function CommentList({ postId ,refetchKey}) {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);


  const fetchComments = async () => {
  try {
    const res = await getComments(postId);
    setComments(res.response || []); 
    console.log(comments);
  } catch (error) {
    console.error("Error fetching comments:", error);
  } finally {
    setLoading(false);
  }
};


  useEffect(() => {
    if (postId) fetchComments();
  }, [postId ,refetchKey]);

  if (loading) return <p className="text-sm text-gray-500">Loading comments...</p>;

  if (comments.length === 0)
    return <p className="text-sm text-gray-500">No comments yet.</p>;

  return (
    <div className="space-y-3 mt-3">
      {comments.map((c) => (
        <div key={c.id} className="p-3 bg-white opacity-50 rounded-lg">
          <p className="text-sm font-semibold text-black">
            {c.User?.username || "User"}:
          </p>
          <p className="text-gray-700">{c.text}</p>
        </div>
      ))}
    </div>
  );
}
