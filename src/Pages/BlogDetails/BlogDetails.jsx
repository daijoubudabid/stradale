import { BsFillTagFill } from "react-icons/bs";
import { FaComment } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { Banner } from "../../Components/Banner/Banner";
import avatar from "../../assets/avatar.jpg";
import "./BlogDetails.scss";
import { BlogContentsForm } from "../../Components/BlogContentsForm/BlogContentsForm";

export const BlogDetails = () => {
  return (
    <div className="overflow-hidden">
      <Banner
        title={"This Will Fundamentally Change the Way You Look at Coffee"}
        subtitle={"January 10, 2022"}
        className={"banner-3"}
      />
      <div className="row align-items-center justify-content-center">
        <div className="col-md-8 px-0 px-lg-5">
          {/* blog content */}
          <div className="blog-info container-fluid">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat.
            </p>
            <blockquote>
              It’s amazing how the world begins to change through the eyes of a
              cup of coffee.
              <span>Donna A. Favors</span>
            </blockquote>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat.
            </p>
            {/* blog tags */}
            <div className="blog-tags">
              <span>
                <IoPerson color="#CA8E46" size={13} className="me-2" />
                By:
                <a href="#"> Lynda Wu</a>
              </span>
              <span>
                <BsFillTagFill color="#CA8E46" size={13} className="me-2" />
                <a href="#">News, </a>
                <a href="#">Events</a>
              </span>
              <span>
                <FaComment color="#CA8E46" size={13} className="me-2" />
                <a href="#">10 Comments</a>
              </span>
            </div>
            {/* blog comments */}
            <h4 className="comment-title">Comments (5)</h4>
            <div className="blog-comments">
              <div>
                <img src={avatar} alt="" />
              </div>
              <div>
                <h6>John Smith</h6>
                <span>
                  31 December 2023 <a href="#">Reply</a>
                </span>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo.
                </p>
                <div className="blog-comments-nested">
                  <div>
                    <img src={avatar} alt="" />
                  </div>
                  <div>
                    <h6>John Smith</h6>
                    <span>
                      31 December 2023 <a href="#">Reply</a>
                    </span>
                    <p>
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium, totam rem
                      aperiam, eaque ipsa quae ab illo inventore veritatis et
                      quasi architecto beatae vitae dicta sunt explicabo.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="blog-comments">
              <div>
                <img src={avatar} alt="" />
              </div>
              <div>
                <h6>John Smith</h6>
                <span>
                  31 December 2023 <a href="#">Reply</a>
                </span>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo.
                </p>
                <div className="blog-comments-nested">
                  <div>
                    <img src={avatar} alt="" />
                  </div>
                  <div>
                    <h6>John Smith</h6>
                    <span>
                      31 December 2023 <a href="#">Reply</a>
                    </span>
                    <p>
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium, totam rem
                      aperiam, eaque ipsa quae ab illo inventore veritatis et
                      quasi architecto beatae vitae dicta sunt explicabo.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="blog-comments-single">
              <div>
                <img src={avatar} alt="" />
              </div>
              <div>
                <h6>John Smith</h6>
                <span>
                  31 December 2023 <a href="#">Reply</a>
                </span>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo.
                </p>
              </div>
            </div>
            {/* blog form */}
            <BlogContentsForm/>
          </div>
        </div>
      </div>
    </div>
  );
};
