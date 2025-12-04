import Instance from "./api";

export const getTweets = async () => {
  try {
    const response = await Instance.get("/tweets");
    return response.data;
  } catch (error) {
    console.error("Error fetching tweets:", error);
    throw error;
  }
};

export const postTweet = async (tweetData) => {
    try{
        const response = await Instance.post("/add/tweet", tweetData);
        return response.data;   
    }catch(error){
        console.error("Error posting tweet:", error);
        throw error;
    }
}

export const userTweets = async (userId) => {
    try{
        const response = await Instance.get(`/user/tweets/${userId}`);
        return response.data;
    }catch(error){
        console.error("Error fetching user tweets:", error);
        throw error;
    }
}

export const deleteTweet = async (tweetId) => {
    try{
        const response = await Instance.delete(`/delete/tweet/${tweetId}`);
        return response.data;
    }catch(error){
        console.error("Error deleting tweet:", error);
        throw error;
    }
}