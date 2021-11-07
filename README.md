# Socialise

Project created during Myntra's HackerRamp: Campus Edition 2021 by Team Mongo under the theme Socialise.

### Team Information :
- Team Name : Mongo
- Theme : Socialise
- College : Birla Institute of Technology (BIT), Mesra, Ranchi
- Team Members :
    -  Satyam Mishra (triden005)
    -  Utkarsh Kumar Singh (singhutkarsh902)
    -  Shridhar Thakur (shridhar-t
)

### Project Description :
- Micro-Influencer system and reward incentive.
- Allow every consumers to upload short videos about their purchases.
- To give incentives for such uploads, we created a reward ladder.
- These videos will provide consumers informations about the products that they wish to buy.

### Links : 
- Project Link : https://socialise10x.netlify.app/
- Videos Link : Add Link Here
- Presentation Link : Add Link Here

### Technologies Used :
- ### Frontend
    - ReactJS (ES6)
    - Sass
    - Axios
    - Hosted : Netlify
- ### UI Design
    - Adobe XD
- ### Backend
    - NodeJS + ExpressJS
    - Mongoose
    - MongoDB Cloud Database
    - Hosted : Heroku
    - Authentication : Google OAuth + JWT

### How to Build Your Own ?

- Step 1 : Clone or download the repository.
- Step 2 : Run "npm install" in the repo's frontend and backend directory.
- Step 3 : Create two ".env" files and place one in frontend and other in backend directory.
- Step 4 : Copy paste these lines in frontend ".env" file with your google console credentials
    - `CLIENT_ID=<Google-Client-ID>`
    - `REACT_APP_GOOGLE_CLIENT_ID=<Google-React-Client-ID>`
    - `CLIENT_SECRET=<Google-Client-Secret>`
- Step 5 : Copy paste these lines in backend ".env" file with your google console and mongoDB CloudDB credentials
    - `CLIENT_ID=<Google-Client-ID>`
    - `REACT_APP_GOOGLE_CLIENT_ID=<Google-React-Client-ID>`
    - `CLIENT_SECRET=<Google-Client-Secret>`
    - `MONGODBURL=<MongoDB-CloudDB-URL>`
- Step 6 : Run "npm run start" in the frontend directory.
- Step 7 : Run "node index.js" in the backend directory.
- Step 8 : Navigate to "http://localhost:3000/" on web browser.