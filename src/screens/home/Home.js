import React, { Component } from 'react';
import './Home.css';
import Header from '../../common/header/Header';
import { withStyles } from '@material-ui/core/styles';
import moviesData from '../../assets/movieData';
import { Card, CardContent, FormControl, GridListTile, InputLabel, Typography } from '@material-ui/core';
import { GridListTileBar } from '@material-ui/core';
import { GridList } from '@material-ui/core';
import Input from '@material-ui/core/Input';

const styles = theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper
    },
    upcomingMoviesHeading: {
        textAlign: 'center',
        background: '#ff9999',
        padding: '8px',
        fontSize: '1rem'
    },
    gridListUpcomingMovies: {
        flexWrap: 'nowrap',
        transform: 'translateZ(0)',
        width: '100%'
    },
    gridList: {
        width: '60%',
        transform: 'translateZ(0)',
        cursor: 'pointer'
    },
    icon: {
        color: 'rgba(255, 255, 255, 0.54)',
    },
    formControl: {
        margin: theme.spacing.unit,
        minWidth: 240,
        maxWidth: 240
    },
    title: {
        color: theme.palette.primary.light,
    }
});



class Home extends Component {
    constructor(){
        super();
        this.state = {
            movieName: ""
        }
    }

    dateFormatHandler = (date) => {
        debugger;
        let mydate = new Date(date);
        let month = ["Jan", "Feb", "Mar", "Apr", "May", "June",
            "July", "Aug", "Sept", "Oct", "Nov", "Dec"][mydate.getMonth()];
        let day = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat",
            "Sun"][mydate.getDay() - 1];
        let str = day + ' ' + month + ' ' + mydate.getDate() + ' ' + mydate.getFullYear();

        return str;
    }

    movieNameChangeHandler = (e) =>{
        this.setState({movieName: e.target.value});
    }

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <Header />
                <div className={classes.upcomingMoviesHeading}>
                    <span>Upcoming Movies</span>
                </div>
                <GridList cols={5} className={classes.gridListUpcomingMovies}>
                    {moviesData.map(movie => (
                        <GridListTile key={movie.id}>
                            <img src={movie.poster_url} alt={movie.title} className="movie-poster"></img>
                            <GridListTileBar title={movie.title}></GridListTileBar>
                        </GridListTile>
                    ))}
                </GridList>
                <div className="flex-container">
                    <div className="left">
                        <GridList cellHeight={350} cols={4} className={classes.gridList}>
                            {moviesData.map(movie => (
                                <GridListTile key={movie.id}>
                                    <img src={movie.poster_url} alt={movie.title} />
                                    <GridListTileBar
                                        title={movie.title}
                                        subtitle={<span>Release Date: {this.dateFormatHandler(movie.release_date)}</span>}
                                    />
                                </GridListTile>
                            ))}
                        </GridList>
                    </div>
                    <div className="right">
                        <Card>
                            <CardContent>
                                <FormControl className={classes.formControl}>
                                    <Typography className={classes.title} color="textSecondary">
                                        Find Movies By:
                                    </Typography>
                                </FormControl>
                                <FormControl>
                                    <InputLabel htmlFor="movieName"> Movie Name
                                    </InputLabel>
                                    <Input id="movieName" onChange={this.movieNameChangeHandler}></Input>
                                </FormControl>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(Home);