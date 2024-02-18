import classes from "./body.module.scss"
import { GrBottomCorner } from "react-icons/gr";

export const Bogy = () => {
    return (
        <div className={classes.body}>
            <div className={classes.body_container}>

            <div className={classes.title_section}>

                <div className={classes.title}>
                    <div className={classes.title_invisible_circle}></div>
                    <h1>ПУТЕШЕСТВИЕ</h1>
                </div>

                <h3>на красную планету</h3>
                <div className={classes.btn_section}>
                    < GrBottomCorner className={classes.body_btn_corner} id={classes.body_btn_top_right}/>
                    <button className={classes.body_button}>
                        <p>Начать путешествие</p>
                    </button>
                    < GrBottomCorner className={classes.body_btn_corner} id={classes.body_btn_bottom_left}/>
                </div>
            </div>
            <div className={classes.benefits}>
                    <div className={classes.benefit} id={classes.benefit_first}>
                        <p className={classes.first_text}>мы</p>
                        <h2>1</h2>
                        <p className={classes.second_text}>на рынке</p>
                    </div>
                    <div className={classes.benefit} id={classes.benefit_second}>
                        <p className={classes.first_text}>гарантируем</p>
                        <h2>50%</h2>
                        <p className={classes.second_text}>безопасность</p>
                    </div>
                    <div className={classes.benefit} id={classes.benefit_third}>
                        <p className={classes.first_text}>календарик за</p>
                        <h2>2024</h2>
                        <p className={classes.second_text}>в подарок</p>
                    </div>
                    <div className={classes.benefit} id={classes.benefit_fourth}>
                        <p className={classes.first_text}>путешествие</p>
                        <h2>597</h2>
                        <p className={classes.second_text}>дней</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Bogy;