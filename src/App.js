import Cards from "./components/cards"
import { data } from './data';
export default function App() {
    const show = data.map((e,index) =>
        <Cards
            key={index}
            img={e.img}
            title={e.title}
            desc={e.desc}
            price={e.price}
            rev={e.review} />);
    return <div className="show">
        {show}
    </div>
        
    
}