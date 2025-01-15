import React from 'react'
import { Link } from 'react-router-dom';
const LandingPage = () => {
  return (
    <div>
        <h1>WELCOME TO PLANT NURSERY</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio iusto quisquam quasi natus nisi quas ut incidunt, sapiente, amet laborum dolorem qui perferendis? Quae doloribus sit distinctio ducimus eligendi sint deserunt in at molestias fugiat dolore odit quibusdam magni, itaque laborum et? Dolore ipsum ab, asperiores unde quia illum sunt suscipit sequi quod maxime saepe? Sit similique possimus, autem molestiae numquam tempore. Quidem enim doloremque tempore reprehenderit commodi vitae sint cumque omnis corrupti facilis labore laudantium nesciunt sit, quasi amet ducimus a fugiat explicabo adipisci, sapiente repudiandae quod temporibus? Magnam quae ipsum optio rerum itaque minus ipsa, commodi aspernatur repellendus.</p>
        
        <Link to="/plants"><button>Get Started</button></Link>
    </div>
  )
}

export default LandingPage