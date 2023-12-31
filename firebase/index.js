import firebase from "firebase/app";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDnOMMbcXmvDLjC5h-GPsMVyajOvyaTiNU",
  authDomain: "btech-library-54907.firebaseapp.com",
  databaseURL: "https://btech-library-54907-default-rtdb.firebaseio.com",
  projectId: "btech-library-54907",
  storageBucket: "btech-library-54907.appspot.com",
  messagingSenderId: "240122694086",
  appId: "1:240122694086:web:fbd6697ef44e48e0390ac7"
};

function listAll(folder){
  const storageRef = firebase.storage().ref();

  let listRef = storageRef.child(folder);

  listRef
  .listAll()
  .then((res)=>{
    res.prefixes.forEach((folderRef)=>{
      console.log(folderRef);
    });
    res.items.forEach((itemRef)=>{
      console.log(itemRef);
      // itemRef.getDownloadURL().then((url)=>{
      //   console.log("download URL: "+ url);
      // });
    });
  })
  .catch((error)=>{
    console.log("error is: ",error);
  });
  
}

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export { storage, listAll, firebase as default};


// const displayList = document.getElementById('home');

// let cardList = ``;
// for (let i = 0; i < 4; ++i) {
//   cardList += `
//       <div class="bookDisplay">
//       <!-- create cards here -->
//       <span class="academics">CSE/CS/IT/CSIT/CSE AI & ML</span>
//       <!-- academics -> slide container ok   -->
//       <div class="slide-container swiper">

//         <div class="slide-content">

//           <div class="card-wrapper swiper-wrapper">

//             <div class="year-card swiper-slide" style="display: flex;">
//               <!-- cards used for subjects in respective year loaded from firebase -->
//               <div class="2">Second Year</div>
//               <div class="year-card" style="display: flex;">
//                 <div class="cards">
//                   <div class="image">
//                     <img src="images/background.png" alt="">
//                   </div>
//                   <div class="notes">notes</div>
//                   <div class="title">
//                     <h2>DBMS</h2>
//                   </div>
//                 </div>
//                 <div class="cards">
//                   <div class="image">
//                     <img src="images/background.png" alt="">
//                   </div>
//                   <div class="notes">notes</div>
//                   <div class="title">
//                     <h2>DBMS</h2>
//                   </div>
//                 </div>
//                 <div class="cards">
//                   <div class="image">
//                     <img src="images/background.png" alt="">
//                   </div>
//                   <div class="notes">notes</div>
//                   <div class="title">
//                     <h2>DBMS</h2>
//                   </div>
//                 </div>
//                 <div class="cards">
//                   <div class="image">
//                     <img src="images/background.png" alt="">
//                   </div>
//                   <div class="notes">notes</div>
//                   <div class="title">
//                     <h2>DBMS</h2>
//                   </div>
//                 </div>
//                 <div class="cards">
//                   <div class="image">
//                     <img src="images/background.png" alt="">
//                   </div>
//                   <div class="notes">notes</div>
//                   <div class="title">
//                     <h2>DBMS</h2>
//                   </div>
//                 </div>
//                 <div class="cards">
//                   <div class="image">
//                     <img src="images/background.png" alt="">
//                   </div>
//                   <div class="notes">notes</div>
//                   <div class="title">
//                     <h2>DBMS</h2>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div class="year-card swiper-slide" style="display: flex;">
//               <!-- cards used for subjects in respective year loaded from firebase -->
//               <div class="3">Third Year</div>
//               <div class="year-card swiper-slide" style="display: flex;">
//                 <div class="cards">
//                   <div class="image">
//                     <img src="images/background.png" alt="">
//                   </div>
//                   <div class="notes">notes</div>
//                   <div class="title">
//                     <h2>DBMS</h2>
//                   </div>
//                 </div>
//                 <div class="cards">
//                   <div class="image">
//                     <img src="images/background.png" alt="">
//                   </div>
//                   <div class="notes">notes</div>
//                   <div class="title">
//                     <h2>DBMS</h2>
//                   </div>
//                 </div>
//                 <div class="cards">
//                   <div class="image">
//                     <img src="images/background.png" alt="">
//                   </div>
//                   <div class="notes">notes</div>
//                   <div class="title">
//                     <h2>DBMS</h2>
//                   </div>
//                 </div>
//                 <div class="cards">
//                   <div class="image">
//                     <img src="images/background.png" alt="">
//                   </div>
//                   <div class="notes">notes</div>
//                   <div class="title">
//                     <h2>DBMS</h2>
//                   </div>
//                 </div>
//                 <div class="cards">
//                   <div class="image">
//                     <img src="images/background.png" alt="">
//                   </div>
//                   <div class="notes">notes</div>
//                   <div class="title">
//                     <h2>DBMS</h2>
//                   </div>
//                 </div>
//                 <div class="cards">
//                   <div class="image">
//                     <img src="images/background.png" alt="">
//                   </div>
//                   <div class="notes">notes</div>
//                   <div class="title">
//                     <h2>DBMS</h2>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div class="year-card swiper-slide" style="display: flex;">
//               <!-- cards used for subjects in respective year loaded from firebase -->
//               <div class="4">Fourth Year</div>
//               <div class="year-card swiper-slide" style="display: flex;">
//                 <div class="cards">
//                   <div class="image">
//                     <img src="images/background.png" alt="">
//                   </div>
//                   <div class="notes">notes</div>
//                   <div class="title">
//                     <h2>DBMS</h2>
//                   </div>
//                 </div>
//                 <div class="cards">
//                   <div class="image">
//                     <img src="images/background.png" alt="">
//                   </div>
//                   <div class="notes">notes</div>
//                   <div class="title">
//                     <h2>DBMS</h2>
//                   </div>
//                 </div>
//                 <div class="cards">
//                   <div class="image">
//                     <img src="images/background.png" alt="">
//                   </div>
//                   <div class="notes">notes</div>
//                   <div class="title">
//                     <h2>DBMS</h2>
//                   </div>
//                 </div>
//                 <div class="cards">
//                   <div class="image">
//                     <img src="images/background.png" alt="">
//                   </div>
//                   <div class="notes">notes</div>
//                   <div class="title">
//                     <h2>DBMS</h2>
//                   </div>
//                 </div>
//                 <div class="cards">
//                   <div class="image">
//                     <img src="images/background.png" alt="">
//                   </div>
//                   <div class="notes">notes</div>
//                   <div class="title">
//                     <h2>DBMS</h2>
//                   </div>
//                 </div>
//                 <div class="cards">
//                   <div class="image">
//                     <img src="images/background.png" alt="">
//                   </div>
//                   <div class="notes">notes</div>
//                   <div class="title">
//                     <h2>DBMS</h2>
//                   </div>
//                 </div>
//               </div>
//             </div>

//           </div>
//           <div class="swiper-button-next"></div>
//           <div class="swiper-button-prev"></div>
//           <div class="swiper-scrollbar"></div>
//           <div class="swiper-pagination"></div>
//         </div>
//       </div>
//     </div>
//   `;
// }
// displayList.innerHTML = cardList;