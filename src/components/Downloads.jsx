import React from 'react'
import Header from './Header'
import Content from './Content'
import { GrDocumentPdf } from "react-icons/gr";
import { useTranslation } from 'react-i18next';

function Downloads() {
  const pdf_titles=[
    { 
       link:'Downloads/Naturopathy_Day_2024_brochure(2).pdf',
       title:'Brochure Naturopathy Day, 2024',
       download: 'Naturopathy_Day_2024_brochure(2).pdf'
    },
    {
       link:'Downloads/TA_form.pdf',
       title:'TA Form',
       download:'TA_form.pdf'
    }
  ];

  const list = pdf_titles.map((item,index)=>(
     <li className='list-group-item' key={index}>
             <h6 className='save'>
               <GrDocumentPdf size={30} />
               <a href={`${import.meta.env.BASE_URL}${item.link}`} target="_blank" rel="noopener noreferrer" download={item.download}>
                &nbsp;&nbsp;&nbsp;&nbsp;
                {item.title}
               </a>
             </h6>
         </li>
  ));

  const {t}= useTranslation()
  return (
    <>
      <Header />
      <Content />
      <div className="container">
        <div className="objective-box">
          <h3 className='heading-1'>{t("downloads")}</h3>
          <ul className='list-group list-group-flush'>
            {
              list
            }
          </ul>
        </div>
      </div>
    </>
  )
}

export default Downloads