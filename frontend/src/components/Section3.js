import { Link } from "react-router-dom";

export const Section3 = () => {

    return (
        <section>
            <div className="container h-s-3-container">
                <div className="row">
                    <div className="col-xl-6">
                        <div className="h-s-3-content">
                            <div className="h-s-3-title">
                                <h1>RAISE YOUR CONFIDENCE</h1>
                            </div>
                            <div className="h-s-3-body">
                                <p>
                                    Confidence exercises are a way to develop feelings 
                                    of self-assurance in your competency to perform a task. 
                                    As a result, confidence in the workplace can offer 
                                    benefits to many types of people. You can begin 
                                    learning about and practicing confidence exercises 
                                    to develop this trait. Start Adding your workout lists and
                                    time to bring your game.
                                </p>
                            </div>
                            <div className="h-s-3-btn">
                                <Link to={'/workouts'} className="get-started-btn">
                                    Get Started
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="h-s-3-img">
                            <img src="/images/h-s-sec-3-img.jpg" height="auto" width="100%" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );

}