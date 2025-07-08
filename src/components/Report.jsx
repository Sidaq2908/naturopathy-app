import React from 'react'
import Header from './Header'
import Content from './Content'
import Footer from './Footer'
import { GrDocumentPdf } from "react-icons/gr";
import { useTranslation } from 'react-i18next';

const Report = () => {
    const pdf_titles=[
        { link: '/public/Report/PMO_Report_IDY_Updated.pdf',
          title:'Nationwide Impact Assessment Survey on International Day of Yoga (IDY) 2025',
          download:'PMO_Report_IDY_Updated.pdf'
        },
        {
            link:'/public/Report/Pahle India Yoga Book VI 13-06-25.pdf',
            title:'The Research Impact of The International day of Yoga',
            download:'Pahle India Yoga Book VI 13-06-25.pdf'
        }
    ];
    const list= pdf_titles.map((item,index)=>(
        <li className='list-group-item' key={index}>
                  <h6>
                    <GrDocumentPdf size={30} />
                    <a href={item.link} target="_blank" rel="noopener noreferrer" download={item.download}>
                      &nbsp;&nbsp;
                     {item.title}
                    </a>
                  </h6>
              </li>
     ));

    const {t} = useTranslation();

  return (
   <>
      <Header />
      <Content />
      <div className="container">
        <div className="objective-box">
          <h3 className='heading-1'>{t("report")}</h3>
          <ul className='list-group list-group-flush'>
            {
              list
            }
          </ul>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Report