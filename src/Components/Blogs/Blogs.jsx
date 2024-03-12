/* eslint-disable react/prop-types */
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
import "./Blogs.scss";

const blogData = [
  {
    imageSrc: blog_1,
    date: "Dec 10, 2021",
    title: "This Will Fundamentally Change the Way You Look at Coffee",
  },
  {
    imageSrc: blog_2,
    date: "Dec 10, 2021",
    title: "7 Cult-Favorite Coffee Products You Should Know",
  },
  {
    imageSrc: blog_3,
    date: "Dec 10, 2021",
    title: "14 Unbelievable Things You Never Knew About Coffee",
  },
  {
    imageSrc: blog_4,
    date: "Dec 10, 2021",
    title: "The Best Type of Coffee for Every Zodiac Sign",
  },
  {
    imageSrc: blog_5,
    date: "Dec 10, 2021",
    title: "Some Feel-Good News About Coffee to Brighten Your Day",
  },
];

const BlogCard = ({ imageSrc, date, title }) => (
  <Col md={6} lg={4} className="mt-3 mb-lg-0">
    <a href="/article">
      <div className="blog-card">
        <img src={imageSrc} alt="" />
        <Card>
          <CardHeader>
            <span>{date}</span>
          </CardHeader>
          <CardBody>
            <h3>{title}</h3>
          </CardBody>
          <CardFooter>
            <h5 className="text-nowrap">All About Coffee</h5>
          </CardFooter>
        </Card>
      </div>
    </a>
  </Col>
);

export const Blogs = () => (
  <div className="blog-section">
    <div className="container">
      <Row>
        <Col md={6} lg={4} className="mb-5 mb-lg-0">
          <div className="blog-title">
            <h3 data-aos="fade-up" data-aos-duration="500">Latest</h3>
            <span data-aos="fade-up" data-aos-duration="500" data-aos-delay="200">Blog</span>
          </div>
        </Col>
        {blogData.map((blog, index) => (
          <BlogCard key={index} {...blog} />
        ))}
      </Row>
    </div>
  </div>
);
