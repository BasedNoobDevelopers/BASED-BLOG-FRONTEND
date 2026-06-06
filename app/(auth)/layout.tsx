
import Navbar from "@/components/layout/navbar";


export default function AuthLayout({ children }) {
    return (
        <>
            <Navbar />
           
                {children}
          
        </>
    );
}