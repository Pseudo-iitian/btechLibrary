import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getStorage, listAll, ref, uploadBytesResumable, getDownloadURL, deleteObject } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-storage.js";

// Import the functions you need from the SDKs you need
// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyDZ23OuK7n5WIxQGAqP7vFhj1FnK6IgBpo",
  authDomain: "btech-book-store.firebaseapp.com",
  databaseURL: "https://btech-book-store-default-rtdb.firebaseio.com",
  projectId: "btech-book-store",
  storageBucket: "btech-book-store.appspot.com",
  messagingSenderId: "1082176630496",
  appId: "1:1082176630496:web:b6e692b2d821f575d0aa85",
  measurementId: "G-PTX45PZZT5"
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const storageRef = ref(storage); // root reference
// console.log(subjects); 

// notes hand wirtten
let NOTES = document.getElementById('NOTES');
const notesRef = ref(storage, "/notes");
listAll(notesRef)
  .then((totalBranches) => {
    totalBranches.items.forEach(async (notes) => {
      try {
        let Name = await notes.name.substring(0, notes.name.length - 4);
        getDownloadURL(ref(storage, `/notes/${notes.name}`))
          .then((url) => {
            NOTES.innerHTML += `
              <a href="${url}" class="cards" target="_blank">
                <div>
                  <div class="image">
                    <img src="../images/notes.jpg" alt="">
                  </div>
                  <div class="notes">notes</div>
                  <div class="title">
                    <h2>${(Name)}</h2>
                  </div>
                </div>
              </a>
            `;
          })
          .catch((error) => {
            console.log(error);
          });
        } catch (error) {
          console.log("Error getting download URL:", error);
      }
    });
  })
  .catch((error) => {
    console.log("Error listing items:", error);
  });




// list all firstyear book items pdf*********** 1
let FirstYearBook = document.getElementById('FirstYearBook');
const FirstYearBookRef = ref(storage, "/home/year1");
listAll(FirstYearBookRef)
  .then((totalPDF) => {
    totalPDF.items.forEach(async (book)=> {
      try {
        let FirstYearBookName = await book.name.substring(0, book.name.length - 4);
        getDownloadURL(ref(storage, `/home/year1/${book.name}`))
          .then((url) => {
            FirstYearBook.innerHTML += `
              <a href="${url}" class="cards" target="_blank">
              <div class="cards">
                <div class="image">
                  <img src="images/book.jpg" alt="">
                </div>
                <div class="notes">book</div>
                <div class="title">
                  <h2>${FirstYearBookName}</h2>
                </div>
              </div>
              </a>
            `;
          })
          .catch((error) => {
            console.log(error);
          });
        } catch (error) {
          console.log("Error getting download URL:", error);
      }
    });
  })
  .catch((error) => {
    console.log("Error listing items:", error);
  });


// cs branch 
// 2nd year ke liye hai ye********************** CS - 2nd year
let CS_2 = document.getElementById('CS_2');
const CS_2Ref = ref(storage, "/home/cs/year2");
listAll(CS_2Ref)
  .then((totalPDF) => {
    totalPDF.items.forEach(async (book)=> {
      try {
        let CS_2BookName = await book.name.substring(0, book.name.length - 4);
        getDownloadURL(ref(storage, `/home/cs/year2/${book.name}`))
          .then((url) => {
            CS_2.innerHTML += `
              <a href="${url}" class="cards" target="_blank">
                <div class="cards">
                  <div class="image">
                    <img src="images/book.jpg" alt="">
                  </div>
                  <div class="notes">book</div>
                  <div class="title">
                    <h2>${CS_2BookName}</h2>
                  </div>
                </div>
              </a>
            `;
          })
          .catch((error) => {
            console.log(error);
          });
        } catch (error) {
          console.log("Error getting download URL:", error);
      }
    });
  })
  .catch((error) => {
    console.log("Error listing items:", error);
  });

// CS 3rd year
let CS_3 = document.getElementById('CS_3');
const CS_3Ref = ref(storage, "/home/cs/year3");
listAll(CS_3Ref)
  .then((totalPDF) => {
    totalPDF.items.forEach(async (book)=> {
      try {
        let CS_3BookName = await book.name.substring(0, book.name.length - 4);
        getDownloadURL(ref(storage, `/home/cs/year3/${book.name}`))
          .then((url) => {
            CS_3.innerHTML += `
              <a href="${url}" class="cards" target="_blank">
                <div class="cards">
                  <div class="image">
                    <img src="images/book.jpg" alt="">
                  </div>
                  <div class="notes">book</div>
                  <div class="title">
                    <h2>${CS_3BookName}</h2>
                  </div>
                </div>
              </a>
            `;
          })
          .catch((error) => {
            console.log(error);
          });
        } catch (error) {
          console.log("Error getting download URL:", error);
      }
    });
  })
  .catch((error) => {
    console.log("Error listing items:", error);
  });

// cs 4th year ****************
let CS_4 = document.getElementById('CS_4');
const CS_4Ref = ref(storage, "/home/cs/year4");
listAll(CS_4Ref)
  .then((totalPDF) => {
    totalPDF.items.forEach(async (book)=> {
      try {
        let CS_4BookName = await book.name.substring(0, book.name.length - 4);
        getDownloadURL(ref(storage, `/home/cs/year4/${book.name}`))
          .then((url) => {
            CS_4.innerHTML += `
              <a href="${url}" class="cards" target="_blank">
                <div class="cards">
                  <div class="image">
                    <img src="images/book.jpg" alt="">
                  </div>
                  <div class="notes">book</div>
                  <div class="title">
                    <h2>${CS_4BookName}</h2>
                  </div>
                </div>
              </a>
            `;
          })
          .catch((error) => {
            console.log(error);
          });
        } catch (error) {
          console.log("Error getting download URL:", error);
      }
    });
  })
  .catch((error) => {
    console.log("Error listing items:", error);
  });


  // ____________________________________________________________________________________ electronics engineering branch
// electronics engineering 2nd year branch

let ElectE_2 = document.getElementById('ElectE_2');
const ElectE_2Ref = ref(storage, "/home/electronicEngineering/year2");
listAll(ElectE_2Ref)
  .then((totalPDF) => {
    totalPDF.items.forEach(async (book)=> {
      try {
        let ElectE_2BookName = await book.name.substring(0, book.name.length - 4);
        getDownloadURL(ref(storage, `/home/electronicEngineering/year2/${book.name}`))
          .then((url) => {
            ElectE_2.innerHTML += `
              <a href="${url}" class="cards" target="_blank">
                <div class="cards">
                  <div class="image">
                    <img src="images/book.jpg" alt="">
                  </div>
                  <div class="notes">book</div>
                  <div class="title">
                    <h2>${ElectE_2BookName}</h2>
                  </div>
                </div>
              </a>
            `;
          })
          .catch((error) => {
            console.log(error);
          });
        } catch (error) {
          console.log("Error getting download URL:", error);
      }
    });
  })
  .catch((error) => {
    console.log("Error listing items:", error);
  });

// electronics engineering 3rd year
let ElectE_3 = document.getElementById('ElectE_3');
const ElectE_3Ref = ref(storage, "/home/electronicEngineering/year3");
listAll(ElectE_3Ref)
  .then((totalPDF) => {
    totalPDF.items.forEach(async (book)=> {
      try {
        let ElectE_3BookName = await book.name.substring(0, book.name.length - 4);
        getDownloadURL(ref(storage, `/home/electronicEngineering/year3/${book.name}`))
          .then((url) => {
            ElectE_3.innerHTML += `
              <a href="${url}" class="cards" target="_blank">
                <div class="cards">
                  <div class="image">
                    <img src="images/book.jpg" alt="">
                  </div>
                  <div class="notes">book</div>
                  <div class="title">
                    <h2>${ElectE_3BookName}</h2>
                  </div>
                </div>
              </a>
            `;
          })
          .catch((error) => {
            console.log(error);
          });
        } catch (error) {
          console.log("Error getting download URL:", error);
      }
    });
  })
  .catch((error) => {
    console.log("Error listing items:", error);
  });

// electronics engineering 4th year
// _________________________________________________________________________ electrical enigineering
// 2nd year

let ElectricalEng_2 = document.getElementById('ElectricalEng_2');
const ElectricalEng_2Ref = ref(storage, "/home/Electrical/year2");
listAll(ElectricalEng_2Ref)
  .then((totalPDF) => {
    totalPDF.items.forEach(async (book)=> {
      try {
        let ElectricalEng_2BookName = await book.name.substring(0, book.name.length - 4);
        getDownloadURL(ref(storage, `/home/Electrical/year2/${book.name}`))
          .then((url) => {
            ElectricalEng_2.innerHTML += `
              <a href="${url}" class="cards" target="_blank">
                <div class="cards">
                  <div class="image">
                    <img src="images/book.jpg" alt="">
                  </div>
                  <div class="notes">book</div>
                  <div class="title">
                    <h2>${ElectricalEng_2BookName}</h2>
                  </div>
                </div>
              </a>
            `;
          })
          .catch((error) => {
            console.log(error);
          });
        } catch (error) {
          console.log("Error getting download URL:", error);
      }
    });
  })
  .catch((error) => {
    console.log("Error listing items:", error);
  });

// 3rd year
let ElectricalEng_3 = document.getElementById('ElectricalEng_3');
const ElectricalEng_3Ref = ref(storage, "/home/Electrical/year3");
listAll(ElectricalEng_3Ref)
  .then((totalPDF) => {
    totalPDF.items.forEach(async (book)=> {
      try {
        let ElectricalEng_3BookName = await book.name.substring(0, book.name.length - 4);
        getDownloadURL(ref(storage, `/home/Electrical/year3/${book.name}`))
          .then((url) => {
            ElectricalEng_3.innerHTML += `
              <a href="${url}" class="cards" target="_blank">
                <div class="cards">
                  <div class="image">
                    <img src="images/book.jpg" alt="">
                  </div>
                  <div class="notes">book</div>
                  <div class="title">
                    <h2>${ElectricalEng_3BookName}</h2>
                  </div>
                </div>
              </a>
            `;
          })
          .catch((error) => {
            console.log(error);
          });
        } catch (error) {
          console.log("Error getting download URL:", error);
      }
    });
  })
  .catch((error) => {
    console.log("Error listing items:", error);
  });


// Quantum part started _______________________________________________________
// first year quantume here

let FirstYearQuantum = document.getElementById('FirstYearQuantum');
const FirstYearQuantumRef = ref(storage, "/Quantum/year1");
listAll(FirstYearQuantumRef)
  .then((totalPDF) => {
    totalPDF.items.forEach(async (book)=> {
      try {
        let FirstYearQuantumBookName = await book.name.substring(0, book.name.length - 4);
        getDownloadURL(ref(storage, `/Quantum/year1/${book.name}`))
          .then((url) => {
            FirstYearQuantum.innerHTML += `
              <a href="${url}" class="cards" target="_blank">
                <div class="cards">
                  <div class="image">
                    <img src="../images/quantum.jpg" alt="">
                  </div>
                  <div class="notes">Quantum</div>
                  <div class="title">
                    <h2>${FirstYearQuantumBookName}</h2>
                  </div>
                </div>
              </a>
            `;
          })
          .catch((error) => {
            console.log(error);
          });
        } catch (error) {
          console.log("Error getting download URL:", error);
      }
    });
  })
  .catch((error) => {
    console.log("Error listing items:", error);
  });

// _________________________________________________________ CS Quantume part started
// 2nd year CS branch

let CsQuant_2 = document.getElementById('CsQuant_2');
const CsQuant_2Ref = ref(storage, "/Quantum/cs/year2");
listAll(CsQuant_2Ref)
  .then((totalPDF) => {
    totalPDF.items.forEach(async (book)=> {
      try {
        let CsQuant_2BookName = await book.name.substring(0, book.name.length - 4);
        getDownloadURL(ref(storage, `/Quantum/cs/year2/${book.name}`))
          .then((url) => {
            CsQuant_2.innerHTML += `
              <a href="${url}" class="cards" target="_blank">
                <div class="cards">
                  <div class="image">
                    <img src="../images/quantum.jpg" alt="">
                  </div>
                  <div class="notes">Quantum</div>
                  <div class="title">
                    <h2>${CsQuant_2BookName}</h2>
                  </div>
                </div>
              </a>
            `;
          })
          .catch((error) => {
            console.log(error);
          });
        } catch (error) {
          console.log("Error getting download URL:", error);
      }
    });
  })
  .catch((error) => {
    console.log("Error listing items:", error);
  });


// 3rd year CS branch quantume
let CsQuant_3 = document.getElementById('CsQuant_3');
const CsQuant_3Ref = ref(storage, "/Quantum/cs/year3");
listAll(CsQuant_3Ref)
  .then((totalPDF) => {
    totalPDF.items.forEach(async (book)=> {
      try {
        let CsQuant_3BookName = await book.name.substring(0, book.name.length - 4);
        getDownloadURL(ref(storage, `/Quantum/cs/year3/${book.name}`))
          .then((url) => {
            CsQuant_3.innerHTML += `
              <a href="${url}" class="cards" target="_blank">
                <div class="cards">
                  <div class="image">
                    <img src="../images/quantum.jpg" alt="">
                  </div>
                  <div class="notes">Quantum</div>
                  <div class="title">
                    <h2>${CsQuant_3BookName}</h2>
                  </div>
                </div>
              </a>
            `;
          })
          .catch((error) => {
            console.log(error);
          });
        } catch (error) {
          console.log("Error getting download URL:", error);
      }
    });
  })
  .catch((error) => {
    console.log("Error listing items:", error);
  });

// 4th year CS branch quantume
let CsQuant_4 = document.getElementById('CsQuant_4');
const CsQuant_4Ref = ref(storage, "/Quantum/cs/year4");
listAll(CsQuant_4Ref)
  .then((totalPDF) => {
    totalPDF.items.forEach(async (book)=> {
      try {
        let CsQuant_4BookName = await book.name.substring(0, book.name.length - 4);
        getDownloadURL(ref(storage, `/Quantum/cs/year4/${book.name}`))
          .then((url) => {
            CsQuant_4.innerHTML += `
              <a href="${url}" class="cards" target="_blank">
                <div class="cards">
                  <div class="image">
                    <img src="../images/quantum.jpg" alt="">
                  </div>
                  <div class="notes">Quantum</div>
                  <div class="title">
                    <h2>${CsQuant_4BookName}</h2>
                  </div>
                </div>
              </a>
            `;
          })
          .catch((error) => {
            console.log(error);
          });
        } catch (error) {
          console.log("Error getting download URL:", error);
      }
    });
  })
  .catch((error) => {
    console.log("Error listing items:", error);
  });

// __________________________________________________________________ electronics engineering
// 2nd year

let ElectronicQuantum_2 = document.getElementById('ElectronicQuantum_2');
const ElectronicQuantum_2Ref = ref(storage, "/Quantum/electronics/year2");
listAll(ElectronicQuantum_2Ref)
  .then((totalPDF) => {
    totalPDF.items.forEach(async (book)=> {
      try {
        let ElectronicQuantum_2BookName = await book.name.substring(0, book.name.length - 4);
        getDownloadURL(ref(storage, `/Quantum/electronics/year2/${book.name}`))
          .then((url) => {
            ElectronicQuantum_2.innerHTML += `
              <a href="${url}" class="cards" target="_blank">
                <div class="cards">
                  <div class="image">
                    <img src="../images/quantum.jpg" alt="">
                  </div>
                  <div class="notes">Quantum</div>
                  <div class="title">
                    <h2>${ElectronicQuantum_2BookName}</h2>
                  </div>
                </div>
              </a>
            `;
          })
          .catch((error) => {
            console.log(error);
          });
        } catch (error) {
          console.log("Error getting download URL:", error);
      }
    });
  })
  .catch((error) => {
    console.log("Error listing items:", error);
  });

// 3rd year
let ElectronicQuantum_3 = document.getElementById('ElectronicQuantum_3');
const ElectronicQuantum_3Ref = ref(storage, "/Quantum/electronics/year3");
listAll(ElectronicQuantum_3Ref)
  .then((totalPDF) => {
    totalPDF.items.forEach(async (book)=> {
      try {
        let ElectronicQuantum_3BookName = await book.name.substring(0, book.name.length - 4);
        getDownloadURL(ref(storage, `/Quantum/electronics/year3/${book.name}`))
          .then((url) => {
            ElectronicQuantum_3.innerHTML += `
              <a href="${url}" class="cards" target="_blank">
                <div class="cards">
                  <div class="image">
                    <img src="../images/quantum.jpg" alt="">
                  </div>
                  <div class="notes">Quantum</div>
                  <div class="title">
                    <h2>${ElectronicQuantum_3BookName}</h2>
                  </div>
                </div>
              </a>
            `;
          })
          .catch((error) => {
            console.log(error);
          });
        } catch (error) {
          console.log("Error getting download URL:", error);
      }
    });
  })
  .catch((error) => {
    console.log("Error listing items:", error);
  });

// _______________________________________________________________ Electrical engineering quatum
// 2nd year
let ElectricalQuatum_2 = document.getElementById('ElectricalQuatum_2');
const ElectricalQuatum_2Ref = ref(storage, "/Quantum/electrical/year2");
listAll(ElectricalQuatum_2Ref)
  .then((totalPDF) => {
    totalPDF.items.forEach(async (book)=> {
      try {
        let ElectricalQuatum_2BookName = await book.name.substring(0, book.name.length - 4);
        getDownloadURL(ref(storage, `/Quantum/electrical/year2/${book.name}`))
          .then((url) => {
            ElectricalQuatum_2.innerHTML += `
              <a href="${url}" class="cards" target="_blank">
                <div class="cards">
                  <div class="image">
                    <img src="../images/quantum.jpg" alt="">
                  </div>
                  <div class="notes">Quantum</div>
                  <div class="title">
                    <h2>${ElectricalQuatum_2BookName}</h2>
                  </div>
                </div>
              </a>
            `;
          })
          .catch((error) => {
            console.log(error);
          });
        } catch (error) {
          console.log("Error getting download URL:", error);
      }
    });
  })
  .catch((error) => {
    console.log("Error listing items:", error);
  });

// 3rd year
let ElectricalQuatum_3 = document.getElementById('ElectricalQuatum_3');
const ElectricalQuatum_3Ref = ref(storage, "/Quantum/electrical/year3");
listAll(ElectricalQuatum_3Ref)
  .then((totalPDF) => {
    totalPDF.items.forEach(async (book)=> {
      try {
        let ElectricalQuatum_3BookName = await book.name.substring(0, book.name.length - 4);
        getDownloadURL(ref(storage, `/Quantum/electrical/year3/${book.name}`))
          .then((url) => {
            ElectricalQuatum_3.innerHTML += `
              <a href="${url}" class="cards" target="_blank">
                <div class="cards">
                  <div class="image">
                    <img src="../images/quantum.jpg" alt="">
                  </div>
                  <div class="notes">Quantum</div>
                  <div class="title">
                    <h2>${ElectricalQuatum_3BookName}</h2>
                  </div>
                </div>
              </a>
            `;
          })
          .catch((error) => {
            console.log(error);
          });
        } catch (error) {
          console.log("Error getting download URL:", error);
      }
    });
  })
  .catch((error) => {
    console.log("Error listing items:", error);
  });

// ____________________________________________ mechanical engineering quatum 
// 2nd year

let MechQauntum_2 = document.getElementById('MechQauntum_2');
const MechQauntum_2Ref = ref(storage, "/Quantum/mechanical/year2");
listAll(MechQauntum_2Ref)
  .then((totalPDF) => {
    totalPDF.items.forEach(async (book)=> {
      try {
        let MechQauntum_2BookName = await book.name.substring(0, book.name.length - 4);
        getDownloadURL(ref(storage, `/Quantum/mechanical/year2/${book.name}`))
          .then((url) => {
            MechQauntum_2.innerHTML += `
              <a href="${url}" class="cards" target="_blank">
                <div class="cards">
                  <div class="image">
                    <img src="../images/quantum.jpg" alt="">
                  </div>
                  <div class="notes">Quantum</div>
                  <div class="title">
                    <h2>${MechQauntum_2BookName}</h2>
                  </div>
                </div>
              </a>
            `;
          })
          .catch((error) => {
            console.log(error);
          });
        } catch (error) {
          console.log("Error getting download URL:", error);
      }
    });
  })
  .catch((error) => {
    console.log("Error listing items:", error);
  });

// 3rd year
let MechQauntum_3 = document.getElementById('MechQauntum_3');
const MechQauntum_3Ref = ref(storage, "/Quantum/mechanical/year3");
listAll(MechQauntum_3Ref)
  .then((totalPDF) => {
    totalPDF.items.forEach(async (book)=> {
      try {
        let MechQauntum_3BookName = await book.name.substring(0, book.name.length - 4);
        getDownloadURL(ref(storage, `/Quantum/mechanical/year3/${book.name}`))
          .then((url) => {
            MechQauntum_3.innerHTML += `
              <a href="${url}" class="cards" target="_blank">
                <div class="cards">
                  <div class="image">
                    <img src="../images/quantum.jpg" alt="">
                  </div>
                  <div class="notes">Quantum</div>
                  <div class="title">
                    <h2>${MechQauntum_3BookName}</h2>
                  </div>
                </div>
              </a>
            `;
          })
          .catch((error) => {
            console.log(error);
          });
        } catch (error) {
          console.log("Error getting download URL:", error);
      }
    });
  })
  .catch((error) => {
    console.log("Error listing items:", error);
  });

// __________________________________________________________________- civl quantum
// 2nd year

let CivilQuant_2 = document.getElementById('CivilQuant_2');
const CivilQuant_2Ref = ref(storage, "/Quantum/civil/year2");
listAll(CivilQuant_2Ref)
  .then((totalPDF) => {
    totalPDF.items.forEach(async (book)=> {
      try {
        let CivilQuant_2BookName = await book.name.substring(0, book.name.length - 4);
        getDownloadURL(ref(storage, `/Quantum/civil/year2/${book.name}`))
          .then((url) => {
            CivilQuant_2.innerHTML += `
              <a href="${url}" class="cards" target="_blank">
                <div class="cards">
                  <div class="image">
                    <img src="../images/quantum.jpg" alt="">
                  </div>
                  <div class="notes">Quantum</div>
                  <div class="title">
                    <h2>${CivilQuant_2BookName}</h2>
                  </div>
                </div>
              </a>
            `;
          })
          .catch((error) => {
            console.log(error);
          });
        } catch (error) {
          console.log("Error getting download URL:", error);
      }
    });
  })
  .catch((error) => {
    console.log("Error listing items:", error);
  });

// 3rd year

let CivilQuant_3 = document.getElementById('CivilQuant_3');
const CivilQuant_3Ref = ref(storage, "/Quantum/civil/year3");
listAll(CivilQuant_3Ref)
  .then((totalPDF) => {
    totalPDF.items.forEach(async (book)=> {
      try {
        let CivilQuant_3BookName = await book.name.substring(0, book.name.length - 4);
        getDownloadURL(ref(storage, `/Quantum/civil/year3/${book.name}`))
          .then((url) => {
            CivilQuant_3.innerHTML += `
              <a href="${url}" class="cards" target="_blank">
                <div class="cards">
                  <div class="image">
                    <img src="../images/quantum.jpg" alt="">
                  </div>
                  <div class="notes">Quantum</div>
                  <div class="title">
                    <h2>${CivilQuant_3BookName}</h2>
                  </div>
                </div>
              </a>
            `;
          })
          .catch((error) => {
            console.log(error);
          });
        } catch (error) {
          console.log("Error getting download URL:", error);
      }
    });
  })
  .catch((error) => {
    console.log("Error listing items:", error);
  });
