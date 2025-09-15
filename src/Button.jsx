import React, { useState, useEffect } from 'react';
function Button(){
  const [countLike, setCountLike] = useState(0);
  const [countDislike, setCountDislike] = useState(0);
  useEffect(()=>{
    console.log(`Like: ${countLike}, Dislike: ${countDislike}`);
  }, [countLike, countDislike]);

  return(
    <>
      <button onClick={()=>setCountLike(countLike+1)}>{countLike}Like OK</button>
      <button onClick={()=>setCountDislike(countDislike+1)}>{countDislike}Dislike OK</button>
    </>
  )
}
export default Button