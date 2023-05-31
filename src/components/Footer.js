import React from 'react'
import {Stack, Typography} from '@mui/material'
function footer() {
  return (
    <Stack
    width="100%"
    padding="20px"
    backgroundColor="#ff4d4d"
    alignItems="center"
    spacing={2}
    sx={{
    justifyContent:{lg:'space-between', sm:'center'},
    direction:{lg:"row", sm:"column"}}}>
      <Typography
      color='white'
      sx={{fontSize:{lg:'30px',sm:'20px', xs:'10px'}}}
      >Made by <br/><Typography sx={{fontSize:{lg:'50px',sm:'40px', xs:'30px'}}} >Shubham</Typography></Typography>
      <Stack direction="row"
      spacing={2}
      >
        <a href="https://www.linkedin.com/in/shubham-kumar-920b52202/"target="_blank" >
          <img src="https://img.icons8.com/color/48/000000/linkedin.png" alt="linkedin" target="_blank"/>
        </a>
        <a href="https://www.instagram.com/s.h.u.b.h.a.msharmsa" target="_blank">
          <img src="https://img.icons8.com/color/48/000000/instagram.png" alt="linkedin"/>
        </a><a href="https://wa.me/+917857958284" target="_blank">
          <img src="https://img.icons8.com/color/48/000000/whatsapp.png" alt="linkedin" />
        </a>
      </Stack>
    </Stack>
  )
}

export default footer