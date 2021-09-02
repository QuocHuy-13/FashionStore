import React from 'react';
import Rating from '../../component/Rating/Rating';
const ProductReview = () => {
    const reviews = [
        {
            id: 1,
            name: 'Cristopher Lee',
            comment:
                'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus, quaerat repellendus. Ad at sit laboriosam sint ea mollitia incidunt voluptatibus inventore libero dolorem velit dolor nobis odit tempora, ex consequuntur.',
            ratings: {
                star_ratings: 4.8,
                votes: 4.8,
            }
        },
        {
            id: 2,
            name: 'Nirob Khan',
            comment:
                'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus, quaerat repellendus. Ad at sit laboriosam sint ea mollitia incidunt voluptatibus inventore libero dolorem velit dolor nobis odit tempora, ex consequuntur.',
            ratings: {
                star_ratings: 5,
                votes: 5,
            }
        },
        {
            id: 3,
            name: 'MD.ZENAUL ISLAM',
            comment:
                'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus, quaerat repellendus. Ad at sit laboriosam sint ea mollitia incidunt voluptatibus inventore libero dolorem velit dolor nobis odit tempora, ex consequuntur.',
            ratings: {
                star_ratings: 4,
                votes: 4,
            }
        }
    ]
    return (
        <div className="product-tab">
            <ul className="nav">
                <li>
                    <a
                        className="detail-tab__btn active"
                        aria-current="page"
                        href="#description"
                        role="tab"
                        data-toggle="tab"
                    >Descriptions</a>
                </li>
                <li>
                    <a
                        className="detail-tab__btn"
                        href="#reviews"
                        role="tab"
                        data-toggle="tab"
                    >Reviews</a>
                </li>
            </ul>
            <div className="tab-content">
                <div role="tabpanel" className="tab-pane active" id="description">
                    <p>Stay comfortable and stay in the race no matter what the weather's up to. The Bruno Compete Hoodie's water-repellent exterior shields you from the elements, while advanced fabric technology inside wicks moisture to keep you dry.Stay comfortable and stay in the race no matter what the weather's up to. The Bruno Compete Hoodie's water-repellent exterior shields you from the elements, while advanced fabric technology inside wicks moisture to keep you dry.Stay comfortable and stay in the race no matter what the weather's up to. The Bruno Compete Hoodie's water-repellent exterior shields you from the elements, while advanced fabric technology inside wicks moisture to keep you dry.</p>
                    <ul>
                        <li>Adipisicing elitEnim, laborum.</li>
                        <li>Lorem ipsum dolor sit</li>
                        <li>Dolorem molestiae quod voluptatem! Sint.</li>
                        <li>Iure obcaecati odio pariatur quae saepe!</li>
                    </ul>
                </div>
                <div role="tabpanel" className="tab-pane" id="reviews">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="prodcut-rating-wrap">
                                <div className="pro-avg-rating">
                                    <h4>4.5 <span>(overall)</span></h4>
                                    <span>Based on 3 Comments</span>
                                </div>
                                <div className="rating-wrap">
                                    {reviews.map(review => {
                                        return (
                                            <div className="sin-ratings" key={review.id}>
                                                <div className="rating-author">
                                                    <h3>{review.name}</h3>
                                                    <Rating
                                                        rating={review.ratings}
                                                        ratingClassName={"review-rating"}
                                                    />
                                                </div>
                                                <p>
                                                    {review.comment}
                                                </p>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductReview;
