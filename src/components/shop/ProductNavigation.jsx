export default function ProductNavigation({ currentPage, totalPages, setCurrentPage }) {  
    const handlePageChange = (page) => {  
        setCurrentPage(page); 
    };  

    return (  
        <div className="row">  
            <div className="col-md-12">  
                <nav aria-label="Page navigation example">  
                    <ul className="pagination justify-content-center">  
                        <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>  
                            <a   
                                className="page-link"   
                                href="#"   
                                onClick={() => handlePageChange(currentPage - 1)}   
                                tabIndex="-1"  
                            >  
                                Previous  
                            </a>  
                        </li>  
                        {Array.from({ length: totalPages }, (_, index) => (  
                            <li key={index} className={`page-item ${currentPage === index + 1 ? "active" : ""}`}>  
                                <a   
                                    className="page-link"   
                                    href="#"   
                                    onClick={() => handlePageChange(index + 1)}  
                                >  
                                    {index + 1}  
                                </a>  
                            </li>  
                        ))}  
                        <li className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}>  
                            <a   
                                className="page-link"   
                                href="#"   
                                onClick={() => handlePageChange(currentPage + 1)}  
                            >  
                                Next  
                            </a>  
                        </li>  
                    </ul>  
                </nav>  
            </div>  
        </div>  
    );  
}