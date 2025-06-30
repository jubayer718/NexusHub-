import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";




const CommonLayout = async ({ children }) => {

  return (
    <div>
      <Navbar></Navbar>
      <main className="min-h-screen">
      
        {children}
 
      
      </main>
      <Footer></Footer>
    </div>
  );
};

export default CommonLayout;