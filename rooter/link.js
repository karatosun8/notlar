//1-components doyasına gel ve Navbar componenti oluştur.
//2- Navbar komponentinden (import {Link} from "react-router-dom") linki import et.
//3-Aşağıdaki gibi Navbar komponentini yaz:

//! Link to yerine Navlink import edebilirsin.Navlink to import edersen aktif linki gösterir.

//? function Navbar() {
//?      return (
//?      <nav>
//?       <Link to="/">Home</Link>
//?       <Link to="/aboutUs">About</Link>
//?       </nav>
//?)
//?        }
  
//?   export default Navbar

//4- App.js e gel ve aşağıdaki gibi import et:
// {/*
//     <div className='App'>
//       <Navbar/>
//       <Routes>
//       <Route path='/' element={<Home/>}/>
//       <Route path='/aboutUs' element={<AboutUs/>}/>
//      </Routes>
      
//     </div> 
//*/}

// 5- İçiçe link oluşturmak istediğinde örneğin history nin içine Our company ve team linki vermek istediğinde öncelikle Outleti import et.

// import { NavLink , Outlet} from 'react-router-dom'

//! İç içe routelarda linklerin başına / koymuyoruz

//? 6-function History() {
//     return (
//       <>
//       <div>
//       <div>
//         History
//       </div>
//!       <NavLink to="company">Our Company</NavLink>
//!       <NavLink to="team">Team</NavLink>
//       </div>
//       <Outlet/>
//       </>
//     )
//   }
  
// ?  export default History

// 6- App.jsx için aşağıdaki gibi;

// function App() {
//     return (
//       <div className="App">
//         <Navbar />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/aboutUs" element={<AboutUs />} />
//           <Route path="/mission" element={<Mission />} />
//!         <Route path="/history" element={<History />}>
//!             <Route path="company" element={<Company />} />
// !            <Route path="team" element={<Team />} />
// !          </Route>
//           <Route path="*" element={<WrongPath />} />
//         </Routes>
//       </div>
//     );
//   }
  
//   export default App;