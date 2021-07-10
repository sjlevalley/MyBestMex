import axios from "axios";

// Export an object with a "search" method that searches the Giphy API for
// the passed query

export const shopAPI = async () => {
    console.log("Get All Shops Request Sent")
    const res = await axios.get("/api/tacoShops")
    return res.data
};

export const singleShopAPI = async (shopID) => {
    console.log("Get Single Shop Request Sent")
    const res = await axios.get(`/api/tacoShops/${shopID}`)
    return (res.data)
};

export const postShopAPI = async (data) => {
    console.log("Post Single Shop Request Sent")
    await axios.post("/api/tacoShops", data)
        .then(res => console.log(res))
        .catch(err => console.log(err));
};

export const shopReviewAPI = async (shopID) => {
    console.log("Get Single Shop Reviews Request Sent")
    const res = await axios.get(`/api/reviews/${shopID}`)
    return (res.data)
};


