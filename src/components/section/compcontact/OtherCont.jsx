export const OtherCont = () => {
    return (
        <>
        <h3 className="text-2xl font-semibold text-white mt-16 mb-8 text-center"></h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                {/* GitHub */}

                <a 
                    href="https://github.com/Thawin2551" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center p-4 bg-white/5 border border-white/10 rounded-xl transition hover:bg-white/10 hover:-translate-y-1 hover:shadow-lg"
                >
                    <div className="w-12 h-12 flex items-center justify-center bg-gray-800 rounded-full mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                        </svg>
                    </div>
                    <div>
                        <h4 className="text-lg font-medium text-white">GitHub</h4>
                        <p className="text-gray-400">Thawin2551</p>
                    </div>
                </a>
                
                {/* Instagram */}
                <a 
                    href="https://www.instagram.com/tn_thawin/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center p-4 bg-white/5 border border-white/10 rounded-xl transition hover:bg-white/10 hover:-translate-y-1 hover:shadow-lg"
                >
                    <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 rounded-full mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                        </svg>
                    </div>
                    <div>
                        <h4 className="text-lg font-medium text-white">Instagram</h4>
                        <p className="text-gray-400">tn_thawin</p>
                    </div>
                </a>
                
                {/* Facebook */}
                <a 
                    href="https://www.facebook.com/kaonueng.thawin/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center p-4 bg-white/5 border border-white/10 rounded-xl transition hover:bg-white/10 hover:-translate-y-1 hover:shadow-lg"
                >
                    <div className="w-12 h-12 flex items-center justify-center bg-blue-600 rounded-full mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                        </svg>
                    </div>
                    <div>
                        <h4 className="text-lg font-medium text-white">Facebook</h4>
                        <p className="text-gray-400">Kkao Nueng</p>
                    </div>
                </a>
                
                {/* Phone Number */}
                <a 
                    className="flex items-center p-4 bg-white/5 border border-white/10 rounded-xl transition hover:bg-white/10 hover:-translate-y-1 hover:shadow-lg"
                >
                    <div className="w-12 h-12 flex items-center justify-center bg-green-500 rounded-full mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                        </svg>
                    </div>
                    <div>
                        <h4 className="text-lg font-medium text-white">Phone</h4>
                        <p className="text-gray-400">0969706605</p>
                    </div>
                </a>
            </div>
        </>
    )
}