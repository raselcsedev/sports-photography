import React from 'react';
import PictureDetail from './PictureDetail/PictureDetail';
import './CheckOut.css'

const CheckOut = () => {
    const pictures = [
        {
            "id": 1,
            "name": "A crop sensor",
            "price": "$230",
            "description": "As a start, I would always recommend the 70-200mm f2.8. This lens is light, available across all major lens makers and is relatively inexpensive.",
            "img": "https://petapixel.com/assets/uploads/2018/12/image12.jpg"
        },
        {
            "id": 2,
            "name": "Olympic Skateboard",
            "price": "$170",
            "description": "Olympic skateboarding will take two different disciplines in Tokyo and while they may look similar, they require two different sets of skills.",
            "img": "https://static.wixstatic.com/media/84770f_d27dfd1a1116f0780e1e8d8ba324c3aa.jpg/v1/fill/w_663,h_443,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/84770f_d27dfd1a1116f0780e1e8d8ba324c3aa.jpg"
        },
        {
            "id": 3,
            "name": "Olympic Swimming",
            "price": "$320",
            "description": "Discover the history of Olympic swimming, from its early days as a military training technique to a showpiece Olympic event.",
            "img": "https://static.wixstatic.com/media/84770f_696d2cffda0d3ddbc22795f576245ceb.jpg/v1/fill/w_663,h_442,al_c,lg_1,q_80,enc_auto/84770f_696d2cffda0d3ddbc22795f576245ceb.jpg"
        }
    ];
    return (
        <div id='checkout' className='container'>
            <div className="row">
                <p className='mt-4 '>I cannot stress this enough: never force customers to create an account or register prior to completing checkout. This creates an added step (or steps) for customers, slows them down, and ultimately causes them to reconsider whether they want to proceed. Always offer guest checkout options so that customers are not slowed down, and have the option to proceed by just providing their email address.</p>
                <p>The checkout page gives customers the opportunity to enter payment details and complete their order. The checkout process will collect: <br />
                    01. a customers shipping details <br />
                    02. billing details <br />
                    03. shipping method and payment method <br />
                    04. give an option to submit the order.
                </p>
                <div className="checkout-container">
                    {
                        pictures.map(picture => <PictureDetail
                            key={picture.id}
                            picture={picture}
                        >
                        </PictureDetail>)
                    }
                </div>
            </div>
        </div>
    );
};

export default CheckOut;