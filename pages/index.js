// import styles from '../styles/Home.module.css'
import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react'


import {
  Accordion,Box,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'

const Home = () => {
  return (
  <div className='container'>
    <div className='main'>
    <div>
      <div className='first1'>
    <h1 className='first'>Hello Suhani Mam !</h1>
    <p>12/01/2022,Monday</p>
    </div>


   <div className='first3'> 
   <div>
   <p className='first2'>Current Educational Year : 2022-23</p> 
   </div>

    <div><Accordion allowToggle>
  <AccordionItem className='accordion3'>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
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
  <AccordionItem className='accordion3'>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
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

<div className='main4'>
  <h2 className='wei'>Upcoming Classes</h2>

  <Tabs variant='soft-rounded' colorScheme='blue'>
  <TabList >
    <Tab >All</Tab>
    <Tab>Semester 2</Tab>
    <Tab>Year 1</Tab>
    <Tab>Semester 4</Tab>
    <Tab>Semester 6</Tab>
  </TabList>
  <TabPanels>
    <TabPanel>
      <div className='first4'>
      <div className='first5' >
      <h3 className='wei'>Data Structure-Theory</h3>
      <p>Bachelor of Engineering -Computer Departments
        semester-1 section-B Batch-B1  </p>
        </div>
        <div>
      <h4 className='bolding'>10.00AM</h4>
      <p>12/01/2022</p>
      </div>
      <div>
      <button className='btn-first'>join class</button>
        </div>
        </div>
        <div className='first4'>
        <div className='practic'>
      <h3  className='wei' >C++ - Practical</h3>
      <p>Bachelor of Engineering -Computer Departments
        semester-1 section-B Batch-B1  </p>
        </div>
        <div>
        <h4 className='bolding'>11.00AM</h4>
      <p>12/01/2022</p>
      </div>
      <div>
      <button className='btn-sec' >join class</button>
        </div>
        </div>
        <div className='data1'>
        <div className='data'>
        <h3  className='weight2'>Data Structure-Theory</h3>
      <p className='weight3'>Bachelor of Engineering -Computer Departments
        semester-1 section-B Batch-B1  </p>
        </div>
        <div>
        <h4 className='bolding' >10.00AM</h4>
      <p>12/01/2022</p>
      </div>
      <div>
      <button className='btn-sec' >join class</button>
      </div>
      </div>
      
    </TabPanel>
    <TabPanel>
      <p>two!</p>
    </TabPanel>
  </TabPanels>
</Tabs>
</div>
    <div className='main4'>
      <h3 className='wei'>Student Attendance Status</h3>

      <Tabs variant='soft-rounded' colorScheme='blue'>
  <TabList>
    <Tab>All</Tab>
    <Tab>Semester 2</Tab>
    <Tab>Year 1</Tab>
    <Tab>Semester 4</Tab>
    <Tab>Semester 6</Tab>
  </TabList>
  <TabPanels>
    <TabPanel>
    <div className='total'><p className='stu'>Total Student:400 </p>    <p className='stu'>present students:300 </p>   <p className='stu'> Absent Students:100</p> </div> 
    </TabPanel>
    <TabPanel>
      <p>two!</p>
    </TabPanel>
  </TabPanels>
</Tabs>
<div className='main4'>
<div className='comp'>
  <div>
    <h4 className='semv'>BE-Computer-Sem-V</h4>
    </div>
    <div>
    <h4 className='sem'>BE-Computer-Sem - VII</h4>
    </div>
    </div>
    
    <CircularProgress value={90} color='blue' size='150px' className='sem2'>
  <CircularProgressLabel  >90%</CircularProgressLabel>
</CircularProgress>

   

<CircularProgress value={90} color='blue' size='150px' className='sem1'>
  <CircularProgressLabel  >90%</CircularProgressLabel>
</CircularProgress>
<div className='totals'>
  <div className='totals3' >
    <div>
<p className='totals2'>Total Students </p>
</div>
<div>
 <p className='totals2'>Present</p>
 </div>
 <div>
  <p className='totals2'>Absent</p>
  </div>
</div>
<div className='pre'>
  <div>
<p className='totals1'>Total Students </p> 
</div>
<div>
<p className='totals1'>Present</p> 
</div>
<div>
<p className='totals1'>Absent</p>
</div>
</div>
</div>
</div>

    </div>
    <div className='main4'>
      <h4 className='weight'>Upcoming Public Course Classes</h4>
      <div className='upcoming'>
        <div>
      <div className='upcom'>
        <div>
      <h3 className='bold2'>Course Name</h3>
      <p>Batch Name</p>
      </div>
      <div>
      <p className='march'>10.00AM</p>
      <p className='mar'>12/01/2022</p>
      </div>
      </div>
     
      <button className='btn3'>Join Class</button>
      </div>
      <div>
      <div className='upcom2'>
        <div>
      <h3 className='bold2'>Course Name</h3>
      <p>Batch Name</p>
      </div>
      <div>
      <p className='march'>11.00AM</p>
    
    
      <p className='mar'>12/01/2022</p>
      </div>
      </div>
      <button className='btn4'>Join Class</button>
      </div>
      </div>
      </div>
    </div>
    </div>

    
    <div>
    <div className='main2'>
    <div className='shit'>
     
      <div className='syllabus'>
        <div>
      <p>Syllabus Covered</p>
      </div>
      <div>
      <button className='vie1'>View</button>
      </div>
      </div>
      <div className='syllabus1'>
        <div >
      <p >Time Table</p>
      </div>
      <div>
      <button className='vie2'>View</button>
      </div>
      </div>
    </div>
    <div className='main4'>
      <p className='event'>Upcoming Event/Holidays</p>
      <h3 className='holi'>Dance Compitition</h3>
      <p className='event1'>Event</p>

      <div className='date'>
      <div>
      <p className='event1'>From Date</p>
        22/10/2022
        <p className='event1'>11.00AM-2.00PM</p>
        </div>
        <div className='padding'>
        <p className='event1'>To Date</p>
        22/10/2022
       <p className='event1'> 11.00AM-2.00PM</p>
       </div>
       </div>
        
        <h3 className='holi'>Holi</h3>
        <p className='event1'>Holiday</p>
        <div className='date'>
          <div >
        <p className='event1'>From Date</p>
        22/10/2022
        </div>
        <div className='padding1'>
        <p className='event1'>To Date</p>
        22/10/2022
        </div>
        <button className='view'>View All</button>
        </div>
    </div>
    <div className='main4'>
      <h4 className='leave'>Students on Leave Today</h4>
      <Accordion allowToggle>
  <AccordionItem className='accordion2'>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left' className='select'>
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
        <Box as="span" flex='1' textAlign='left' className='select'>
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
<p className='select'>ID04 : <b>S.B.Mohite</b></p>
<p>BE-Civil Department-Semester/YearII-section A</p>

<p className='select'>ID44 : <b>S.B.Mohite</b></p>
<p>BE-Civil Department-Semester/YearII-
  section A
</p>
<button className='view1'>View All</button>
    </div>
    

    </div>
    
    </div>
    

  </div>

  )

}

export default Home;