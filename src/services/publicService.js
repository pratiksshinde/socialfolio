import Instance from "./api"

export const getProfile = async ({username})=>{
    try{
    const response = await Instance.get(`/public/profile?username=${username}`)
    console.log(response,"profile hii");
    return response.data;
    }catch(error){
        throw error?.response?.data || error;
    }
}
export const getUsers = async (search) => {
  try {
    const response = await Instance.get("public/get_users", {
      params: { search }
    });
    return response.data;
  } catch (error) {
    throw error?.response?.data || error;
  }
};

export const getPosts = async ()=>{
  try{
    const posts = await Instance.get("public/get_posts")
    return posts.data;
  }catch(error){
    throw error?.posts?.data || error;
  }
}
