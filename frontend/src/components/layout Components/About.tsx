import React from 'react'

export const About: React.FC = () => {
    return (
        <div className='flex items-center  justify-center  gap-6 p-6 text-white'>
            <div className='flex flex-col gap-4'>
                <h1>who i am</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima consequatur distinctio esse eos magnam alias eveniet inventore eaque nostrum quam qui libero saepe accusamus magni explicabo necessitatibus, vitae hic ab!
                </p>
            </div>
            <div className='flex flex-col gap-4'>
                <h1>What I do</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima consequatur distinctio esse eos magnam alias eveniet inventore eaque nostrum quam qui libero saepe accusamus magni explicabo necessitatibus, vitae hic ab!
                </p>

            </div>
        </div>
    )
}
