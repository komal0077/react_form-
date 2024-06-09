import logo from './logo.svg';
// import './App.css';
// import './Pro.css';
// import React, { useState } from 'react';


// const[formData,setFormData]=useState({firstName:"",lastName:"",email:"",comments:""});

// function App() {
//   const[formData,setFormData]=useState({firstName:"",lastName:""
//     ,email:"",comments:"" ,isVisible:true,mode:"",favCar:""});
//   console.log(formData);
//    function changeHandler(event){
//     const{name,value,checked,type}=event.target
//     setFormData(prevFormData=>{
//       return{
//         ...prevFormData,
//         // [event.target.name]:event.target.value
//         [name]:type=="checkbox"?checked:value
//       }
//     });
//    }
//   //  function changeSecondHandler(event){
//   //   console.log(event.target.value)
// function submitHandler(event){
// event.preventDefault();
// console.log("printing..");

//    }
//   return (
//     <div className="App">
//       <form onSubmit={submitHandler}>
//         <input
//         type="text"
//         placeholder='first name'
//         onChange={changeHandler}
//         name="firstName"
//         value={formData.firstName}
//         />
      
// <br/>
// <b/>

      
//         <input
//         type="text"
//         placeholder='last name'
//         onChange={changeHandler}
//         name="lastName"
//         form={formData.lastName}
//         />

// <br/>
// <br/>
//         <input
//         type="email"
//         placeholder="email here"
//         onChange={changeHandler}
//         name="email"
//         form={formData.email}
//         />

//         <br/>
//         <br/>

//        <textarea
//        placeholder='enter your comments..'
//        onChange={changeHandler}
//        name="comments"
//        value={formData.comments}
//        />

// <br/>
// <br/>

// <input
// type="checkbox"
// onChange={changeHandler}
// name="isVisible"
// id="isVisible"
// checked={formData.isVisible}
// />
// <label htmlFor='isVisible'>Am I visible??</label>
// <br/>
// <br/>

// <input
// type="radio"
// onChange={changeHandler}
// name="mode"
// value="offline=mode"
// id="offline-mode"
// checked={formData.mode==="offline-mode"}
// />
// <label htmlFor='offline-mode'>Offline mode</label>

// <input
// type="radio"
// onChange={changeHandler}
// name="mode"
// value="online-mode"
// id="online-mode"
// checked={formData.mode==="online-mode"}
// />
// <label htmlFor='online-mode'>Online mode</label>
// <br/>
// <br/>
// <select 
// name="favCar"
// id="favCar"
// onChange={changeHandler}
// value={formData.favCar}
// >
// <option value="scorpio">scorpio</option>
// <option value="thar">thar</option>
// <option value="aulto">aulto</option>
// </select>

// <input type="submit" value="submit"/>
//       </form>
//     </div>
//   );
// }
// .......................class2 intermediate...............

// function App(){
//   const[formData,setFormData]=useState({
//     firstName:"",lastName:"",email:"",country:"India",streetaddress:""
//     ,city:"",
//     state:"",postal:"",comments:false
//     ,candidates:false,offers:false,pushNotifications:""
//   })
//   function changeHandler(event){
// const{name,value,checked,type}=event.target;
// setFormData((prev)=>({
//   ...prev,[name]:value==="checkbox" ? checked:value
// }));
//   }

//   function submitHandler(event){
// event.preventDefault();
// console.log("printing");
// console.log(formData)
//   }

//   return(
//   <div className="project">
//     <form onSubmit={submitHandler}>
//       <label htmlFor="firstName">First name</label>
//       <br/>
//       <input
//       type="text"
//       name="firstName"
//       id="firstName"
//       placeholder="Komal"
//       value={formData.firstName}
//       onChange={changeHandler}
//       className="first"
//       />

// <br/>

// <label htmlFor="lastName">Last 1name</label>


//       <br/>
//       <input
//       type="text"
//       name="lastName"
//       id="lastName"
//       placeholder="chaudhary"
//       value={formData.firstName}
//       onChange={changeHandler}
//       className="first"
//       />
//       <br/>

// <label htmlFor="email">E-mail</label>


// <br/>
// <input
// type="email"
// name="email"
// id="email"
// placeholder="komalme7@gmail.com"
// value={formData.email}
// onChange={changeHandler}
// className="first"
// />
// <br/>
// <label htmlFor="country">Country</label>
// <br/>

// <select 
// id="country"
// name="country"
// value={formData.country}
// onChange={changeHandler}
// className="first"

// >
//   <option>India
//   </option>
//   <option>Pakistan</option><option>usa
//   </option>
// </select>
// <br/>

// <label htmlFor="streetaddress">Street address</label>


//       <br/>
//       <input
//       type="text"
//       name="streetaddress"
//       id="streetaddress"
//       placeholder="xyz,city"
//       value={formData.streetaddress}
//       onChange={changeHandler}
//       className="first"
//       />
//       <br/>
//       <label htmlFor="city">City</label>


//       <br/>
//       <input
//       type="text"
//       name=" city"
//       id="city"
//       placeholder="abc"
//       value={formData.city}
//       onChange={changeHandler}
//       className="first"
//       />
//       <br/>
//       <label htmlFor=" state"> State</label>


//       <br/>
//       <input
//       type="text"
//       name=" state"
//       id=" state"
//       placeholder="Haryana"
//       value={formData. state}
//       onChange={changeHandler}
//       className="first"
//       />
//       <br/>
//       <label htmlFor="postal">Postal/ZIP</label>


//       <br/>
//       <input
//       type="text"
//       name="postal"
//       id="postal"
//       placeholder="123"
//       value={formData.postal}
//       onChange={changeHandler}
//       className="first"
//       />
//       <br/>

//       <fieldset>
//         <legend>By Email</legend>
// <div className="check">
// <input
//         id="comments"
//         name="comments"
//         type="checkbox"
//         value={formData.comments}
//         onChange={changeHandler}
//         />
//         <div>
//           <label htmlFor="comments">Comments:</label>
//           <p>get comments when someone post a comment on posting</p>
//         </div>
// </div>
// <div className="check">
// <input
//         id="candidates"
//         name="candidates"
//         type="checkbox"
//         value={formData.candidates}
//         onChange={changeHandler}
//         />
//         <div>
//           <label htmlFor="candidates">Candidates:</label>
//           <p>get comments when someone post a comment on posting</p>
//         </div>
// </div>
// <div className="check">
// <input
//         id="offers"
//         name="offers"
//         type="checkbox"
//         value={formData.offers}
//         onChange={changeHandler}
//         />
//         <div>
//           <label htmlFor="offers">Offers:</label>
//           <p>get comments when someone post a comment on posting</p>
//         </div>
// </div>
//       </fieldset>

//       <br/>
//       <fieldset>
//         <legend>Push notificatins</legend>
//         <p>These are delievers via sms to mobile phones</p>

//         <input
//         type="radio"
//         id="pushEverything"
//         name="pushNotifications"
//         value="Everything"
//         onChange={changeHandler}
//         />
//         <label htmlFor="pushNotifications">Everything</label>

//         <br/>
//         <input
//         type="radio"
//         id="pushEmail"
//         name="pushNotifications"
//         value="same as email"
//         onChange={changeHandler}
//         />
//         <label htmlFor="pushEmail">same as email</label>

//         <br/>
//         <input
//         type="radio"
//         id="pushNothing"
//         name="pushNotifications"
//         value="No push notification"
//         onChange={changeHandler}
//         />
//         <label htmlFor="pushNothing">No push notification</label>

//       </fieldset>
//       <br/>
//       <button class="button">Save</button>
//     </form>
//   </div>
//   );
// }

// export default App;


//.................................react router.......................

import React from 'react';
import {Route,Routes} from 'react-router-dom';
const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<div>Home page</div>}/>
        <Route path="/support" element={<div>support page</div>}/>
        <Route path="/about" element={<div>About page</div>}/>
        <Route path="/labs" element={<div>Labs page</div>}/>
      </Routes>
      
    </div>
  )
}

export default App
