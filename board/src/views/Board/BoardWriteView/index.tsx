import React, { useState } from 'react'
import {Box,Divider,IconButton,Input,Fab} from '@mui/material'
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import CreateIcon from '@mui/icons-material/Create';
import { useNavigate } from 'react-router-dom';


export default function BoardWriteView() {

  const[boardTitle,setBoardTitle] = useState<string>(''); 
  const [boardContent,setBoardContent]= useState<string>(''); 

  const navigator = useNavigate();

  const onWriteHandler = () =>{ //Fab 눌러서 작성완료 할려 할때 
    //? 제목 및 내용 검증 
    if(!boardTitle.trim() || !boardContent.trim()){
      alert('모든 내용을 입력해 주세요');
      return;
    }

    // ? 존재한다면 작성 가능 
// # User table 
// ^ UserEmail VARCHAR(45) PK

    // #Board table
    // ^ boardNumber int AI PK(Primary Key)(Unique Not NULL)
    // ^ boardTitle VAR CHAR() but, 길이 제한 없을때에는 Text 사용 NOT NULL
    // ^ boardContent TEXT NOT NULL 
    // ^ writeDate DATETIME NN
    // ? 외래키 사용해서 외부의 table을 가져온다 
    // ^ writerEmail VARCHAR(45) FK(Foreign Key)
    // ^ likeCount INT default 0
    // ^ commentCount INT default 0
    // ^ viewCount Int default 0

    // ? INSERT INTO Board(Table 명)    (boardTitle,boardContent,writeDate,writerEmail)(컬럼 이름들 ) VALUES(?,?,now(),?)

    // ? Back end로 BOardTitle, boardContent, writerEmail을 넘겨주면 됨 

    navigator('/myPage');
  }

  return (
    <Box sx={{p:'0px 198px',backgroundColor:'rgba(0,0,0,0.05)'}}>
      <Box sx={{p:'100px 24px',backgroundColor:'#ffffff'}}>
        <Input fullWidth   placeholder='제목을 입력하세요' disableUnderline sx={{fontSize:'32px',fontWeight:500,border:'0px'}} onChange={(event)=>setBoardTitle(event.target.value)}/>
        <Divider sx={{m:'40px 0px'}}/>
        <Box sx={{display:'flex',alignItems:'start'}}>
                                            {/*multiline으로 Enter가능 하게  minRows={최소 라인 수 처음부터 } */}
          <Input fullWidth disableUnderline  multiline minRows={20} maxRows={50}  placeholder='본문을 작성해 주세요' sx={{fontSize:'18px',fontWeight:500,lineHeight:'150%'}} onChange={(event)=>setBoardContent(event?.target.value)}/>
          <IconButton>
            <ImageOutlinedIcon/>
          </IconButton>
        </Box>
      </Box>
      <Fab sx={{position:'fixed',bottom:'200px',right:'200px',   backgroundColor:'rgba(0,0,0,0.4)'}} onClick={onWriteHandler}>
        <CreateIcon/>
      </Fab>
    </Box>
  )
}
