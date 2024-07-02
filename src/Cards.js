import React from 'react'


const Cards = (props) => {
    const { resData } = props;

    return (
        <div>
            <div className='p-6'>
                <a href={resData.url} >
                    <div class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-950 dark:hover:bg-gray-700">
                        <img class="object-cover w-full rounded-t-lg h-96 p-2 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={!resData.urlToImage ? "https://img.freepik.com/premium-vector/breaking-news-background_115579-597.jpg" : resData.urlToImage} alt="" />
                        <div class="flex flex-col justify-between p-4 leading-normal">
                            <div>
                                <span class="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 float-right">{resData.author}</span>
                            </div>
                            <p className='text-white'>{resData.source.name}</p>
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{resData.title.slice(0, 60)}</h5>
                            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{resData.description ? resData.description.slice(0, 130) : ""}</p>

                            <span class="bg-blue-100 text-blue-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-950 dark:text-blue-400">
                                <svg class="w-2.5 h-2.5 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm3.982 13.982a1 1 0 0 1-1.414 0l-3.274-3.274A1.012 1.012 0 0 1 9 10V6a1 1 0 0 1 2 0v3.586l2.982 2.982a1 1 0 0 1 0 1.414Z" />
                                </svg>
                                {resData.publishedAt}
                            </span>

                        </div>
                    </div>
                </a>
            </div>

        </div>
    )
}

export default Cards
