import { SelectedPage } from '@/shared/types'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { AiOutlineGithub, AiOutlinePhone } from 'react-icons/ai'
import { FaLinkedin } from 'react-icons/fa'

type Props = {
    setSelctedPage: (value: SelectedPage) => void
}

const ContactMe = ({ setSelctedPage }: Props) => {
    const inputStyles = 'w-full rounded-lg mt-6 bg-gray-300 p-2 px-3 border-none outline-none placeholder:text-black placeholder:text-sm'
    const { register, trigger, formState: { errors } } = useForm();
    const onSumbit = async (e: any) => {
        const isValid = await trigger();
        if (!isValid) {
            e.preventDefault();
        }
    }

    return (
        <footer id='contactme' className='flex flex-col mt-20 font-sans'>
            <fieldset className='border-t-2 border-black text-center mb-10'>
                <legend className='px-2 font-bold text-5xl md:text-6xl'>Contact{' '}<span className='text-gray-2'>Me</span></legend>
            </fieldset>
            <section className='bg-contactBg bg-cover h-full flex items-center justify-center'>
                <motion.div
                    className='flex flex-col gap-5 justify-center sm:flex-row p-5 bg-opacity-95 bg-gray-1 w-11/12 h-fit rounded-t-lg md:w-4/5'
                    onViewportEnter={() => (setSelctedPage(SelectedPage.ContactMe))}>
                    {/*leftSide */}
                    <motion.div
                        className='flex flex-col mt-2 gap-5 w-[300px]'
                        initial='hidden'
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 2 }}
                        variants={{ hidden: { opacity: 0, y: -50 }, visible: { opacity: 1, y: 0 }, }}>
                        <span className='font-bold text-xl'>Find me on{' '}:</span>
                        <a href="https://github.com/sepideh-sharifani" target="_blank" className='flex items-center gap-2 text-gray-2 hover:text-black'>
                            <AiOutlineGithub className="text-2xl" />github/sepideh-Sharifani
                        </a>
                        <a href="https://www.linkedin.com/in/sepideh-sharifani/" target="_blank" className='flex items-center gap-2 text-gray-2 hover:text-black'>
                            <FaLinkedin className="text-2xl" />LinkedIn/sepideh-sharifani
                        </a>
                        <div className=' flex items-center gap-2 text-gray-2 hover:text-black'>
                            <AiOutlinePhone className='text-2xl' /> +989379162443
                        </div>
                    </motion.div>
                    {/*rightSide*/}
                    <div>
                        <form
                            className='xs:w-11/12 m-auto sm:w-full sm:mt-6'
                            target='_blank' onSubmit={onSumbit}
                            method='POST'
                            action='https://formsubmit.co/7e0c3d86832b67d710e5b795f2a0ad37'>
                            <input className={inputStyles} type='text' placeholder='Name' {...register("name", {
                                required: true,
                                maxLength: 50,
                            })} />
                            {errors.name && (
                                <p className='text-red-600 px-2'>
                                    {errors.name.type === "required" && "Please enter your name"}
                                    {errors.name.type === "maxLength" && "Maximum length is 50 characters"}
                                </p>
                            )}
                            <input className={inputStyles} type='text' placeholder='Email' {...register("email", {
                                required: true,
                                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            })} />
                            {errors.name && (
                                <p className='text-red-600 px-2'>
                                    {errors.name.type === "required" && "Please enter your email."}
                                    {errors.name.type === "pattern" && "Please enter a valid email address."}
                                </p>
                            )}
                            <textarea className={`${inputStyles} resize-none`} rows={4} cols={50} placeholder='Message' {...register("message", {
                                required: true,
                                maxLength: 2000,
                            })} />
                            {errors.message && (
                                <p className='text-red-600 px-2'>
                                    {errors.message.type === "required" && "Please write your message"}
                                    {errors.message.type === "maxLength" && "Maximum length is 2000 characters"}
                                </p>
                            )}
                            <button
                                type='submit'
                                className='w-36 h-10 my-3 rounded-lg font-bold hover:bg-orange-10 bg-gray-300'>
                                Sumbit
                            </button>
                        </form>
                    </div>
                </motion.div>
            </section>

        </footer>

    )
}

export default ContactMe