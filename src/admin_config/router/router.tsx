import { Typography } from "@mui/material"
import { BrowserRouter as Router , Routes , Route} from "react-router-dom"
import LoginFunc from "../../admin_screens/login"
import SignUpFunc from "../../admin_screens/signup"
import PageNFound from "../../admin_screens/pageNfound"
import Protected from "../../admin_screens/protected"
import HomePage from "../../admin_screens/home"
export default function AppRouter(){
    return(
       <Router>
        <Routes>
            <Route path="login" element={<LoginFunc/>}/>
            <Route path="signup" element={<SignUpFunc/>}/>
            <Route path="/" element = {<HomePage/>}/>
            <Route path="*" element={<PageNFound/>}/>
        </Routes>
       </Router>
    )
}