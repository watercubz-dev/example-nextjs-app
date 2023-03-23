import Navbar from "./Navbar"
import { useEffect } from "react"
import { useRouter } from "next/router"
import nProgress from "nprogress"


const  Layouts = ({children}) => {
  
     const router = useRouter();

     useEffect(() => {
      
      const handleRouteChange = url => {
         console.log(url)
         nProgress.start();
      }

      router.events.on('routeChangeStart', handleRouteChange)

      router.events.on('routeChangeComplete', () => nProgress.done());

      return () => {
        router.events.off('routeChangeStart', handleRouteChange)
      }

     }, [])
   
    return (
      <>
       <Navbar />
   
      <main className="container py-4">
          {children}     
      </main>

      </>
    )
  }

export default Layouts;