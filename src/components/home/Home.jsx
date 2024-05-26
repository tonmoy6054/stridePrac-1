import Banner from "../../pages/banner/Banner";
import Category from "../category/Category";
import Query from "../query/Query";
import Testimonial from "../testimonial/Testimonial";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category ></Category>
            <Testimonial />
            <Query />
        </div>
    );
};

export default Home;