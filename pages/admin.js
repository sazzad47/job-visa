import { Container } from "@mui/material";
import dynamic from "next/dynamic"
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useContext } from "react";
import { DataContext } from "../store/GlobalState";
const App = dynamic(() => import("../components/admin/App"), { ssr: false })

const AdminPage = () => {

  const router = useRouter()
  const {state, dispatch} = useContext(DataContext)
  const { auth } = state
 
  return  (
    <>
    {auth?.user?.role === 'admin'?

    <App/>: 
   <>
    <Container style={{display:'flex', alignItems:'center', justifyContent:'center', minHeight:'100vh'}} component="main" maxWidth="xs">
            404 page not found!
    </Container>
    </>
    }
    </>
  );
};

export default AdminPage