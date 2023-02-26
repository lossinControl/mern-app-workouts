export const WorkoutsCards = () => {

    return (
        <section>
            <div className="container card-container">
                <div className="row">
                    {/* FIRST_ROW */}
                    <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-6">
                        <div className="card-wrapper">
                            <div className="card-img">
                                <img src="/images/progression.png" height="auto" width="35%" alt="" />
                            </div>
                            <div className="card-title">
                                <h3>PROGRESSION</h3>
                            </div>
                            <div className="card-content">
                                <p>
                                    the process of developing or moving gradually 
                                    towards a more advanced state.
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* END_OF_FIRST_ROW */}
                    {/* SECOND_ROW */}
                    <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-6">
                        <div className="card-wrapper">
                            <div className="card-img">
                                <img src="/images/workout.png" height="auto" width="35%" alt="" />
                            </div>
                            <div className="card-title">
                                <h3>WORKOUT</h3>
                            </div>
                            <div className="card-content">
                                <p>
                                    a session of vigorous physical exercise or training.
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* END_OF_SECOND_ROW */}
                    {/* THIRD_ROW */}
                    <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-6">
                        <div className="card-wrapper">
                            <div className="card-img">
                                <img src="/images/nutrition.png" height="auto" width="35%" alt="" />
                            </div>
                            <div className="card-title">
                                <h3>NUTRITION</h3>
                            </div>
                            <div className="card-content">
                                <p>
                                    the process of providing or obtaining the 
                                    food necessary for health and growth.
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* END_OF_THIRD_ROW */}
                    {/* FOURTH_ROW */}
                    <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-6">
                        <div className="card-wrapper">
                            <div className="card-img">
                                <img src="/images/confidence.png" height="auto" width="35%" alt="" />
                            </div>
                            <div className="card-title">
                                <h3>CONFIDENCE</h3>
                            </div>
                            <div className="card-content">
                                <p>
                                    the feeling or belief that one can rely on 
                                    someone or something; firm trust.
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* END_OF_FOURTH_ROW */}
                </div>
            </div>
        </section>
    );

}