// our API key
const API_KEY = "AIzaSyD4OS98LyqX0XG2Q2snff8uXdn3qn0KFuM";

// endpoint to use CloudVision Vision API
const API_URL = `https://vision.googleapis.com/v1/images:annotate?key=${API_KEY}`;

  // API request body
  const generateBody = (image) => {
  const body = {
    requests: [
      {
        image: {
          content: image,
        },
        features: [
          {
            type: 'TEXT_DETECTION',
            maxResults: 1,
          },
        ],
      },
    ],
  },
  return body;
};

// sending request to server and getting its response
async function detectText(image) {
  // passing the image
  const body = generateBody(image);
  // using fetch to get response
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
  // getting the result
  const result = await response.json();
  console.log(result);
}

// exporting the method to detect text
export default detectText;