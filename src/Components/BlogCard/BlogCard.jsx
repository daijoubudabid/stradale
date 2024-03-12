import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  Row,
} from "react-bootstrap";
import blog_1 from "../../assets/blog-1.jpeg";
import blog_2 from "../../assets/blog-2.jpeg";
import blog_3 from "../../assets/blog-3.jpeg";
import blog_4 from "../../assets/blog-4.jpeg";
import blog_5 from "../../assets/blog-5.jpeg";
import blog_6 from "../../assets/blog-6.jpg";

import "./BlogCard.scss";

export const BlogCard = () => {
  const blogData = [
    {
      imageSrc: blog_1,
      date: "Dec 10, 2021",
      title: "This Will Fundamentally Change the Way You Look at Coffee",
      category: "All About Coffee",
    },
    {
      imageSrc: blog_2,
      date: "Dec 10, 2021",
      title: "7 Cult-Favorite Coffee Products You Should Know",
      category: "All About Coffee",
    },
    {
      imageSrc: blog_3,
      date: "Dec 10, 2021",
      title: "14 Unbelievable Things You Never Knew About Coffee",
      category: "All About Coffee",
    },
    {
      imageSrc: blog_4,
      date: "Dec 10, 2021",
      title: "The Best Type of Coffee for Every Zodiac Sign",
      category: "All About Coffee",
    },
    {
      imageSrc: blog_5,
      date: "Dec 10, 2021",
      title: "Some Feel-Good News About Coffee to Brighten Your Day",
      category: "All About Coffee",
    },
    {
      imageSrc: blog_6,
      date: "Dec 10, 2021",
      title: "The Most Underrated Coffee Products You Need to Know",
      category: "All About Coffee",
    },
  ];

  return (
    <div className="container px-4 px-lg-0 blog-page-card">
      <Row>
        {blogData.map((blog, index) => (
          <Col key={index} md={6} lg={4} className="mb-4 overflow-hidden">
            <a href="/article">
              <div className="main-card ">
                <img src={blog.imageSrc} alt="" />
                <Card>
                  <CardHeader>
                    <p>{blog.date}</p>
                  </CardHeader>
                  <CardBody>
                    <h3>{blog.title}</h3>
                    <span>
                      Quis cupidatat quis dolore amet aliquip ea exercitation
                      labore proident dolore minim culpa ullamco aute eiusmod
                    </span>
                  </CardBody>
                  <CardFooter>
                    <h5 className="text-nowrap">{blog.category}</h5>
                  </CardFooter>
                </Card>
              </div>
            </a>
          </Col>
        ))}
      </Row>
      <div className="pagination justify-content-center">
        <a href="#">
          <div className="active">1</div>
        </a>
        <a href="#">
          <div className="page-item">2</div>
        </a>
        <a href="#">
          <div className="page-item">3</div>
        </a>
      </div>
    </div>
  );
};

export default BlogCard;
