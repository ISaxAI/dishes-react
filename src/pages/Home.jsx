import {useEffect, useState} from "react";
import {getAllCategories} from "../api";
import {Preloader} from "../component/Preloader";
import {CategoryList} from "../component/CategoryList";

function Home(){
    const [catalog, setCatalog] = useState([])
    useEffect(() => {
        getAllCategories().then(data => {
            setCatalog(data.categories)
        })
    }, []);
    return <>{ !catalog.length ? <Preloader /> :
        <CategoryList catalog={catalog}/>
    }
    </>
}
export { Home }