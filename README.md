# Setup the Project :
## 1) For Black Theme : 
```
npm i next-themes
```
- Insert ThemeProvider in the _app.js
- Insert DarkMode in the tailwind.config file 

## 2) Create the Components :
- Then make the files like Navbar , Layout , Footer
- After that insert Layout tag in the _app.js file

## 3) Carousel Library to generate random images :
```
  npm i react-responsive-carousel
```
- link :  https://www.npmjs.com/package/react-responsive-carousel

## 4) ContextReducer:

- Its create in utils folder
- To reduce the complexity and keep all logic in one easy-to-access place
- And wrap the CartProvider in _app.js

## 5) For Icons :
- Use Hero Icons platform : https://v1.heroicons.com/


# Backend SetUp :

## 1) Install Mongoose :

```
npm i mongoose --save
```
## 2) MongoDb Connection :
- Create the folder db.js in utils folder
- Then create the .env.local file paste this link :
```
mongodb+srv://chetanck_03:nextJsPizza@cluster0.rlql3ww.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
```
## 3) Connect db in api file in pages :

```
db.connect()
```
## 4) Create a models folder & Store Data :
- In each model you will find a schema for data storing
- Then store data in foodData.js in Api folder(Pages)
- Here we creating a API in foodData.js file
- After that use Thunder Client to sent data in MongoDB 

## 5) Fetch Data From Backend :
```
getStaticProps : This property fetch data which doesn't change frequently , and you serve the same data to all users
```
- Use getStaticProps property in index.js in the pages folder
- Create baseUrl.js file in utils folder for the url of data
- Then fetch (data using props) index.js file to the MongoDB

## 6) Dynamic Page & getServerSideProps() : 

```
Dynamic page : It is used when the page is generated at build time & we want to generate the page on every request.

```
```
getServerSideProps() : To fetch data at request time

```
- Create the folder for dynamic pages in the (pages) : Item/[item].js file
- Then create getDataById.js file in the api folder

## 7) User Modal :
- Create Users.js file in models folder
- Add the logic inside it, Scheme of the user 
- For the Authentication for the user data , use the JWT(json web token)
```
npm i jsonwebtoken bcryptjs
```
- Json Web Token to store data in the hash form : https://jwt.io/

## 8) Authentication  in API folder of userSignUp/userLogin:
- Add the logic inside this for the user authentication

## 9) Orders Schema :
- Now create the (Orders.js) file in the models folder
- To write the Schema logic to the Users order in (Orders.js) file to models folder 
- Create the file (ordersData.js) file in the API folder write here the logic of the Orders Data
- After that create folder (myOrdersData.js) file in the API Folder
- Check the Api (user data) ,then using (http://localhost:3000/api/myOrdersData) Thunder Client

## 10) Admin :
- Create Admin Folder in the pages folder
- After that create file (createFoodData.js) file in the API folder


