// Components

export const HomeCefr = () => {
    return (
        <>
            <section className="py-16 px-4 top-0">
                <h2 className="gradient-monochrome-text mt-10 text-3xl text-center"> 
                        Common European Framework of Reference for Languages ( CEFR ) 
                </h2>
                <h2 className="text-3xl font-medium font-sans text-center mb-20 mt-10"> B2 Level</h2>
                <div className="max-w-7xl mx-auto items-center justify-center flex ">
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="flex flex-col">
                        <img 
                            src="/src/image/CEFR-B2.jpg" 
                            alt="CEFR B2 Certificate" 
                            className="w-full h-[300px] max-w-md rounded-lg shadow-md hover:-translate-y-2 duration-300" 
                        />
                        <p className="mt-4 text-xl text-gray-200 font-medium text-center">
                            CEFR B2 Level Certificate
                        </p> 
                        </div>
                        <div className="flex flex-col">
                        <img 
                            src="/src/image/CEFR-B2-Stat.jpg" 
                            alt="CEFR B2 Statistics" 
                            className="w-full h-[1250px] max-w-md rounded-lg shadow-md hover:-translate-y-2 duration-300" 
                        />
                        <p className="mt-4 text-xl text-gray-200 font-medium text-center">
                            CEFR B2 Statistics
                        </p> 
                        </div>
                    </div>
                </div>
        </section>
        </>
    )
}