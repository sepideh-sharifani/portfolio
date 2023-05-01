import { AiOutlineCloseCircle } from 'react-icons/ai'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "./styles.modulel.css";
import { Autoplay, Navigation, Pagination } from "swiper";

type Props = {
    name: string,
    image: string,
    image1?: string,
    image2?: string,
    image3?: string,
    image4?: string,
    link1: string,
    link2?: string,
    TeckStack: string,
    description: string
    onclose: () => void
}

const Modals = ({ name, onclose, image, image1, image2, image3, image4, link1, link2, TeckStack, description }: Props) => {
    let array = [];
    {
        if (image) {
            array.push(image)
        }
        if (image1) {
            array.push(image1)
        }
        if (image2) {
            array.push(image2)
        }
        if (image3) {
            array.push(image3)
        }
        if (image4) {
            array.push(image4)
        }
    }
    const handleClose = (e: any) => {
        if (e.target.id === 'wrapper') {
            onclose()
        }
    }

    return (
        <>
            <div id='wrapper' className='bg-gray-2 w-full inset-0 h-full fixed flex justify-center items-center z-50 bg-opacity-40' onClick={handleClose}>
                <div
                    className='bg-white w-[350px] h-fit xs:w-[500px] sm:w-[600px] md:w-[700px] rounded-md p-[25px] relative' >
                    <AiOutlineCloseCircle className='absolute right-5 top-5 text-2xl cursor-pointer' onClick={() => onclose()} />
                    <div className='flex flex-col mt-10'>
                        <h1 className='mb-4 bg-gray-1 w-fit'>{name}</h1>
                        <Swiper
                            spaceBetween={30}
                            centeredSlides={true}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            pagination={{
                                clickable: true,
                            }}
                            navigation={true}
                            modules={[Autoplay, Pagination, Navigation]}
                            className="mySwiper"
                        >
                            {

                                array.map((item) => (
                                    <SwiperSlide>
                                        <img src={item} />
                                    </SwiperSlide>
                                ))
                            }
                        </Swiper>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <div className='flex flex-col bg-gray-1 gap-3 px-2 pb-2'>
                            <span className='font-bold'>Description:</span>
                            <span className='text-sm px-2'>{description}</span>
                        </div>
                        <div className='flex flex-col bg-gray-1 gap-3 px-2 pb-2'>
                            <span className='font-bold'>Teck Stack:</span>
                            <span className='text-sm px-2'>{TeckStack}</span>
                        </div>
                    </div>
                </div>
            </div >
        </>

    )
}

export default Modals