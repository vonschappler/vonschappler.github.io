import conn from "./axios";

const baseURL = "https://twitchapi.teklynk.com/getuserinfo.php?channel";

const getTwitchInfo = async ({ user }) => {
  const res = await conn.get(`${baseURL}=${user.username}`);
  const { display_name, profile_image_url } = res.data.data[0];
  return {
    ...user,
    image: profile_image_url,
    displayName: display_name,
  };
};

export { getTwitchInfo };
