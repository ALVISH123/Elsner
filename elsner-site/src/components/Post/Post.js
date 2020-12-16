import React from 'react';

import moment from 'moment';

import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 400,
  },
  media: {
    height: 200,
  },
});

function Post(props) {
  const classes = useStyles();
  var date= props.date.substring(0,10);
  
  // console.log(moment(date).format("MMMM DD,YYYY"));
 
  return (
    <Card className={classes.root} style={{margin: "15px"}} onClick={props.clicked}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image=""
          title=""
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.title}
          </Typography>
          {/* <Typography variant="body2" color="textSecondary" component="p">
            
          </Typography> */}
        </CardContent>
      </CardActionArea>
      <CardActions>
        {/* <Button size="small" color="primary">
          
        </Button> */}
          <Typography variant="body2" color="textSecondary" component="p">
          {moment(date).format("MMMM DD, YYYY")}
            </Typography> 

        <Button size="small" color="primary">
          
        </Button>
      </CardActions>
    </Card>
  );
}
export default Post;