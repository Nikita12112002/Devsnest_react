import { useState } from "react"
import { Button, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));


const Day22Meme=({meme,setMeme})=>
{
    const classes = useStyles();

    const [form,setForm]=useState({
        template_id:meme.id,
        username:"nikitagupta3",
        password:"imgflip@123",
        boxes:[]
    })
//    console.log(meme)
   const generateMeme=()=>
   {
       let url=`https://api.imgflip.com/caption_image?template_id=${form.template_id}&username=${form.username}&password=${form.password}`
       
       form.boxes.map((box,index)=>url+=`&boxes[${index}][text]=${box.text}`)

       fetch(url)
       .then(res=>res.json())
       .then(data=>{
           if(data.success===true)
           setMeme({...meme,url:data.data.url})
           
       })
        console.log(url)
   }
    return (
        <div className="meme">
            <img src={meme.url} className="image_meme" alt=""/>
            <div className="meme1">
                {
                    [...Array(meme.box_count)].map((_,index)=>(
                       
                        <TextField variant="outlined" size="small" type="text" key={index} label={`Meme Caption ${index+1}`} margin="normal" onChange={(e)=>{
                            const newBoxes=form.boxes;
                            newBoxes[index]={text:e.target.value}
                            setForm({...form,boxes:newBoxes})
                        }} style={{margin:"5px"}}>

                        </TextField>
                    ))
                }
                
            </div>
            <div className="div_btn">
               
                
                
           <Button variant="contained" color="secondary" onClick={generateMeme}
            style={{
                     backgroundColor:"#e61022",
                     border:"none",
                     height: "40px",
                     padding: "10px",
                     width: "200px",
                     textAlign: "center",
                     fontWeight: "bolder",
                     borderRadius: "7px",
                     marginLeft: "30px",
                     fontFamily: "lobster ,cursive",
                     fontSize: "15px",
                     boxShadow:"3px 5px 10px black",
                     
      }}
           className="meme_gbtn">
        GENERATE MEME
      </Button>
                

      <Button variant="contained" color="secondary"  
      style={{backgroundColor:"#3112b8" ,
              border:"none",
                     height: "40px",
                     padding: "10px",
                     width: "200px",
                     textAlign: "center",
                     fontWeight: "bolder",
                     borderRadius: "7px",
                     marginLeft: "30px",
                     fontFamily: "lobster ,cursive",
                     fontSize: "15px",
                     boxShadow:"3px 5px 10px black",
      
      }} className="meme_gbtn" onClick={()=>
           {
               setMeme(null);
           }}>
        GENERATE TEMPLATE
      </Button>


            </div>
        </div>
    )
}
export default Day22Meme;







/*import { useState } from "react";
import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));
  

const Day22Meme=({meme ,setMeme})=>
{
    
    const classes = useStyles();
    const[form ,setForm]= useState({

        template_id: meme.id,
        username:"nikitagupta3",
        password:"imgflip@123",
        boxes:[],
    })

    const [error, setError] = useState(false);
   
    const generateMeme=()=>{

        

        let url = `https://api.imgflip.com/caption_image?template_id=${form.template_id}&username=${form.username}&password=${form.password}`;
        form.boxes.map((box,index)=>
        {
            url+=`boxes[${index}][text]=${box.text}`;
        });

        console.log(url);
        

        fetch(url)
        .then((res)=> res.json())
        .then((data)=>
        {
          if(data.success===true)
          setMeme({...meme,url:data.data.url})
            
        });

    };
    console.log(meme.box_count);
    return(
        <>
           <div className="input_div">
            <img src={meme.url} className="image_meme" alt="memes"/>
            
            <div className="meme1">

            {
                 [...Array(meme.box_count)].map((_ , index)=>
                 (
                   
                   <input type="text" key={index} placeholder={`Meme Caption ${index+1}`}
                   style={{
                            padding: "4px",
                            textAlign: "center",
                            marginLeft: "10px",
                            margin:"auto",
                            display:"inline-block",
                            border: "1px solid black",
                            color:"black",
                            fontSize:"15px",
                            fontWeight:"bold",
                            fontFamily:"cursive",
                            height:"20px",
                            width:"100px",
                            marginLeft:"60px",
                            marginTop:"20px"

                        }}
                    onChange={(e)=>{ 

                        const newBoxes = form.boxes;
                        newBoxes[index]={text: e.target.value};
                        setForm({...form,boxes: newBoxes });
                    }}
                    
                   />
                   
                     
                 ))
             }
            
            </div>
           
           <br/><br/>

           

           <div className="div_btn">
          
          
           <Button variant="contained" color="secondary" onClick={generateMeme}
            style={{
                     backgroundColor:"#e61022",
                     border:"none",
                     height: "40px",
                     padding: "10px",
                     width: "200px",
                     textAlign: "center",
                     fontWeight: "bolder",
                     borderRadius: "7px",
                     marginLeft: "30px",
                     fontFamily: "lobster ,cursive",
                     fontSize: "15px",
                     boxShadow:"3px 5px 10px black",
                     
      }}
           className="meme_gbtn">
        GENERATE MEME
      </Button>
      <Button variant="contained" color="secondary"  
      style={{backgroundColor:"#3112b8" ,
              border:"none",
                     height: "40px",
                     padding: "10px",
                     width: "200px",
                     textAlign: "center",
                     fontWeight: "bolder",
                     borderRadius: "7px",
                     marginLeft: "30px",
                     fontFamily: "lobster ,cursive",
                     fontSize: "15px",
                     boxShadow:"3px 5px 10px black",
      
      }} className="meme_gbtn" onClick={()=>
           {
               setMeme(null);
           }}>
        GENERATE TEMPLATE
      </Button>


        </div>
        </div>
        </>
    );
}

export default Day22Meme;*/