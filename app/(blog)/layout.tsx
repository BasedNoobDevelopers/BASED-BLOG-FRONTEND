
import UserNavbar from "@/components/layout/nav/usernavbar";
import Footer from "@/components/layout/footer";




export default function UserLayout({children}) {
    return(
    <>
        <UserNavbar />
        <main> {children} </main>
        <Footer />
    </>
    );
  
}
