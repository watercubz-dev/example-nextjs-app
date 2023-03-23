import Link from "next/link";
import Layouts from "../../components/Layouts";

export default function custom404 () {
    return (
        <Layouts>
         <div className="text-center">
            <h1>404</h1>
            <p>this does not exist. Please return to <Link legacyBehavior href="/">
                  <a>Home</a>
            </Link>
            </p>
        </div>
        </Layouts>
    
    )
}



