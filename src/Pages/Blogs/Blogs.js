import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <section className='blogs'>
            <div>
                <h1>Difference between Authentication and Authorization - </h1>
                <p>
                    01. Authentication verifies who the user is. Authorization determines what resources a user can access. <br />
                    02. Authentication is visible to and partially changeable by the user. Authorization is not visible to or changeable by the user. <br />
                    03. Authentication is the first step of a good identity and access management process. Authorization always takes place after authentication.<br />
                    04. Authentication works through passwords, one-time pins, biometric information, and other information provided or entered by the user. Authorization works through settings that are implemented and maintained by the organization. <br />
                    05. Example: By verifying their identity, employees can gain access to an HR application that includes their personal pay information, vacation time, and 401K data.Example: Once their level of access is authorized, employees and HR managers can access different levels of data based on the permissions set by the organization.
                </p>
            </div>
            <div>
                <h1>Why are we using firebase? What other options do you have to implement authentication? - </h1>
                <p>
                    Owned by Google, Firebase is a complete package of products that allows to build web and mobile apps, improve the app quality and help your clients grow their business. Google acquired Firebase, it gained its popularity back with the help of increased number of features and functionalities. <br />
                    Firebase by Google can be used for the following: <br />

                    - Firebase manages all data real-time in the database. So, the exchange of data to and fro from the database is easy and quick. Hence, if you are looking to develop mobile apps such as live streaming, chat messaging, etc., you can use Firebase. <br />
                    - Firebase allow syncing the real-time data across all the devices- Android, iOS, and the web without refreshing the screen. <br />
                    - Firebase offers integration to Google Ads, AdMob, DoubleClick, Play Store, Data Studio, BigQuery, and Slack, to make your app development with efficient and accurate management and maintenance. <br />
                    - Everything from databases, analytics to crashing reports are included in Firebase. So, the app development teams can stay focused on improving the user experience. <br />
                    <h4>Authentication types - </h4>
                    1. Password-based authentication <br />
                    2. Two-factor/multi factor authentication <br />
                    3. Biometric authentication <br />
                    4. Single sign-on <br />
                    5. Token-based authentication
                </p>
            </div>
            <div>
                <h1> What other services does firebase provide other than authentication? -</h1>
                <p>
                    There are many services which Firebase provides, Most useful of them are: <br />
                    01. Cloud Fire store. <br />
                    02. Cloud Functions. <br />
                    03. Authentication. <br />
                    04. Hosting. <br />
                    05. Cloud Storage. <br />
                    06. Google Analytics. <br />
                    07. Predictions. <br />
                    08. Cloud Messaging.
                </p>
            </div>
        </section>
    );
};

export default Blogs;