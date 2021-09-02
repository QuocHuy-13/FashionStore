import React from 'react';
import './HomeBlog.css';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import blogImg1 from '../../../assets/images/Blog/2.jpg';
import blogImg2 from '../../../assets/images/Blog/4.jpg';
import blogImg3 from '../../../assets/images/Blog/5.jpg';

const HomeBlog = () => {
    let blogsData = [
        {
            image: blogImg1,
            title: "Lorem ipsum dolor sit",
            description: "Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut ....."
        },
        {
            image: blogImg2,
            title: "Lorem ipsum dolor sit",
            description: "Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut ....."
        },
        {
            image: blogImg3,
            title: "Lorem ipsum dolor sit",
            description: "Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut ....."
        },
    ];
    const blogs = blogsData.map((blog, index) => {
        return (
            <div className="col-md-4" key={index}>
                <div className="blog-card">
                    <div className="blog-image">
                        <img src={blog.image} alt="image_blog"/>
                    </div>
                    <div className="blog-content">
                        <h3>{blog.title}</h3>
                        <p>{blog.description}</p>
                        <a href="/#">read more
                        </a>
                    </div>
                </div>
            </div>
        )
    })

    return (
        <section className="home-blog">
            <div className="container blog-section mb-4">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="blog-section-title">
                            <h2>latest blog</h2>
                            <div className="title-icon">
                                <span>
                                    <FaAngleLeft/>
                                    <FaAngleRight/>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {blogs}
                </div>
           </div>
        </section>
    );
}

export default HomeBlog;
