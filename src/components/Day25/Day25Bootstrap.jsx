import React from "react";
import "./Day25.css";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import PlayCircleOutlineOutlinedIcon from '@material-ui/icons/PlayCircleOutlineOutlined';
import SkipNextRoundedIcon from '@material-ui/icons/SkipNextRounded';
import SkipPreviousRoundedIcon from '@material-ui/icons/SkipPreviousRounded';
import ArrowBackIosOutlinedIcon from '@material-ui/icons/ArrowBackIosOutlined';
import VolumeUpOutlinedIcon from '@material-ui/icons/VolumeUpOutlined';
import Tooltip from '@material-ui/core/Tooltip';
import FavoriteIcon from '@material-ui/icons/Favorite';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

const Day25Bootstrap=()=>
{
  const classes = useStyles();

    return(
        <>
        <div className="card2_day25">

         <div class="card1_day25" style={{width: "18rem" , borderRadius:"15px" , backgroundColor:"black"}}>

          <div class="card_day25" style={{width: "18rem" , borderRadius:"15px" , marginTop:"30px" , 
          marginLeft:"-0px" }}>

             <div style={{padding:"5px"}}>

               <ArrowBackIosOutlinedIcon style={{fontSize:"15px" , marginLeft:"5px"}}/>
               <span className="play_now" style={{marginLeft:"70px" , marginTop:"10px"}}>Playing Now </span>
               <VolumeUpOutlinedIcon style={{marginLeft:"10px"}}/>

            </div>

              <img src="https://img.freepik.com/free-vector/music-event-poster-with-photo-2021_52683-42065.jpg?size=338&ext=jpg" 
                   class="card-img-top" style={{ height:"200px" , marginLeft:"55px" , marginRight:"20px", marginTop:"10px",width:"190px"}}alt="..."/>
               
               <h4 className="heading_day25">Space station 
                <FavoriteIcon style={{marginLeft:"40px" , color:"black"}}/>
               </h4>
               
           <div class="card-body" style={{marginTop:"-10px"}}>
    
                <Button variant="contained" color="secondary" style={{marginLeft:"10px"}}>
                   Play ALL
                </Button>

                <Button variant="outlined" color="secondary" style={{marginLeft:"25px"}}>
                    Subscribe
                 </Button>
      
      
               <div class="progress-bar bg-primary" role="progressbar" style={{width: "70%" , marginTop:"20px" , height:"4px"}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                
               
               
               <div style={{marginTop:"20px"}}>
                  <Tooltip title="Previous">
                  <SkipPreviousRoundedIcon style={{marginLeft:"36px" , fontSize:"40px"}}/>
                  </Tooltip>

                  <Tooltip title="Play">
                  <PlayCircleOutlineOutlinedIcon color="secondary" style={{fontSize:"40px" , color:"secondary" , marginLeft:"37px" }} />
                  </Tooltip>

                  <Tooltip title="Next">
                  <SkipNextRoundedIcon  style={{marginLeft:"34px" ,fontSize:"40px"}}/>
                  </Tooltip>

               </div>
                
                <hr/>
                
      
              </div>

          </div>
          </div>
          </div>

        </>
    );
}
export default Day25Bootstrap;