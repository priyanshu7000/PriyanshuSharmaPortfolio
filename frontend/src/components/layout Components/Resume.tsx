import React from 'react'

export const Resume: React.FC = () => {
    return (
        <div className='flex justify-around text-white '>
            <div className='flex flex-col gap-4'>
                <h1>Education</h1>
                <div>
                    <h1>Bachlor of Technology</h1>
                    <p><i className="fa-solid fa-calendar"></i> 2020 - 2024</p>
                    <p>Shri Vaishnav Insitute of Technology and Science</p>
                </div>
                <div>
                    <h1>12th</h1>
                    <p><i className="fa-solid fa-calendar"></i> 2019 - 2020</p>
                    <p>Shri Vaishnav Insitute of Technology and Science</p>
                </div>
                <div>
                    <h1>Bachlor of Technology</h1>
                    <p><i className="fa-solid fa-calendar"></i> 2018 - 2022</p>
                    <p>Shri Vaishnav Insitute of Technology and Science</p>
                </div>
            </div>

            {/* right section */}
            <div className='flex flex-col gap-4'>

                <h1><i className="fa-solid fa-suitcase"></i>Experience</h1>
                <div>
                    <h1>Frontend Developer</h1>
                    <p><i className="fa-solid fa-calendar"></i> 2022 - Present</p>
                    <p >
                        Goldman Sachs
                    </p>
                    <p className='flex flex-col max-w-xl line-height-7 gap-2 mt-3'>
                        <span className='text-wrap'>
                        Development and implementation Frontend part of application
                        </span>
                        <span className='text-wrap'>
                            Implemented code refactoring practices, improving the application maintainability and reducing potential errors
                        </span><span className='text-wrap'>Implemented API Intergration in the Easy & Maintainable format</span></p>
                </div>

            </div>
        </div>
    )
}
