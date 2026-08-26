import { Swiper, SwiperSlide } from "swiper/react";
import AnimatedText from "../../../../components/animatedText";
import { motion } from "framer-motion";
import { useContext } from "react";
import { ConfigContext } from "../../../../utils/configContext";
import { Autoplay } from "swiper/modules";

function Testimonials() {
  const {
    home: { testimonials },
  } = useContext(ConfigContext)!;
  if (!testimonials) return null;

  return (
    <section className="max-w-screen-lg mx-auto px-4 py-12">
      <div className="mb-6 max-w-none flex flex-col items-center prose prose-lg text-center">
        <h1 className="mb-0">
          <AnimatedText text={testimonials.title} />
        </h1>
        <motion.p
          initial={{ y: "100%", opacity: 0 }}
          whileInView={{ y: "0%", opacity: 0.7 }}
          viewport={{ once: true }}
          className="text-xl max-w-lg"
        >
          {testimonials.subtitle}
        </motion.p>
      </div>
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
      >
        <Swiper
          loop
          autoplay
          modules={[Autoplay]}
          spaceBetween={32}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          slidesPerView={1}
        >
          {testimonials.cards.map(({ name, comment }, index) => (
            <SwiperSlide className="!h-[22rem] my-2" key={index}>
              <div className="h-full p-6 rounded-2xl bg-[#E7F1EA] hover:bg-[#c7f9cc] transition-colors duration-300">
                <div className="flex flex-col h-full">
                  {/* Profile Picture */}
                  <div className="flex items-center gap-4 mb-4">
                    <img 
                      src={`/avatars/${index + 1}.webp`} 
                      alt={name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-[#26342D]"
                    />
                    <h3 className="text-[#26342D] font-bold text-lg">
                      {name}
                    </h3>
                  </div>
                  
                  {/* Stars */}
                  <div className="flex mb-4 space-x-1">
                    {Array(5).fill(0).map((_, i) => (
                      <svg 
                        key={i} 
                        className="w-5 h-5 text-[#26342D]" 
                        fill="currentColor" 
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                      </svg>
                    ))}
                  </div>

                  {/* Quote mark and Comment */}
                  <div className="relative flex-grow">
                    <span className="absolute -left-1 -top-3 text-[#26342D] text-4xl font-bold opacity-20">"</span>
                    <p className="text-[#292929] line-clamp-5 relative z-10 pl-2">
                      {comment}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </section>
  );
}

export default Testimonials;