import { Section3 } from "../components/Section3";
import { WorkoutsCards } from "../components/WorkoutsCards";

export const Homepage = () => {

    return (
        <section>
            <div className="home-bg-1">
                <div className="home-bg-opacity">
                    <div className="container">
                        <div className="home-title">
                            <h1>PUSH PAST YOUR LIMITS, STAY FIT.</h1>
                        </div>
                    </div>
                </div>
            </div>
            {/* SECTION_2 */}
            <WorkoutsCards />
            {/* SECTION_3 */}
            <Section3 />
        </section>
    );

}