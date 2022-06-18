TimeLine BackLog:
All the links are the API doc / npm doc

<2022.04>

Decide to make this web using MERN stack, and Ant-Design UI framework

MongoDB(Database):https://account.mongodb.com/account/login?n=%2Fv2&nextHash=%23org%2F62624c7b3263ed44a9ff255e%2Fprojects
Express(BackEnd framework):https://expressjs.com/
React(FrontEnd frame):https://reactjs.org/docs/react-api.html
Node.js(v8):https://nodejs.org/en/
Ant-Design(UI framework):https://ant.design/
____________________________________________________________________________________

<2022.04 FrontEnd build>

create-react-app 
basic react routes 
basic App.js file and index.js file

create-react-app: https://reactjs.org/docs/create-a-new-react-app.html
____________________________________________________________________________________

<2022.04 FrontEnd build>

Ant-Design layout
FrontEnd Navigation bar and link
FrontEnd Header
____________________________________________________________________________________

<2022.04 FrontEnd Toggle Form Button Feature>

FrontEnd Form page layout ui build/ css build
FrontEnd Toggle Form javascript function implement
____________________________________________________________________________________

<2022.04 BackEnd build>

BackEnd connect to database
BackEnd basic routes
BackEnd basic controller
BackEnd dotenv npm to store some git ignore information
BackEnd POSTMAN test

dotenv npm: https://www.npmjs.com/package/dotenv
postman: https://www.postman.com/
____________________________________________________________________________________

<2022.04 BackEnd Get/Delete Form Feature>

BackEnd Form schema build
BackEnd Using mongoose framework
BackEnd Form controller for get form and deleteform

mongoose:https://mongoosejs.com/
____________________________________________________________________________________

<2022.04 BackEnd Fix create form Issue>

BackEnd Form create form controller could not get req.body
BackEnd Add middleware express.json()
____________________________________________________________________________________

<2022.05 FrontEnd Submit Form Feature>

FrontEnd implement function for input onchange
FrontEnd implement handle submit button event by axios.post (create a new form)

axios npm:https://www.npmjs.com/package/axios

____________________________________________________________________________________

<2022.05 BackEnd/FrontEnd Fix Communication Issue>

Using Cors() to communicate backend and frontend
Run two terminals for both server-side and client-side 

cors npm:https://www.npmjs.com/package/cors
____________________________________________________________________________________

<2022.05 FrontEnd List page build>

FrontEnd implement list page
FrontEnd get all the forms from backend
FrontEnd render each form into A card, display the information
____________________________________________________________________________________

<2022.05 BackEnd Star Collection/ Thumb Up Feature>

BackEnd implement Star/ThumbUp controller routes
BackEnd implement Star/ThumbUp controller function(update the form)
____________________________________________________________________________________

<2022.05 FrontEnd Star Collection/ Thumb Up Feature>

FrontEnd Card action UI/ icon for star collection and thumb up
FrontEnd Card axios.patch 
FrontEnd Card render the effect after user click
FrontEnd build a new route page for only displaying star collection card
FrontEnd Card axios.get
____________________________________________________________________________________

<2022.05 BackEnd Basic User Auth Feature>

Study Udemy for this feature
BackEnd basic routes build
BackEnd basic controller for login/ signup
____________________________________________________________________________________

<2022.05 BackEnd Fix error handle Issue>

BackEnd Add middleware tryCatchWrapper/ error-handler/ not-found
BackEnd Refine all the throw error system
____________________________________________________________________________________

<2022.05 BackEnd Whole User Auth Feature>

BackEnd UserSchema validation and refine the formSchema validation
BackEnd SignUp controller build and store the user password in database by bcrypt
BackEnd json web token auth (jwt.sign)
BackEnd Login controller by find the user and compare password
BackEnd return a json web token value to the FrontEnd

bcrypt npm:https://www.npmjs.com/package/bcrypt
jwt npm:https://www.npmjs.com/package/jsonwebtoken
____________________________________________________________________________________

<2022.05 FrontEnd login page Feature>

FrontEnd build a login page route
FrontEnd add logic when user not login, they could not access the main page
FrontEnd whole login page css
____________________________________________________________________________________

<2022.05 FrontEnd login/ Signup form Feature>

FrontEnd login/ signup form UI
FrontEnd login/ signup form toogle button
FrontEnd login/ signup input onchange
FrontEnd handle submit event by axios.post
____________________________________________________________________________________

<2022.05 FrontEnd Display User Feature>

FrontEnd useContext hook
FrontEnd Display User Information(their names) in the main page
____________________________________________________________________________________

<2022.06 Study Image Upload Feature>

Study the path module
Study express_fileupload

Express_fileUpload npm: https://www.npmjs.com/package/express-fileupload
____________________________________________________________________________________

<2022.06 BackEnd Image Upload Feature>

BackEnd basic upload controller and router
BackEnd detailed upload controller locally, using middleware fileUpload
BackEnd path module to move the image into local 
BackEnd uploading the image into cloudinary
BackEnd build upload controller cloudinary

Cloudinary:https://cloudinary.com/console/c-8ec9c0f8183a4c123d0cf7c0aca396/getting-started
____________________________________________________________________________________

<2022.06 FrontEnd Image Upload Feature>

FrontEnd Basic UI(file upload button) with ant design
FrontEnd Upload function work with axios.post 
FrontEnd Get image src 
FrontEnd Submit the form together with image
FrontEnd Display the image into the card
FrontEnd When user upload different size image, it will cause the card page very weird
Using ant-crop-img npm to solve this issue
____________________________________________________________________________________

<2022.06 FrontEnd Fix List Card Each Image loading Issue>

Issue: It did not show loading image when first going into this list page, 
it has a bad appearance for the user

FrontEnd Using the Image placeholder API, before the image is onLoad, 
it will show the placeholder first
FrontEnd Add Handle image onError function to solve issue when the internet interrupt suddenly
____________________________________________________________________________________

<2022.06 BackLog>

Build a blog to write down all the steps and timeline for this project
____________________________________________________________________________________

<2022.06 BackEnd/FrontEnd  Card Insert lastModifiedDate Feature>

FrontEnd Access a lastModified for the image Date property
BackEnd Add to the backend schema
FrontEnd Display in the card for the date
FrontEnd changing lastModified Date in a human-readable way
_____________________________________________________________________________________

<2022.06 FrontEnd Selection Country/City Feature Build on Form Page I>

Describe:
Selection different country first, then select corresponding city in this country 
For example. Canada: toronto/ vancouver/ montreal/ ottawa/ alberta
             Austrila: melbern/ sydney/ darwin/ perls/ brunstban
            
FrontEnd Write down the country and city json sheet
FrontEnd Selection UI build
FrontEnd Select login, selection country and corresponding city
BackEnd  Send the data to submit the button (axios.post)/ backend get the data
_____________________________________________________________________________________

<2022.06 CSS/FrontEnd Responsive Design--WeiXin Mini App / APP Layout I>

Describe:
In order to make responsive design for different kinds of media, It needs to reconstruct the layout and css.

FrontEnd/CSS Reconstruct the main page
FrontEnd/CSS Responsive for the form page
FrontEnd/CSS Make a tabBar Component UI
_____________________________________________________________________________________

<2022.06 CSS/FrontEnd Responsive Design--WeiXin Mini App / APP Layout II>

Describe:
In order to make responsive design for different kinds of media, It needs to reconstruct the layout and css.
Bug Fix:
Tab-bar rendering problem, it will render perfectly in app, but not render in web
When display none (or position fixed, some other property is not working), try with add a parent div

FrontEnd/CSS Make tarBar Component Routes
FrontEnd/CSS Make tarBar component in the page bottom and sticky to bottom
FrontEnd/CSS Responsive for Header Component
FrontEnd/CSS Responsive for login page
————————————————————————————————————————————————————————————————————————————————————————

<2022.06 BackEnd Selection Country/City Feature Build II>

Describe:
FrontEnd send the user data about their address area(country/city), according to their query, we could get
the form by different country (their params and query)

BackEnd change the form schema
BackEnd Add backend query(selection location)
BackEnd test with POSTMAN(params)
__________________________________________________________________________________________

<2022.06 FrontEnd Selection Country/City Feature Build in list page III>

Describe: 
All backend forms are ready for use, when user clicks the area location in the list page, the page could display
corresponding forms in their specific area

FrontEnd Change list page into two panels, contains selection area and display area
FrontEnd Add country/city query selection UI in frontEnd list page
FrontEnd Add logic and when users click the query, it returns to get the specific country forms
FrontEnd Refine the list page code