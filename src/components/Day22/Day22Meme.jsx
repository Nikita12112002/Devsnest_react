import { useState } from "react";
import React from "react";


const Day22Meme=({meme ,setMeme})=>
{
    const[form ,setForm]= useState({

        template_id: meme.id,
        username:"nikitagupta3",
        password:"imgflip@123",
        boxes:[],
    })

   
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
            if(url.success==true)
            {
            setMeme({...meme , url: data.data.url})
            }
            
        });

    };
    console.log(meme.box_count);
    return(
        <>
        
            <img src={meme.url} className="image_meme" alt="memes"/>
            
            <div>

            {
                 [...Array(meme.box_count)].map((_ , index)=>
                 (
                   <div className="input_div"> 
                   <input type="text" key={index} placeholder={`Meme Caption ${index+1}`}
                    onChange={(e)=>{ 

                        const newBoxes = form.boxes;
                        newBoxes[index]={text: e.target.value};
                        setForm({...form,boxes: newBoxes });
                    }}
                    className="input_box"
                   />
                   </div>
                     
                 ))
             }
            
            </div>
           
           <br/><br/>

           <div className="div_btn">
           <button onClick={generateMeme} className="meme_gbtn">Generate meme</button>
           <button className="meme_gbtn" onClick={()=>
           {
               setMeme(null);
           }}>Generate templates</button>
        </div>
        </>
    );
}

export default Day22Meme;