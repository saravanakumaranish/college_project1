// import styles from '../styles/Home.module.css'
import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react'
import {  MdHomeFilled,MdAssignment,MdNotifications } from "react-icons/md"
import { BsFillClipboard2CheckFill,BsFileEarmarkBarGraphFill,BsChevronDown } from "react-icons/bs"
import { AiFillCreditCard,AiTwotoneBook,AiOutlineFieldTime,AiOutlineLeft,AiOutlineRight } from "react-icons/ai"
import { TbTallymark4 } from "react-icons/tb"
import { SiBlueprint } from "react-icons/si"
import { FaFolder } from "react-icons/fa"
import { BiLeftArrowAlt } from "react-icons/bi"
import Caurosel from 'react-elastic-carousel'
import { CgCarousel, CgRadioChecked } from "react-icons/cg"
import { GiWhiteBook } from "react-icons/gi"
import { IoIosRadioButtonOn } from 'react-icons/io'
import Image from 'next/image'
import { Input,InputLeftElement,InputGroup } from '@chakra-ui/react'
import { Avatar } from '@chakra-ui/react'
import React, { Component } from "react";



import {
  Accordion,Box,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'


import { IconButton } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'

const Home=() => {
  const breakPoints = [
    // {width:1,itemsToShow:1},
    // {width:,itemsToShow:2}
   
    // {width:768,itemsToShow:3},
    {width:1200,itemsToShow:4}
  ];

  const breakPoints1 = [
    // {width:1,itemsToShow:1},
    // {width:,itemsToShow:2}
   
    // {width:768,itemsToShow:3},
    {width:1200,itemsToShow:2}
  ];
  
  return (
  
    <div className='container1'>
       <div className='edu'>
    <div>
      <IconButton>
    < FaFolder className='fafol' />
    </IconButton>
    </div>
    <div>
      <p className='edumatica'>Edumatica</p>
    </div>
    <div>
    <InputGroup className='search'>
    <InputLeftElement 
      pointerEvents='none' >
      <SearchIcon color='gray.500' className='light' />
     
      </InputLeftElement>
    
   <Input className='typing'
    height='25px'
    htmlSize={12}
    width='auto'
    type='string'
    color='black'
    placeholder='Search'
    _placeholder={{ opacity: 1, color: 'gray.500' }}
  />
    </InputGroup>

    </div>
    <div className='mob'>
    <div>
   
      < MdNotifications className='bell' />
     
    </div>
    <div>
    <Avatar className='avatar'  size='md' name=' Ram' src='https://bit.ly/code-beast' />{' '} 
    </div>
    <div>
    <span className='rams'> Rams </span> 
    </div>
    <div className='avatar2'>
      <IconButton>
      < BsChevronDown className='down' />
      </IconButton>
      
    </div>
    </div>
   
  </div>

   
  <div className='container'>
       
    
<div className='tally' >
  <div className='icons1'>
  <IconButton aria-label="Home"  >
    < MdHomeFilled size="30px"  />
    </IconButton>
    </div>
    <div className='icons'>
    < IconButton >
    < TbTallymark4 size="30px" />
    </IconButton>
    </div>
    <div className='icons'>
    <IconButton aria-label="Assignment"  >
    < MdAssignment size="30px"  />
    </IconButton>
    </div>
    <div className='icons'>
    <IconButton >
      < BsFileEarmarkBarGraphFill  size = "30px"/>
    </IconButton>
    </div>
    <div className='icons'>
    

    <IconButton aria-label="check"  >
    <BsFillClipboard2CheckFill  size="30px"   />
    </IconButton>
    </div>
    <div className='icons5'>
    
    <IconButton aria-label="Debit card"  >
    < AiFillCreditCard size="30px" />
    </IconButton>
    </div>
  

    </div>
    
    <div className='main'>
    
    <div>
      <div className='img'>
      <div className='first1'>
    <h1 className='first'>Hello Suhani Mam !</h1>
    <p className='one'>12/01/2022, Monday</p>
    </div>
    <div>
      <Image src="/classroom.png"
      alt="class room"  width="160"  height="160" className='images' />
    </div>
    </div>


   <div className='first3'> 
   <div>
   <p className='first2'>Current Educational Year : 2022-23</p> 
   </div>

    <div><Accordion allowToggle >
  <AccordionItem className='accordion3'>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left' className='select1'>
          Select Degree Program/All
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      <ul>
        <li>PYTHON</li>
        <li>JAVA</li>
        <li>C++</li>
        <li>DARK NET</li>
      </ul>
    </AccordionPanel>
  
  </AccordionItem>
  </Accordion>
  </div>
  
  <div>
  <Accordion allowToggle>
  <AccordionItem className='accordion4'>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'  color='black' className='select'>
           Select Department/All
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={5}>
      <ul>
     <li>BCA</li> 
      <li>MCA</li>
      <li>BSc.cs</li>
      <li>MSc.cs</li>
      </ul>
     
    </AccordionPanel>
  
  </AccordionItem>
</Accordion>
</div>
</div>

<div className='main9'>
  <h2 className='wei'>Upcoming Classes</h2>
  <div>
  <Tabs variant='unstyled' colorScheme='blue' className='over' ml={3} mt={6} >
    
  <TabList  className='hiden'>
    <Caurosel breakPoints={breakPoints} className='break'>
  <Tab className='all' color='white'  pl={6} pr={6}   fontSize={15} borderRadius={21} >All</Tab>
    <Tab pl={5} pr={5}  borderRadius={21}   fontSize={15} className='semester'>Semester II</Tab>
    <Tab pl={5} pr={5}  borderRadius={21}    fontSize={15} className='semester'>Year I</Tab>
    <Tab pl={5} pr={5}  borderRadius={21}   fontSize={15} className='semester'>Semester IV</Tab>
    <Tab pl={5} pr={5}  borderRadius={21}   fontSize={15} className='semester'>Semester VI</Tab>
    <Tab pl={5} pr={5}  borderRadius={21}   fontSize={15} className='semester'>Semester VII</Tab>
    <Tab pl={5} pr={5}  borderRadius={21}   fontSize={15} className='semester'>Semester III</Tab>
    </Caurosel>
  </TabList>
  
  
 
  <TabPanels>
    
 
    <TabPanel>
      <div className='first4'>
      <div className='book'>
      < GiWhiteBook size='50px' color='orange' />
      </div>
      <div className='first5' >

      <h3 className='wei'><b>Data Structure</b> - Theory</h3>
      <p className='fonts'>Bachelor of Engineering -Computer Departments
        semester-1 section-B Batch-B1  </p>
        </div>
        <div>
      <h4 className='bolding'>10.00AM</h4>
      <p className='trans'>12/01/2022</p>
      </div>
      <div>
      <button className='btn-first'>join class</button>
        </div>
        </div>
        <div className='first4'>
     
        <div className='book'>
      < GiWhiteBook size='50px' color='green'/>
      </div>
        <div className='practic'>
      <h3  className='wei' ><b>C++</b> - Practical</h3>
      <p  className='fonts'>Bachelor of Engineering -Computer Departments
        semester-1 section-B Batch-B1  </p>
        </div>
        <div>
        <h4 className='bolding-sec'>11.00AM</h4>
      <p className='trans-one'>12/01/2022</p>
      </div>
      <div>
      <button className='btn-sec' >join class</button>
        </div>
      
        </div>
        <div className='data1'>
        <div className='book'>
      < GiWhiteBook size='50px' color='#2264e2'/>
      </div>
        <div className='data'>
        <h3  className='weight2'><b>Data Structure</b> - Theory</h3>
      <p className='weight3'>Bachelor of Engineering -Computer Departments
        semester-1 section-B Batch-B1  </p>
        </div>
        <div>
        <h4 className='bolding-thi' >10.00AM</h4>
        <p  className='trans1'>12/01/2022</p>
      </div>
      <div>
      <button className='btn-thi' >join class</button>
      </div>
      </div>
      
    </TabPanel>
    <TabPanel>
      <p>two!</p>
    </TabPanel>
    <TabPanel>One!</TabPanel>
    <TabPanel>Four!</TabPanel>
    <TabPanel>Six!</TabPanel>
    <TabPanel>Seven!</TabPanel>
    <TabPanel>Three!</TabPanel>
  </TabPanels>
  </Tabs>
  
  </div>
</div>
    <div className='main10'>
      <h3 className='wei'>Student Attendance Status</h3>

      <Tabs variant='unstyled' mt={6}  >
  <TabList>
  <Caurosel breakPoints={breakPoints}>
    <Tab className='all' color='white'  pl={6} pr={6}  fontSize={15} borderRadius={21} >All</Tab>
    <Tab pl={5} pr={5}  borderRadius={21} fontSize={15} className='semester'>Semester II</Tab>
    <Tab pl={5} pr={5}  borderRadius={21}  fontSize={15} className='semester'>Year I</Tab>
    <Tab pl={5} pr={5}  borderRadius={21}  fontSize={15} className='semester'>Semester IV</Tab>
    <Tab pl={5} pr={5}  borderRadius={21}  fontSize={15} className='semester'>Semester VI</Tab>
    <Tab pl={5} pr={5}  borderRadius={21}  fontSize={15} className='semester'>Semester VII</Tab>
    <Tab pl={5} pr={5}  borderRadius={21}  fontSize={15} className='semester'>Semester VIII</Tab>
    </Caurosel>
  </TabList>
 
  <TabPanels>
    <TabPanel>
    <div className='total'><p className='stu'>Total Student : 400 </p>    <p className='stu'>present students : <span className='colors'>300</span> </p>   <p className='stu'> Absent Students : <span className='colors1'>100</span></p> </div> 
    <div className='main20'>
<div className='comp'>

   <div className='pro'>
  <div  className='process'>
    <div className='round'>
    <div>
    <h4 className='semv'>BE-Computer-Sem-V</h4>
    </div>
    
    <div>
 

    <  CgRadioChecked className='radio' />

    </div>
    </div>
    </div>

    <div>
    <CircularProgress value={90}  color='#2264e2' size='170px' thickness='12px' className='sem2' >
  <CircularProgressLabel className='ninty'  >90%</CircularProgressLabel>
</CircularProgress>
    </div>

    <div className='totals3' >
    <div className='bi-radio'>
      <div>
        
          < IoIosRadioButtonOn  className='radio-circle' />
      </div>
      <div>
      <p className='totals2'>Total Students </p>
      </div>

</div>
<div className='bi-radio1'>
 
  <div >
       
          < IoIosRadioButtonOn className='radio-circle1' />
      
      </div>
      <div>
      <p className='totals-stu1'>Present</p>
  </div>

 </div>

 <div className='bi-radio2'>
 <div>
          < IoIosRadioButtonOn className='radio-circle2' />
        
 </div>
 <div>
  <p className='totals-stu2'>Absent</p>
  </div>
  </div>
  
</div>
</div>
    
   <div className='pro2'>
    <div className='process1'>
      <div className='round'>
      <div>
      <h4 className='sem'>BE-Computer-Sem - VII</h4>
      </div>
   
    <div>
        < CgRadioChecked  className='radio1'/>
     
    </div>
     </div>
    
<CircularProgress value={90} color='#2264e2'  size='170px' thickness='12px' className='sem1'>
  <CircularProgressLabel className='ninty2'  >90%</CircularProgressLabel>
</CircularProgress>

<div className='totals'>
  
  <div className='pre'>
    <div className='radio-abs'>
      <div>
            < IoIosRadioButtonOn className='radio-pre' />
      </div>
      <div>
      <p className='totals12'>Total Students </p> 
      </div>
      </div>
      <div className='radio-abs2'>
        <div>
            < IoIosRadioButtonOn className='radio-pre1' />
      </div>
      <div>
      <p className='totals-abs1'>Present</p> 
      
      </div>
  
      <div >
      
        <div   className='radio-abs3'>
            < IoIosRadioButtonOn className='radio-pre2'  />
            </div>
          
  </div>
  <div>
  <p className='totals-abs2'>Absent</p>
  </div>
  
  
  
  
  </div>
  
  
  
  </div>
  </div>
    </div>
   
    </div>
   


</div>
<button className='vie3'>View All</button>
</div>
    </TabPanel>
    <TabPanel>
      <p>two!</p>
    </TabPanel>
    <TabPanel>Three!</TabPanel>
    <TabPanel>Four!</TabPanel>
    <TabPanel>Five!</TabPanel>
    <TabPanel>Six!</TabPanel>
  </TabPanels>
</Tabs>



    </div>
    <div className='main11'>
      <h4 className='weight'>Upcoming Public Course Classes</h4>
      <div className='upcoming'>
    
    
    <Caurosel breakPoints={breakPoints1}>
      <div className='border2'>
        < AiTwotoneBook size='70px' className='int-book'/>
      <div className='upcom'>
          
        
        <div className='course'>
          <div>
          <p className='bold2'>Course Name</p>
          </div>
          <div>
          <p className='batch'>Batch Name</p>
          </div>
      
    
      </div>
      <div>
      <p className='march'>10.00AM</p>
      <p className='mar'>12/01/2022</p>
      </div>
      </div>

     
      <button className='btn3'>Join Class</button>
      </div>
     
      <div className='border'>
      < AiTwotoneBook size='70px'  className='int-book'/>
      <div className='upcom2'>
        <div>
      <h3 className='bold2'>Course Name</h3>
      <p className='batch'>Batch Name</p>
      </div>
      <div>
      <p className='march'>11.00AM</p>
    
    
      <p className='mar'>12/01/2022</p>
      </div>
     
      </div>
      <button className='btn4'>Join Class</button>

    
      </div>


      <div className='border2'>
        < AiTwotoneBook size='70px' className='int-book'/>
      <div className='upcom'>
          
        
        <div className='course'>
          <div>
          <p className='bold2'>Course Name</p>
          </div>
          <div>
          <p className='batch'>Batch Name</p>
          </div>
      
    
      </div>
      <div>
      <p className='march'>10.00AM</p>
      <p className='mar'>12/01/2022</p>
      </div>
      </div>

     
      <button className='btn3'>Join Class</button>
      </div>
     
      <div className='border'>
      < AiTwotoneBook size='70px'  className='int-book'/>
      <div className='upcom2'>
        <div>
      <h3 className='bold2'>Course Name</h3>
      <p className='batch'>Batch Name</p>
      </div>
      <div>
      <p className='march'>11.00AM</p>
    
    
      <p className='mar'>12/01/2022</p>
      </div>
     
      </div>
      <button className='btn4'>Join Class</button>

    </div>
      </Caurosel>

      
     
     
      </div>
      </div>
    </div>
    </div>

    
    <div>
    <div className='main2'>
    <div className='shit'>
     
      <div className='syllabus'>
        <div>
          < SiBlueprint className='timetable1' />
        </div>
        <div>
      <p className='covered'>Syllabus Covered</p>
      </div>
      <div>
      <button className='vie1'>View</button>
      </div>
      </div>
      <div className='syllabus1'>
        <div>
          
            < AiOutlineFieldTime className='timetable'/>
        
        </div>
        <div >
      <p className='timing'>Time Table</p>
      </div>
      <div>
      <button className='vie2'>View</button>
      </div>
      </div>
    </div>
    <div className='main4'>
      <p className='event'>Upcoming Event/Holidays</p>
      <div className='flexing'>
        <div>
        <h3 className='holi'>Dance Compitition</h3>
        </div>
        <div>
      
      < CgRadioChecked className='dance-flexing' /> 
        </div>
      </div>
    
    
      <p className='high-event'>Event</p>

      <div className='date'>
      <div>
      <p className='event1'>From Date</p>
        <p className='upcom-date'>22/10/2022</p>
        <p className='events1'>11.00AM-2.00PM</p>
        </div>
        <div className='padding'>
        <p className='eventsing1'>To Date</p>
        <p className='upcom-dateing'>22/10/2022</p>
       <p className='events19'> 11.00AM-2.00PM</p>
       </div>
       </div>
        <div className='flexing1'>
          <div>
          <h3 className='holi1'>Holi</h3>
          </div>
          <div>
          
            < CgRadioChecked className='holi-flexing' />
      
          </div>
        </div>
       
        <p className='high-event1'>Holiday</p>
      
        <div className='date1'>
          <div  className='bounding'>
        <p className='event1'>From Date</p>
        <p className='upcom-date'>22/10/2022</p>
        </div>
        <div className='padding1'>
        <p className='eventsing1'>To Date</p>
       <p className='upcom-dateing'>22/10/2022 </p>
        </div>
       
        </div>
        <button className='view'>View All</button>
    </div>
    <div className='main40'>
      <h4 className='leave'>Students on Leave Today</h4>
      <Accordion allowToggle>
  <AccordionItem className='accordion2'>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left' className='select100'>
         Select Curriculum
        </Box>
        <AccordionIcon />
      </AccordionButton>
      <AccordionPanel>
        <p>Curiculum</p>
      </AccordionPanel>
  </AccordionItem>

  <AccordionItem className='accordion2'>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left' className='select100'>
          Select section
        </Box>
        <AccordionIcon />
      </AccordionButton>
      <AccordionPanel>
        <p> A</p>
        <p>B</p>
        <p>C</p>
      </AccordionPanel>
  </AccordionItem>
</Accordion>
<div className='sec-para'>
<p className='select'>ID04 : <b>S.B.Mohite</b></p>
<p className='selectpara'>BE-Civil Department-Semester/YearII-section A</p>
</div>
<div className='sec-para'>
<p className='select'>ID44 : <b>S.B.Mohite</b></p>
</div>
<p className='selectpara'>BE-Civil Department-Semester/YearII-
  section A
</p>
<button className='view10'>View All</button>
    </div>
    

    </div>
    
    </div>
    

  </div>
 

  </div>



  )

}


export default Home;