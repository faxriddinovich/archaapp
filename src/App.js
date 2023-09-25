import './App.css';
import {Route, Routes} from "react-router-dom";
import Home from "./Components/Home/Home";
import Menu from "./Components/Menu/Menu";
import History from "./Components/History/History";
import Settings from "./Components/Settings/Settings";
import {useEffect, useState} from "react";
import Login from "./Components/Login/Login";
import { onAuthStateChanged } from 'firebase/auth'
import {auth} from "./firebase/firebase";
import {doc} from "firebase/firestore";

function App() {

    const [authUser, setAuthUser] = useState(false)
    // const [loading, setLoading] = useState(undefined)

    useEffect(() => {
        onAuthStateChanged(auth, async (user) => {
            if (user) {
                // const uid = user.uid;
                //
                // const docRef = doc(db, "Users", uid);
                // const docSnap = await getDoc(docRef);
                //
                // if (docSnap.exists()) {
                //     setRole(docSnap.data()?.role)
                // } else {
                //     console.log("No such document!");
                // }
                //
                // setUser(uid)
                // setLoading(false)

                setAuthUser(user)
            } else {
                setAuthUser(false)
                // setLoading(false)
            }
        });
    }, []);

  return (
    <>
      <Routes>
          {authUser ?
              <>
                  <Route path={'/'} element={<Home/>}/>
                  <Route path={'/menu'} element={<Menu/>}/>
                  <Route path={'/history'} element={<History/>}/>
                  <Route path={'/settings'} element={<Settings/>}/>
              </> :
              <>
                <Route path={'/login'} element={<Login/>}/>
                <Route path={'*'} element={<Login/>}/>
              </>
          }
      </Routes>
    </>
  );
}

export default App;
