import rectangle from "../img/rectangle.png";
import Item from "./Item";

function HomePage(props) {
    return (
        <>
            <main>
                <section className="top">
                    <div className="top_box container">
                        <div className="top_box_left"></div>
                        <div className="top_box_right">
                            <img src={rectangle} alt="Element" />
                            <p className="top_box_right_preview">
                                <span className="top_box_right_preview_type1">
                                    THE BRAND
                                </span>
                                <br />
                                OF LUXERIOUS{" "}
                                <span className="top_box_right_preview_type2">
                                    FASHION
                                </span>
                            </p>
                        </div>
                    </div>
                </section>

                <section className="stock center">
                    <div className="stock_h">
                        <div className="stock_h_chapt c1">
                            <p className="stock_h_chapt_text">
                                30% OFF
                                <span className="stock_h_chapt_text_t2">
                                    <br />
                                    FOR WOMEN
                                </span>
                            </p>
                        </div>
                        <div className="stock_h_chapt c2">
                            <p className="stock_h_chapt_text">
                                HOT DEAL
                                <span className="stock_h_chapt_text_t2">
                                    <br />
                                    FOR MEN
                                </span>
                            </p>
                        </div>
                        <div className="stock_h_chapt c3">
                            <p className="stock_h_chapt_text">
                                NEW ARRIVALS
                                <span className="stock_h_chapt_text_t2">
                                    <br />
                                    FOR KIDS
                                </span>
                            </p>
                        </div>
                    </div>
                    <div className="stock_l">
                        <div className="stock_l_chapt big">
                            <p className="stock_l_chapt_text">
                                LUXIROUS & TRENDY{" "}
                                <span className="stock_l_chapt_text_t2">
                                    <br />
                                    ACCESORIES
                                </span>
                            </p>
                        </div>
                    </div>
                </section>

                <section className="featured center">
                    <h3 className="featured_title">Featured Items</h3>
                    <p className="featured_text">
                        Shop for items based on what we featured in this week
                    </p>
                </section>

                <section className="f_items center">
                    {props.items &&
                        props.items.map((item) => (
                            <Item
                                onAdd={props.onAdd}
                                key={item.id}
                                item={item}
                            />
                        ))}
                </section>

                <section className="last_part center">
                    <button className="last_part_button">
                        Browse All Product
                    </button>
                </section>
            </main>
        </>
    );
}

export default HomePage;
