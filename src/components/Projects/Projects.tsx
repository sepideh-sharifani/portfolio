import { useState } from 'react'
import ContactMe from '../landingPage/scenes/contactMe'
import { SelectedPage } from '@/shared/types'
import projectsData from '../landingPage/scenes/Projects/ProjectData'
import ProjectCard from './ProjectCard'
import { BiArrowBack } from 'react-icons/bi'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Link } from 'react-router-dom'

function Projects() {

    //filtering
    const [selectedCategory, setSelectedCategory] = useState('all');
    const handleClick = (category: string) => {
        setSelectedCategory(category);
    }
    const filteredData = selectedCategory === 'all' ?
        projectsData : projectsData.filter((item) => item.categories.includes(selectedCategory))

    //pagination
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = window.innerWidth >= 1000 ? 6 : 2;
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const totalPages = Math.ceil(filteredData.length / itemsPerPage);
    const maxPagesToShow = 5;
    const pageDiff = Math.floor(maxPagesToShow / 2);
    const minPageToShow = Math.max(1, currentPage - pageDiff);
    const maxPageToShow = Math.min(totalPages, minPageToShow + maxPagesToShow - 1);

    const handleClickPrev = () => {
        setCurrentPage(currentPage - 1);
    };

    const handleClickNext = () => {
        setCurrentPage(currentPage + 1);
    };
    const handlePageClick = (page: number) => {
        setCurrentPage(page);
    };
    const pageButtons = [];
    for (let i = minPageToShow; i <= maxPageToShow; i++) {
        pageButtons.push(
            <button className='font-extrabold hover:bg-orange-10 w-4 rounded-md' key={i} onClick={() => handlePageClick(i)} disabled={i === currentPage}>
                {i}
            </button>
        );
    }

    return (
        <>
            <div className='bg-homeBg py-10 w-full bg-cover bg-opacity-70 bg-repeat-y'>
                <div className='bg-gray-1 w-11/12 m-auto h-full flex flex-col items-center pt-20 gap-5'>
                    <h1 className='font-extrabold text-2xl'>All Projects</h1>
                    <div className='flex flex-col w-11/12'>
                        <div className='border border-gray-2 w-' />
                        <div className='flex items-center gap-2 '>
                            <BiArrowBack className='text-blue-500 cursor-pointer hover:text-black hover:underline' />
                            <Link to='/'><span className='font-medium text-blue-500 cursor-pointer hover:text-black hover:underline'>back home</span></Link>
                        </div>

                    </div>

                    <div className='flex items-center gap-3 flex-wrap justify-center'>
                        <button className='bg-white w-24 border-2 border-gray-2 hover:bg-orange-10 rounded-md' onClick={() => handleClick("all")}>All</button>
                        <button className='bg-white w-24 border-2 border-gray-2 hover:bg-orange-10 rounded-md' onClick={() => handleClick("nextjs")}>NextJs</button>
                        <button className='bg-white w-24 border-2 border-gray-2 hover:bg-orange-10 rounded-md' onClick={() => handleClick("react")}>React</button>
                        <button className='bg-white w-24 border-2 border-gray-2 hover:bg-orange-10 rounded-md' onClick={() => handleClick("javascript")}>javaScript</button>
                        <button className='bg-white w-24 border-2 border-gray-2 hover:bg-orange-10 rounded-md' onClick={() => handleClick("tailwind")}>tailwind</button>
                        <button className='bg-white w-24 border-2 border-gray-2 hover:bg-orange-10 rounded-md' onClick={() => handleClick("sass")}>Sass</button>
                    </div>

                    <div className='bg-gray-1 w-11/12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5 p-5'>
                        {
                            filteredData.slice(startIndex, endIndex).map((item, i) => (
                                <ProjectCard
                                    key={i}
                                    name={item.name}
                                    link1={item.link1}
                                    link2={item.link2}
                                    image={item.image}
                                    image1={item.image1}
                                    image2={item.image2}
                                    image3={item.image3}
                                    image4={item.image4}
                                    description={item.description}
                                    TeckStack={item.TechStack} />
                            ))
                        }
                    </div>
                    <div className=' flex gap-3 pb-5'>
                        <button className='font-bold hover:bg-orange-10 w-12 rounded-md' onClick={handleClickPrev} disabled={currentPage === 1}>
                            Prev
                        </button>
                        {pageButtons}
                        <button className='font-bold hover:bg-orange-10 w-12 rounded-md' onClick={handleClickNext} disabled={endIndex >= projectsData.length}>
                            Next
                        </button>
                    </div>
                </div>

            </div >
        </>
    )
}

export default Projects