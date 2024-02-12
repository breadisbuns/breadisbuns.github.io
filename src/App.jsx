import React from "react";
import NavBar from './NavBar.jsx';

// const Layout = () => {
//     return (
//         //render nav bar
//         //render outlet
//     );
// };

//add to component files
import { useNavigate } from "react-router-dom";
// const navigate = useNavigate();
// navigate("/LoginPage");

const NotFound = () => <h1> 404 Page Not Found</h1>;

//rendering app:
const App = () => {
    // useEffect(() => {
    // getDecks();
    // }, []);

    // render
    return (
        <div>
            {/* //add routes here? */}
            <h1>Is this thing on?</h1>
            <NavBar/>
        </div>
    );
};
 
export default App;