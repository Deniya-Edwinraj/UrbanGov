import PageBanner from "../Components/PageBanner";
import { posts } from "../Constant/Data";

const NewsDetails = () => {

  return (
    <>
      <div className="container-fluid p-0">
        {/* Banner Section */}
        <PageBanner title="News Details" subtitle="Latest updates and stories" />

        <section className="py-5">
          <div className="container">
          </div>
        </section>
      </div>
    </>
  );
};

export default NewsDetails;
