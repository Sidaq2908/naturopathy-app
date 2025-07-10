import React from 'react'
import Header from './Header'
import Content from './Content'
import { GrDocumentPdf } from "react-icons/gr";
import { useTranslation } from 'react-i18next';

function Tender() {
  const pdf_titles = [
    {
      link: 'Tender/Corrigendum_10_10_2024.pdf',
      title: ' Pre bid queries corrigendum',
      download:'Corrigendum_10_10_2024.pdf'
    },
    {
        link:"Tender/CORRIGENDUM_EMD.pdf",
        title:' Additional information of Bank details',
        download:'CORRIGENDUM_EMD.pdf'
    },
    {
        link:"Tender/corrigendum_date_extention_07_10_2024_A_P.pdf",
        title:' Corrigendum Date Extended, Andhra Pradesh',
        download:'corrigendum_date_extention_07_10_2024_A_P.pdf'
    },
    {
        link:"Tender/corrigendum_date_extention_07_10_2024_Chattishgarh.pdf",
        title:" Corrigendum Date Extended, Chhattisgarh",
        download:'corrigendum_date_extention_07_10_2024_Chattishgarh.pdf'
    },
    {
        link:"Tender/corrigendum_date_extention_07_10_2024_Odisha.pdf",
        title:" Corrigendum Date Extended, Odisha",
        download:'corrigendum_date_extention_07_10_2024_Odisha.pdf'
    },
    {
        link:"Tender/CPPTenderAndhraPradesh.pdf",
        title:" Establishment of CRIYN District Krishna Andhra Pradesh",
        download:'CPPTenderAndhraPradesh.pdf'
    },
    {
        link:"Tender/CPPTenderodisha.pdf",
        title:"  Establishment of CRIYN Khorda District Odisha",
        download:'CPPTenderodisha.pdf'
    },
    {
        link:"Tender/CPPPortalRaipurtender.pdf",
        title:"  Establishment of CRIYN Raipur Chhattisgarh",
        download:'CPPPortalRaipurtender.pdf'
    },
    {
        link:"Tender/Jhajjar_tender.pdf",
        title:"  Installation of Four Lifts and Internal and External Electrical Works as Per Schedule at CRIYN Deverkhana Jhajjar Haryana",
        download:'Jhajjar_tender.pdf'
    },
    {
        link:"Tender/AssamTender.pdf",
        title:"  Engagement of Project Management Consultancy Firm for construction of 100 beds CRIYN",
        download:'AssamTender.pdf'
    } ];

  const list = pdf_titles.map((item,index) => (
    <li className='list-group-item' key={index}>
        <h6 className='save'>
          <GrDocumentPdf size={35} />
          <a href={`${import.meta.env.BASE_URL}${item.link}`} target="_blank" rel="noopener noreferrer" download={item.download}>
           &nbsp;&nbsp;&nbsp;&nbsp;
           {item.title}
          </a>
        </h6>
    </li>
  ));

  const {t}= useTranslation();
  return (
    <>
      <Header />
      <Content />
      <div className="container">
        <div className="objective-box">
          <h3 className='heading-1'>{t("tender")}</h3>
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

export default Tender