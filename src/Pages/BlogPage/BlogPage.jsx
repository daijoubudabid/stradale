import { Banner } from "../../Components/Banner/Banner";
import {BlogCard} from '../../Components/BlogCard/BlogCard'

export const BlogPage = () => {
  return (
    <div className="overflow-hidden ">
      <Banner title="Blog" className="banner-1" />
      <BlogCard/>
    </div>
  );
};
