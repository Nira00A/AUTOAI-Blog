import axios from 'axios'
import { useContext , createContext , useState , useEffect , useRef} from "react";

axios.defaults.withCredentials = true;

const authContext = createContext()

export const AuthProvider = ({children}) =>{
    const [role , setRole] = useState()
    const [email , setEmail] = useState('')
    const [name , setName] = useState('')
    const [user , setUser] = useState()
    const [loading , setLoading] = useState(true)

    //Checking sessions
    useEffect(() => {
        const checkSession = async () =>{
            setLoading(true)
            try {
                const response = await axios.get("http://localhost:5000/checksession" ,{ withCredentials: true})

                if (response.data.userid && response.data.roles) {
                    setUser(response.data.userid);
                    setRole(response.data.roles);
                } else {
                    setUser(null);
                    setRole(null);}
            } catch (error) {
                setUser(null);
                setRole(null);
                console.log(error)
            } finally{
                setLoading(false)
            }
        }
        checkSession()
    }, []);

    //Getting username and useremail
    useEffect(()=>{
        const controller = new AbortController();

        const getUsernameUseremail = async () =>{
            setLoading(true)
            try {
                const result = await axios.post('http://localhost:5000/get/emailandname')
                const data = result.data.res

                setEmail(data.useremail)
                setName(data.username)
            } catch (error) {
                console.log('Error in the frontend while fetching email and name')
            }
        }

        getUsernameUseremail()

        return () => controller.abort
    },[])


    const register = async ({name , email , password}) =>{
        try {
            const result = await axios.post('http://localhost:5000/register' , {name , email , password} )
            setUser(result.data.result.id)
            setRole(result.data.result.roles)
        }catch(error) {
            console.log('Error in the Frontend' , error)
        } 
    }

    const verifyOTP = async({email , code}) =>{
        try {
            const result = await axios.post('http://localhost:5000/verify-email' , {email , code})
        } catch (error) {
            console.log('Error while Verifying in the Frontend')
        }
    }

    const login = async ({ email , password}) =>{
        try {
            const result = await axios.post('http://localhost:5000/login' , { email , password} ,{ withCredentials: true})
            setUser(result.data.result.id)
            setRole(result.data.result.roles)
        }catch(error) {
            console.log('Error in the Frontend (while Login)' , error.response.data.message)
        } 
    }

    const logout = async () => {
        setLoading(true)
        try {
            await axios.post('http://localhost:5000/logout');
            setUser(null);
            setRole(null)
        } catch (error) {
            console.log('There was an issue logging out.');
        } finally{
            setLoading(false)
        }
    };

    const deleteAccount = async ({email}) =>{
        setLoading(true)
        try {
            await axios.post('http://localhost:5000/delete-account' , {email});
            console.log('Successfylly deleted')
            setUser(null)
            setRole(null)
        } catch{
            console.log('Error in deleting account in the frontend')
        } finally {
            setLoading(false)
        }
    }

    return (
        <authContext.Provider value={{role , email , name , user , loading , register , logout , deleteAccount , login , verifyOTP , setUser , setEmail , setLoading}}>
            {children}
        </authContext.Provider>
    )
}

export const useAuth = () => useContext(authContext)