// config.js
const getUrl = () => {
    const https_url = "https://travel-sanpatong.com/public/trave_api";
    //const https_url = "https://travel-sanpatong.com/public/trave_api";
    // const https_url = "https://medocargo.com/API";
    return https_url;
};
const getUrlImage = () => {
    const https_url = "https://travel-sanpatong.com/public/";
    //const https_url = "https://travel-sanpatong.com/public/trave_api";
    // const https_url = "https://medocargo.com/API";
    return https_url;
};

export const apiUrl = getUrl();
export const apiUrlImage = getUrlImage();
