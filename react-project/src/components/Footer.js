import {Grid} from "@material-ui/core";
import {FooterWrapper} from "../css/footer";
import * as React from "react";

function Footer() {
    return (
        <React.Fragment>
            <Grid item>
                 <FooterWrapper>
                     <p>A bit of Habit 2021</p>
                 </FooterWrapper>
            </Grid>
        </React.Fragment>
    );
}

export default Footer;