import React, {Component} from "react";
import {Divider, Grid, TextField, withStyles} from "@material-ui/core";
import {connect} from "react-redux";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Search, Sort} from '@material-ui/icons';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import {fetchHotels, sortHotelByPrice} from "./home.action";
import {Styles} from "./home.style";
import {capitalizeFirstLetter} from "../../../utils";
import Map from "../../components/google-map";
import CustomModal from "../../components/modal";
import BootstrapButton from "../../components/button";

class Home extends Component {
    state = {
        mapShow: false,
        latitude: null,
        longitude: null,
        anchorEl: null
    };

    componentDidMount() {
        this.props.fetchHotels({});
    }

    showMap = (latitude, longitude) => {
        this.setState({
            ...this.state,
            mapShow: true,
            latitude,
            longitude
        })
    };
    closeMap = () => {
        this.setState({...this.state, mapShow: false})
    };
    openMenu = event => {
        this.setState({...this.state, anchorEl: event.currentTarget})
    };

    closeMenu = event => {
        this.setState({...this.state, anchorEl: null})
    };

    sortByPrice = () => {
        this.props.sortHotelByPrice();
    };
    searchBykeyword = event => {
        this.props.fetchHotels({search: event.target.value});
    };

    render() {
        const {classes} = this.props;
        return (
            <>
                <CustomModal
                    content={<Map latitude={this.state.latitude} longitude={this.state.longitude}/>}
                    open={this.state.mapShow} close={this.closeMap}/>
                <Grid container direction="row" justify="space-between">
                    <Typography variant="h4" gutterBottom>
                        Hotels in Singapore
                    </Typography>
                    <div>
                        <Grid container alignItems="flex-end">
                            <Grid item>
                                <Search/>
                            </Grid>
                            <Grid item>
                                <TextField id="input-with-icon-grid" label="Search here"
                                           onChange={this.searchBykeyword}/>
                            </Grid>
                            <Grid item>
                                <BootstrapButton
                                    aria-controls="simple-menu"
                                    aria-haspopup="true"
                                    onClick={this.openMenu}
                                    size="small"
                                    variant="contained"
                                    color="primary"
                                    startIcon={<Sort/>}>
                                    Sort By
                                </BootstrapButton>
                            </Grid>
                        </Grid>
                    </div>

                    <Menu
                        id="simple-menu"
                        anchorEl={this.state.anchorEl}
                        keepMounted
                        open={Boolean(this.state.anchorEl)}
                        onClose={this.closeMenu}
                    >
                        <MenuItem onClick={this.sortByPrice}>Price</MenuItem>
                    </Menu>
                </Grid>
                <Divider className={classes.divider}/>
                <Grid container spacing={4}>
                    {this.props.hotels.map(hotel => (
                        <Grid item xs={12} sm={4} lg={3}>
                            <Card className={classes.card}>
                                <CardContent>
                                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                                        Hosted by {capitalizeFirstLetter(hotel.hostName)}
                                    </Typography>
                                    <Typography variant="h5" component="h2">
                                        {capitalizeFirstLetter(hotel.name)}
                                    </Typography>
                                    <Typography className={classes.pos} color="textSecondary">
                                        $ {hotel.price} per night
                                    </Typography>
                                    <Typography variant="body2" component="p">
                                        {capitalizeFirstLetter(hotel.roomType)} near {capitalizeFirstLetter(hotel.neighbourhood)}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small" className={classes.exploreButton}
                                            onClick={() => this.showMap(hotel.latitude, hotel.longitude)}>Explore</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </>
        );
    }
}

const mapStateToProps = state => {
    return {
        hotels: state.homeReducer.hotels
    };
};

Home.propTypes = {};

export default connect(
    mapStateToProps,
    {
        fetchHotels,
        sortHotelByPrice
    }
)(withStyles(Styles, {withTheme: true})(Home));
