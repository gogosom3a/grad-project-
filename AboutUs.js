import Image from "next/image";
import styles from "../styles/aboutUs.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCreative } from "swiper";
import "swiper/css";
import "swiper/css/effect-creative";

function AboutUs() {
  return (
    <div className={styles.aboutUs} id="#about">
      <div className="special-title">about disease</div>
      <div className={styles.aboutSection}>
        <div className={styles.wrapImage}>
          <Swiper
            grabCursor={true}
            effect={"creative"}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            creativeEffect={{
              prev: {
                shadow: true,
                translate: [0, 0, -400],
              },
              next: {
                translate: ["100%", 0, 0],
              },
            }}
            modules={[Autoplay, EffectCreative]}
            className="mySwiper"
          >
            <SwiperSlide>
              <Image
                src="/slide-1.jpg"
                alt="image 1"
                width={300}
                height={500}
                className={styles.image}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/slide-2.jpg"
                alt="image 2"
                width={300}
                height={500}
                className={styles.image}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/slide-3.jpg"
                alt="image 3"
                width={300}
                height={500}
                className={styles.image}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/slide-4.jpg"
                alt="image 4"
                width={300}
                height={500}
                className={styles.image}
              />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className={styles.aboutDisc}>
          <p className={styles.disc}>
            Clostridioides difficile infection (CDI) is caused by the bacterium
            Clostridioides difficile (formerly known as Clostridium difficile).
          </p>
          <p className={styles.disc}>
            CDI is a bacterial infection that primarily affects the colon (large
            intestine).
          </p>
          <p className={styles.disc}>
            It occurs when the normal balance of bacteria in the gut is
            disrupted, often due to antibiotic use.
          </p>
          <p className={styles.disc}>
            C. difficile bacteria produce toxins that damage the colon lining,
            leading to inflammation and diarrhea..
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
