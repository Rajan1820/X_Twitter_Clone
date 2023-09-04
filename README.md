I made a clone of X ( formerly known as twitter ) . Built using NextJS 13 , Tailwind. I have used Supabase for Database functionalities . The current feature set includes : Authentication for users , Responsive design , Adding and replying to tweets , Liking the tweets and viewing all the tweets tweeted by a user. 
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

UI 
![Home](https://github.com/Rajan1820/X_Twitter_Clone/assets/85100653/7dfdc0bb-5dca-4406-8199-79f0e47226be)

Tweet and Reply functionality
![reply](https://github.com/Rajan1820/X_Twitter_Clone/assets/85100653/bd45db85-1ab8-4e10-8585-5a65e58b0152)

Fetching all the tweets by a user
![profile](https://github.com/Rajan1820/X_Twitter_Clone/assets/85100653/2c101f67-98f8-4f01-bf7c-230123e43385)


