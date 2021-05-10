import React, { Component } from 'react';
import './Home.css';
import Header from '../../common/header/Header';
import { withStyles } from '@material-ui/core/styles';
import moviesData from '../../assets/movieData';
import { Button, Card, CardContent, Checkbox, FormControl, GridListTile, InputLabel, ListItemText, MenuItem, Typography } from '@material-ui/core';
import { GridListTileBar } from '@material-ui/core';
import { GridList } from '@material-ui/core';
import Input from '@material-ui/core/Input';
import genres from '../../assets/genres';
import Select from '@material-ui/core/Select';
import artists from '../../assets/artists';
import TextField from '@material-ui/core/TextField';
import Details from '../../screens/details/Details';
import ReactDOM from 'react-dom';

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
    constructor() {
        super();
        this.state = {
            movieName: "",
            genres: [],
            artists: []
        }
    }

    dateFormatHandler = (date) => {
        let mydate = new Date(date);
        let month = ["Jan", "Feb", "Mar", "Apr", "May", "June",
            "July", "Aug", "Sept", "Oct", "Nov", "Dec"][mydate.getMonth()];
        let day = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat",
            "Sun"][mydate.getDay() - 1];
        let str = day + ' ' + month + ' ' + mydate.getDate() + ' ' + mydate.getFullYear();

        return str;
    }

    movieNameChangeHandler = (e) => {
        this.setState({ movieName: e.target.value });
    }

    genreSelectHandler = (e) => {
        this.setState({ genres: e.target.value });
    }

    artistSelectHandler = (e) => {
        this.setState({ artists: e.target.value });
    }

    movieClickHandler = (movieId) => {
        debugger;
        ReactDOM.render(<Details movieId={movieId} />, document.getElementById('root'));
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
                                <GridListTile key={movie.id} onClick={() => this.movieClickHandler(movie.id)} className="margin-movie">
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
                                <FormControl className={classes.formControl}>
                                    <InputLabel htmlFor="select-multiple-checkbox">Genre</InputLabel>
                                    <Select multiple
                                        input={<Input id="select-multiple-checkbox" />}
                                        renderValue={selected => selected.join(',')}
                                        value={this.state.genres}
                                        onChange={this.genreSelectHandler}>
                                        <MenuItem value="0">None</MenuItem>
                                        {genres.map(genre => (
                                            <MenuItem key={genre.id} value={genre.name}>
                                                <Checkbox checked={this.state.genres.indexOf(genre.name) > -1}></Checkbox>
                                                <ListItemText primary={genre.name}></ListItemText>
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                                <FormControl className={classes.formControl}>
                                    <InputLabel htmlFor="select-multiple-checkbox">Artists</InputLabel>
                                    <Select multiple
                                        input={<Input id="select-multiple-checkbox" />}
                                        renderValue={selected => selected.join(',')}
                                        value={this.state.artists}
                                        onChange={this.artistSelectHandler}>
                                        <MenuItem value="0">None</MenuItem>
                                        {artists.map(artist => (
                                            <MenuItem key={artist.id} value={artist.first_name + " " + artist.last_name}>
                                                <Checkbox checked={this.state.artists.indexOf(artist.first_name + " " + artist.last_name) > -1}></Checkbox>
                                                <ListItemText primary={artist.first_name + " " + artist.last_name}></ListItemText>
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                                <FormControl className={classes.formControl}>
                                    <TextField id="release-date-start"
                                        label="Release Date Start"
                                        type="date"
                                        defaultValue=""
                                        InputLabelProps={{ shrink: true }}>
                                    </TextField>
                                </FormControl>
                                <FormControl className={classes.formControl}>
                                    <TextField id="release-date-end"
                                        label="Release Date End"
                                        type="date"
                                        defaultValue=""
                                        InputLabelProps={{ shrink: true }}>
                                    </TextField>
                                </FormControl>
                                <br /><br />
                                <FormControl className={classes.formControl}>
                                    <Button variant="contained" color="primary">
                                        APPLY
                                    </Button>
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