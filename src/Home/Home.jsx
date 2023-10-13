import Banner from "../Component/Banner/Banner";
import CreatePlane from "../Component/CreatePlane/CreatePlane";
import ExtraStudy from "../Component/ExtraStudy/ExtraStudy";
import Gallery from "../Component/Gallery/Gallery";
import CategoryTab from "../Component/SubCategoryTab/CategoryTab";
import Testimonial from "../Component/UserReview/Testimonial";


const Home = () => {
     return (
          <div className="space-y-20">
               <Banner className='container'/>
               <Gallery />
               <ExtraStudy />
               <CategoryTab/>
               <CreatePlane/>
               <Testimonial/>
          </div>
     );
};

export default Home;