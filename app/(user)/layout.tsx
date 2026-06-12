import Footer from "@/components/layout/footer";




export default function MainLayout({ children }) {
    return (
        <>
         
            <main> {children} </main>
            <Footer />
        </>
    );

}
