import { toast } from "sonner";
import Instance from "./api";

export const getComments = async (postId) =>{
    try{
        const comments = await Instance.get(`/public/get_comments/${postId}` )
        console.log(postId,comments);
        return comments.data;
    }catch(error){
        console.error("Error fetching comments:", error);
        throw error;
    }
}


export const postComment = async (postId , commenttext) =>{
    try{
        const comment = await Instance.post('/user/post_comment' , {
            postId:postId, 
            comment:commenttext
        });
        toast("Commented Successfully")
        return comment.data;
    }catch(error){
        console.error("Error posting comment:", error);
        throw error;
    }
}

export const postLike = async (postId) =>{
    try {
        const like = await Instance.post(`/user/like/${postId}`);
        toast("Liked String");
        return like.message;
    } catch (error) {
        toast("Like Unsuccessfull");
        throw error;
    }   
} 

export const postUnLike = async (postId) =>{
    try {
        const like = await Instance.post(`/user/unlike/${postId}`);
        toast("like Removed");
        return like.message;
    } catch (error) {
        toast("Removal of like Unsuccessfull");
        throw error;
    }   
} 
