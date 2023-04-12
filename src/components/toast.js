import { toast } from 'react-toastify';


 export const notify = (type) => {
    if (type === 'success'){
        toast.success("You signed in successfully")
    }else{
        toast.error("invaled data" )
    }
}