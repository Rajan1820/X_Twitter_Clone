I made a clone of X ( formerly known as twitter ) . This is build using NextJS 13 , Tailwind. I have used Supabase for Database functionalities . The current feature set includes : Authentication for users , Responsive design , Adding and replying to tweets , Liking the tweets and viewing all the tweets tweeted by a user. 
To run this project , follow these steps : 
1. Clone the repo using git clone {url}
2. Run "npm install" OR "pnpm install" OR "yarn install" in the project directory to install the required dependancies
3. Once the dependancies are installed , you need to create new project at Supabase .\
4. Head over to Supabase , login/Signup and then create a new project (refer to this video : https://www.youtube.com/watch?v=-jISW-jVG-s)
5. Once you have created the project , Run the SQL commands present in 'table_creation.sql' file to create the tables in the SQL Editor on Supabase. 
6. After creating the tables , fetch your project url , public Anon Key , Service_role key (secret) from Project Settings -> API and your Database Connection String (NodeJS) from Project Settings -> Database. 
7. Create a env file named ".env.local" in the root directory and store the above mentioned information in the following order.
NEXT_PUBLIC_SUPABASE_URL= {Project URL}
NEXT_PUBLIC_SUPABASE_ANON_KEY= {Public Anon key}
SUPABASE_SECRET_KEY = {Service_role_key}
DATABASE_CONNECTION_STRING = {Connection String}
8. You are all set now . Simply run "npm run dev" OR "pnpm run dev" OR "yarn run dev" to run the project.
