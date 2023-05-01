import { SelectedPage } from '@/shared/types'
import { motion } from 'framer-motion'


type Props = {
    setSelctedPage: (value: SelectedPage) => void
}

const ContactMe = ({ setSelctedPage }: Props) => {
    return (
        <section id='contactme'>
            <motion.div
                onViewportEnter={() => (setSelctedPage(SelectedPage.ContactMe))}>
                hello
            </motion.div>
        </section>

    )
}

export default ContactMe