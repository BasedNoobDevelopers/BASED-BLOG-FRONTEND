
import Navbar from "@/components/layout/nav/navbar";


export default function AuthLayout({ children }) {
    return (
        <>
            <Navbar />
           
                {children}
          
        </>
    );
}