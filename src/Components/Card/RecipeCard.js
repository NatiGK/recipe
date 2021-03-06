import React from 'react';

import AccessTimeIcon from '@material-ui/icons/AccessTime';
import Card from '@material-ui/core/Card';
import Rating from '@material-ui/lab/Rating';
import { CardActionArea, CardActions, CardContent, Grid, Typography } from '@material-ui/core';

import useStyles from './CardStyle';
import rack from './../../img/rack.jpg';
//title,category, img, time

//root,img,category,title, info, timeDisp
const RecipeCard = props => {
    const classes = useStyles();
    return (
        <Grid item lg={3} md={4} sm={6} xs={12} className={classes.gridItem}>
            <Card className={classes.root} elevation={2}>
                
                <CardActionArea
                    className={classes.action}
                    onClick={props.handleRecipeClicked(props._id)}
                >
                    <div style={{width:"100%"}}>
                    <img src={"http://localhost:4000/images/"+props.image} className={classes.img} alt={props.title} />
                    <CardContent styles={{width:"100%"}}>
                        <Typography variant="body2" className={classes.category}>
                            {props.category}
                        </Typography>
                        <Typography variant="h5" className={classes.title}>
                            {props.title}
                        </Typography>
                    </CardContent>
                    </div>
                    <div style={{width:"100%"}}>
                        <div className={classes.info}>
                            <div className={classes.timeDisp}>
                                <AccessTimeIcon color="secondary" />
                                <Typography variant="body1" className={classes.time}>
                                    {props.time + " min"}
                                </Typography>
                            </div>
                            <div className={classes.rating}>
                                <Rating
                                    name="read-only"
                                    value={props.rating}
                                    readOnly size="small"
                                    precision={0.5}
                                />
                            </div>
                        </div>
                    </div>
                </CardActionArea>
            </Card>
        </Grid>
    );
};

export default RecipeCard;