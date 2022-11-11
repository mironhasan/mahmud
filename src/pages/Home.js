import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../layouts/Header';
import data from "../data/home.json";

export default function Home() {
    return (
        <>
            <Header />
            <section style={{ backgroundImage: `url('images/banner-assets.png')` }} className="relative z-10 bg-[center_top_5rem] bg-cover bg-no-repeat pt-48 pb-32">
                <img src="images/banner-bg.jpg" alt="bg" className="w-full h-full object-cover absolute top-0 left-0 -z-10 opacity-[.09]" />
                <div className="max-w-6xl px-5 mx-auto flex items-center gap-6">
                    <div className="w-3/5">
                        <h3 className="text-xl font-semibold capitalize mb-3 tracking-wider text-transparent bg-clip-text bg-gradient-to-b from-[#22d3ee] to-[#1b6b92] dark:from-teal-200 dark:to-cyan-400">welcome dear!</h3>
                        <h1 className="text-[52px] leading-[56px] font-black tracking-tight dark:text-white text-darkness mb-4">Leave your mind to my frontend museum</h1>
                        <p className="max-w-xl mb-12">Helping design and develop your business or personal website build with your demand by HTML, React and Wordpress. You can see my previous projects in the portfolio section or also look at my Github profile.</p>
                        <Link to="#" className="flex items-center justify-start gap-2.5 w-fit rounded-full text-primary bg-cyan-50 dark:bg-darkness/10 dark:text-cyan-50 shadow-xl shadow-cyan-500/10 border-2 border-solid border-primary btn-hover">
                            <i className="fa-solid fa-cube text-base w-11 h-11 leading-10 text-center rounded-full border-2 border-solid text-white dark:border-darkness bg-gradient-to-b from-primary to-cyan-700"></i>
                            <span className="capitalize text-sm font-medium tracking-wide pr-3">explore projects</span>
                        </Link>
                    </div>
                    <div className="w-2/5">
                        <img className="w-full" src="images/banner-hero.png" alt="hero" />
                    </div>
                </div>
            </section>

            <section className="py-36">
                <div className="max-w-6xl px-5 mx-auto">
                    {/* <div className="md:flex md:items-center md:justify-center md:gap-12 md:max-w-3xl md:mx-auto relative mb-14">
                        <i className={`${ data?.service?.icon } flex-shrink-0 text-4xl w-20 h-20 leading-15 text-center rounded-full relative bg-gradient-to-b from-primary to-secondary text-white
                        after:content-[''] after:absolute after:-top-2.5 after:-left-2.5 after:w-[100px] after:h-[100px] after:rounded-full after:border-2 after:border-dashed after:border-primary
                        after:shadow-xl after:shadow-primary/[25%] animate-bounce`} />
                        <h2 className="text-5xl leading-12 font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-b 
                        dark:from-teal-200 dark:to-cyan-400 from-teal-500 to-cyan-600">{ data?.service?.title }</h2>
                    </div> */}
                    <div className="section-head">
                        <i className={`${ data?.service?.section?.icon } section-icon`} />
                        <h3 className="section-name">{ data?.service?.section?.name }</h3>
                        <h2 className="section-title">{ data?.service?.section?.title }</h2>
                    </div>
                    <div className="grid grid-cols-3">
                        {data?.service?.cards.map((card, index) => (
                            <div key={ index } className="py-12 px-10 bg-gradient-to-b dark:from-blue-900/10 dark:to-sky-900/30 from-blue-300/10 to-sky-300/20 
                            border border-solid border-primary/10 hover:border-primary/60 hover:shadow-xl hover:shadow-primary/10 transition">
                                <i className={`${ card?.icon } text-[44px] text-center mb-7 text-white text-transparent bg-clip-text bg-gradient-to-t 
                                    ${ index === 0 && "from-red-500 to-orange-400" }
                                    ${ index === 1 && "from-amber-600 to-yellow-400" }
                                    ${ index === 2 && "from-green-600 to-lime-400" }
                                    ${ index === 3 && "from-emerald-600 to-teal-400" }
                                    ${ index === 4 && "from-sky-600 to-cyan-400" }
                                    ${ index === 5 && "from-blue-600 to-indigo-400" }
                                `} />
                                <h4 className="text-[22px] capitalize font-bold mb-4 dark:text-teal-50">{ card?.title }</h4>
                                <p className="mb-5 text-[15px]">{ card?.descrip }</p>
                                <ul className="flex flex-col gap-3">
                                    {card?.features.map((feature, index) => (
                                        <li key={ index } className="flex items-center gap-3">
                                            <i className="fa-solid fa-check flex-shrink-0 text-[10px] w-4 h-4 leading-4 text-center rounded-full bg-slate-500 text-white"></i>
                                            <span className="text-sm font-medium">{ feature }</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="pb-36">
                <div className="max-w-6xl px-5 mx-auto">
                    <div className="section-head">
                        <i className={`${ data?.resume?.section?.icon } section-icon`} />
                        <h3 className="section-name">{ data?.resume?.section?.name }</h3>
                        <h2 className="section-title">{ data?.resume?.section?.title }</h2>
                    </div>
                    <div className="flex gap-6">
                        <div className="w-1/2">
                            <ul className="ml-12 border-l-2 border-dashed border-primary/10">
                                {data?.experience?.map((item, index) => (
                                    <li key={ index } className="-ml-8 flex items-start gap-10 mb-16 last:mb-0 list-profile">
                                        <Link to={ item?.profile?.url } className="w-16 h-16 flex-shrink-0 flex items-center justify-center rounded-full relative shadow-xl shadow-darkness/[0.15] dark:bg-gray-100 bg-white
                                        before:absolute before:left-1/2 before:top-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:content-[''] before:-z-10 before:w-[90px] before:h-[90px] before:rounded-full before:bg-primary/10
                                        after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:content-['\f35d'] after:font-awesome after:font-bold after:text-base after:w-16 after:h-16 after:leading-13 after:text-center after:rounded-full
                                        after:opacity-0 after:bg-darkness/50 after:text-white view-profile">
                                            <img src={ item?.profile?.logo } alt="logo" className={ item?.profile?.size } />
                                        </Link>
                                        <div>
                                            <h3 className="font-medium text-lg capitalize">{ item?.title }</h3>
                                            <h4 className="text-[15px] font-normal capitalize mb-4 dark:text-gray-200">{} @ <span className="text-[13px]">{ item?.duration }</span></h4>
                                            <h5 className="text-sm font-medium capitalize tracking-wide mb-3 relative before:absolute before:top-2.5 before:left-0 before:content-[''] before:w-full before:h-[1px] before:-z-20 before:bg-primary/10
                                            after:absolute after:left-0 after:top-1/2 after:-translate-y-1/2 after:w-16 after:h-4 after:-z-10 after:content-[''] dark:after:bg-darkness after:bg-white">{ Object.keys(data.experience[index])[3] }</h5>
                                            <p className="text-[13px] tracking-wide leading-6 mb-3">{ item?.describe }</p>
                                            <h5 className="text-sm font-medium capitalize tracking-wide mb-3 relative before:absolute before:top-2.5 before:left-0 before:content-[''] before:w-full before:h-[1px] before:-z-20 before:bg-primary/10
                                            after:absolute after:left-0 after:top-1/2 after:-translate-y-1/2 after:w-16 after:h-4 after:-z-10 after:content-[''] dark:after:bg-darkness after:bg-white">{ Object.keys(data.experience[index])[4] }</h5>
                                            <ul className="grid grid-cols-3 gap-3">
                                                {item?.projects?.map((project, index) => (
                                                    <li key={ index } className="relative rounded-md overflow-hidden hover-element">
                                                        <img src={ project?.project } alt="project" className="w-full rounded-md rounded-tr-lg" />
                                                        <a href={ project?.url } target="_blank" rel="noopener noreferrer" className="material-icons text-lg absolute top-0 left-0 w-full h-full rounded-md flex items-center justify-center opacity-0 show-element text-white bg-darkness/50">open_in_new</a>
                                                        <span className="w-6 h-6 rounded-full flex items-center justify-center absolute -top-1 -right-1 shadow-md dark:bg-darkness bg-white">
                                                            <img src={ project?.tool } alt="html" className="h-3 mt-[2px] mr-[2px]" />
                                                        </span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="w-1/2"></div>
                    </div>
                </div>
            </section>
        </>
    )
}
