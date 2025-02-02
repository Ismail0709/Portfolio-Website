// testGetPageInfo.js
const { createClient } = require('next-sanity');
const { groq } = require('next-sanity');

const config = {
  projectId: 'fgt757ev', // Replace with your actual project ID
  dataset: 'production',        // Or your specific dataset
  apiVersion: '2023-10-01',     // Use the date of your API version
  useCdn: false,                // `false` ensures fresh data
};

const sanityClient = createClient(config);

const query = groq`
  *[_type == "pageInfo"][0]
`;

(async () => {
  try {
    const pageInfo = await sanityClient.fetch(query);
    console.log('Fetched pageInfo:', pageInfo);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
})();



//projectId: 'fgt757ev'