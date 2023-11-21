import { FC} from "react"
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import { EffectCoverflow, Pagination, Navigation} from 'swiper/modules'
import slide_image_1 from '../assets/Rectangle 3-2.png'
import slide_image_3 from '../assets/Rectangle 3.png'
import slide_image_4 from '../assets/Rectangle 4.png'
import slide_image_2 from '../assets/Rectangle 2.png'
import image_1 from '../assets/Rectangle 6.png'
import image_2 from '../assets/86273366_816207565527853_4832378081094139904_o.jpg'
import image_3 from '../assets/92a621a11e9217f7.jpg'
import image_4 from '../assets/630_360_1656829768-595.jpg'
import image_5 from '../assets/Снимок экрана 2023-11-21 131232.png'
import { NavigationOptions } from "swiper/types";
import { NavLink } from "react-router-dom";

const Home :FC = () => {
  return (
    <div className="container">
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true as boolean,
        }as NavigationOptions
	}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        <SwiperSlide>
          <img src={slide_image_1} alt="slide_image" />
        </SwiperSlide>
		<SwiperSlide>
          <img src={slide_image_2} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_3} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_4} alt="slide_image" />
        </SwiperSlide>
		
        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
		      <h1><svg xmlns="http://www.w3.org/2000/svg" className="ionicon" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="48" d="M244 400L100 256l144-144M120 256h292"/></svg></h1>
          </div>
          <div className="swiper-button-next slider-arrow">
		      <h1><svg xmlns="http://www.w3.org/2000/svg" className="ionicon" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="48" d="M268 112l144 144-144 144M392 256H100"/></svg></h1>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
      <div className="rate">
        <img src={image_5} alt=""/>
      </div>
      <div className="viska">
        <h1>Рід військ</h1> 
        <p>Різновид війська, що призначені для безпосереднього ведення або всебічного забезпечення бою, володіють певними бойовими властивостями та мають властиве їм бойове призначення, бойову техніку та озброєння, тактику ведення бою і організацію. Кожен рід військ з'являється і розвивається відповідно до історичного розвитку військової техніки і способів ведення війни.</p>

      </div>
      <div className="suxpot">
        <h1>Сухопу́тні війська́ Збро́йних сил Украї́ни</h1>
        <div className="cont">
          <img src={image_1} alt="" />
          <p>Найчисленніший самостійний вид Збройних сил України, головний носій їх бойової могутності, призначений для ведення бойових дій переважно на суходолі.
              За даними видання The Military Balance 2023 року, Сухопутні війська України мали чисельність у 250 000 військовослужбовців. Вони були організовані у 4 оперативних командування.</p>
        </div>
      </div>

      <div className="suxpot">
        <h1>Десантно-штурмові війська</h1>
        <div className="cont">
          <img src={image_2} alt="" />
          <p>окремий рід військ у складі Збройних сил України, призначений діяти як повітряний десант, а також для виконання бойових завдань у тактичному та оперативному тилу ворога. До складу військ входять повітрянодесантні, аеромобільні та штурмові частини.</p>
        </div>
      </div>

      <div className="suxpot">
        <h1>Військово-морські сили</h1>
        <div className="cont">
          <img src={image_4} alt="" />
          <p>вид збройних сил України, призначений для захисту суверенітету і державних інтересів України на морі, розгрому угруповань ВМС противника у визначених військово-морських зонах[1] самостійно та у взаємодії з іншими видами Збройних сил України, сприяння Сухопутним військам Збройних сил України на приморському напрямку.</p>
        </div>
      </div>

      <div className="suxpot">
        <h1>Повітряні сили</h1>
        <div className="cont">
          <img src={image_3} alt="" />
          <p>Видання The Military Balance і Flight Global на 2021 рік наводять різні дані щодо кількості авіації на озброєнні Повітряних сил:[1][2] 32—34 винищувачів Су-27, 24—37 винищувачів МіГ-29, 12―14 бомбардувальників Су-24, 13—31 штурмовиків Су-25, 31—47 навчальний літак Л-39, 29 транспортних літаків. (Ан-26, Іл-76, Ан-70), а також 3 спеціальних літака Ан-30, 9 розвідувальних Су-24МР і 15—46 гелікоптерів (Мі-8, Мі-9, Мі-2). На озброєнні перебувало також 6 безпілотних комплексів Bayraktar TB2.</p>
        </div>
      </div>
    </div>  
    
  )
}

export default Home