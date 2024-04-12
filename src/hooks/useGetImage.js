// export const useGetImage = () => {
//   let page = 1;
//   let imageURl = "non";
//   let accessKey = "4wEf769Ksvdzb5cLapKcvY8f1TMSdnjryJRZDh-xDTc";
//   const searchImage = async ({ foodName }) => {
//     let keyword = foodName;
//     const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}`;
//     const response = await fetch(url);
//     const data = await response.json();
//     imageURl = data?.results[1]?.links.download;
//     if (imageURl == undefined) {
//       return (imageURl = data?.results[2]?.links.download);
//     }
//     console.log(imageURl);
//   };

//   return { searchImage };
// };
